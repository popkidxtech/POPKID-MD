const _0x110591 = function () {
  let _0x36be91 = true;
  return function (_0x40071f, _0x1332b1) {
    const _0x43ff54 = _0x36be91 ? function () {
      if (_0x1332b1) {
        const _0x1d56ec = _0x1332b1.apply(_0x40071f, arguments);
        _0x1332b1 = null;
        return _0x1d56ec;
      }
    } : function () {};
    _0x36be91 = false;
    return _0x43ff54;
  };
}();
const _0x3d585b = _0x110591(this, function () {
  return _0x3d585b.toString().search("(((.+)+)+)+$").toString().constructor(_0x3d585b).search("(((.+)+)+)+$");
});
_0x3d585b();
const _0x3c232b = function () {
  let _0x3a506c = true;
  return function (_0x189101, _0x197b52) {
    const _0x55e6a1 = _0x3a506c ? function () {
      if (_0x197b52) {
        const _0xe6303b = _0x197b52.apply(_0x189101, arguments);
        _0x197b52 = null;
        return _0xe6303b;
      }
    } : function () {};
    _0x3a506c = false;
    return _0x55e6a1;
  };
}();
const _0x4ffe1b = _0x3c232b(this, function () {
  let _0x5280d5;
  try {
    const _0x401d00 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5280d5 = _0x401d00();
  } catch (_0x21f0c1) {
    _0x5280d5 = window;
  }
  const _0x7f8c1 = _0x5280d5.console = _0x5280d5.console || {};
  const _0x235409 = ["log", 'warn', "info", "error", "exception", "table", "trace"];
  for (let _0x3c9ea9 = 0; _0x3c9ea9 < _0x235409.length; _0x3c9ea9++) {
    const _0x53b5b9 = _0x3c232b.constructor.prototype.bind(_0x3c232b);
    const _0x1fe7ed = _0x235409[_0x3c9ea9];
    const _0x3e1527 = _0x7f8c1[_0x1fe7ed] || _0x53b5b9;
    _0x53b5b9.__proto__ = _0x3c232b.bind(_0x3c232b);
    _0x53b5b9.toString = _0x3e1527.toString.bind(_0x3e1527);
    _0x7f8c1[_0x1fe7ed] = _0x53b5b9;
  }
});
_0x4ffe1b();
import _0xe53412 from 'axios';
import _0x12fd31 from '../../config.cjs';
const dlInsta2 = async (_0x383ea6, _0x7b8c36) => {
  const _0x398627 = _0x12fd31.PREFIX;
  const _0x5c1567 = _0x383ea6.body.startsWith(_0x398627) ? _0x383ea6.body.slice(_0x398627.length).split(" ")[0].toLowerCase() : '';
  const _0x499a2b = _0x383ea6.body.slice(_0x398627.length + _0x5c1567.length).trim();
  if (_0x5c1567 === 'insta2' || _0x5c1567 === "igdown2") {
    if (!_0x499a2b) {
      const _0xb68089 = {
        text: "🔎 Please provide an Instagram video link!"
      };
      return _0x7b8c36.sendMessage(_0x383ea6.from, _0xb68089, {
        'quoted': _0x383ea6
      });
    }
    await _0x383ea6.React('⏳');
    try {
      const _0x53dfb0 = "https://bk9.fun/download/instagram?url=" + encodeURIComponent(_0x499a2b);
      const _0x1f122e = await _0xe53412.get(_0x53dfb0);
      const _0x202494 = _0x1f122e.data;
      if (!_0x202494.status || !_0x202494.BK9 || _0x202494.BK9.length === 0) {
        const _0x30e949 = {
          text: "❌ Failed to fetch video details!"
        };
        return _0x7b8c36.sendMessage(_0x383ea6.from, _0x30e949, {
          'quoted': _0x383ea6
        });
      }
      const _0x537a9c = _0x202494.BK9.find(_0x137c25 => _0x137c25.type === 'video');
      if (!_0x537a9c || !_0x537a9c.url) {
        const _0x785ee6 = {
          text: "❌ No downloadable video found!"
        };
        return _0x7b8c36.sendMessage(_0x383ea6.from, _0x785ee6, {
          'quoted': _0x383ea6
        });
      }
      await _0x383ea6.React('✅');
      const _0x1f08e7 = {
        url: _0x537a9c.url
      };
      const _0x2d2309 = {
        video: _0x1f08e7,
        mimetype: "video/mp4",
        caption: "✅ *Instagram Video Downloaded!*\n📌 *POWERED BY POPKID-MD*",
        contextInfo: {}
      };
      _0x2d2309.contextInfo.externalAdReply = {};
      _0x2d2309.contextInfo.externalAdReply.title = "🫧popkid🫧";
      _0x2d2309.contextInfo.externalAdReply.body = "Instagram Video Downloader";
      _0x2d2309.contextInfo.externalAdReply.thumbnailUrl = "https://i.imgur.com/NkUITKj.mp4";
      _0x2d2309.contextInfo.externalAdReply.sourceUrl = "https://github.com/Popkiddevs/POPKID-XTECH/fork";
      _0x2d2309.contextInfo.externalAdReply.mediaType = 0x1;
      _0x2d2309.contextInfo.externalAdReply.showAdAttribution = false;
      _0x7b8c36.sendMessage(_0x383ea6.from, _0x2d2309, {
        'quoted': _0x383ea6
      });
    } catch (_0x5ccfcd) {
      console.error("Error in insta2 command:", _0x5ccfcd);
      const _0x3e0095 = {
        text: "❌ An error occurred while processing your request!"
      };
      _0x7b8c36.sendMessage(_0x383ea6.from, _0x3e0095, {
        'quoted': _0x383ea6
      });
    }
  }
};
export default dlInsta2;