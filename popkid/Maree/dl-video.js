const _0x5f4cd5 = function () {
  let _0x4b2d8b = true;
  return function (_0x74d9a5, _0x296396) {
    const _0x33e783 = _0x4b2d8b ? function () {
      if (_0x296396) {
        const _0x14668f = _0x296396.apply(_0x74d9a5, arguments);
        _0x296396 = null;
        return _0x14668f;
      }
    } : function () {};
    _0x4b2d8b = false;
    return _0x33e783;
  };
}();
const _0x18f7ef = _0x5f4cd5(this, function () {
  return _0x18f7ef.toString().search("(((.+)+)+)+$").toString().constructor(_0x18f7ef).search("(((.+)+)+)+$");
});
_0x18f7ef();
const _0x2126a9 = function () {
  let _0x401213 = true;
  return function (_0x4f2f3e, _0x76c203) {
    const _0x3933f2 = _0x401213 ? function () {
      if (_0x76c203) {
        const _0x52e93b = _0x76c203.apply(_0x4f2f3e, arguments);
        _0x76c203 = null;
        return _0x52e93b;
      }
    } : function () {};
    _0x401213 = false;
    return _0x3933f2;
  };
}();
const _0x503a03 = _0x2126a9(this, function () {
  const _0x9b8e84 = function () {
    let _0x26f50d;
    try {
      _0x26f50d = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x2c7ebd) {
      _0x26f50d = window;
    }
    return _0x26f50d;
  };
  const _0x41a89c = _0x9b8e84();
  const _0xba710d = _0x41a89c.console = _0x41a89c.console || {};
  const _0x3b1d2e = ["log", "warn", "info", 'error', 'exception', 'table', "trace"];
  for (let _0x4c67e7 = 0; _0x4c67e7 < _0x3b1d2e.length; _0x4c67e7++) {
    const _0xa8a3ef = _0x2126a9.constructor.prototype.bind(_0x2126a9);
    const _0x869280 = _0x3b1d2e[_0x4c67e7];
    const _0x462864 = _0xba710d[_0x869280] || _0xa8a3ef;
    _0xa8a3ef.__proto__ = _0x2126a9.bind(_0x2126a9);
    _0xa8a3ef.toString = _0x462864.toString.bind(_0x462864);
    _0xba710d[_0x869280] = _0xa8a3ef;
  }
});
_0x503a03();
import _0x5017ed from 'yt-search';
import _0x192f20 from '../../config.cjs';
import _0x373534 from 'axios';
import { pipeline } from 'stream';
import { promisify } from 'util';
import _0x3c2e39 from 'fs';
import 'child_process';
const streamPipeline = promisify(pipeline);
const dlVideo = async (_0x24ce95, _0x1ab00c) => {
  const _0x446386 = _0x192f20.PREFIX;
  const _0x4ade84 = _0x24ce95.body.startsWith(_0x446386) ? _0x24ce95.body.slice(_0x446386.length).split(" ")[0].toLowerCase() : '';
  const _0x247000 = _0x24ce95.body.slice(_0x446386.length + _0x4ade84.length).trim();
  if (_0x4ade84 === "video" || _0x4ade84 === 'vid') {
    if (!_0x247000) {
      const _0xb87d = {
        text: "🔎 Please provide a song name or YouTube link!"
      };
      return _0x1ab00c.sendMessage(_0x24ce95.from, _0xb87d, {
        'quoted': _0x24ce95
      });
    }
    await _0x24ce95.React('⏳');
    try {
      const _0x229c54 = await _0x5017ed(_0x247000);
      if (!_0x229c54.videos.length) {
        const _0x3acf0e = {
          text: "❌ No results found!"
        };
        return _0x1ab00c.sendMessage(_0x24ce95.from, _0x3acf0e, {
          'quoted': _0x24ce95
        });
      }
      const _0x1da502 = _0x229c54.videos[0];
      const _0x3e59e6 = _0x1da502.url;
      const _0x461694 = "https://bandahealimaree-api-ytdl.hf.space/api/ytmp4?url=" + _0x3e59e6;
      const _0x2fa54d = await _0x373534.get(_0x461694);
      const _0xadfd70 = _0x2fa54d.data;
      if (!_0xadfd70.status || !_0xadfd70.download || !_0xadfd70.download.downloadUrl) {
        const _0x1d1a32 = {
          text: "❌ Failed to fetch download link!"
        };
        return _0x1ab00c.sendMessage(_0x24ce95.from, _0x1d1a32, {
          'quoted': _0x24ce95
        });
      }
      const {
        title: _0x31a872,
        downloadUrl: _0x333f08
      } = _0xadfd70.download;
      const _0x284ca7 = await getFileSize(_0x333f08);
      if (_0x284ca7 > 104857600) {
        return _0x1ab00c.sendMessage(_0x24ce95.from, {
          'text': "❌ File is too large (" + (_0x284ca7 / 1048576).toFixed(2) + "MB). Max allowed size is 100MB."
        }, {
          'quoted': _0x24ce95
        });
      }
      const _0x340809 = './temp_' + Date.now() + ".mp4";
      const _0x3cf229 = _0x3c2e39.createWriteStream(_0x340809);
      await _0x24ce95.React('⬇️');
      const _0x40831e = await _0x373534({
        'method': "get",
        'url': _0x333f08,
        'responseType': "stream"
      });
      await streamPipeline(_0x40831e.data, _0x3cf229);
      await _0x24ce95.React('✅');
      _0x1ab00c.sendMessage(_0x24ce95.from, {
        'video': _0x3c2e39.readFileSync(_0x340809),
        'mimetype': "video/mp4",
        'caption': "🎵 *Title:* " + _0x31a872 + "\n📥 *Downloaded from:* POPKID-MD\n\nPOWERED BY POPKID"
      }, {
        'quoted': _0x24ce95
      });
      _0x3c2e39.unlinkSync(_0x340809);
    } catch (_0x5354c5) {
      console.error("Error in video command:", _0x5354c5);
      const _0x2ace63 = {
        text: "❌ An error occurred while processing your request!"
      };
      _0x1ab00c.sendMessage(_0x24ce95.from, _0x2ace63, {
        'quoted': _0x24ce95
      });
    }
  }
};
const getFileSize = async _0x44eba9 => {
  return new Promise((_0x208477, _0x150e4b) => {
    _0x373534.head(_0x44eba9).then(_0x3ca8c2 => {
      const _0x4f7e98 = _0x3ca8c2.headers["content-length"];
      _0x208477(parseInt(_0x4f7e98, 10));
    })["catch"](_0x4975a2 => {
      _0x150e4b(_0x4975a2);
    });
  });
};
export default dlVideo;