const LASIapi = require("textmaker-lasi");
const XTroid = require("../events");
const {
  MessageType,
  GroupSettingChange,
  Mimetype,
  MessageOptions,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const Config = require("../config");
const axios = require("axios");
const request = require("request");
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න";
let FM = Config.WORKTYPE == "public" ? false : true;

XTroid.addCMD(
  { pattern: "nclub ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/neww.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/neww.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "ngreen ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/green-neon-text-effect-874.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/glite.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/glite.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "nsteel ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/eroded-metal-text-effect-834.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/ysteel.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/ysteel.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "nxms ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/lxmas.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/lxmas.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "ncloud ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/lcloud.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/lcloud.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "nblood ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/blood-text-on-the-frosted-glass-941.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/lblood.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/lblood.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "ntoxic ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/toxic-text-effect-online-901.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/ltoxic.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/ltoxic.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "n2bld ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/horror-blood-text-effect-online-883.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/l2blood.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/l2blood.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "ncarb ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/carbon-text-effect-833.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/lcb.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/lcb.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "nlux ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/lux.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/lux.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);

XTroid.addCMD(
  { pattern: "ngold ?(.*)", fromMe: FM, dontAddCMDList: true },
  async (message, match) => {
    if (match[1] === "") return await message.sendMessage(need);
    LASIapi.textpro(
      "https://textpro.me/hexa-golden-text-effect-842.html",
      `${match[1]}`
    ).then(async (data) => {
      try {
        var download = async (uri, filename, callback) => {
          await request.head(uri, async (err, res, body) => {
            await request(uri)
              .pipe(fs.createWriteStream(filename))
              .on("close", callback);
          });
        };

        await download(`${data}`, "/root/HTM/lgd.jpg", async () => {
          await message.client.sendMessage(
            message.jid,
            fs.readFileSync("/root/HTM/lgd.jpg"),
            MessageType.image,
            { caption: Config.CAPTION_KEY }
          );
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
);
