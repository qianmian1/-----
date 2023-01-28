'use strict';
const db = uniCloud.database({
  throwOnNotFound: false
})
const {
  throws
} = require('assert');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')
const {
  Generate_Token,
  RandomNumber,
  Declassification_Token,
  Query
} = require('token')
exports.main = async (event, context) => {
  let {
    username,
    password,
    api,
    zhucheMa,
    ip,
    Plugins,
    token1,
    UID
  } = event
  // 登录接口
  if (api == 'login') {
    user = await db.collection('PlayerUser').doc(username).get()
    if (user.data[0]) {
      let check = await bcrypt.compare(password, user.data[0].hash);
      if (!check) {
        throw Error('密码错误')
      }
      // const op = uniCloud.importObject("token")
      // const res = await op.token(username)
      let token = Generate_Token(username)
      if (user.data[0].zhucheMa) {
        let Ip = await db.collection('ServiceUser').where({
          suijishu: user.data[0].zhucheMa
        }).get()
        let ServiceIp = Ip.data[0].ip
        return {
          code: 201,
          ServiceIp,
          token
        }
      } else {
        return {
          code: 201,
          token
        }
      }
    } else {
      throw Error('用户不存在')
    }
  }
  // 服主注册接口
  if (api == "Service") {
    let user1 = await Query(username)
    if (user1 === '用户已被注册') {
      throw Error('用户已被注册')
    }
    let suijish = RandomNumber()
    let token = Generate_Token(username)
    let hash = await bcrypt.hash(password, 10)
    let data = {
      _id: username,
      hash,
      createdAt: Date.now(),
      Plugins,
      ip,
      suijishu: suijish
    }
    await db.collection('ServiceUser').add(data);
    return {
      code: 200,
      token,
      RandomNumber: suijish,
      Plugins,
      ip
    }
    // 玩家注册接口
  } else if (api == 'Player') {
    let user1 = await Query(username)
    if (user1 === '用户已被注册') {
      throw Error('用户已被注册')
    }
    let hash = await bcrypt.hash(password, 10)
    let token = Generate_Token(username)
    let data = {
      _id: username,
      hash,
      createdAt: Date.now(),
      UID,
      zhucheMa: zhucheMa
    }
    await db.collection('PlayerUser').add(data);
    if (!zhucheMa === '') {
      let ip = await db.collection('ServiceUser').where({
        suijishu: zhucheMa
      }).get()
      let ServiceIp = ip.data[0].ip
      let plugins = ip.data[0].Plugins
      return {
        code: 200,
        ServiceIp,
        plugins,
        zhucheMa,
        UID,
        token
      }
    } else {
      return {
        code: 200,
        UID,
        token
      }
    }
  }
}
