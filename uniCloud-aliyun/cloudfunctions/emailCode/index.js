'use strict';
const nodemailer = require('nodemailer');
exports.main = async (event, context) => {
  let getRandomCode = function() {
    return ('000000' + Math.floor(Math.random() * 999999)).slice(-6);
  }
  let b = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '    <meta charset="UTF-8">' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '    <style>' +
    '        * {' +
    '            margin: 0;' +
    '            padding: 0;' +
    '        }' +
    '        body {' +
    '            display: flex;' +
    '            justify-content: center;' +
    '            align-items: center;' +
    '            height: 100vh;' +
    '        }' +
    '        .cd {' +
    '            display: flex;' +
    '            width: 200px;' +
    '            height: 100;' +
    '        }' +
    '        .op {' +
    '            display: flex;' +
    '            justify-content: center;' +
    '            align-items: center;' +
    '        }' +
    '        a {' +
    '            display: flex;' +
    '            justify-content: center;' +
    '            align-items: center;' +
    '            position: relative;' +
    '            width: 100px;' +
    '            height: 50px;' +
    '            line-height: 100px;' +
    '            text-align: center;' +
    '            text-decoration: none;' +
    '            text-transform: uppercase;' +
    '            font-size: 15px;' +
    '            color: #fff;' +
    '            background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);' +
    '            background-size: 400%;' +
    '            border-radius: 50px;' +
    '            z-index: 1;' +
    '        }' +
    '        a::before {' +
    '            content: "";' +
    '            position: absolute;' +
    '            top: -5px;' +
    '            left: -5px;' +
    '            bottom: -5px;' +
    '            right: -5px;' +
    '            background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);' +
    '            background-size: 400%;' +
    '            border-radius: 50px;' +
    '            z-index: -1;' +
    '            filter: blur(20px);' +
    '        }' +
    '        a {' +
    '            animation: streamer 8s infinite;' +
    '        }' +
    '        a::before {' +
    '            animation: streamer 8s infinite;' +
    '        }' +
    '        @keyframes streamer {' +
    '            100% {' +
    '                background-position: -400%;' +
    '            }' +
    '        }' +
    '    </style>' +
    '</head>' +
    '<body>' +
    '    <span id="op" style="color: #000; z-index:1;font-size: 30px; display: flex;' +
    '            width: 200px;' +
    '            height: 100;"><b>您的验证码为#code#，有效期为5分钟</b></span>' +
    '    <div class="cd">' +

    '        <a href="" id="cd">点击复制</a>' +
    '    </div>' +
    '由于qq邮箱不能运行js所以请手动复制，其它邮箱不知道' +
    '    <script>' +
    '        let cd = document.getElementById("cd")' +
    '        let get = document.getElementById("op")' +
    '        let i = get.innerText' +
    '        cd.onclick = function () {' +
    '            op(i)' +
    '        }' +
    '        function op(i) {' +
    '            const textNode = document.createTextNode(i)' +
    '            navigator.clipboard.writeText(textNode.textContent).then(() => {' +
    '                console.log(111);' +
    '            }, (err) => {' +
    '                console.log(2);' +
    '            })' +
    '        }' +
    '    </script>' +
    '</body>' +
    '</html>';
  let send = (data, code, codeString) => {
    let emailConfig = {
      qq: {
        host: 'smtp.qq.com',
        port: 465,
        secure: true,
        auth: {
          user: 'suya.o@qq.com',
          pass: 'kdpdzbfwtgngecfa'
        }

      }
    }
    let transporter = nodemailer.createTransport({
      "host": emailConfig.qq.host,
      "port": emailConfig.qq.port,
      "secure": emailConfig.qq.secure,
      "auth": emailConfig.qq.auth
    });

    let mailOptions = {
      from: emailConfig.qq.auth.user,
      to: data.email,
      subject: '注册验证码',
      html: code ? b.replace('#code#', codeString) : b
    };
    let res = transporter.sendMail(mailOptions);
    if (code) {
      res.code = codeString;
    }
    return res;
  }
  switch (event.method) {
    case 'sendCode':
      //随机生成验证码并发送
      var codeString = getRandomCode();
      var res = await send(event, true, codeString);
      var result = {
        status: 0
      }
      if (res.accepted.length == 1) {
        const collection = uniCloud.database().collection('emailCode');
        event.validate = 0;
        event.validateString = codeString;
        event.timestamp = new Date().getTime();
        result = await collection.add(event);
        result.status = 1;
      }
      return result;
      break;
    case 'sendCustom':
      var res = await send(event);
      var result = {
        status: 0
      }
      if (res.accepted.length == 1) {
        result.status = 1;
      }
      //自定义邮件不做保存.直接发送
      return result;
      break;
    case 'validateCode':
      //返回status: -5验证失败,-4验证码已使用,-3验证码已失效,-2当前邮箱未发送验证码(用户用一个邮箱发送了验证码然后提交验证码的时候又换了个邮箱) -1 还未发送验证码 0 验证码不正确 1 验证码通过 
      //通过ID查询当前验证码信息
      const collection = uniCloud.database().collection('emailCode');
      const now = new Date().getTime();
      var res = await collection.doc(event.codeId).get();
      var result = {

      }
      if (res.affectedDocs == 1) {
        if (res.data[0].email && event.email != res.data[0].email) {
          //-2当前邮箱未发送验证码
          result.status = -2;
        } else if (res.data[0].validate > 0) {
          //-4验证码已使用
          result.status = -4;
        } else if (now - res.data[0].timestamp > event.effectiveTime * 1000) {
          //-3验证码已失效
          result.status = -3;
        } else if (event.code != res.data[0].validateString) {
          //0验证码不正确
          result.status = 0;
        } else {

          //验证通过以后.将此条验证码的validate由0修改为1
          var res = await collection.doc(event.codeId).update({
            validate: 1
          })
          if (res.affectedDocs == 1) {
            //1验证码通过
            result.status = 1;
          } else {
            //更新验证码失败.为避免漏洞.此处返回-5验证失败 一般不会用到...除非数据被人为此时删掉了...
            result.status = -5
          }
        }
      } else {
        //-1一般是未发送验证码.
        result.status = -1;
      }
      return result;
      break;
    default:
      return {
        status: -5
      };
      break;
  }

};
