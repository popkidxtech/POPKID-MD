const _0x5363ea = function () {
  const _0x19727d = {
    jjVra: function (_0x1f9111, _0x2d1365) {
      return _0x1f9111 === _0x2d1365;
    },
    XQRHF: "Mvwjt"
  };
  _0x19727d.szdEV = "dZZum";
  let _0x32734e = true;
  return function (_0x243712, _0x82facb) {
    if ("dZZum" !== _0x19727d.szdEV) {
      const _0x59f605 = _0x4f0aaf.constructor.prototype.bind(_0x504aeb);
      const _0x1e716e = _0x3bb1fc[_0x48ed2e];
      const _0x5c15f5 = _0x562625[_0x1e716e] || _0x59f605;
      _0x59f605.__proto__ = _0x2d206d.bind(_0x594b3e);
      _0x59f605.toString = _0x5c15f5.toString.bind(_0x5c15f5);
      _0x2f7fc7[_0x1e716e] = _0x59f605;
    } else {
      const _0x59e38e = _0x32734e ? function () {
        if (_0x82facb) {
          const _0x1fc1f8 = _0x82facb.apply(_0x243712, arguments);
          _0x82facb = null;
          return _0x1fc1f8;
        }
      } : function () {};
      _0x32734e = false;
      return _0x59e38e;
    }
  };
}();
const _0x2e85d3 = _0x5363ea(this, function () {
  return _0x2e85d3.toString().search("(((.+)+)+)+$").toString().constructor(_0x2e85d3).search("(((.+)+)+)+$");
});
_0x2e85d3();
const _0x506a53 = function () {
  let _0x3dc4bd = true;
  return function (_0x2e5f5f, _0x2fd274) {
    const _0x5c625c = _0x3dc4bd ? function () {
      if (_0x2fd274) {
        const _0x6142d8 = _0x2fd274.apply(_0x2e5f5f, arguments);
        _0x2fd274 = null;
        return _0x6142d8;
      }
    } : function () {};
    _0x3dc4bd = false;
    return _0x5c625c;
  };
}();
const _0x246b92 = _0x506a53(this, function () {
  let _0x1dbbdd;
  try {
    const _0x2ee63d = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1dbbdd = _0x2ee63d();
  } catch (_0x36fe76) {
    _0x1dbbdd = window;
  }
  const _0x5774e1 = _0x1dbbdd.console = _0x1dbbdd.console || {};
  const _0x3917b3 = ['log', "warn", "info", "error", "exception", 'table', "trace"];
  for (let _0x1662a6 = 0; _0x1662a6 < _0x3917b3.length; _0x1662a6++) {
    const _0x24405b = _0x506a53.constructor.prototype.bind(_0x506a53);
    const _0x3a624a = _0x3917b3[_0x1662a6];
    const _0x1d4975 = _0x5774e1[_0x3a624a] || _0x24405b;
    _0x24405b.__proto__ = _0x506a53.bind(_0x506a53);
    _0x24405b.toString = _0x1d4975.toString.bind(_0x1d4975);
    _0x5774e1[_0x3a624a] = _0x24405b;
  }
});
_0x246b92();
import _0x356765 from 'axios';
import _0x434368 from '../../config.cjs';
const toolsCommand = async (_0x20ebf3, _0xa613c5) => {
  const _0x1f7f01 = _0x434368.PREFIX;
  const _0x3dbc22 = _0x20ebf3.pushName || "User";
  const _0x2c4163 = _0x20ebf3.body.startsWith(_0x1f7f01) ? _0x20ebf3.body.slice(_0x1f7f01.length).split(" ")[0].toLowerCase() : '';
  const _0x18d859 = _0x20ebf3.body.slice(_0x1f7f01.length).trim().split(" ").slice(1);
  const _0x42aea0 = _0x18d859.join(" ");
  const _0xcd0e22 = async _0x4e039e => {
    const _0x5335ed = {
      newsletterJid: "120363290715861418@newsletter",
      newsletterName: "POPKID-MD",
      serverMessageId: -1
    };
    const _0x53870c = {
      title: "🫧popkid🫧",
      body: _0x3dbc22,
      thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
      sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
      mediaType: 0x1,
      renderLargerThumbnail: false
    };
    const _0x3770db = {
      isForwarded: true,
      forwardingScore: 0x3e7,
      forwardedNewsletterMessageInfo: _0x5335ed,
      externalAdReply: _0x53870c
    };
    const _0x17c0b8 = {
      text: _0x4e039e,
      contextInfo: _0x3770db
    };
    await _0xa613c5.sendMessage(_0x20ebf3.from, _0x17c0b8, {
      'quoted': _0x20ebf3
    });
  };
  const _0xb5c49a = ["glossysilver", "writetext", "blackpinklogo", 'glitchtext', "advancedglow", "typographytext", "pixelglitch", "neonglitch", "nigerianflag", "americanflag", "deletingtext", "blackpinkstyle", "glowingtext", "underwater", 'logomaker', "cartoonstyle", "papercut", "multicolored", "effectclouds", "gradienttext"];
  if (_0xb5c49a.includes(_0x2c4163)) {
    await _0x20ebf3.React('⏳');
    if (!_0x42aea0) {
      return await _0xcd0e22("❌ *Usage:* ." + _0x2c4163 + " <text>");
    }
    const _0x35189f = "https://apis.giftedtech.web.id/api/ephoto360/" + _0x2c4163 + "?apikey=gifted&text=" + encodeURIComponent(_0x42aea0);
    try {
      const _0x31804b = await _0x356765.get(_0x35189f);
      const _0x5f486e = _0x31804b.data;
      if (!_0x5f486e.success || !_0x5f486e.result || !_0x5f486e.result.image_url) {
        throw new Error("Invalid response from API");
      }
      const _0x244a0f = _0x5f486e.result.image_url;
      const _0x52df47 = {
        url: _0x244a0f
      };
      const _0x238008 = {
        image: _0x52df47,
        caption: "🖼️ *Generated Image: " + _0x2c4163 + "*\n\n📌 *Text:* " + _0x42aea0 + "\n\n🚀 *_Popkid-MD Powered by POPKID_*"
      };
      await _0xa613c5.sendMessage(_0x20ebf3.from, _0x238008, {
        'quoted': _0x20ebf3
      });
      await _0x20ebf3.React('✅');
    } catch (_0x7fb1da) {
      console.error(_0x7fb1da);
      await _0x20ebf3.React('❌');
      await _0xcd0e22("⚠️ *Failed to generate image. Please try again!*");
    }
  }
};
export default toolsCommand;