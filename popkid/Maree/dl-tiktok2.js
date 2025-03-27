const _0xf47300 = function () {
  let _0x56fa63 = true;
  return function (_0x300b48, _0x2e2619) {
    const _0x28f645 = _0x56fa63 ? function () {
      if (_0x2e2619) {
        const _0x29cd27 = _0x2e2619.apply(_0x300b48, arguments);
        _0x2e2619 = null;
        return _0x29cd27;
      }
    } : function () {};
    _0x56fa63 = false;
    return _0x28f645;
  };
}();
const _0xa78339 = _0xf47300(this, function () {
  return _0xa78339.toString().search("(((.+)+)+)+$").toString().constructor(_0xa78339).search("(((.+)+)+)+$");
});
_0xa78339();
const _0x5cab02 = function () {
  const _0x58a8bc = {
    XbvZV: function (_0x522dd5, _0x24aac4) {
      return _0x522dd5 === _0x24aac4;
    },
    lzYUf: "rVrDn",
    Sowgb: function (_0x32d3b5, _0x532821) {
      return _0x32d3b5 + _0x532821;
    },
    JgCzA: "return (function() "
  };
  _0x58a8bc.DPIru = "{}.constructor(\"return this\")( )";
  _0x58a8bc.GBoSi = function (_0x52eb21, _0x38c95d) {
    return _0x52eb21 === _0x38c95d;
  };
  _0x58a8bc.yqhZI = "WCTVH";
  let _0x34e6f3 = true;
  return function (_0x25528c, _0xed6ed) {
    if (_0x58a8bc.GBoSi(_0x58a8bc.yqhZI, "WCTVH")) {
      const _0x1dfc52 = _0x34e6f3 ? function () {
        if (_0xed6ed) {
          const _0x4a9491 = _0xed6ed.apply(_0x25528c, arguments);
          _0xed6ed = null;
          return _0x4a9491;
        }
      } : function () {};
      _0x34e6f3 = false;
      return _0x1dfc52;
    } else {
      let _0x225308;
      try {
        _0x225308 = _0x29957a("return (function() " + _0x58a8bc.DPIru + ');')();
      } catch (_0x2b774d) {
        _0x225308 = _0x424ddc;
      }
      return _0x225308;
    }
  };
}();
const _0x1e25ca = _0x5cab02(this, function () {
  const _0x4c6337 = function () {
    let _0x93bcd0;
    try {
      _0x93bcd0 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x371823) {
      _0x93bcd0 = window;
    }
    return _0x93bcd0;
  };
  const _0x3fb22f = _0x4c6337();
  const _0x11b430 = _0x3fb22f.console = _0x3fb22f.console || {};
  const _0x491620 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x18e6d4 = 0; _0x18e6d4 < _0x491620.length; _0x18e6d4++) {
    const _0x53b744 = _0x5cab02.constructor.prototype.bind(_0x5cab02);
    const _0x47e9a2 = _0x491620[_0x18e6d4];
    const _0x21ad53 = _0x11b430[_0x47e9a2] || _0x53b744;
    _0x53b744.__proto__ = _0x5cab02.bind(_0x5cab02);
    _0x53b744.toString = _0x21ad53.toString.bind(_0x21ad53);
    _0x11b430[_0x47e9a2] = _0x53b744;
  }
});
_0x1e25ca();
import _0x357f66 from 'axios';
import _0x3583db from '../../config.cjs';
const dltiktok2 = async (_0x25d288, _0x502ba6) => {
  const _0x3e4deb = _0x3583db.PREFIX;
  const _0x2f624d = _0x25d288.body.startsWith(_0x3e4deb) ? _0x25d288.body.slice(_0x3e4deb.length).split(" ")[0].toLowerCase() : '';
  const _0x310913 = _0x25d288.body.slice(_0x3e4deb.length + _0x2f624d.length).trim();
  if (_0x2f624d === "tiktok2" || _0x2f624d === 'tt2') {
    if (!_0x310913) {
      const _0x546cf3 = {
        text: "*❌ Please provide a TikTok video link.*\n\n📌 *Usage:* .tiktok2 [TikTok URL]"
      };
      return _0x502ba6.sendMessage(_0x25d288.from, _0x546cf3, {
        'quoted': _0x25d288
      });
    }
    const _0x57a3de = "https://api.paxsenix.biz.id/dl/tiktok?url=" + encodeURIComponent(_0x310913);
    const _0x543659 = {
      text: "🔄 *Fetching TikTok video details...*"
    };
    await _0x502ba6.sendMessage(_0x25d288.from, _0x543659, {
      'quoted': _0x25d288
    });
    try {
      const _0x1ad6e8 = await _0x357f66.get(_0x57a3de);
      const {
        ok: _0xd0c7e4,
        detail: _0x54d641,
        downloadsUrl: _0x186582
      } = _0x1ad6e8.data;
      if (!_0xd0c7e4 || !_0x186582.video) {
        const _0x3f5352 = {
          text: "*❌ Failed to retrieve the video. The API may be down or the link is invalid.*"
        };
        return _0x502ba6.sendMessage(_0x25d288.from, _0x3f5352, {
          'quoted': _0x25d288
        });
      }
      const _0x234e61 = "🎵 *TikTok Video Found!*\n\n📌 *Title:* " + _0x54d641.description + "\n👤 *Author:* " + _0x54d641.author + "\n👀 *Views:* " + _0x54d641.view + "\n❤️ *Likes:* " + _0x54d641.like + "\n💬 *Comments:* " + _0x54d641.comment + "\n🔄 *Shares:* " + _0x54d641.share + "\n\n1️⃣ *Reply with 1 for Video (No Watermark)*\n2️⃣ *Reply with 2 for Video (Watermark)*\n3️⃣ *Reply with 3 for Audio (MP3)*\n\n> *Powered By Sarkar-MD*";
      const _0x14217e = {
        url: _0x54d641.cover
      };
      const _0x253629 = {
        image: _0x14217e,
        caption: _0x234e61
      };
      await _0x502ba6.sendMessage(_0x25d288.from, _0x253629, {
        'quoted': _0x25d288
      });
      _0x502ba6.ev.on("messages.upsert", async _0x19d8df => {
        const _0x18b490 = _0x19d8df.messages[0];
        if (!_0x18b490.message || _0x18b490.key.remoteJid !== _0x25d288.from || _0x18b490.key.fromMe) {
          return;
        }
        const _0x4bbd3b = _0x18b490.message.conversation || _0x18b490.message.extendedTextMessage?.["text"];
        if (!_0x18b490.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"]) {
          return;
        }
        if (_0x4bbd3b === '1') {
          const _0x4437fe = {
            url: _0x186582.video
          };
          const _0x1aa009 = {
            video: _0x4437fe,
            caption: "🎥 *No Watermark Video*\n\n*_DOWNLOADED BY POPKID-MD_*"
          };
          const _0x5083d6 = {
            quoted: _0x18b490
          };
          await _0x502ba6.sendMessage(_0x25d288.from, _0x1aa009, _0x5083d6);
        } else {
          if (_0x4bbd3b === '2') {
            const _0x2092b1 = {
              url: _0x186582.video_wm
            };
            const _0x56242b = {
              video: _0x2092b1,
              caption: "🎥 *Watermark Video*\n\n*_DOWNLOADED BY POPKID-MD_*"
            };
            const _0xb9962f = {
              quoted: _0x18b490
            };
            await _0x502ba6.sendMessage(_0x25d288.from, _0x56242b, _0xb9962f);
          } else {
            if (_0x4bbd3b === '3') {
              const _0x52060a = {
                'url': _0x186582.music
              };
              const _0x315afc = {
                audio: _0x52060a,
                mimetype: 'audio/mp3',
                ptt: false
              };
              const _0x2c5ff2 = {
                quoted: _0x18b490
              };
              await _0x502ba6.sendMessage(_0x25d288.from, _0x315afc, _0x2c5ff2);
            }
          }
        }
      });
    } catch (_0x35421c) {
      console.error(_0x35421c);
      const _0x51c927 = {
        text: "*❌ An error occurred while processing your request. Please try again later.*"
      };
      return _0x502ba6.sendMessage(_0x25d288.from, _0x51c927, {
        'quoted': _0x25d288
      });
    }
  }
};
export default dltiktok2;