const { Wechaty, FileBox, Friendship } = require('wechaty')
// import { ScanStatus } from 'wechaty-puppet'
const { PuppetPadplus } = require('wechaty-puppet-padplus')
const { onLogin, onLogout, onMessage, onScan, schedule } = require('./event')

const token = 'puppet_padplus_617a68e331ea7ae3'

const puppet = new PuppetPadplus({
    token,
})

const bot = new Wechaty({
    puppet,
    name: 'nimawang'
})
bot.on('scan', onScan)
bot.on('login', onLogin)
bot.on('logout', onLogout)
bot.on('message', onMessage(bot))
// bot.on('friendship', onFriends)

bot.start().then(() => {
    schedule(bot)
    console.log('start a bot')
})