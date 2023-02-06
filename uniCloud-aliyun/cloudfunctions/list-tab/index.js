'use strict';
let db = uniCloud.database({
  throwOnNotFound: false,
})
exports.main = async (event, context) => {
  //event为客户端上传的参数
  let {
    tab
  } = event
  if (tab == 'tab') {
    let list = await db.collection('tablist').doc(tab).get()
    return list.data[0].tablist
  }
  // let list2 = await db.collection('tablist').doc('commandList').get()
  // for (let i = 0; i < list2.data[0].Monster.length; i++) {
  //   list2.data[0].Monster[i].id = i
  // }
  // let a = list2.data[0].Monster
  // for (let i = 0; i < list2.data[0].commandList.length; i++) {
  //   list2.data[0].commandList[i].id = i
  // }
  // let b = list2.data[0].commandList
  // for (let i = 0; i < list2.data[0].mingxingList.length; i++) {
  //   list2.data[0].mingxingList[i].id = i
  // }
  // let c = list2.data[0].mingxingList
  // for (let i = 0; i < list2.data[0].shengyiwu.length; i++) {
  //   list2.data[0].shengyiwu[i].id = i

  // }
  // let d = list2.data[0].shengyiwu
  // for (let i = 0; i < list2.data[0].wupinList.length; i++) {
  //   list2.data[0].wupinList[i].id = i

  // }
  // let e = list2.data[0].wupinList
  // for (let i = 0; i < list2.data[0].wuqi.length; i++) {
  //   list2.data[0].wuqi[i].id = i
  // }
  // let f = list2.data[0].wuqi
  // let data = {
  //   Monster: a,
  //   commandList: b,
  //   mingxingList: c,
  //   shengyiwu: d,
  //   wupinList: e,
  //   wuqi: f
  // }
  // await db.collection('tablist').update(data)
  if (tab == 'commandlist') {
    let list2 = await db.collection('tablist').doc('commandList').get()
    return list2.data[0]
  }
};
