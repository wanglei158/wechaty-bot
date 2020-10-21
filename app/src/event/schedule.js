const schedule = require('node-schedule')
const { FileBox } = require('wechaty')


module.exports = function(bot) {
    schedule.scheduleJob('* 28 9 * *', async () => {
      const room =  await bot.Room.find({topic: '程序员& 8杯水'})
      const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
      room.say(fileBox)
    })
    schedule.scheduleJob('* 28 14 * *', async () => {
      const room =  await bot.Room.find({topic: '程序员& 8杯水'})
      const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
      room.say(fileBox)
    })
    schedule.scheduleJob('* 28 18 * *', async () => {
      const room =  await bot.Room.find({topic: '程序员& 8杯水'})
      room.say('下班啦')
    })
    // schedule.scheduleJob({hour: 00, minute: 25}, async () => {
    //   const room =  await bot.Room.find({topic: 'Test'})
    //   const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
    //   room.say(fileBox)
    // })
}