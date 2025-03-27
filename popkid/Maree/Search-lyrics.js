const _0x2e1a12 = function () {
  let _0x4ed2bf = true;
  return function (_0x1d3951, _0x5edcd7) {
    const _0x3339d0 = {
      BNVFY: "(((.+)+)+)+$"
    };
    _0x3339d0.MdSTh = "WzaFm";
    const _0xfa4798 = _0x4ed2bf ? function () {
      if (_0x5edcd7) {
        if ('WzaFm' === _0x3339d0.MdSTh) {
          const _0x4205a7 = _0x5edcd7.apply(_0x1d3951, arguments);
          _0x5edcd7 = null;
          return _0x4205a7;
        } else {
          return _0x4165e3.toString().search("(((.+)+)+)+$").toString().constructor(_0x7684c6).search("(((.+)+)+)+$");
        }
      }
    } : function () {};
    _0x4ed2bf = false;
    return _0xfa4798;
  };
}();
const _0x37066f = _0x2e1a12(this, function () {
  return _0x37066f.toString().search("(((.+)+)+)+$").toString().constructor(_0x37066f).search("(((.+)+)+)+$");
});
_0x37066f();
const _0x593b11 = function () {
  let _0x2035af = true;
  return function (_0x1062ed, _0x4fd39c) {
    const _0x25ded0 = _0x2035af ? function () {
      if (_0x4fd39c) {
        const _0x4509bf = _0x4fd39c.apply(_0x1062ed, arguments);
        _0x4fd39c = null;
        return _0x4509bf;
      }
    } : function () {};
    _0x2035af = false;
    return _0x25ded0;
  };
}();
const _0x51a19f = _0x593b11(this, function () {
  const _0xff7c9f = function () {
    let _0x50d6a1;
    try {
      _0x50d6a1 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x2ed33e) {
      _0x50d6a1 = window;
    }
    return _0x50d6a1;
  };
  const _0x1b96f8 = _0xff7c9f();
  const _0x1d9c7a = _0x1b96f8.console = _0x1b96f8.console || {};
  const _0x23a990 = ['log', "warn", "info", "error", 'exception', "table", "trace"];
  for (let _0x5808f5 = 0; _0x5808f5 < _0x23a990.length; _0x5808f5++) {
    const _0x5a9cbe = _0x593b11.constructor.prototype.bind(_0x593b11);
    const _0x3ce4d1 = _0x23a990[_0x5808f5];
    const _0x50c887 = _0x1d9c7a[_0x3ce4d1] || _0x5a9cbe;
    _0x5a9cbe.__proto__ = _0x593b11.bind(_0x593b11);
    _0x5a9cbe.toString = _0x50c887.toString.bind(_0x50c887);
    _0x1d9c7a[_0x3ce4d1] = _0x5a9cbe;
  }
});
_0x51a19f();
import _0x424b05 from 'node-fetch';
import _0x276749 from '../../config.cjs';
const lyricsSearch = async (_0x2f34f3, _0x45722e) => {
  const _0x4080fd = _0x276749.PREFIX;
  const _0x2efa79 = _0x2f34f3.body.startsWith(_0x4080fd) ? _0x2f34f3.body.slice(_0x4080fd.length).split(" ")[0].toLowerCase() : '';
  if (_0x2efa79 === "lyrics") {
    const _0x5aa3f7 = _0x2f34f3.body.slice(_0x4080fd.length + _0x2efa79.length).trim();
    if (!_0x5aa3f7) {
      const _0x1d2368 = {
        text: "⚠️ Please provide a song name!"
      };
      return _0x45722e.sendMessage(_0x2f34f3.from, _0x1d2368, {
        'quoted': _0x2f34f3
      });
    }
    const _0x1a5168 = "https://apis.giftedtech.web.id/api/search/lyricsv2?apikey=gifted-md&query=" + encodeURIComponent(_0x5aa3f7);
    try {
      const _0x4240fb = {
        'text': "🎶 Searching for lyrics..."
      };
      let _0x4bb234 = await _0x45722e.sendMessage(_0x2f34f3.from, _0x4240fb, {
        'quoted': _0x2f34f3
      });
      const _0x10104e = await _0x424b05(_0x1a5168);
      const _0x23a16c = await _0x10104e.json();
      if (!_0x23a16c.success || !_0x23a16c.result) {
        const _0x54f5bd = {
          edit: _0x4bb234.key,
          text: "❌ No lyrics found!"
        };
        return _0x45722e.sendMessage(_0x2f34f3.from, _0x54f5bd);
      }
      const _0x3af857 = _0x23a16c.result.length > 3800 ? _0x23a16c.result.slice(0, 3800) + "...\n\n🔗 *View full lyrics:* " + _0x1a5168 : _0x23a16c.result;
      const _0x33f5ad = {
        edit: _0x4bb234.key,
        text: "🎤 *Lyrics for " + _0x5aa3f7 + ":*\n\n" + _0x3af857 + "\n\n*_POWERED BY POPKID-MD_*"
      };
      await _0x45722e.sendMessage(_0x2f34f3.from, _0x33f5ad);
    } catch (_0x4dce2f) {
      console.error(_0x4dce2f);
      const _0x58d230 = {
        text: "❌ An error occurred. Please try again later!"
      };
      await _0x45722e.sendMessage(_0x2f34f3.from, _0x58d230, {
        'quoted': _0x2f34f3
      });
    }
  }
};
export default lyricsSearch;