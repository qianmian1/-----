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
const {
  Generate_Token,
  RandomNumber,
  Declassification_Token,
  Query,
} = require('token')
exports.main = async (event, context) => {
  if (Fun[event.api] !== 'function') {
    throw Error('无接口')
  }
}
