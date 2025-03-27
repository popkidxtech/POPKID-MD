const _0x2f55ea = function () {
  let _0x43ec6b = true;
  return function (_0x393ac6, _0x14ccc9) {
    const _0x20a7ef = _0x43ec6b ? function () {
      if (_0x14ccc9) {
        const _0x216205 = _0x14ccc9.apply(_0x393ac6, arguments);
        _0x14ccc9 = null;
        return _0x216205;
      }
    } : function () {};
    _0x43ec6b = false;
    return _0x20a7ef;
  };
}();
const _0x5ebc3c = _0x2f55ea(this, function () {
  return _0x5ebc3c.toString().search("(((.+)+)+)+$").toString().constructor(_0x5ebc3c).search("(((.+)+)+)+$");
});
_0x5ebc3c();
const _0x2f41ff = function () {
  let _0x39f639 = true;
  return function (_0x3379b0, _0x9bcd65) {
    const _0x1f05e6 = _0x39f639 ? function () {
      if (_0x9bcd65) {
        const _0xd190 = _0x9bcd65.apply(_0x3379b0, arguments);
        _0x9bcd65 = null;
        return _0xd190;
      }
    } : function () {};
    _0x39f639 = false;
    return _0x1f05e6;
  };
}();
const _0x46decc = _0x2f41ff(this, function () {
  const _0xdb44a7 = function () {
    let _0x96ef8;
    try {
      _0x96ef8 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0xb3dced) {
      _0x96ef8 = window;
    }
    return _0x96ef8;
  };
  const _0x58dd63 = _0xdb44a7();
  const _0x52994a = _0x58dd63.console = _0x58dd63.console || {};
  const _0x379578 = ['log', "warn", 'info', "error", "exception", "table", 'trace'];
  for (let _0x1c5872 = 0; _0x1c5872 < _0x379578.length; _0x1c5872++) {
    const _0x77431f = _0x2f41ff.constructor.prototype.bind(_0x2f41ff);
    const _0x15ea08 = _0x379578[_0x1c5872];
    const _0x5b5f44 = _0x52994a[_0x15ea08] || _0x77431f;
    _0x77431f.__proto__ = _0x2f41ff.bind(_0x2f41ff);
    _0x77431f.toString = _0x5b5f44.toString.bind(_0x5b5f44);
    _0x52994a[_0x15ea08] = _0x77431f;
  }
});
_0x46decc();
import _0x42fae5 from 'axios';
import _0x546e0d from '../../config.cjs';
const dlFb2 = async (_0x11345e, _0x484b61) => {
  const _0x45a123 = _0x546e0d.PREFIX;
  const _0x2b0901 = _0x11345e.body.startsWith(_0x45a123) ? _0x11345e.body.slice(_0x45a123.length).split(" ")[0].toLowerCase() : '';
  const _0x1fa548 = _0x11345e.body.slice(_0x45a123.length + _0x2b0901.length).trim();
  if (_0x2b0901 === "fb2" || _0x2b0901 === "fbdown2") {
    if (!_0x1fa548) {
      const _0x509ece = {
        text: "🔎 Please provide a Facebook video link!"
      };
      return _0x484b61.sendMessage(_0x11345e.from, _0x509ece, {
        'quoted': _0x11345e
      });
    }
    await _0x11345e.React('⏳');
    try {
      const _0x5437bc = "https://apis.giftedtech.web.id/api/download/facebook?apikey=gifted-md&url=" + encodeURIComponent(_0x1fa548);
      const _0x3685c2 = await _0x42fae5.get(_0x5437bc);
      const _0x13583e = _0x3685c2.data;
      if (!_0x13583e.success || !_0x13583e.result) {
        const _0xf5baa1 = {
          text: "❌ Failed to fetch video details!"
        };
        return _0x484b61.sendMessage(_0x11345e.from, _0xf5baa1, {
          'quoted': _0x11345e
        });
      }
      const {
        title: _0x3427b2,
        hd_video: _0x20ca35,
        sd_video: _0x3a5b14
      } = _0x13583e.result;
      await _0x11345e.React('✅');
      let _0x3ab063 = _0x20ca35 || _0x3a5b14;
      let _0x43402e = _0x20ca35 ? 'HD' : 'SD';
      if (!_0x3ab063) {
        const _0x334dc3 = {
          text: "❌ No downloadable video found!"
        };
        return _0x484b61.sendMessage(_0x11345e.from, _0x334dc3, {
          'quoted': _0x11345e
        });
      }
      const _0xd9a46d = {
        url: _0x3ab063
      };
      _0x484b61.sendMessage(_0x11345e.from, {
        'video': _0xd9a46d,
        'mimetype': "video/mp4",
        'caption': "✅ *" + _0x43402e + " Video Downloaded!*\n📌 *Title:* " + (_0x3427b2 || "No Title") + "\n\n*POWERED BY POPKID*",
        'contextInfo': {
          'externalAdReply': {
            'title': "🫧popkid🫧",
            'body': "Facebook Video Downloader",
            'thumbnailUrl': "https://i.imgur.com/NkUITKj.mp4",
            'sourceUrl': "https://github.com/Popkiddevs/POPKID-XTECH/fork",
            'mediaType': 0x1,
            'showAdAttribution': false
          }
        }
      }, {
        'quoted': _0x11345e
      });
    } catch (_0x2d5a18) {
      console.error("Error in fbdown2 command:", _0x2d5a18);
      const _0x292c8a = {
        text: "❌ An error occurred while processing your request!"
      };
      _0x484b61.sendMessage(_0x11345e.from, _0x292c8a, {
        'quoted': _0x11345e
      });
    }
  }
};
export default dlFb2;