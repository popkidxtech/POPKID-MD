const _0x2678b7 = function () {
  const _0x27ecc5 = {
    UMxTq: function (_0x3e63fe, _0x313d28) {
      return _0x3e63fe !== _0x313d28;
    },
    ZnoIN: function (_0x3e22b6, _0x11ddd8) {
      return _0x3e22b6 !== _0x11ddd8;
    }
  };
  _0x27ecc5.ahkIc = "eSYHP";
  _0x27ecc5.eqOIr = "dddfQ";
  _0x27ecc5.akaYR = "JMVDX";
  let _0x466aa2 = true;
  return function (_0x5083ed, _0x174877) {
    if (_0x27ecc5.akaYR !== _0x27ecc5.akaYR) {
      const _0x5ca4df = _0x380bbe.apply(_0x31ecab, arguments);
      _0x51497c = null;
      return _0x5ca4df;
    } else {
      const _0x1a2a8c = _0x466aa2 ? function () {
        if (_0x174877) {
          if (_0x27ecc5.ahkIc !== _0x27ecc5.eqOIr) {
            const _0x1346b2 = _0x174877.apply(_0x5083ed, arguments);
            _0x174877 = null;
            return _0x1346b2;
          } else {
            const _0x1bbc59 = {
              text: "❌ No downloadable video found!"
            };
            const _0x4dae15 = {
              quoted: _0x4d96a3
            };
            return _0x45b267.sendMessage(_0x14c844.from, _0x1bbc59, _0x4dae15);
          }
        }
      } : function () {};
      _0x466aa2 = false;
      return _0x1a2a8c;
    }
  };
}();
const _0x1fa251 = _0x2678b7(this, function () {
  return _0x1fa251.toString().search("(((.+)+)+)+$").toString().constructor(_0x1fa251).search("(((.+)+)+)+$");
});
_0x1fa251();
const _0xfdfb73 = function () {
  let _0x4af637 = true;
  return function (_0x51161f, _0x829e2b) {
    const _0x161cb1 = _0x4af637 ? function () {
      if (_0x829e2b) {
        const _0x207b94 = _0x829e2b.apply(_0x51161f, arguments);
        _0x829e2b = null;
        return _0x207b94;
      }
    } : function () {};
    _0x4af637 = false;
    return _0x161cb1;
  };
}();
const _0x36a1c6 = _0xfdfb73(this, function () {
  const _0xb88220 = function () {
    let _0x182962;
    try {
      _0x182962 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3262f1) {
      _0x182962 = window;
    }
    return _0x182962;
  };
  const _0x5dfd2b = _0xb88220();
  const _0x244478 = _0x5dfd2b.console = _0x5dfd2b.console || {};
  const _0x425598 = ["log", "warn", 'info', "error", "exception", "table", "trace"];
  for (let _0x2c0cc2 = 0; _0x2c0cc2 < _0x425598.length; _0x2c0cc2++) {
    const _0x4204fc = _0xfdfb73.constructor.prototype.bind(_0xfdfb73);
    const _0x5c156a = _0x425598[_0x2c0cc2];
    const _0x23b688 = _0x244478[_0x5c156a] || _0x4204fc;
    _0x4204fc.__proto__ = _0xfdfb73.bind(_0xfdfb73);
    _0x4204fc.toString = _0x23b688.toString.bind(_0x23b688);
    _0x244478[_0x5c156a] = _0x4204fc;
  }
});
_0x36a1c6();
import _0x6f4335 from 'axios';
import _0x386818 from '../../config.cjs';
const dlInsta = async (_0x470782, _0x2d88e1) => {
  const _0x5055c3 = _0x386818.PREFIX;
  const _0x510800 = _0x470782.body.startsWith(_0x5055c3) ? _0x470782.body.slice(_0x5055c3.length).split(" ")[0].toLowerCase() : '';
  const _0x1b48db = _0x470782.body.slice(_0x5055c3.length + _0x510800.length).trim();
  if (_0x510800 === 'insta' || _0x510800 === 'instagram' || _0x510800 === 'ig') {
    if (!_0x1b48db) {
      const _0x3dd4a1 = {
        text: "🔎 Please provide an Instagram video link!"
      };
      return _0x2d88e1.sendMessage(_0x470782.from, _0x3dd4a1, {
        'quoted': _0x470782
      });
    }
    await _0x470782.React('⏳');
    try {
      const _0x1ce86c = "https://api.paxsenix.biz.id/dl/ig?url=" + encodeURIComponent(_0x1b48db);
      const _0x20804b = await _0x6f4335.get(_0x1ce86c);
      const _0x19ef66 = _0x20804b.data;
      if (!_0x19ef66.ok || !_0x19ef66.url || _0x19ef66.url.length === 0) {
        const _0x55493d = {
          text: "❌ Failed to fetch video details!"
        };
        return _0x2d88e1.sendMessage(_0x470782.from, _0x55493d, {
          'quoted': _0x470782
        });
      }
      const _0x4455f9 = _0x19ef66.url.find(_0xb3603a => _0xb3603a.type === "mp4");
      if (!_0x4455f9 || !_0x4455f9.url) {
        const _0x455c29 = {
          text: "❌ No downloadable video found!"
        };
        return _0x2d88e1.sendMessage(_0x470782.from, _0x455c29, {
          'quoted': _0x470782
        });
      }
      await _0x470782.React('✅');
      const _0xc8bcc2 = {
        'url': _0x4455f9.url
      };
      const _0x19ea7b = {
        video: _0xc8bcc2,
        mimetype: "video/mp4",
        caption: "✅ *Instagram Video Downloaded!*\n📌 *POWERED BY POPKID*",
        contextInfo: {}
      };
      _0x19ea7b.contextInfo.externalAdReply = {};
      _0x19ea7b.contextInfo.externalAdReply.title = "🫧POPKID🫧";
      _0x19ea7b.contextInfo.externalAdReply.body = "Instagram Video Downloader";
      _0x19ea7b.contextInfo.externalAdReply.thumbnailUrl = _0x19ef66.thumb || "https://i.imgur.com/NkUITKj.mp4";
      _0x19ea7b.contextInfo.externalAdReply.sourceUrl = _0x19ef66.meta?.["source"] || "https://github.com/Popkiddevs/POPKID-XTECH/fork";
      _0x19ea7b.contextInfo.externalAdReply.mediaType = 0x1;
      _0x19ea7b.contextInfo.externalAdReply.showAdAttribution = false;
      _0x2d88e1.sendMessage(_0x470782.from, _0x19ea7b, {
        'quoted': _0x470782
      });
    } catch (_0x484ff9) {
      console.error("Error in insta command:", _0x484ff9);
      const _0x3c584b = {
        text: "❌ An error occurred while processing your request!"
      };
      _0x2d88e1.sendMessage(_0x470782.from, _0x3c584b, {
        'quoted': _0x470782
      });
    }
  }
};
export default dlInsta;