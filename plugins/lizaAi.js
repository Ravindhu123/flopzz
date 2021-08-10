/* 
*/


const XTroid = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var vtalk_dsc = ''
var reply_eva = ''

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.lasijson())
        .then(lasijson => lasijson._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}

XTroid.addCMD({on: 'text', fromMe: wk, dontAddCMDList: true, deleteCommand: false}, (async (message, match) => {
    if (message.message.startsWith('Liza') && conf.AILIZA !== 'true') {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        var finm = message.message.replace('Liza', '').replace(' ', '')   
        var ldet = lngDetector.detect(finm)
        var trmsg = finm

        var uren = encodeURI(trmsg)
        await axios.get('http://api.brainshop.ai/get?bid=158471&key=0DJx1ekUoRqmvrcZ&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
            var fins = ''                           
            if (conf.LANG !== 'EN') {
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                if ('text' in ceviri) {
                    fins = ceviri.text
                }
            } else { fins = response.data.cnt }
            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
        })
    }
}));
XTroid.addCMD({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (conf.AILIZA == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = message.client.user.jid.split('@')[0]      
                        var finm = message.message
                        var ldet = lngDetector.detect(finm)
                        var trmsg = finm 
                       
                        var uren = encodeURI(trmsg)
                        await axios.get('http://api.brainshop.ai/get?bid=157582&key=HzYiQOTcF1zOB0cs&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var fins = ''                           
                            if (conf.LANG !== 'EN') {
                                ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                                if ('text' in ceviri) {
                                    fins = ceviri.text
                                }
                            } else { fins = response.data.cnt }
                            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                        })
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      
                    var finm = message.message
                    var ldet = lngDetector.detect(finm)
                    var trmsg = finm

                    var uren = encodeURI(trmsg)
                    await axios.get('http://api.brainshop.ai/get?bid=157582&key=HzYiQOTcF1zOB0cs&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var fins = ''                           
                        if (conf.LANG !== 'EN') {
                            ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { fins = response.data.cnt }
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    })
                }
            } else {
                var unique_ident = message.client.user.jid.split('@')[0]      
                var finm = message.message
                var ldet = lngDetector.detect(finm)
                var trmsg = finm

                var uren = encodeURI(trmsg)
                await axios.get('http://api.brainshop.ai/get?bid=157582&key=HzYiQOTcF1zOB0cs&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var fins = ''                           
                    if (conf.LANG !== 'EN') {
                        ceviri = await translatte(response.data.cnt, {from: 'auto', to: conf.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { fins = response.data.cnt }
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                })
            }
        }

}));

var fulleva_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
if (conf.LANG == 'SI') {
    fulleva_dsc = 'Activates full functional Liza features. Turn your account into a ai chatbot!'
    already_on = 'Liza artificial intelligence is already fully functional.'
    already_off = 'Liza artificial intelligence is currently running semi-functional.'
    succ_on = 'Liza Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Liza Set to Semi-Functional! Please wait a bit! ☑️'
}
if (conf.LANG == 'EN') {
    fulleva_dsc = 'Activates full functional Liza features. Turn your account into a ai chatbot!'
    already_on = 'Liza artificial intelligence is already fully functional.'
    already_off = 'Liza artificial intelligence is currently running semi-functional.'
    succ_on = 'Liza Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Liza Set to Semi-Functional! Please wait a bit! ☑️'
}

XTroid.addCMD({ pattern: 'liza ?(.*)', desc: fulleva_dsc, fromMe: true, usage: '.liza on / off' }, (async (message, match) => {
    var eva_status = `${conf.AILIZA}`
    if (match[1] == 'on') {
        if (eva_status == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['AI_LIZA']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (eva_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['AI_LIZA']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
        }
    }
}));
