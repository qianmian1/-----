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
  if (tab == 'commandlist') {
    let list2 = await db.collection('tablist').doc('commandList').get()
    return list2.data[0]
  }
};
