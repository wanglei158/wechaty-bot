const { format } = require('../utils')
const { getTask } = require('../controller')

module.exports = bot => {
    return async function (message) {
        const contact = message.from() // 发消息人
        const content = message.text().trim() // 消息内容
        const room = message.room() // 是否是群消息
        const alias = await contact.alias(); // 发消息人备注
        const isText = message.type() === bot.Message.Type.Text; // 是否是文字
        const isSelf = message.self()
        if (!room && contact.id === 'wxid_1vp1sudyclib31') {
            // const info = format(content)
            // const res = info && await getTask(info)
            // console.log(res)
        }
        if (room) {
            const topic = await room.topic()
            if (topic === '程序员& 8杯水') {

            }
            if (await message.mentionSelf()) {
                await message.say("我是一个机器人bot，唱、跳、let's water")
                message.say('现在时间：' + new Date())
            }
            // console.log(topic)
        }
    }
}