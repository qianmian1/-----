module.exports = async (event, db, bcrypt, token1) => {
  const {
    username,
    password
  } = event
  console.log('开始执行');
  let user = await db.collection('ServiceUser').doc(username).get()
  let chack = null
  let asstoken = null
  let assxtoken = null
  if (user.data[0]) {
    chack = await bcrypt.compare(password, user.data[0].hash)
    console.log('进入判断');
    if (!chack) {
      throw Error('密码或账号错误')
    }
    asstoken = await token1.Generate_Token(username, 3)
    console.log(asstoken);
    assxtoken = await token1.Generate_Token(username, 120)

    delete user.data[0].hash
    return {
      user: user.data[0],
      asstoken,
      assxtoken
    }

  } else {
    user = await db.collection('PlayerUser').doc(username).get()
    if (user.data[0]) {
      chack = await bcrypt.compare(password, user.data[0].hash)
      if (!chack) {
        throw Error('密码或账号错误')
      }
      asstoken = await token1.Generate_Token(username, 3)
      assxtoken = await token1.Generate_Token(username, 120)
      if (user.data[0].zhucema == -1) {
        return {
          user: user.data[0],
          asstoken,
          assxtoken
        }
      }
      if (user.data[0].zhucema) {
        let ser = await db.collection('ServiceUser').where({
          zhucema: user.data[0].zhucema
        }).get()
        user.data[0].ip = ser.data[0].ip
        user.data[0].token = ser.data[0].token
      }
      delete user.data[0].hash
      return {
        user: user.data[0],
        asstoken,
        assxtoken
      }
    } else {
      throw Error('用户不存在')
    }
  }
}
