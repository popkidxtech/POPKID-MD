const _0x36dc0e = function () {
  let _0x217c63 = true;
  return function (_0x3fd858, _0x44b578) {
    const _0x4a3d3f = _0x217c63 ? function () {
      if (_0x44b578) {
        const _0x271e09 = _0x44b578.apply(_0x3fd858, arguments);
        _0x44b578 = null;
        return _0x271e09;
      }
    } : function () {};
    _0x217c63 = false;
    return _0x4a3d3f;
  };
}();
const _0x3f666d = _0x36dc0e(this, function () {
  return _0x3f666d.toString().search("(((.+)+)+)+$").toString().constructor(_0x3f666d).search("(((.+)+)+)+$");
});
_0x3f666d();
const _0x3ec691 = function () {
  let _0x4fe5fd = true;
  return function (_0x4a2064, _0x37f0e3) {
    const _0x43a905 = _0x4fe5fd ? function () {
      if (_0x37f0e3) {
        const _0x30e1ea = _0x37f0e3.apply(_0x4a2064, arguments);
        _0x37f0e3 = null;
        return _0x30e1ea;
      }
    } : function () {};
    _0x4fe5fd = false;
    return _0x43a905;
  };
}();
const _0x545db1 = _0x3ec691(this, function () {
  const _0xeb6dd1 = function () {
    let _0x4bc58f;
    try {
      _0x4bc58f = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1c5301) {
      _0x4bc58f = window;
    }
    return _0x4bc58f;
  };
  const _0x59a537 = _0xeb6dd1();
  const _0xce4e6e = _0x59a537.console = _0x59a537.console || {};
  const _0x42c937 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x29ac41 = 0; _0x29ac41 < _0x42c937.length; _0x29ac41++) {
    const _0xc9c492 = _0x3ec691.constructor.prototype.bind(_0x3ec691);
    const _0x37dfbe = _0x42c937[_0x29ac41];
    const _0x6d5f2 = _0xce4e6e[_0x37dfbe] || _0xc9c492;
    _0xc9c492.__proto__ = _0x3ec691.bind(_0x3ec691);
    _0xc9c492.toString = _0x6d5f2.toString.bind(_0x6d5f2);
    _0xce4e6e[_0x37dfbe] = _0xc9c492;
  }
});
_0x545db1();
import _0x501547 from 'axios';
import _0x501da5 from '../../config.cjs';
const dlFb = async (_0x3da968, _0x13b887) => {
  const _0xf912c6 = _0x501da5.PREFIX;
  const _0x11583b = _0x3da968.body.startsWith(_0xf912c6) ? _0x3da968.body.slice(_0xf912c6.length).split(" ")[0].toLowerCase() : '';
  const _0x4fd0f8 = _0x3da968.body.slice(_0xf912c6.length + _0x11583b.length).trim();
  if (_0x11583b === 'fb' || _0x11583b === 'fbdown') {
    if (!_0x4fd0f8) {
      const _0x17158c = {
        text: "🔎 Please provide a Facebook video link!"
      };
      return _0x13b887.sendMessage(_0x3da968.from, _0x17158c, {
        'quoted': _0x3da968
      });
    }
    await _0x3da968.React('⏳');
    try {
      const _0x1c7856 = "https://bk9.fun/download/fb?url=" + encodeURIComponent(_0x4fd0f8);
      const _0x28b06d = await _0x501547.get(_0x1c7856);
      const _0x451e3b = _0x28b06d.data;
      if (!_0x451e3b.status || !_0x451e3b.BK9) {
        const _0xc7743e = {
          text: "❌ Failed to fetch video details!"
        };
        return _0x13b887.sendMessage(_0x3da968.from, _0xc7743e, {
          'quoted': _0x3da968
        });
      }
      const {
        title: _0x5da656,
        thumb: _0x4640be,
        sd: _0x3bbf87,
        hd: _0x57e07f
      } = _0x451e3b.BK9;
      await _0x3da968.React('✅');
      let _0x30ec67 = _0x57e07f || _0x3bbf87;
      let _0x2c6fbc = _0x57e07f ? 'HD' : 'SD';
      if (!_0x30ec67) {
        const _0x52082f = {
          text: "❌ No downloadable video found!"
        };
        return _0x13b887.sendMessage(_0x3da968.from, _0x52082f, {
          'quoted': _0x3da968
        });
      }
      const _0x5f03cf = {
        url: _0x30ec67
      };
      _0x13b887.sendMessage(_0x3da968.from, {
        'video': _0x5f03cf,
        'mimetype': "video/mp4",
        'caption': "✅ *" + _0x2c6fbc + " Video Downloaded!*\n📌 *Title:* " + (_0x5da656 || "No Title") + "\n\n*POWERED BY Popkid-MD*",
        'contextInfo': {
          'externalAdReply': {
            'title': "🫧POPKID🫧",
            'body': "Facebook Video Downloader",
            'thumbnailUrl': _0x4640be,
            'sourceUrl': "https://github.com/Popkiddevs/POPKID-XTECH/fork",
            'mediaType': 0x1,
            'showAdAttribution': false
          }
        }
      }, {
        'quoted': _0x3da968
      });
    } catch (_0xf86be5) {
      console.error("Error in fbdown command:", _0xf86be5);
      const _0x4920f9 = {
        text: "❌ An error occurred while processing your request!"
      };
      _0x13b887.sendMessage(_0x3da968.from, _0x4920f9, {
        'quoted': _0x3da968
      });
    }
  }
};
export default dlFb;