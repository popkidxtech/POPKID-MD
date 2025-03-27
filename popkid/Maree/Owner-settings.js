const _0x59dd20 = function () {
  const _0x220c69 = {
    kXNUO: function (_0x3b2b7c, _0x5645cc) {
      return _0x3b2b7c !== _0x5645cc;
    }
  };
  _0x220c69.OHAEW = "YfUJT";
  _0x220c69.JUxVU = "frXxS";
  _0x220c69.rATSg = function (_0x30061f, _0x4abb8a) {
    return _0x30061f === _0x4abb8a;
  };
  _0x220c69.vKKPN = 'Iywkj';
  let _0x1e908d = true;
  return function (_0x54ac6e, _0x7462d3) {
    if (_0x220c69.rATSg("Iywkj", _0x220c69.vKKPN)) {
      const _0x18a252 = _0x1e908d ? function () {
        if (_0x7462d3) {
          if (_0x220c69.OHAEW !== _0x220c69.JUxVU) {
            const _0xb4706a = _0x7462d3.apply(_0x54ac6e, arguments);
            _0x7462d3 = null;
            return _0xb4706a;
          } else {
            const _0x35b778 = _0x345b70.apply(_0x1deef8, arguments);
            _0xc1516d = null;
            return _0x35b778;
          }
        }
      } : function () {};
      _0x1e908d = false;
      return _0x18a252;
    } else {
      if (_0x5f34df) {
        const _0x229300 = _0x365849.apply(_0x543406, arguments);
        _0x5f4c33 = null;
        return _0x229300;
      }
    }
  };
}();
const _0x192adf = _0x59dd20(this, function () {
  return _0x192adf.toString().search("(((.+)+)+)+$").toString().constructor(_0x192adf).search("(((.+)+)+)+$");
});
_0x192adf();
const _0x290efb = function () {
  let _0x43dbe8 = true;
  return function (_0x7b12ca, _0xf1adb5) {
    const _0xfb069b = _0x43dbe8 ? function () {
      if (_0xf1adb5) {
        const _0x589129 = _0xf1adb5.apply(_0x7b12ca, arguments);
        _0xf1adb5 = null;
        return _0x589129;
      }
    } : function () {};
    _0x43dbe8 = false;
    return _0xfb069b;
  };
}();
const _0x276494 = _0x290efb(this, function () {
  let _0x209a4a;
  try {
    const _0x276f02 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x209a4a = _0x276f02();
  } catch (_0xefbf32) {
    _0x209a4a = window;
  }
  const _0x25bcb0 = _0x209a4a.console = _0x209a4a.console || {};
  const _0x2ea72c = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x547fd4 = 0; _0x547fd4 < _0x2ea72c.length; _0x547fd4++) {
    const _0x12592d = _0x290efb.constructor.prototype.bind(_0x290efb);
    const _0x4e7d46 = _0x2ea72c[_0x547fd4];
    const _0x5adb42 = _0x25bcb0[_0x4e7d46] || _0x12592d;
    _0x12592d.__proto__ = _0x290efb.bind(_0x290efb);
    _0x12592d.toString = _0x5adb42.toString.bind(_0x5adb42);
    _0x25bcb0[_0x4e7d46] = _0x12592d;
  }
});
_0x276494();
import _0x519b41 from '../../config.cjs';
const configCheck = async (_0x186476, _0x56a564) => {
  const _0x491463 = _0x519b41.OWNER_NUMBER.replace(/[^0-9]/g, '');
  const _0x2f5313 = _0x186476.sender.split('@')[0];
  const _0x5cfe7a = _0x519b41.PREFIX;
  const _0x5d16f4 = _0x186476.body.startsWith(_0x5cfe7a) ? _0x186476.body.slice(_0x5cfe7a.length).split(" ")[0].toLowerCase() : '';
  if (["allvar", "settings", "allvars"].includes(_0x5d16f4)) {
    if (_0x2f5313 !== _0x491463) {
      const _0xd2d4de = {
        text: "❌ *Only the Owner can use this command!*"
      };
      return await _0x56a564.sendMessage(_0x186476.from, _0xd2d4de, {
        'quoted': _0x186476
      });
    }
    await _0x186476.React('⏳');
    const _0x212d85 = Object.entries(_0x519b41).filter(([_0x231ccf, _0x1f605b]) => typeof _0x1f605b === 'boolean' || typeof _0x1f605b === "string").map(([_0x3ee442, _0x47ad06]) => '*' + _0x3ee442 + ":* " + _0x47ad06).join("\n");
    const _0x2962dd = "> *𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃 𝐂𝐎𝐍𝐅𝐈𝐆 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒:*\n\n" + _0x212d85 + "\n\n𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃";
    const _0x53c316 = {
      newsletterJid: "120363290715861418@newsletter",
      newsletterName: 'popkid',
      serverMessageId: -1
    };
    const _0x416b15 = {
      title: "✨ popkid Settings ✨",
      body: "Bot Configuration Overview",
      thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
      sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH/fork",
      mediaType: 0x1,
      renderLargerThumbnail: false
    };
    await _0x56a564.sendMessage(_0x186476.from, {
      'text': _0x2962dd,
      'contextInfo': {
        'mentionedJid': [_0x186476.sender],
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': _0x53c316,
        'forwardingScore': 0x3e7,
        'externalAdReply': _0x416b15
      }
    }, {
      'quoted': _0x186476
    });
    await _0x186476.React('✅');
  }
};
export default configCheck;