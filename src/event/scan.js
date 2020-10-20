//  二维码生成
const QrcodeTerminal = require('qrcode-terminal')

module.exports = (qrcode, code) => {
    QrcodeTerminal.generate(qrcode, { small: true }) // 在console端显示二维码
    const qrcodeImageUrl = [
        'https://api.qrserver.com/v1/create-qr-code/?data=',
        encodeURIComponent(qrcode),
    ].join('')
}
