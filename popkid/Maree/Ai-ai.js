const _0x508d09 = function () {
  let _0x1196e3 = true;
  return function (_0x318ce9, _0x262e59) {
    const _0x9658b3 = _0x1196e3 ? function () {
      if (_0x262e59) {
        const _0x10158c = _0x262e59.apply(_0x318ce9, arguments);
        _0x262e59 = null;
        return _0x10158c;
      }
    } : function () {};
    _0x1196e3 = false;
    return _0x9658b3;
  };
}();
const _0x59f2d6 = _0x508d09(this, function () {
  return _0x59f2d6.toString().search("(((.+)+)+)+$").toString().constructor(_0x59f2d6).search("(((.+)+)+)+$");
});
_0x59f2d6();
const _0x4448bd = function () {
  let _0x109996 = true;
  return function (_0x2dfcfd, _0x2cf566) {
    const _0x1fa159 = _0x109996 ? function () {
      if (_0x2cf566) {
        const _0x3b877f = _0x2cf566.apply(_0x2dfcfd, arguments);
        _0x2cf566 = null;
        return _0x3b877f;
      }
    } : function () {};
    _0x109996 = false;
    return _0x1fa159;
  };
}();
const _0x36cea4 = _0x4448bd(this, function () {
  let _0x3a2a6d;
  try {
    const _0x56d8e7 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3a2a6d = _0x56d8e7();
  } catch (_0x1d3493) {
    _0x3a2a6d = window;
  }
  const _0x3cf6c3 = _0x3a2a6d.console = _0x3a2a6d.console || {};
  const _0x1724f9 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x24b262 = 0; _0x24b262 < _0x1724f9.length; _0x24b262++) {
    const _0x57ed64 = _0x4448bd.constructor.prototype.bind(_0x4448bd);
    const _0x4b847c = _0x1724f9[_0x24b262];
    const _0x5a0daf = _0x3cf6c3[_0x4b847c] || _0x57ed64;
    _0x57ed64.__proto__ = _0x4448bd.bind(_0x4448bd);
    _0x57ed64.toString = _0x5a0daf.toString.bind(_0x5a0daf);
    _0x3cf6c3[_0x4b847c] = _0x57ed64;
  }
});
_0x36cea4();
import _0x4d518a from '../../config.cjs';
import _0x277a97 from 'node-fetch';
const ai = async (_0x3df8ad, _0x27d90e) => {
  const _0x2a5de3 = _0x4d518a.PREFIX;
  const _0x41b4ca = _0x3df8ad.body.startsWith(_0x2a5de3) ? _0x3df8ad.body.slice(_0x2a5de3.length).split(" ")[0].toLowerCase() : '';
  if (_0x41b4ca === 'ai') {
    const _0x1b189b = _0x3df8ad.body.slice(_0x2a5de3.length + _0x41b4ca.length).trim();
    if (!_0x1b189b) {
      const _0x580ccd = {
        text: "⚠️ *Usage:* `ai <message>`\n💡 Example: `ai Hello!`"
      };
      return await _0x27d90e.sendMessage(_0x3df8ad.from, _0x580ccd, {
        'quoted': _0x3df8ad
      });
    }
    await _0x3df8ad.React('⏳');
    try {
      const _0x214f8e = "https://apis.giftedtech.web.id/api/ai/gpt?apikey=gifted-md&q=" + encodeURIComponent(_0x1b189b);
      const _0x151da8 = await _0x277a97(_0x214f8e);
      const _0x5c5118 = await _0x151da8.json();
      if (_0x5c5118.success) {
        const _0x430b55 = {
          title: "🤖 Popkid-MD AI",
          body: "AI Chatbot",
          thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
          sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
          mediaType: 0x1,
          renderLargerThumbnail: false
        };
        await _0x27d90e.sendMessage(_0x3df8ad.from, {
          'text': "🤖 *AI Response:*\n" + _0x5c5118.result,
          'contextInfo': {
            'mentionedJid': [_0x3df8ad.sender],
            'isForwarded': true,
            'forwardingScore': 0x3e7,
            'externalAdReply': _0x430b55
          }
        }, {
          'quoted': _0x3df8ad
        });
        await _0x3df8ad.React('✅');
      } else {
        const _0x4bdd23 = {
          text: "⚠️ AI response failed!"
        };
        await _0x27d90e.sendMessage(_0x3df8ad.from, _0x4bdd23, {
          'quoted': _0x3df8ad
        });
        await _0x3df8ad.React('❌');
      }
    } catch (_0x2e84c8) {
      const _0x573447 = {
        text: "⚠️ API Error! Please try again later."
      };
      await _0x27d90e.sendMessage(_0x3df8ad.from, _0x573447, {
        'quoted': _0x3df8ad
      });
      await _0x3df8ad.React('❌');
    }
  }
};
export default ai;