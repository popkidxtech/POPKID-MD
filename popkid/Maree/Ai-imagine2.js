const _0x188cc1 = function () {
  let _0x2444db = true;
  return function (_0x1075b1, _0x2cbbbe) {
    const _0x42259c = _0x2444db ? function () {
      if (_0x2cbbbe) {
        const _0x4231ca = _0x2cbbbe.apply(_0x1075b1, arguments);
        _0x2cbbbe = null;
        return _0x4231ca;
      }
    } : function () {};
    _0x2444db = false;
    return _0x42259c;
  };
}();
const _0x41adeb = _0x188cc1(this, function () {
  return _0x41adeb.toString().search("(((.+)+)+)+$").toString().constructor(_0x41adeb).search("(((.+)+)+)+$");
});
_0x41adeb();
const _0x506886 = function () {
  let _0x87f34b = true;
  return function (_0xe7d757, _0x55ddd0) {
    const _0x511a8c = _0x87f34b ? function () {
      if (_0x55ddd0) {
        const _0x43556a = _0x55ddd0.apply(_0xe7d757, arguments);
        _0x55ddd0 = null;
        return _0x43556a;
      }
    } : function () {};
    _0x87f34b = false;
    return _0x511a8c;
  };
}();
const _0x57a31a = _0x506886(this, function () {
  const _0x3d5c98 = function () {
    let _0x8e3f6d;
    try {
      _0x8e3f6d = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x24c9b3) {
      _0x8e3f6d = window;
    }
    return _0x8e3f6d;
  };
  const _0x227d37 = _0x3d5c98();
  const _0x5e7f92 = _0x227d37.console = _0x227d37.console || {};
  const _0x1da714 = ["log", "warn", "info", "error", 'exception', "table", "trace"];
  for (let _0x52fdba = 0; _0x52fdba < _0x1da714.length; _0x52fdba++) {
    const _0x455d31 = _0x506886.constructor.prototype.bind(_0x506886);
    const _0x47dff4 = _0x1da714[_0x52fdba];
    const _0x3e3e91 = _0x5e7f92[_0x47dff4] || _0x455d31;
    _0x455d31.__proto__ = _0x506886.bind(_0x506886);
    _0x455d31.toString = _0x3e3e91.toString.bind(_0x3e3e91);
    _0x5e7f92[_0x47dff4] = _0x455d31;
  }
});
_0x57a31a();
import _0x32c8de from '../../config.cjs';
import _0x240be1 from 'axios';
import 'fs';
const stablediffusion = async (_0x3e70fa, _0x1ecaa3) => {
  const _0x21b354 = _0x32c8de.PREFIX;
  const _0x395690 = _0x3e70fa.body.startsWith(_0x21b354) ? _0x3e70fa.body.slice(_0x21b354.length).split(" ")[0].toLowerCase() : '';
  const _0x4bb644 = _0x3e70fa.body.slice(_0x21b354.length + _0x395690.length).trim();
  if (_0x395690 === "stablediffusion" || _0x395690 === 'sdiffusion' || _0x395690 === 'imagine2') {
    try {
      if (!_0x4bb644) {
        await _0x3e70fa.React('❌');
        const _0x1d7bc2 = {
          text: "❌ Please provide a prompt for the image."
        };
        return _0x1ecaa3.sendMessage(_0x3e70fa.from, _0x1d7bc2, {
          'quoted': _0x3e70fa
        });
      }
      const _0xfee9e9 = {
        text: "> *𝐂𝐑𝐄𝐀𝐓𝐈𝐍𝐆 𝐈𝐌𝐀𝐆𝐄 ...🔥*"
      };
      await _0x1ecaa3.sendMessage(_0x3e70fa.from, _0xfee9e9, {
        'quoted': _0x3e70fa
      });
      const _0x54d732 = "https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=" + encodeURIComponent(_0x4bb644);
      const _0x9d1b9a = {
        responseType: "arraybuffer"
      };
      const _0x4f3867 = await _0x240be1.get(_0x54d732, _0x9d1b9a);
      if (!_0x4f3867 || !_0x4f3867.data) {
        await _0x3e70fa.React('❌');
        const _0x3f3316 = {
          text: "❌ Error: The API did not return a valid image. Try again later."
        };
        return _0x1ecaa3.sendMessage(_0x3e70fa.from, _0x3f3316, {
          'quoted': _0x3e70fa
        });
      }
      const _0x4821ad = Buffer.from(_0x4f3867.data, "binary");
      await _0x3e70fa.React('✅');
      const _0x417259 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: '𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃',
        serverMessageId: -1
      };
      const _0x14c274 = {
        title: "🫧POPKID🫧",
        body: "AI Image Generated",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: false
      };
      const _0x9a0b24 = {
        isForwarded: true,
        forwardedNewsletterMessageInfo: _0x417259,
        forwardingScore: 0x3e7,
        externalAdReply: _0x14c274
      };
      const _0x13482e = {
        image: _0x4821ad,
        caption: "💸 *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃*🚀\n✨ Prompt: *" + _0x4bb644 + '*',
        contextInfo: _0x9a0b24
      };
      await _0x1ecaa3.sendMessage(_0x3e70fa.from, _0x13482e, {
        'quoted': _0x3e70fa
      });
    } catch (_0xf35662) {
      console.error("StableDiffusion Error:", _0xf35662);
      await _0x3e70fa.React('❌');
      const _0x15b170 = {
        text: "❌ An error occurred: " + (_0xf35662.response?.["data"]?.["message"] || _0xf35662.message || "Unknown error")
      };
      await _0x1ecaa3.sendMessage(_0x3e70fa.from, _0x15b170, {
        'quoted': _0x3e70fa
      });
    }
  }
};
export default stablediffusion;