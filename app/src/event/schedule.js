const schedule = require('node-schedule')
const { FileBox } = require('wechaty')


module.exports = async function (bot) {
  const bigSelf = await bot.Contact.find({ name: '尹莎贝尔ta不在' }) //自己 另外一个号
  const waterRoom = await bot.Room.find({ topic: '程序员& 8杯水' }) // 水群

  const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/let%27swater.jpeg') //提醒喝水的图片

  // 提醒自己下午9：26抢券
  schedule.scheduleJob('59 26 9 * * *', () => {
    bigSelf.say('股票开市， 别忘记打***')
  })


  // 提醒水群喝水
  const atime1 = schedule.scheduleJob('59 28 9 * * *', () => {
    waterRoom.say(fileBox)
  })
  const atime2 = schedule.scheduleJob('59 28 11 * * *', () => {
    waterRoom.say(fileBox)
  })
  const p1time1 = schedule.scheduleJob('59 28 14 * * *', () => {
    waterRoom.say(fileBox)
  })

  const p1time2 = schedule.scheduleJob('59 28 16 * * *', () => {
    waterRoom.say(fileBox)
  })

  // 提醒自己下午4：30抢券
  schedule.scheduleJob('59 28 16 * * *', () => {
    bigSelf.say('快去抢券')
  })

  // schedule.scheduleJob('30 * * * * *', async () => {
  //   const room = await bot.Room.find({ topic: 'Test' })
  //   const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
  //   room.say(fileBox)
  // })
}

exports.createSchedule = function ({ time, type, message }) {
}