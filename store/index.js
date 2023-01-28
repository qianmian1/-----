import {
  createStore
} from "vuex"

const store = createStore({
  //数据源
  state: {
    token: uni.getStorageSync('token') || "",
    plugins: '',
    ServiceIp: '',
    RandomNumber: '',
    username: '',
    password: '',
    ServiceIo: '',
    code: false,
    api: '',
    Switch: ''
  },
  //唯一取值的地方
  getters: {
    gettoken(state) {
      return state.token
    },
    getServiceIp(state) {
      return state.ServiceIp
    },
    getRandomNumber(state) {
      return state.RandomNumber
    },
    getPlugins(state) {
      return state.plugins
    },
    getusername(state) {
      return state.username
    },
    getpassword(state) {
      return state.password
    },
    getServiceIo(state) {
      return state.ServiceIo
    },
    getcode(state) {
      return state.code
    },
    getApi(state) {
      return state.api
    },
    getSwitch(state) {
      return state.Switch
    }
  },
  //修改state值的方法 时同步阻塞的
  mutations: {
    UpDatatoken(state, token) {
      state.token = token
    },
    UpDataServiceIp(state, ServiceIp) {
      state.ServiceIp = ServiceIp
    },
    UpDataRandomNumber(state, RandomNumber) {
      state.RandomNumber = RandomNumber
    },
    UpDataPlugins(state, plugins) {
      state.plugins = plugins
    },
    UpDatausername(state, username) {
      state.username = username
    },
    UpDatapassword(state, password) {
      state.password = password
    },
    UpDataServiceIo(state, ServiceIo) {
      state.ServiceIo = ServiceIo
    },
    UpDataCode(state, code) {
      state.code = code
    },
    UpDatatapi(state, api) {
      state.api = api
    },
    UpDtataswitch(state, Switch) {
      state.Switch = Switch
    }
  },
  //异步调用mutations内的方法
  actions: {
    asyuncupdatatoken({
      commit
    }, token) {
      commit('UpDatatoken', token)
    },
    asyuncUpDataServiceIp({
      commit
    }, ServiceIp) {
      commit('UpDataServiceIp', ServiceIp)
    },
    asyuncUpDataRandomNumber({
      commit
    }, RandomNumber) {
      commit('UpDataRandomNumber', RandomNumber)
    },
    asyuncUpDataPlugins({
      commit
    }, plugins) {
      commit('UpDataPlugins', plugins)
    },
    asyuncUpDatausername({
      commit
    }, username) {
      commit('UpDatausername', username)
    },
    asyuncUpDatapassword({
      commit
    }, password) {
      commit('UpDatapassword', password)
    },
    asyuncUpDataServiceIo({
      commit
    }, ServiceIo) {
      commit('UpDataServiceIo', ServiceIo)
    },
    asyuncUpDataCode({
      commit
    }, code) {
      commit('UpDataCode', code)
    },
    asyuncUpDataApi({
      commit
    }, api) {
      commit('UpDataApi', api)
    },
    asyuncUpDataSwitch({
      commit
    }, Switch) {
      commit('UpDataSwitch', Switch)
    }
  }
})
export default store
