const translate = require('google-translate-api')

translate('请问如何调用谷歌翻译api', {to: 'en'}).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e)
})

translate('Whatever is worth doing is worth doing well.', {to: 'zh-CN'}).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e)
})