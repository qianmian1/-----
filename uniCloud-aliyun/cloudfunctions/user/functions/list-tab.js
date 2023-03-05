module.exports = async (event, db, ) => {
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
}
