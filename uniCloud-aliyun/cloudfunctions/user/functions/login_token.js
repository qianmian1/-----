module.exports = async (event, db, token1) => {
  let {
    asstoken,
    assxtoken,
    date
  } = event
  let username = null
  let user = null
  if (date.api) {
    user = await tu(asstoken)
    if (user == -1 || user == -2) {
      return user
    }
    return {
      user: user.user,
      asstoken: user.asstoken
    }
  } else {
    user = await tu(assxtoken)
    if (user == -1 || user == -2) {
      return user
    }
    return {
      user: user.user,
      asstoken: user.asstoken,
      assxtoken: user.assxtoken
    }
  }
  async function ip(user) {
    if (user.data[0].zhucema !== '-1') {
      let ser = await db.collection('ServiceUser').where({
        zhucema: user.data[0].zhucema
      }).get()
      user.data[0].ip = ser.data[0].ip
      user.data[0].token = ser.data[0].token

    }
    delete user.data[0].hash
    return user.data[0]
  }
  async function tu(token) {
    try {
      username = await token1.Declassification_Token(token)
      user = await await db.collection('ServiceUser').doc(username).get()
      if (user.data[0]) {
        if (date.api) {
          asstoken = await token1.Generate_Token(username, 3)
          delete user.data[0].hash
          return {
            user: user.data[0],
            asstoken
          }
        } else {
          asstoken = await token1.Generate_Token(username, 3)
          assxtoken == await token1.Generate_Token(username, 120)
          delete user.data[0].hash
          return {
            user: user.data[0],
            asstoken,
            assxtoken
          }
        }
      } else {
        user = await await db.collection('PlayerUser').doc(username).get()
        if (user.data[0]) {
          if (date.api) {
            asstoken = await token1.Generate_Token(username, 3)
            user = await ip(user)
            return {
              user: user,
              asstoken
            }
          } else {
            asstoken = await token1.Generate_Token(username, 3)
            assxtoken == await token1.Generate_Token(username, 120)
            user = await ip(user)
            return {
              user: user,
              asstoken,
              assxtoken
            }
          }

        }
      }
    } catch (e) {
      if (date.err === -1) {
        return -3
      }
      return -1
    }
  }
}
