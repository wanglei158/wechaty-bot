const schedule = require('node-schedule')
const { FileBox } = require('wechaty')


module.exports = function (bot) {
  // 提醒水群喝水
  const atime = schedule.scheduleJob('59 28 9-11 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })
  const p1time = schedule.scheduleJob('59 28 14-16 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })

  // 提醒自己下午4：30抢券
  schedule.scheduleJob('59 28 16 * * *', async () => {
    const room = await bot.Contact.find({ name: '尹莎贝尔ta不在' })
    room.say('快去抢券')
  })

  // schedule.scheduleJob('30 * * * * *', async () => {
  //   const room = await bot.Room.find({ topic: 'Test' })
  //   const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
  //   room.say(fileBox)
  // })
}