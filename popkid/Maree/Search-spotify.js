const _0x4c3ab4 = function () {
  let _0x2310aa = true;
  return function (_0x15c083, _0x33c4cb) {
    const _0x38d14c = _0x2310aa ? function () {
      if (_0x33c4cb) {
        const _0x66cad2 = _0x33c4cb.apply(_0x15c083, arguments);
        _0x33c4cb = null;
        return _0x66cad2;
      }
    } : function () {};
    _0x2310aa = false;
    return _0x38d14c;
  };
}();
const _0x323389 = _0x4c3ab4(this, function () {
  return _0x323389.toString().search("(((.+)+)+)+$").toString().constructor(_0x323389).search("(((.+)+)+)+$");
});
_0x323389();
const _0x2a0d05 = function () {
  let _0x4c7b4b = true;
  return function (_0x9a66af, _0xd65c7e) {
    const _0x1d66a5 = _0x4c7b4b ? function () {
      if (_0xd65c7e) {
        const _0x14026e = _0xd65c7e.apply(_0x9a66af, arguments);
        _0xd65c7e = null;
        return _0x14026e;
      }
    } : function () {};
    _0x4c7b4b = false;
    return _0x1d66a5;
  };
}();
const _0x183b51 = _0x2a0d05(this, function () {
  let _0x52f39c;
  try {
    const _0x29e38e = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x52f39c = _0x29e38e();
  } catch (_0x5262d2) {
    _0x52f39c = window;
  }
  const _0x3888f8 = _0x52f39c.console = _0x52f39c.console || {};
  const _0x54eab1 = ["log", 'warn', "info", "error", "exception", "table", "trace"];
  for (let _0x5cb9e5 = 0; _0x5cb9e5 < _0x54eab1.length; _0x5cb9e5++) {
    const _0x761731 = _0x2a0d05.constructor.prototype.bind(_0x2a0d05);
    const _0x35c043 = _0x54eab1[_0x5cb9e5];
    const _0x80e6fd = _0x3888f8[_0x35c043] || _0x761731;
    _0x761731.__proto__ = _0x2a0d05.bind(_0x2a0d05);
    _0x761731.toString = _0x80e6fd.toString.bind(_0x80e6fd);
    _0x3888f8[_0x35c043] = _0x761731;
  }
});
_0x183b51();
import _0x25b45d from 'node-fetch';
import _0x4f2ee0 from '../../config.cjs';
const spotifySearch = async (_0x53a361, _0x89415e) => {
  const _0x3c537a = _0x4f2ee0.PREFIX;
  const _0x17501e = _0x53a361.body.startsWith(_0x3c537a) ? _0x53a361.body.slice(_0x3c537a.length).split(" ")[0].toLowerCase() : '';
  if (_0x17501e === 'sspotify' || _0x17501e === "searchspot") {
    const _0x1b9ec5 = _0x53a361.body.slice(_0x3c537a.length + _0x17501e.length).trim();
    if (!_0x1b9ec5) {
      const _0x2cbd9b = {
        text: "⚠️ Please provide a song name!"
      };
      return _0x89415e.sendMessage(_0x53a361.from, _0x2cbd9b, {
        'quoted': _0x53a361
      });
    }
    const _0x32d193 = "https://apis.giftedtech.web.id/api/search/spotifysearch?apikey=gifted-md&query=" + encodeURIComponent(_0x1b9ec5);
    try {
      await _0x89415e.sendMessage(_0x53a361.from, {
        'react': {
          'text': '⏳',
          'key': _0x53a361.key
        }
      });
      const _0x1056cd = {
        text: "🔍 Searching for songs on Spotify...",
        contextInfo: {}
      };
      _0x1056cd.contextInfo.externalAdReply = {};
      _0x1056cd.contextInfo.externalAdReply.title = "Spotify Search 🎵";
      _0x1056cd.contextInfo.externalAdReply.body = "Powered by POPKID-MD";
      _0x1056cd.contextInfo.externalAdReply.thumbnailUrl = "https://i.imgur.com/3gqDRs6.png";
      _0x1056cd.contextInfo.externalAdReply.mediaType = 0x1;
      _0x1056cd.contextInfo.externalAdReply.mediaUrl = "https://open.spotify.com";
      _0x1056cd.contextInfo.externalAdReply.sourceUrl = "https://open.spotify.com";
      let _0x48e8f4 = await _0x89415e.sendMessage(_0x53a361.from, _0x1056cd, {
        'quoted': _0x53a361
      });
      const _0x5d79d5 = await _0x25b45d(_0x32d193);
      const _0x1be8d3 = await _0x5d79d5.json();
      if (!_0x1be8d3.success || !_0x1be8d3.results.length) {
        await _0x89415e.sendMessage(_0x53a361.from, {
          'react': {
            'text': '❌',
            'key': _0x53a361.key
          }
        });
        const _0x48b936 = {
          edit: _0x48e8f4.key,
          text: "❌ No results found!"
        };
        return _0x89415e.sendMessage(_0x53a361.from, _0x48b936);
      }
      let _0x40f76a = "🎶 *Spotify Search Results:*\n\n";
      _0x1be8d3.results.slice(0, 5).forEach((_0x43dcaa, _0x56b867) => {
        _0x40f76a += "🎵 *" + _0x43dcaa.title + "* - " + _0x43dcaa.artist + "\n⏱️ Duration: " + _0x43dcaa.duration + "\n🔗 [Listen on Spotify](" + _0x43dcaa.url + ")\n\n";
      });
      _0x40f76a += "_*POWERED BY POPKID-MD*_";
      await _0x89415e.sendMessage(_0x53a361.from, {
        'react': {
          'text': '✅',
          'key': _0x53a361.key
        }
      });
      const _0x537b5e = {
        edit: _0x48e8f4.key,
        text: _0x40f76a
      };
      await _0x89415e.sendMessage(_0x53a361.from, _0x537b5e);
    } catch (_0x4847d4) {
      console.error(_0x4847d4);
      await _0x89415e.sendMessage(_0x53a361.from, {
        'react': {
          'text': '❌',
          'key': _0x53a361.key
        }
      });
      const _0x48ab45 = {
        text: "❌ An error occurred. Please try again later!"
      };
      await _0x89415e.sendMessage(_0x53a361.from, _0x48ab45, {
        'quoted': _0x53a361
      });
    }
  }
};
export default spotifySearch;