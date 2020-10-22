const schedule = require('node-schedule')
const { FileBox } = require('wechaty')


module.exports = function (bot) {
  // 提醒水群喝水
  const a1time = schedule.scheduleJob('* 28 9 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })
  const a2time = schedule.scheduleJob('* 28 10 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })
  const a3time = schedule.scheduleJob('* 28 11 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })
  const p1time = schedule.scheduleJob('* 28 14 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })
  const p2time = schedule.scheduleJob('* 28 15 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })
  const p3time = schedule.scheduleJob('* 28 16 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    room.say(fileBox)
  })
  // 水群提醒下班
  schedule.scheduleJob('* 28 17 * * *', async () => {
    const room = await bot.Room.find({ topic: '程序员& 8杯水' })
    room.say('下班啦')
  })

  // 提醒自己下午4：30抢券
  schedule.scheduleJob('* 29 16 * * *', async () => {
    const room = await bot.Contact.find({ name: '尹莎贝尔ta不在' })
    room.say('快去抢券')
  })

  // schedule.scheduleJob('30 * * * * *', async () => {
  //   const room = await bot.Room.find({ topic: 'Test' })
  //   const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
  //   room.say(fileBox)
  // })
}