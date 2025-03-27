const _0x1c0752 = function () {
  let _0x1812e3 = true;
  return function (_0x2226d1, _0x4683f0) {
    const _0x1f52e7 = _0x1812e3 ? function () {
      if (_0x4683f0) {
        const _0x3c23bc = _0x4683f0.apply(_0x2226d1, arguments);
        _0x4683f0 = null;
        return _0x3c23bc;
      }
    } : function () {};
    _0x1812e3 = false;
    return _0x1f52e7;
  };
}();
const _0x115ce4 = _0x1c0752(this, function () {
  return _0x115ce4.toString().search("(((.+)+)+)+$").toString().constructor(_0x115ce4).search("(((.+)+)+)+$");
});
_0x115ce4();
const _0x10e218 = function () {
  let _0x109fec = true;
  return function (_0x52f666, _0x2dfc07) {
    const _0x26b99c = _0x109fec ? function () {
      if (_0x2dfc07) {
        const _0x8a4e47 = _0x2dfc07.apply(_0x52f666, arguments);
        _0x2dfc07 = null;
        return _0x8a4e47;
      }
    } : function () {};
    _0x109fec = false;
    return _0x26b99c;
  };
}();
const _0x3773cd = _0x10e218(this, function () {
  const _0x22102f = function () {
    let _0x12afdd;
    try {
      _0x12afdd = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x490502) {
      _0x12afdd = window;
    }
    return _0x12afdd;
  };
  const _0x429fb8 = _0x22102f();
  const _0x38d331 = _0x429fb8.console = _0x429fb8.console || {};
  const _0x99c735 = ["log", "warn", "info", "error", "exception", "table", 'trace'];
  for (let _0x283040 = 0; _0x283040 < _0x99c735.length; _0x283040++) {
    const _0x353db1 = _0x10e218.constructor.prototype.bind(_0x10e218);
    const _0x2f2bdf = _0x99c735[_0x283040];
    const _0x1d6ee1 = _0x38d331[_0x2f2bdf] || _0x353db1;
    _0x353db1.__proto__ = _0x10e218.bind(_0x10e218);
    _0x353db1.toString = _0x1d6ee1.toString.bind(_0x1d6ee1);
    _0x38d331[_0x2f2bdf] = _0x353db1;
  }
});
_0x3773cd();
import _0x24a3d6 from '../../config.cjs';
import _0x250931 from 'axios';
import 'fs';
const stabilityai = async (_0x2ca3e8, _0x4f8fda) => {
  const _0x5eebaa = _0x24a3d6.PREFIX;
  const _0x5af5de = _0x2ca3e8.body.startsWith(_0x5eebaa) ? _0x2ca3e8.body.slice(_0x5eebaa.length).split(" ")[0].toLowerCase() : '';
  const _0x439339 = _0x2ca3e8.body.slice(_0x5eebaa.length + _0x5af5de.length).trim();
  if (_0x5af5de === "stabilityai" || _0x5af5de === "stability" || _0x5af5de === "imagine3") {
    try {
      if (!_0x439339) {
        await _0x2ca3e8.React('❌');
        const _0x27720f = {
          text: "❌ Please provide a prompt for the image."
        };
        return _0x4f8fda.sendMessage(_0x2ca3e8.from, _0x27720f, {
          'quoted': _0x2ca3e8
        });
      }
      const _0x45db1b = {
        text: "> *𝐂𝐑𝐄𝐀𝐓𝐈𝐍𝐆 𝐈𝐌𝐀𝐆𝐄 ...🔥*"
      };
      await _0x4f8fda.sendMessage(_0x2ca3e8.from, _0x45db1b, {
        'quoted': _0x2ca3e8
      });
      const _0x4a21e0 = "https://api.siputzx.my.id/api/ai/stabilityai?prompt=" + encodeURIComponent(_0x439339);
      const _0x26a9d4 = {
        responseType: "arraybuffer"
      };
      const _0x8628ea = await _0x250931.get(_0x4a21e0, _0x26a9d4);
      if (!_0x8628ea || !_0x8628ea.data) {
        await _0x2ca3e8.React('❌');
        const _0x137b1b = {
          text: "❌ Error: The API did not return a valid image. Try again later."
        };
        return _0x4f8fda.sendMessage(_0x2ca3e8.from, _0x137b1b, {
          'quoted': _0x2ca3e8
        });
      }
      const _0x4f368a = Buffer.from(_0x8628ea.data, "binary");
      await _0x2ca3e8.React('✅');
      const _0x3b51ce = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃",
        serverMessageId: -1
      };
      const _0x1c378c = {
        title: "🫧Popkid🫧",
        body: "AI Image Generated",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: false
      };
      const _0x1cb52e = {
        isForwarded: true,
        forwardedNewsletterMessageInfo: _0x3b51ce,
        forwardingScore: 0x3e7,
        externalAdReply: _0x1c378c
      };
      const _0x1252be = {
        image: _0x4f368a,
        caption: "💸 *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃*🚀\n✨ Prompt: *" + _0x439339 + '*',
        contextInfo: _0x1cb52e
      };
      await _0x4f8fda.sendMessage(_0x2ca3e8.from, _0x1252be, {
        'quoted': _0x2ca3e8
      });
    } catch (_0x10a043) {
      console.error("StabilityAI Error:", _0x10a043);
      await _0x2ca3e8.React('❌');
      const _0x667f31 = {
        text: "❌ An error occurred: " + (_0x10a043.response?.['data']?.['message'] || _0x10a043.message || "Unknown error")
      };
      await _0x4f8fda.sendMessage(_0x2ca3e8.from, _0x667f31, {
        'quoted': _0x2ca3e8
      });
    }
  }
};
export default stabilityai;