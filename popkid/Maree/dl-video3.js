const _0x48ba89 = function () {
  let _0xbd2e92 = true;
  return function (_0x585d38, _0x5f38f8) {
    const _0x411442 = _0xbd2e92 ? function () {
      if (_0x5f38f8) {
        const _0x297dfc = _0x5f38f8.apply(_0x585d38, arguments);
        _0x5f38f8 = null;
        return _0x297dfc;
      }
    } : function () {};
    _0xbd2e92 = false;
    return _0x411442;
  };
}();
const _0xb2cfe3 = _0x48ba89(this, function () {
  return _0xb2cfe3.toString().search("(((.+)+)+)+$").toString().constructor(_0xb2cfe3).search("(((.+)+)+)+$");
});
_0xb2cfe3();
const _0x37d9f1 = function () {
  let _0x47f2f5 = true;
  return function (_0x26cf1a, _0x267ff6) {
    const _0x2b71db = _0x47f2f5 ? function () {
      if (_0x267ff6) {
        const _0x200af6 = _0x267ff6.apply(_0x26cf1a, arguments);
        _0x267ff6 = null;
        return _0x200af6;
      }
    } : function () {};
    _0x47f2f5 = false;
    return _0x2b71db;
  };
}();
const _0x3f6fa3 = _0x37d9f1(this, function () {
  const _0x2f0a48 = function () {
    let _0x10c1b7;
    try {
      _0x10c1b7 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0xf24d84) {
      _0x10c1b7 = window;
    }
    return _0x10c1b7;
  };
  const _0xf250b2 = _0x2f0a48();
  const _0x86d863 = _0xf250b2.console = _0xf250b2.console || {};
  const _0x25db3c = ["log", "warn", "info", "error", 'exception', 'table', "trace"];
  for (let _0x1f60ee = 0; _0x1f60ee < _0x25db3c.length; _0x1f60ee++) {
    const _0x175e45 = _0x37d9f1.constructor.prototype.bind(_0x37d9f1);
    const _0xc1f921 = _0x25db3c[_0x1f60ee];
    const _0x3b9b71 = _0x86d863[_0xc1f921] || _0x175e45;
    _0x175e45.__proto__ = _0x37d9f1.bind(_0x37d9f1);
    _0x175e45.toString = _0x3b9b71.toString.bind(_0x3b9b71);
    _0x86d863[_0xc1f921] = _0x175e45;
  }
});
_0x3f6fa3();
import _0x202d0c from 'yt-search';
import _0x212935 from '../../config.cjs';
import _0x955fac from 'axios';
import _0x3bc0db from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
const streamPipeline = promisify(pipeline);
const dlVideo3 = async (_0x2d193f, _0x183690) => {
  const _0x3f1b18 = _0x212935.PREFIX;
  const _0x4dde43 = _0x2d193f.body.startsWith(_0x3f1b18) ? _0x2d193f.body.slice(_0x3f1b18.length).split(" ")[0].toLowerCase() : '';
  const _0x76e6f2 = _0x2d193f.body.slice(_0x3f1b18.length + _0x4dde43.length).trim();
  if (_0x4dde43 === "video3" || _0x4dde43 === "vid3") {
    if (!_0x76e6f2) {
      const _0x19eeb2 = {
        text: "🔎 Please provide a video name or YouTube link!"
      };
      return _0x183690.sendMessage(_0x2d193f.from, _0x19eeb2, {
        'quoted': _0x2d193f
      });
    }
    await _0x2d193f.React('⏳');
    try {
      const _0x4dc22a = await _0x202d0c(_0x76e6f2);
      if (!_0x4dc22a.videos.length) {
        const _0x27a0a0 = {
          text: "❌ No results found!"
        };
        return _0x183690.sendMessage(_0x2d193f.from, _0x27a0a0, {
          'quoted': _0x2d193f
        });
      }
      const _0x58ed00 = _0x4dc22a.videos[0];
      const _0x18e455 = _0x58ed00.url;
      const _0x401fee = "https://apis.giftedtech.web.id/api/download/ytmp4?apikey=gifted&url=" + encodeURIComponent(_0x18e455);
      const _0x432cb6 = await _0x955fac.get(_0x401fee);
      const _0x39f82b = _0x432cb6.data;
      if (!_0x39f82b.success || !_0x39f82b.result || !_0x39f82b.result.download_url) {
        const _0x4d86c1 = {
          text: "❌ Failed to fetch download link!"
        };
        return _0x183690.sendMessage(_0x2d193f.from, _0x4d86c1, {
          'quoted': _0x2d193f
        });
      }
      const {
        title: _0x3ab309,
        download_url: _0x18c372,
        thumbnail: _0x1e7b09,
        quality: _0x36823e
      } = _0x39f82b.result;
      await _0x2d193f.React('⬇️');
      const _0x3b5f2d = await getFileSize(_0x18c372);
      if (_0x3b5f2d > 104857600) {
        return _0x183690.sendMessage(_0x2d193f.from, {
          'text': "❌ File is too large (" + (_0x3b5f2d / 1048576).toFixed(2) + "MB). Max allowed size is 100MB."
        }, {
          'quoted': _0x2d193f
        });
      }
      const _0x14aed2 = "./temp_" + Date.now() + ".mp4";
      const _0x4e6b02 = _0x3bc0db.createWriteStream(_0x14aed2);
      const _0x3067a7 = {
        method: "get",
        url: _0x18c372,
        responseType: "stream"
      };
      const _0x4479ed = await _0x955fac(_0x3067a7);
      await streamPipeline(_0x4479ed.data, _0x4e6b02);
      await _0x2d193f.React('✅');
      _0x183690.sendMessage(_0x2d193f.from, {
        'video': _0x3bc0db.readFileSync(_0x14aed2),
        'mimetype': "video/mp4",
        'caption': "🎬 *Title:* " + _0x3ab309 + "\n📥 *Quality:* " + _0x36823e + "\n\nPOWERED BY POPKID",
        'contextInfo': {
          'isForwarded': false,
          'forwardingScore': 0x3e7,
          'externalAdReply': {
            'title': "🫧popkid🫧",
            'body': "YouTube Video Downloader",
            'thumbnailUrl': _0x1e7b09,
            'sourceUrl': _0x18e455,
            'mediaType': 0x1,
            'renderLargerThumbnail': true
          }
        }
      }, {
        'quoted': _0x2d193f
      });
      _0x3bc0db.unlinkSync(_0x14aed2);
    } catch (_0x3d2c1c) {
      console.error("Error in video3 command:", _0x3d2c1c);
      const _0x41f26d = {
        text: "❌ An error occurred while processing your request!"
      };
      _0x183690.sendMessage(_0x2d193f.from, _0x41f26d, {
        'quoted': _0x2d193f
      });
    }
  }
};
const getFileSize = async _0x3a12b7 => {
  return new Promise((_0xd192e9, _0x1d05e6) => {
    _0x955fac.head(_0x3a12b7).then(_0x5264ee => {
      const _0x4edb40 = _0x5264ee.headers["content-length"];
      _0xd192e9(parseInt(_0x4edb40, 10));
    })["catch"](_0x3c016d => {
      _0x1d05e6(_0x3c016d);
    });
  });
};
export default dlVideo3;