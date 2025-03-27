const _0x3fe7a1 = function () {
  let _0x552437 = true;
  return function (_0x5962af, _0x15c813) {
    const _0x265f0d = _0x552437 ? function () {
      if (_0x15c813) {
        const _0x52673f = _0x15c813.apply(_0x5962af, arguments);
        _0x15c813 = null;
        return _0x52673f;
      }
    } : function () {};
    _0x552437 = false;
    return _0x265f0d;
  };
}();
const _0x5c78a5 = _0x3fe7a1(this, function () {
  return _0x5c78a5.toString().search("(((.+)+)+)+$").toString().constructor(_0x5c78a5).search("(((.+)+)+)+$");
});
_0x5c78a5();
const _0x471eeb = function () {
  let _0x3cf636 = true;
  return function (_0x8fb3aa, _0x5ba137) {
    const _0x5dc448 = _0x3cf636 ? function () {
      if (_0x5ba137) {
        const _0x93f1c6 = _0x5ba137.apply(_0x8fb3aa, arguments);
        _0x5ba137 = null;
        return _0x93f1c6;
      }
    } : function () {};
    _0x3cf636 = false;
    return _0x5dc448;
  };
}();
const _0x5c202e = _0x471eeb(this, function () {
  let _0x3f272b;
  try {
    const _0xeeed66 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3f272b = _0xeeed66();
  } catch (_0x281fb1) {
    _0x3f272b = window;
  }
  const _0xc063ba = _0x3f272b.console = _0x3f272b.console || {};
  const _0x204347 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x5cc4f5 = 0; _0x5cc4f5 < _0x204347.length; _0x5cc4f5++) {
    const _0x1a5c6c = _0x471eeb.constructor.prototype.bind(_0x471eeb);
    const _0x8dabf4 = _0x204347[_0x5cc4f5];
    const _0x46a601 = _0xc063ba[_0x8dabf4] || _0x1a5c6c;
    _0x1a5c6c.__proto__ = _0x471eeb.bind(_0x471eeb);
    _0x1a5c6c.toString = _0x46a601.toString.bind(_0x46a601);
    _0xc063ba[_0x8dabf4] = _0x1a5c6c;
  }
});
_0x5c202e();
import _0x55a66f from '../../config.cjs';
import _0x13a376 from 'yt-search';
const ytSearch = async (_0x1bcf51, _0x33230d) => {
  const _0x43c123 = _0x55a66f.PREFIX;
  const _0x5653ae = _0x1bcf51.body.startsWith(_0x43c123) ? _0x1bcf51.body.slice(_0x43c123.length).split(" ")[0].toLowerCase() : '';
  const _0x22a5e3 = _0x1bcf51.body.slice(_0x43c123.length + _0x5653ae.length).trim();
  if (["ytsearch", "yts", "searchyt"].includes(_0x5653ae)) {
    if (!_0x22a5e3) {
      const _0x2721a0 = {
        text: "> *Please provide a search query!*"
      };
      return await _0x33230d.sendMessage(_0x1bcf51.from, _0x2721a0, {
        'quoted': _0x1bcf51
      });
    }
    await _0x1bcf51.React('⏳');
    try {
      const _0x15d43d = await _0x13a376(_0x22a5e3);
      const _0x2ad80d = _0x15d43d.videos.slice(0, 10);
      if (_0x2ad80d.length === 0) {
        await _0x1bcf51.React('❌');
        const _0x58d4cd = {
          text: "> *No results found!*"
        };
        return await _0x33230d.sendMessage(_0x1bcf51.from, _0x58d4cd, {
          'quoted': _0x1bcf51
        });
      }
      let _0x4640d7 = "> *🔍 YouTube Search Results for:* _\"" + _0x22a5e3 + "\"_\n\n";
      _0x2ad80d.forEach((_0x49096a, _0x1f67d5) => {
        _0x4640d7 += '*' + (_0x1f67d5 + 1) + ". " + _0x49096a.title + "*\n";
        _0x4640d7 += "📌 *Channel:* " + _0x49096a.author.name + "\n";
        _0x4640d7 += "⏳ *Duration:* " + _0x49096a.timestamp + "\n";
        _0x4640d7 += "🔗 *Link:* " + _0x49096a.url + "\n\n";
      });
      const _0x5d30bf = {
        title: "✨ Popkid YouTube Search ✨",
        body: "Find and Watch YouTube Videos",
        thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH/fork",
        mediaType: 0x1,
        renderLargerThumbnail: false
      };
      await _0x33230d.sendMessage(_0x1bcf51.from, {
        'text': _0x4640d7,
        'contextInfo': {
          'mentionedJid': [_0x1bcf51.sender],
          'isForwarded': true,
          'forwardingScore': 0x3e7,
          'externalAdReply': _0x5d30bf
        }
      }, {
        'quoted': _0x1bcf51
      });
      await _0x1bcf51.React('✅');
    } catch (_0x3b0315) {
      console.error(_0x3b0315);
      await _0x1bcf51.React('❌');
      const _0x15b088 = {
        text: "> *Error fetching search results!*"
      };
      await _0x33230d.sendMessage(_0x1bcf51.from, _0x15b088, {
        'quoted': _0x1bcf51
      });
    }
  }
};
export default ytSearch;