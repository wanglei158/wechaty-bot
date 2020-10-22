module.exports = bot => {
    return async function (message) {
        const contact = message.from() // 发消息人
        const content = message.text().trim() // 消息内容
        const room = message.room() // 是否是群消息
        const alias = await contact.alias(); // 发消息人备注
        const isText = message.type() === bot.Message.Type.Text; // 是否是文字
        const isSelf = message.self()
        if (room) {
            const topic = await room.topic()
            if (topic === '程序员& 8杯水') {
                // if(contact.name() === '烦人的陈宏銮') {
                //     await message.say('銮兄，灰化肥挥发会发黑')
                // } else {
                //     await message.say('!銮兄')
                // }
            }
            if (await message.mentionSelf()) {
                await message.say("我是一个机器人bot，唱、跳、let's water")
            }
            // console.log(topic)
        }
    }
}