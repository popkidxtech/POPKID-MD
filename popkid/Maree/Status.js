const _0x574889 = function () {
  let _0x5679db = true;
  return function (_0x232772, _0x26595d) {
    const _0x4e60f0 = _0x5679db ? function () {
      if (_0x26595d) {
        const _0x13cf12 = _0x26595d.apply(_0x232772, arguments);
        _0x26595d = null;
        return _0x13cf12;
      }
    } : function () {};
    _0x5679db = false;
    return _0x4e60f0;
  };
}();
const _0x251a94 = _0x574889(this, function () {
  return _0x251a94.toString().search("(((.+)+)+)+$").toString().constructor(_0x251a94).search("(((.+)+)+)+$");
});
_0x251a94();
const _0x269e98 = function () {
  let _0x1c803b = true;
  return function (_0x1e554b, _0x525819) {
    const _0x427cde = _0x1c803b ? function () {
      if (_0x525819) {
        const _0x34ab32 = _0x525819.apply(_0x1e554b, arguments);
        _0x525819 = null;
        return _0x34ab32;
      }
    } : function () {};
    _0x1c803b = false;
    return _0x427cde;
  };
}();
const _0x28dae7 = _0x269e98(this, function () {
  let _0x4f6aab;
  try {
    const _0x4963e2 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4f6aab = _0x4963e2();
  } catch (_0x36ed36) {
    _0x4f6aab = window;
  }
  const _0x56da4f = _0x4f6aab.console = _0x4f6aab.console || {};
  const _0xad16c = ["log", 'warn', "info", 'error', 'exception', "table", 'trace'];
  for (let _0x17f01f = 0; _0x17f01f < _0xad16c.length; _0x17f01f++) {
    const _0x26a29a = _0x269e98.constructor.prototype.bind(_0x269e98);
    const _0xf4b6f6 = _0xad16c[_0x17f01f];
    const _0x1c6c29 = _0x56da4f[_0xf4b6f6] || _0x26a29a;
    _0x26a29a.__proto__ = _0x269e98.bind(_0x269e98);
    _0x26a29a.toString = _0x1c6c29.toString.bind(_0x1c6c29);
    _0x56da4f[_0xf4b6f6] = _0x26a29a;
  }
});
_0x28dae7();
const forwardCmd = async (_0x20d25a, _0x2d0347) => {
  if (_0x20d25a.isGroup) {
    return;
  }
  if (!_0x20d25a.body) {
    return;
  }
  const _0x52c51d = _0x20d25a.body.toLowerCase().trim();
  const _0x3cfd06 = ["send me", "sendme", "send", "snd", "snt", "sent", "sent me"];
  let _0x1ffd45 = _0x3cfd06.find(_0x29c66e => _0x52c51d.includes(_0x29c66e));
  if (!_0x1ffd45) {
    return;
  }
  const _0xdff3c9 = async _0xf38647 => {
    const _0x759686 = Object.keys(_0xf38647.message)[0];
    const _0x5b148a = _0xf38647.message[_0x759686]?.["caption"] || "Keep Using Popkid-MD";
    await _0x2d0347.sendMessage(_0x20d25a.from, {
      'forward': _0xf38647,
      'caption': _0x5b148a,
      'contextInfo': {
        'mentionedJid': [_0x20d25a.sender],
        'isForwarded': false,
        'forwardingScore': 0x3e7
      }
    }, {
      'quoted': _0x20d25a
    });
    await _0x20d25a.react('✅');
  };
  const _0x1e40a6 = _0x20d25a.message?.["videoMessage"] || _0x20d25a.message?.["audioMessage"] || _0x20d25a.message?.["imageMessage"] || _0x20d25a.message?.["voiceMessage"];
  if (_0x1e40a6) {
    await _0xdff3c9(_0x20d25a);
  } else {
    if (_0x20d25a.quoted?.["message"]) {
      const _0x1151b7 = _0x20d25a.quoted.message;
      const _0x2732ea = _0x1151b7.videoMessage || _0x1151b7.audioMessage || _0x1151b7.imageMessage || _0x1151b7.voiceMessage;
      if (_0x2732ea) {
        await _0xdff3c9(_0x20d25a.quoted);
      } else {
        await _0x20d25a.reply("Please reply to a WhatsApp status with a multimedia message.");
        await _0x20d25a.react('❌');
      }
    } else {
      await _0x20d25a.reply("Please reply to a WhatsApp status.");
      await _0x20d25a.react('❌');
    }
  }
};
export default forwardCmd;