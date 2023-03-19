const jwt = require('jsonwebtoken');
const miyao = 'qwert';
const db = uniCloud.database({
  throwOnNotFound: false
})
// 生成token
async function Generate_Token(username, time) {
  return 'Bearer ' + jwt.sign({
    username
  }, miyao, {
    expiresIn: time.toString() + 'h'
  })
};
// 解密token
async function Declassification_Token(token) {
  let auth = jwt.verify(token.replace(/Bearer /, ""), miyao)
  let userid = auth.username;
  return userid
}
// 随机数
async function RandomNumber() {
  let array = []
  for (let i = 0;; i++) {
    if (array.length < 5) {
      suijishu(5)
    } else {
      break
    }
  }
  let suijish = array.toString().replace(/,/g, "")
  return suijish

  function suijishu(o) {
    let rand = parseInt(Math.random() * o)
    for (let i = 0; i < array.length; i++) {
      if (array[i] == rand) {
        return false
      }
    }
    array.push(rand)
  }
}
// 查询用户是否被注册
async function Query(username) {
  let user = await db.collection('ServiceUser').doc(username).get()
  if (user.data[0]) {
    return -1
  } else {
    let user1 = await db.collection('PlayerUser').doc(username).get()
    if (user1.data[0]) {
      return -1
    }
  }

}


module.exports = {
  Generate_Token,
  RandomNumber,
  Declassification_Token,
  Query,
  //  jsencrypt
}
