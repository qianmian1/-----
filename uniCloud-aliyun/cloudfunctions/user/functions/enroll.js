module.exports = async (event, db, bcrypt, token1) => {
  let {
    username,
    password,
    date
  } = event
  let {
    token,
    ip,
    UID,
    zhucema,
    api
  } = date
  let Query = await token1.Query(username)
  let hash = await bcrypt.hash(password, 10)
  if (Query === -1) {
    throw Error('用户已被注册')
  }
  let img = 'http://q2.qlogo.cn/headimg_dl?dst_uin='
  let name = 'https://api.kuizuo.cn/api/qqnick?qq='
  let txt = new RegExp('@qq.com')
  if (txt.test(username)) {
    let user = username.replace(/@qq\.com/, '')
    name = name + user
    img = img + user + '&spec=100'
  } else {
    img = ''
    name = username
  }
  if (api === 'Player') {
    let data = {
      _id: username,
      hash,
      name,
      img,
      zhucema,
      UID,
      createdAt: Date.now()
    }
    if (zhucema == '') {
      zhucema = '-1'
    }

    await db.collection('PlayerUser').add(data)
    delete data.hash
    if (zhucema !== -1) {
      let ser = await db.collection('ServiceUser').where({
        zhucema: zhucema
      }).get()
      data.ip = ser.data[0].ip
      data.token = ser.data[0].token
    }
    return {
      user: data,
      asstoken: await token1.Generate_Token(username, 3),
      assxtoken: await token1.Generate_Token(username, 120)
    }
  } else if (api == 'Service') {
    zhucema = await token1.RandomNumber()
    let data = {
      _id: username,
      hash,
      name,
      img,
      zhucema,
      token,
      ip,
      UID,
      createdAt: Date.now()
    }
    await db.collection('ServiceUser').add(data)
    delete data.hash
    return {
      user: data,
      asstoken: await token1.Generate_Token(username, 3),
      assxtoken: await token1.Generate_Token(username, 120)
    }
  } else {
    throw Error('参数错误')
  }
}
