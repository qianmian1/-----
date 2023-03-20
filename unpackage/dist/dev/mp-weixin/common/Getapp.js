"use strict";
let globa = {
  username: "",
  password: "",
  date: null,
  ServiceIp: "",
  Plugins: "",
  zhucheMa: "-1",
  code: false,
  list: [],
  UID: "",
  asstoken: "",
  assxtoken: "",
  name: "",
  img: "",
  copy: false,
  cheng: 0
};
let setdata = (res) => {
  globa.UID = "@" + res.result.user.UID;
  globa.Plugins = res.result.user.token;
  globa.ServiceIp = res.result.user.ip;
  globa.zhucheMa = res.result.user.zhucema;
  globa.asstoken = res.result.asstoken;
  globa.assxtoken = res.result.assxtoken;
  globa.name = res.result.user.name;
  globa.img = res.result.user.img;
};
const Getapp = {
  setdata,
  globa
};
exports.Getapp = Getapp;
