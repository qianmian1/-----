'use strict';
const jsencrypt = require('./jsencrypt')
const bcrypt = require('bcryptjs');
const fs = require('fs')
let files = fs.readdirSync(__dirname + '/functions')
let Fun = {}
files.map((filename) => {
  let name = filename.replace(".js", "")
  Object.defineProperty(Fun, name, {
    value: require("./functions/" + filename)
  })
})
const eva = require('./eva.js')
const db = uniCloud.database({
  throwOnNotFound: false
})
const token1 = require('token1')
exports.main = async (event, context) => {
  try {
    if (event.api === 'login') {
      return await Fun['login'](event, db, bcrypt, token1)
    } else if (event.api === 'enroll') {
      return await Fun['enroll'](event, db, bcrypt, token1)
    }
    if (Fun[event.api] !== 'function') {
      throw Error('无接口')
    }
    let data = await Fun[event.api](event, db)
    return {
      code: 200,
      data
    }
  } catch (error) {
    return {
      succes: false,
      errorMessage: error.message
    }
  }
}
