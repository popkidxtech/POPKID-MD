const _0x1154db = function () {
  let _0x10e25f = true;
  return function (_0x1fcc97, _0x276d25) {
    const _0x1d9ed0 = _0x10e25f ? function () {
      if (_0x276d25) {
        const _0x2702db = _0x276d25.apply(_0x1fcc97, arguments);
        _0x276d25 = null;
        return _0x2702db;
      }
    } : function () {};
    _0x10e25f = false;
    return _0x1d9ed0;
  };
}();
const _0x32db9d = _0x1154db(this, function () {
  return _0x32db9d.toString().search("(((.+)+)+)+$").toString().constructor(_0x32db9d).search("(((.+)+)+)+$");
});
_0x32db9d();
const _0x1c92d1 = function () {
  let _0x40735e = true;
  return function (_0x356c72, _0x3b4b28) {
    const _0x32e7b0 = _0x40735e ? function () {
      if (_0x3b4b28) {
        const _0x2b7b75 = _0x3b4b28.apply(_0x356c72, arguments);
        _0x3b4b28 = null;
        return _0x2b7b75;
      }
    } : function () {};
    _0x40735e = false;
    return _0x32e7b0;
  };
}();
const _0x29bc97 = _0x1c92d1(this, function () {
  let _0x21f9d3;
  try {
    const _0x3028cc = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x21f9d3 = _0x3028cc();
  } catch (_0x20a779) {
    _0x21f9d3 = window;
  }
  const _0x396e4f = _0x21f9d3.console = _0x21f9d3.console || {};
  const _0x21406c = ["log", "warn", "info", 'error', "exception", "table", "trace"];
  for (let _0xc70890 = 0; _0xc70890 < _0x21406c.length; _0xc70890++) {
    const _0x40457d = _0x1c92d1.constructor.prototype.bind(_0x1c92d1);
    const _0x17a194 = _0x21406c[_0xc70890];
    const _0x3532de = _0x396e4f[_0x17a194] || _0x40457d;
    _0x40457d.__proto__ = _0x1c92d1.bind(_0x1c92d1);
    _0x40457d.toString = _0x3532de.toString.bind(_0x3532de);
    _0x396e4f[_0x17a194] = _0x40457d;
  }
});
_0x29bc97();
import 'axios';
import _0xcc29ba from '../../config.cjs';
import _0x266f2b from 'node-fetch';
const toolsCommand = async (_0x49bc3b, _0x53cbae) => {
  const _0x2b6fd9 = _0xcc29ba.PREFIX;
  const _0x5354df = _0x49bc3b.pushName || "User";
  const _0xada02f = _0x49bc3b.body.startsWith(_0x2b6fd9) ? _0x49bc3b.body.slice(_0x2b6fd9.length).split(" ")[0].toLowerCase() : '';
  const _0x3ecdc8 = _0x49bc3b.body.slice(_0x2b6fd9.length).trim().split(" ").slice(1);
  const _0x97a16c = _0x3ecdc8.join(" ");
  const _0x227c01 = async _0x2b2624 => {
    const _0x3eb74d = {
      newsletterJid: "120363290715861418@newsletter",
      newsletterName: "popkid",
      serverMessageId: -1
    };
    const _0x1ee7b6 = {
      title: "popkid",
      body: _0x5354df,
      thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
      sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
      mediaType: 0x1,
      renderLargerThumbnail: false
    };
    const _0x58b9e8 = {
      isForwarded: true,
      forwardingScore: 0x3e7,
      forwardedNewsletterMessageInfo: _0x3eb74d,
      externalAdReply: _0x1ee7b6
    };
    const _0x2a8e35 = {
      text: _0x2b2624,
      contextInfo: _0x58b9e8
    };
    await _0x53cbae.sendMessage(_0x49bc3b.from, _0x2a8e35, {
      'quoted': _0x49bc3b
    });
  };
  if (_0xada02f === "fetch" || _0xada02f === "get") {
    if (!_0x3ecdc8[0]) {
      return await _0x227c01("❌ *Usage:* .fetch <API URL>");
    }
    await _0x49bc3b.React('⏳');
    try {
      const _0x1a92a7 = await _0x266f2b(_0x3ecdc8[0]);
      const _0x2c3e9e = await _0x1a92a7.json();
      const _0x5c5940 = JSON.stringify(_0x2c3e9e, null, 2).slice(0, 4000);
      await _0x49bc3b.React('✅');
      await _0x227c01("📌 *API Response:*  \n```" + _0x5c5940 + '```');
    } catch (_0x461183) {
      await _0x49bc3b.React('❌');
      await _0x227c01("⚠️ *Invalid API URL or Network Error!*");
    }
  }
  if (_0xada02f === "tts") {
    if (!_0x97a16c) {
      return await _0x227c01("❌ *Please provide text for TTS!*");
    }
    await _0x49bc3b.React('⏳');
    try {
      const _0x1fddd7 = "https://bk9.fun/tools/tts?q=" + encodeURIComponent(_0x97a16c) + '&lang=';
      const _0x297500 = {
        url: _0x1fddd7
      };
      const _0xae2aa0 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "popkid",
        serverMessageId: -1
      };
      const _0x529a4a = {
        title: "popkid",
        body: "Listen to TTS Audio",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: true
      };
      const _0x167ddb = {
        isForwarded: true,
        forwardingScore: 0x3e7,
        forwardedNewsletterMessageInfo: _0xae2aa0,
        externalAdReply: _0x529a4a
      };
      const _0xfea7b5 = {
        audio: _0x297500,
        mimetype: "audio/mp4",
        ptt: true,
        contextInfo: _0x167ddb
      };
      await _0x53cbae.sendMessage(_0x49bc3b.from, _0xfea7b5, {
        'quoted': _0x49bc3b
      });
      await _0x49bc3b.React('✅');
    } catch (_0x729e5f) {
      await _0x49bc3b.React('❌');
      await _0x227c01("⚠️ *Failed to generate TTS audio. Please try again!*");
    }
  }
  if (_0xada02f === "shorten") {
    if (!_0x3ecdc8[0]) {
      return await _0x227c01("❌ *Usage:* .shorten <URL>");
    }
    await _0x49bc3b.React('⏳');
    try {
      const _0x180939 = "https://apis.giftedtech.web.id/api/tools/shorturl?apikey=gifted&url=" + encodeURIComponent(_0x3ecdc8[0]);
      const _0x1cb72c = await _0x266f2b(_0x180939);
      const _0x2771d7 = await _0x1cb72c.json();
      if (!_0x2771d7.success || !_0x2771d7.result) {
        throw new Error("Invalid response from API");
      }
      await _0x227c01(_0x2771d7.result);
      await _0x227c01("🚀 *_Popkid-MD Powered by POPKID_*");
      await _0x49bc3b.React('✅');
    } catch (_0x2442eb) {
      await _0x49bc3b.React('❌');
      await _0x227c01("⚠️ *Failed to shorten the URL. Please try again!*");
    }
  }
};
export default toolsCommand;