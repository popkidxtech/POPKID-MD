const _0x494464 = function () {
  let _0x3c267f = true;
  return function (_0x240af6, _0x5583c6) {
    const _0x45419 = _0x3c267f ? function () {
      if (_0x5583c6) {
        const _0x2c292c = _0x5583c6.apply(_0x240af6, arguments);
        _0x5583c6 = null;
        return _0x2c292c;
      }
    } : function () {};
    _0x3c267f = false;
    return _0x45419;
  };
}();
const _0x432242 = _0x494464(this, function () {
  return _0x432242.toString().search("(((.+)+)+)+$").toString().constructor(_0x432242).search("(((.+)+)+)+$");
});
_0x432242();
const _0x3b4667 = function () {
  let _0x2b2b37 = true;
  return function (_0x500bb7, _0xbb33ec) {
    const _0x3f94db = _0x2b2b37 ? function () {
      if (_0xbb33ec) {
        const _0x2db971 = _0xbb33ec.apply(_0x500bb7, arguments);
        _0xbb33ec = null;
        return _0x2db971;
      }
    } : function () {};
    _0x2b2b37 = false;
    return _0x3f94db;
  };
}();
const _0x323e0e = _0x3b4667(this, function () {
  let _0x294d1f;
  try {
    const _0x5b655a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x294d1f = _0x5b655a();
  } catch (_0x460b32) {
    _0x294d1f = window;
  }
  const _0x415fba = _0x294d1f.console = _0x294d1f.console || {};
  const _0x9fc601 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x573c4b = 0; _0x573c4b < _0x9fc601.length; _0x573c4b++) {
    const _0xaf3c01 = _0x3b4667.constructor.prototype.bind(_0x3b4667);
    const _0x15cc21 = _0x9fc601[_0x573c4b];
    const _0x284f51 = _0x415fba[_0x15cc21] || _0xaf3c01;
    _0xaf3c01.__proto__ = _0x3b4667.bind(_0x3b4667);
    _0xaf3c01.toString = _0x284f51.toString.bind(_0x284f51);
    _0x415fba[_0x15cc21] = _0xaf3c01;
  }
});
_0x323e0e();
import _0x1f1049 from '../../config.cjs';
import _0x27612a from 'node-fetch';
const blackbox = async (_0x57301f, _0x215ec5) => {
  const _0x308615 = _0x1f1049.PREFIX;
  const _0x3da28d = _0x57301f.body.startsWith(_0x308615) ? _0x57301f.body.slice(_0x308615.length).split(" ")[0].toLowerCase() : '';
  if (_0x3da28d === "blackbox") {
    const _0x16913d = _0x57301f.body.slice(_0x308615.length + _0x3da28d.length).trim();
    if (!_0x16913d) {
      const _0x59dea4 = {
        text: "⚠️ *Usage:* `blackbox <message>`\n💡 Example: `blackbox What is AI?`"
      };
      return await _0x215ec5.sendMessage(_0x57301f.from, _0x59dea4, {
        'quoted': _0x57301f
      });
    }
    await _0x57301f.React('⏳');
    try {
      const _0x46052a = "https://apis.giftedtech.web.id/api/ai/geminiaipro?apikey=gifted-md&q=" + encodeURIComponent(_0x16913d);
      const _0x1d7f1f = await _0x27612a(_0x46052a);
      const _0x12549b = await _0x1d7f1f.json();
      if (_0x12549b.success) {
        const _0x30641f = {
          title: "🤖 Blackbox AI",
          body: "AI-Powered Chatbot",
          thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
          sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
          mediaType: 0x1,
          renderLargerThumbnail: false
        };
        await _0x215ec5.sendMessage(_0x57301f.from, {
          'text': "🤖 *Blackbox AI Response:*\n" + _0x12549b.result,
          'contextInfo': {
            'mentionedJid': [_0x57301f.sender],
            'isForwarded': true,
            'forwardingScore': 0x3e7,
            'externalAdReply': _0x30641f
          }
        }, {
          'quoted': _0x57301f
        });
        await _0x57301f.React('✅');
      } else {
        const _0x401dce = {
          text: "⚠️ AI response failed!"
        };
        await _0x215ec5.sendMessage(_0x57301f.from, _0x401dce, {
          'quoted': _0x57301f
        });
        await _0x57301f.React('❌');
      }
    } catch (_0x4cefbb) {
      const _0x255713 = {
        text: "⚠️ API Error! Please try again later."
      };
      await _0x215ec5.sendMessage(_0x57301f.from, _0x255713, {
        'quoted': _0x57301f
      });
      await _0x57301f.React('❌');
    }
  }
};
export default blackbox;