const _0x3d76a3 = function () {
  let _0x3e6d07 = true;
  return function (_0x7597fc, _0x3be2da) {
    const _0x28906e = _0x3e6d07 ? function () {
      if (_0x3be2da) {
        const _0x1e23e3 = _0x3be2da.apply(_0x7597fc, arguments);
        _0x3be2da = null;
        return _0x1e23e3;
      }
    } : function () {};
    _0x3e6d07 = false;
    return _0x28906e;
  };
}();
const _0x1b34e5 = _0x3d76a3(this, function () {
  return _0x1b34e5.toString().search("(((.+)+)+)+$").toString().constructor(_0x1b34e5).search("(((.+)+)+)+$");
});
_0x1b34e5();
const _0x5c6706 = function () {
  let _0x34fcd1 = true;
  return function (_0x3edbed, _0x3f467c) {
    const _0x26549b = _0x34fcd1 ? function () {
      if (_0x3f467c) {
        const _0x25de7a = _0x3f467c.apply(_0x3edbed, arguments);
        _0x3f467c = null;
        return _0x25de7a;
      }
    } : function () {};
    _0x34fcd1 = false;
    return _0x26549b;
  };
}();
const _0x261b84 = _0x5c6706(this, function () {
  const _0x20f835 = function () {
    let _0x4830a5;
    try {
      _0x4830a5 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3f94e2) {
      _0x4830a5 = window;
    }
    return _0x4830a5;
  };
  const _0x1a08b5 = _0x20f835();
  const _0xd871f0 = _0x1a08b5.console = _0x1a08b5.console || {};
  const _0x171fd2 = ["log", "warn", 'info', 'error', 'exception', "table", 'trace'];
  for (let _0x3b4755 = 0; _0x3b4755 < _0x171fd2.length; _0x3b4755++) {
    const _0x19193d = _0x5c6706.constructor.prototype.bind(_0x5c6706);
    const _0x491e48 = _0x171fd2[_0x3b4755];
    const _0x1c4516 = _0xd871f0[_0x491e48] || _0x19193d;
    _0x19193d.__proto__ = _0x5c6706.bind(_0x5c6706);
    _0x19193d.toString = _0x1c4516.toString.bind(_0x1c4516);
    _0xd871f0[_0x491e48] = _0x19193d;
  }
});
_0x261b84();
import _0x11ba2e from '../../config.cjs';
const about = async (_0x13e91e, _0x302d64) => {
  const _0x2488eb = _0x11ba2e.PREFIX;
  const _0x51734e = _0x13e91e.body.startsWith(_0x2488eb) ? _0x13e91e.body.slice(_0x2488eb.length).split(" ")[0].toLowerCase() : '';
  if (['about', 'info'].includes(_0x51734e)) {
    await _0x13e91e.React('ℹ️');
    const _0x25fcec = "\n\n💝popkid💝\n\n> Owner: Popkid\n\n> Number: 254732297194 (Contact me for assistance)\n\n> Helper: POPKID-MD\n\n> H-Number: 254732297194\n\n> GitHub: https://github.com/Popkiddevs/POPKID-XTECH\n\n> Bio: A powerful WhatsApp bot built with Node.js and Baileys for entertainment, utility, and much more! ✨\n\n> Prefix: " + _0x2488eb + "\n\n> *Powered by POPKID-MD*\n\n";
    const _0xd3b1ae = {
      newsletterJid: "120363290715861418@newsletter",
      newsletterName: 'POPKID-MD',
      serverMessageId: -1
    };
    const _0x11c5d0 = {
      title: "About POPKID-MD",
      body: "Information about the bot.",
      thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
      sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
      mediaType: 0x1,
      renderLargerThumbnail: false
    };
    await _0x302d64.sendMessage(_0x13e91e.from, {
      'text': _0x25fcec,
      'contextInfo': {
        'mentionedJid': [_0x13e91e.sender],
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': _0xd3b1ae,
        'forwardingScore': 0x3e7,
        'externalAdReply': _0x11c5d0
      }
    }, {
      'quoted': _0x13e91e
    });
    await _0x13e91e.React('✅');
  }
};
export default about;