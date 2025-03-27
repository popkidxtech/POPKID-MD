const _0x30a702 = function () {
  let _0x4fc1de = true;
  return function (_0x3165a3, _0x4c3b0c) {
    const _0x4fcc75 = _0x4fc1de ? function () {
      if (_0x4c3b0c) {
        const _0x4ef07a = _0x4c3b0c.apply(_0x3165a3, arguments);
        _0x4c3b0c = null;
        return _0x4ef07a;
      }
    } : function () {};
    _0x4fc1de = false;
    return _0x4fcc75;
  };
}();
const _0x1fe47b = _0x30a702(this, function () {
  return _0x1fe47b.toString().search("(((.+)+)+)+$").toString().constructor(_0x1fe47b).search("(((.+)+)+)+$");
});
_0x1fe47b();
const _0x3a361c = function () {
  let _0xc57dcc = true;
  return function (_0x3d7d16, _0x1e84e4) {
    const _0x247fff = _0xc57dcc ? function () {
      if (_0x1e84e4) {
        const _0x10ce0e = _0x1e84e4.apply(_0x3d7d16, arguments);
        _0x1e84e4 = null;
        return _0x10ce0e;
      }
    } : function () {};
    _0xc57dcc = false;
    return _0x247fff;
  };
}();
const _0x457e = _0x3a361c(this, function () {
  const _0xa2d478 = function () {
    let _0x8fd73b;
    try {
      _0x8fd73b = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3201e8) {
      _0x8fd73b = window;
    }
    return _0x8fd73b;
  };
  const _0x5a541d = _0xa2d478();
  const _0x559a04 = _0x5a541d.console = _0x5a541d.console || {};
  const _0x441ef3 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x3cdf7d = 0; _0x3cdf7d < _0x441ef3.length; _0x3cdf7d++) {
    const _0x3731fd = _0x3a361c.constructor.prototype.bind(_0x3a361c);
    const _0x448ec6 = _0x441ef3[_0x3cdf7d];
    const _0x3f1351 = _0x559a04[_0x448ec6] || _0x3731fd;
    _0x3731fd.__proto__ = _0x3a361c.bind(_0x3a361c);
    _0x3731fd.toString = _0x3f1351.toString.bind(_0x3f1351);
    _0x559a04[_0x448ec6] = _0x3731fd;
  }
});
_0x457e();
import _0x5b9866 from '../../config.cjs';
import _0x5db6dc from 'axios';
import 'fs';
const fluxai = async (_0x164d98, _0x412615) => {
  const _0x2b4808 = _0x5b9866.PREFIX;
  const _0x4e4b0d = _0x164d98.body.startsWith(_0x2b4808) ? _0x164d98.body.slice(_0x2b4808.length).split(" ")[0].toLowerCase() : '';
  const _0x49a732 = _0x164d98.body.slice(_0x2b4808.length + _0x4e4b0d.length).trim();
  if (_0x4e4b0d === "fluxai" || _0x4e4b0d === "flux" || _0x4e4b0d === "imagine") {
    try {
      if (!_0x49a732) {
        await _0x164d98.React('❌');
        const _0x508205 = {
          text: "❌ Please provide a prompt for the image."
        };
        return _0x412615.sendMessage(_0x164d98.from, _0x508205, {
          'quoted': _0x164d98
        });
      }
      const _0x110a77 = {
        text: "> *𝐂𝐑𝐄𝐀𝐓𝐈𝐍𝐆 𝐈𝐌𝐀𝐆𝐈𝐍𝐄 ...😊*"
      };
      await _0x412615.sendMessage(_0x164d98.from, _0x110a77, {
        'quoted': _0x164d98
      });
      const _0x54d71b = "https://api.siputzx.my.id/api/ai/flux?prompt=" + encodeURIComponent(_0x49a732);
      const _0x4bbcd5 = {
        responseType: "arraybuffer"
      };
      const _0x2fcd84 = await _0x5db6dc.get(_0x54d71b, _0x4bbcd5);
      if (!_0x2fcd84 || !_0x2fcd84.data) {
        await _0x164d98.React('❌');
        const _0x380eb8 = {
          text: "❌ Error: The API did not return a valid image. Try again later."
        };
        return _0x412615.sendMessage(_0x164d98.from, _0x380eb8, {
          'quoted': _0x164d98
        });
      }
      const _0x5f4dd3 = Buffer.from(_0x2fcd84.data, "binary");
      await _0x164d98.React('✅');
      const _0x5a75f7 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: '𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃',
        serverMessageId: -1
      };
      const _0x2d0a57 = {
        title: "🫧POPKID🫧",
        body: "AI Image Generated",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: false
      };
      const _0x26a811 = {
        isForwarded: true,
        forwardedNewsletterMessageInfo: _0x5a75f7,
        forwardingScore: 0x3e7,
        externalAdReply: _0x2d0a57
      };
      const _0x11c780 = {
        image: _0x5f4dd3,
        caption: "💸 *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃* 🚀\n✨ Prompt: *" + _0x49a732 + '*',
        contextInfo: _0x26a811
      };
      await _0x412615.sendMessage(_0x164d98.from, _0x11c780, {
        'quoted': _0x164d98
      });
    } catch (_0x49af91) {
      console.error("FluxAI Error:", _0x49af91);
      await _0x164d98.React('❌');
      const _0x20f1d0 = {
        text: "❌ An error occurred: " + (_0x49af91.response?.['data']?.["message"] || _0x49af91.message || "Unknown error")
      };
      await _0x412615.sendMessage(_0x164d98.from, _0x20f1d0, {
        'quoted': _0x164d98
      });
    }
  }
};
export default fluxai;