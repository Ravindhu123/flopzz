const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
const ffmpeg = require('fluent-ffmpeg');
const { execFile } = require('child_process');
const cwebp = require('cwebp-bin');
const Language = require('../language');
const Lang = Language.getString('ttp');
const ll = "To make awesome logos"
const ddd = "ඔබට විවිධාකාරයේ ලෝගෝ සෑදීමට"
if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zpack', fromMe: true, desc: ll }, (async (message, match) => {
          await message.sendMessage('╔════════════════════╗\n║ ✥▬ *🍇The Logo list🍇* ▬✥\n║\n║\n╠══ *.zlight* ```your text```\n║\n╠══ *.zpink* ```your text```\n║\n╠══ *.zbox* ```your text```\n║\n╠══ *.zsnow* ```your text```\n║\n╠══ *.zlogo* ```your text```\n║\n╠══ *.zflower* ```your text```\n║\n╠══ *.zglow* ```your text```\n║\n╠══ *.z2glow* ```your text```\n║\n╠══ *.znsky* ```your text```\n║\n╠══ *.zbeach* ```your text```\n║\n╠══ *.zcity* ```your text```\n║\n╠══ *.zcrash* ```your text```\n║\n╠══ *.zff* ```your text```\n║\n╠══ *.zfire* ```your text```\n║\n╠══ *.zglass* ```your text```\n║\n╠══ *.zgoldp* ```your text```\n║\n╠══ *.zgrass* ```your text```\n║\n╠══ *.zmatrix* ```your text```\n║\n╠══ *.zphub* ```your text```\n║\n╠══ *.zpro* ```your text```\n║\n╠══ *.zsilver* ```your text```\n║\n╠══ *.zwar* ```your text```\n║\n╠══ *.zwolf* ```your text```\n║\n╠══ *.zneon* ```your text```\n║\n╠══ *.zsp* ```your text```\n║\n╠══ *.zsky* ```your text```\n║\n╠══ *.zwtc* ```your text```\n║\n╠══ *.z3d* ```your text```\n║\n╠══ *.zgame* ```your text```\n║\n╠══ *.zxmas* ```your text```\n║\n╚════════════════════╝\n');
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zpack', fromMe: false, desc: ll }, (async (message, match) => {
          await message.sendMessage('╔════════════════════╗\n║ ✥▬ *🍇The Logo list🍇* ▬✥\n║\n║\n╠══ *.zlight* ```your text```\n║\n╠══ *.zpink* ```your text```\n║\n╠══ *.zbox* ```your text```\n║\n╠══ *.zsnow* ```your text```\n║\n╠══ *.zlogo* ```your text```\n║\n╠══ *.zflower* ```your text```\n║\n╠══ *.zglow* ```your text```\n║\n╠══ *.z2glow* ```your text```\n║\n╠══ *.znsky* ```your text```\n║\n╠══ *.zbeach* ```your text```\n║\n╠══ *.zcity* ```your text```\n║\n╠══ *.zcrash* ```your text```\n║\n╠══ *.zff* ```your text```\n║\n╠══ *.zfire* ```your text```\n║\n╠══ *.zglass* ```your text```\n║\n╠══ *.zgoldp* ```your text```\n║\n╠══ *.zgrass* ```your text```\n║\n╠══ *.zmatrix* ```your text```\n║\n╠══ *.zphub* ```your text```\n║\n╠══ *.zpro* ```your text```\n║\n╠══ *.zsilver* ```your text```\n║\n╠══ *.zwar* ```your text```\n║\n╠══ *.zwolf* ```your text```\n║\n╠══ *.zneon* ```your text```\n║\n╠══ *.zsp* ```your text```\n║\n╠══ *.zsky* ```your text```\n║\n╠══ *.zwtc* ```your text```\n║\n╠══ *.z3d* ```your text```\n║\n╠══ *.zgame* ```your text```\n║\n╠══ *.zxmas* ```your text```\n║\n╚════════════════════╝\n');
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zlogo ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
          var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zlogo ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
          var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zsp ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(lol);
          var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${encodeURIComponent(match[1])}&text2=X-Troid`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zsp ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(lol);
          var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${encodeURIComponent(match[1])}&text2=Lusi`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zflower ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zflower ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zsilver ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zsilver ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zpink ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zpink ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zsky ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zsky ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zxmas ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zxmas ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zsnow ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zsnow ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zbox ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zbox ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zlight ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zlight ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zcity ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zcity ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'z2glow ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'z2glow ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'z3d ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(ll); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'z3d ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(ll); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zb3d ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=${Config.LOGO_KEY}&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zb3d ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=${Config.LOGO_KEY}&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zbeach ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=GW0Y45IIchDzwSjjLAgD69kzP1K&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zbeach ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=GW0Y45IIchDzwSjjLAgD69kzP1K&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zcrash ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zcrash ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zff ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=GW0Y45IIchDzwSjjLAgD69kzP1K&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zff ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=GW0Y45IIchDzwSjjLAgD69kzP1K&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zfire ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=GW0Y45IIchDzwSjjLAgD69kzP1K&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zfire ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=GW0Y45IIchDzwSjjLAgD69kzP1K&text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zgame ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(ll); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zgame ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(ll); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${encodeURIComponent(match[1])}`,
               { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zglass ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need);
          var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zglass ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zglow ?(.*)', fromMe: true, dontaddCMDList: true, }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zglow ?(.*)', fromMe: false, dontaddCMDList: true, }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zgoldp ?(.*)', fromMe: true, dontaddCMDList: true, }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zgoldp ?(.*)', fromMe: false, dontaddCMDList: true, }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zgrass ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zgrass ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zmatrix ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zmatrix ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=M8CXbOWrPz8qqzjnNqpIiATSzBn&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zneon ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(ll); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zneon ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(ll); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'znsky ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'znsky ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zphub ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text1=sl&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zphub ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text1=Xtroid&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zpro ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text1=sl&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zpro ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/marvellogo?apikey=QVwfcZGnCFUK9NxHRgolyaoHMHa&text1=Pro&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} if (Config.WORKTYPE == 'private') {
     XTroid.addCMD({ pattern: 'zwar ?(.*)', fromMe: true, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
} else if (Config.WORKTYPE == 'public') {
     XTroid.addCMD({ pattern: 'zwar ?(.*)', fromMe: false, dontaddCMDList: true }, (async (message, match) => {
          if (match[1] === '') return await message.sendMessage(need); var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=f7MEkYSadEPBZWJjr7iX8LD8DHp&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
          await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })
     }));
}
