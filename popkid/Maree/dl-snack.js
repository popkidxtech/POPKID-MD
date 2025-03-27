const _0x496b5f = function () {
  let _0x54a0f7 = true;
  return function (_0x55d6ef, _0x57b433) {
    const _0x1a6459 = _0x54a0f7 ? function () {
      if (_0x57b433) {
        const _0x237c8c = _0x57b433.apply(_0x55d6ef, arguments);
        _0x57b433 = null;
        return _0x237c8c;
      }
    } : function () {};
    _0x54a0f7 = false;
    return _0x1a6459;
  };
}();
const _0x3c26eb = _0x496b5f(this, function () {
  return _0x3c26eb.toString().search("(((.+)+)+)+$").toString().constructor(_0x3c26eb).search("(((.+)+)+)+$");
});
_0x3c26eb();
const _0x248aba = function () {
  let _0x24fd93 = true;
  return function (_0x26080c, _0x2c232e) {
    const _0x19e5d7 = _0x24fd93 ? function () {
      if (_0x2c232e) {
        const _0x51afe5 = _0x2c232e.apply(_0x26080c, arguments);
        _0x2c232e = null;
        return _0x51afe5;
      }
    } : function () {};
    _0x24fd93 = false;
    return _0x19e5d7;
  };
}();
const _0x2edd5d = _0x248aba(this, function () {
  let _0x53c5f5;
  try {
    const _0x130ec4 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x53c5f5 = _0x130ec4();
  } catch (_0xd06e6) {
    _0x53c5f5 = window;
  }
  const _0x5d1f19 = _0x53c5f5.console = _0x53c5f5.console || {};
  const _0x48b753 = ['log', "warn", 'info', "error", "exception", "table", 'trace'];
  for (let _0x36fd3c = 0; _0x36fd3c < _0x48b753.length; _0x36fd3c++) {
    const _0x172d87 = _0x248aba.constructor.prototype.bind(_0x248aba);
    const _0x4abaa1 = _0x48b753[_0x36fd3c];
    const _0x7b6022 = _0x5d1f19[_0x4abaa1] || _0x172d87;
    _0x172d87.__proto__ = _0x248aba.bind(_0x248aba);
    _0x172d87.toString = _0x7b6022.toString.bind(_0x7b6022);
    _0x5d1f19[_0x4abaa1] = _0x172d87;
  }
});
_0x2edd5d();
import _0x460123 from 'axios';
import _0x2e8f17 from '../../config.cjs';
const snack = async (_0x4c7fee, _0x2a7a36) => {
  const _0x322a06 = _0x2e8f17.PREFIX;
  const _0x3b6c96 = _0x4c7fee.body.startsWith(_0x322a06) ? _0x4c7fee.body.slice(_0x322a06.length).split(" ")[0].toLowerCase() : '';
  const _0x2b73c4 = _0x4c7fee.body.slice(_0x322a06.length + _0x3b6c96.length).trim();
  if (_0x3b6c96 === "snack" || _0x3b6c96 === "snackvid") {
    if (!_0x2b73c4) {
      const _0x2f2dfc = {
        text: "*❌ Please provide a SnackVideo link.*\n\n📌 *Example:* .snack https://www.snackvideo.com/@user/video/123456"
      };
      return _0x2a7a36.sendMessage(_0x4c7fee.from, _0x2f2dfc, {
        'quoted': _0x4c7fee
      });
    }
    const _0x5880cb = "https://apis.giftedtech.web.id/api/download/snackdl?apikey=gifted&url=" + encodeURIComponent(_0x2b73c4);
    const _0x3bc963 = {
      text: "🔄 *Fetching SnackVideo...*"
    };
    await _0x2a7a36.sendMessage(_0x4c7fee.from, _0x3bc963, {
      'quoted': _0x4c7fee
    });
    try {
      const _0x4b8618 = await _0x460123.get(_0x5880cb);
      const {
        success: _0x2a601e,
        result: _0x18e5e6
      } = _0x4b8618.data;
      if (!_0x2a601e || !_0x18e5e6.media) {
        const _0x25265f = {
          text: "*❌ Failed to retrieve the video. The API may be down or the link is invalid.*"
        };
        return _0x2a7a36.sendMessage(_0x4c7fee.from, _0x25265f, {
          'quoted': _0x4c7fee
        });
      }
      const _0x1d7c23 = {
        url: _0x18e5e6.media
      };
      const _0x26c486 = {
        video: _0x1d7c23,
        caption: "🎥 *SnackVideo Downloaded!*\n👤 *Author:* " + _0x18e5e6.author + "\n❤️ *Likes:* " + _0x18e5e6.like + "\n💬 *Comments:* " + _0x18e5e6.comment + "\n🔄 *Shares:* " + _0x18e5e6.share + "\n\n*_DOWNLOADED BY POPKID-MD_*"
      };
      await _0x2a7a36.sendMessage(_0x4c7fee.from, _0x26c486, {
        'quoted': _0x4c7fee
      });
    } catch (_0xcb8fe3) {
      console.error(_0xcb8fe3);
      const _0x47c60f = {
        text: "*❌ An error occurred while processing your request. Please try again later.*"
      };
      return _0x2a7a36.sendMessage(_0x4c7fee.from, _0x47c60f, {
        'quoted': _0x4c7fee
      });
    }
  }
};
export default snack;