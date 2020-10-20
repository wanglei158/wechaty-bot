const schedule = require('node-schedule')
const { FileBox } = require('wechaty')


module.exports = function(bot) {
    schedule.scheduleJob({hour: 09, minute: 26}, async () => {
        const room =  await bot.Room.find({topic: '程序员& 8杯水'})
        const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
        room.say(fileBox)
      })
      schedule.scheduleJob({hour: 00, minute: 25}, async () => {
        const room =  await bot.Room.find({topic: 'Test'})
        const fileBox = FileBox.fromUrl('http://workout.img.ajinse.cn/water.jpeg')
        room.say(fileBox)
      })
}