const jwt = require('jsonwebtoken');
const miyao = 'qwert';
const db = uniCloud.database({
  throwOnNotFound: false
})
// 生成token
function Generate_Token(username) {
  return 'Bearer ' + jwt.sign({
    data: username
  }, miyao, {
    expiresIn: '24h'
  })
};
// 解密token
function Declassification_Token(token1) {
  let token = token1.split(" ")[1]

  let auth = jwt.verify(
    token, miyao)
  let userid = auth.username;
  return userid
};
// 随机数
function RandomNumber() {
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
    return '用户已被注册'
  } else {
    let user1 = await db.collection('PlayerUser').doc(username).get()
    if (user1.data[0]) {
      return '用户已被注册'
    }
  }

}


module.exports = {
  Generate_Token,
  RandomNumber,
  Declassification_Token,
  Query
}
