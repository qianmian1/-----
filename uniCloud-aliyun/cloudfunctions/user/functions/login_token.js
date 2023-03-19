module.exports = async (event, db, token1) => {
  let {
    asstoken,
  } = event
  let username = null
  let user = null
  let u = null
  if (asstoken) {
    let f = await getUserInfoByToken(asstoken)
    return f
  }
  async function getUserInfoByToken(asstoken) {
    try {
      username = await token1.Declassification_Token(asstoken)
      user = await db.collection('ServiceUser').doc(username).get()
      let auth = user.data[0]
      if (auth) {
        u = await generateNewTokens(username)

        delete auth.hash
        return {
          user: auth,
          ...u
          //asstoken: u.asstoken,
          //assxtoken: u.assxtoken
        }
      } else {
        user = await db.collection('PlayerUser').doc(username).get()
        if (user.data[0].zhucema !== '-1') {
          let a = await db.collection('ServiceUser').where({
            zhucema: user.data[0].zhucema
          }).get()
          let b = a.data[0]
          user.data[0].ip = b.ip
          user.data[0].token = b.token
        }
        u = await generateNewTokens(username)
        delete user.data[0].hash
        return {
          user: user.data[0],
          ...u
          //asstoken: u.asstoken,
          //assxtoken: u.assxtoken
        }
      }
    } catch (e) {
      if (e.message === 'jwt expired') {
        return -1
      } else {
        return {
          err: e.message
        }
      }
    }
  }

  async function generateNewTokens(username) {
    if (username === '') {
      throw Error('参数错误')
    }
    return {
      asstoken: await token1.Generate_Token(username, 48),
      assxtoken: await token1.Generate_Token(username, 1200)
    }
  }
}
