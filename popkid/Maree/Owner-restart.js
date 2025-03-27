const _0x1b3698 = function () {
  let _0x580ae6 = true;
  return function (_0x1311f1, _0x376e07) {
    const _0x2efa3f = _0x580ae6 ? function () {
      if (_0x376e07) {
        const _0x1f8254 = _0x376e07.apply(_0x1311f1, arguments);
        _0x376e07 = null;
        return _0x1f8254;
      }
    } : function () {};
    _0x580ae6 = false;
    return _0x2efa3f;
  };
}();
const _0x20e39c = _0x1b3698(this, function () {
  return _0x20e39c.toString().search("(((.+)+)+)+$").toString().constructor(_0x20e39c).search("(((.+)+)+)+$");
});
_0x20e39c();
const _0x43c3e7 = function () {
  let _0x215dc7 = true;
  return function (_0x1d4b0d, _0x2c78e2) {
    const _0x21eedc = _0x215dc7 ? function () {
      if (_0x2c78e2) {
        const _0x1c366a = _0x2c78e2.apply(_0x1d4b0d, arguments);
        _0x2c78e2 = null;
        return _0x1c366a;
      }
    } : function () {};
    _0x215dc7 = false;
    return _0x21eedc;
  };
}();
const _0x1a4a50 = _0x43c3e7(this, function () {
  const _0x500d25 = function () {
    let _0x19a48c;
    try {
      _0x19a48c = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x37fdd1) {
      _0x19a48c = window;
    }
    return _0x19a48c;
  };
  const _0x1d5586 = _0x500d25();
  const _0x25c4fa = _0x1d5586.console = _0x1d5586.console || {};
  const _0x4e8f40 = ["log", "warn", "info", "error", "exception", 'table', "trace"];
  for (let _0x399b1f = 0; _0x399b1f < _0x4e8f40.length; _0x399b1f++) {
    const _0x11546d = _0x43c3e7.constructor.prototype.bind(_0x43c3e7);
    const _0x59a01e = _0x4e8f40[_0x399b1f];
    const _0x3d62a5 = _0x25c4fa[_0x59a01e] || _0x11546d;
    _0x11546d.__proto__ = _0x43c3e7.bind(_0x43c3e7);
    _0x11546d.toString = _0x3d62a5.toString.bind(_0x3d62a5);
    _0x25c4fa[_0x59a01e] = _0x11546d;
  }
});
_0x1a4a50();
import _0x269b22 from '../../config.cjs';
const restartBot = async (_0x223c34, _0x1cff87) => {
  const _0x191789 = _0x269b22.OWNER_NUMBER.replace(/[^0-9]/g, '');
  const _0x1c31ae = _0x223c34.sender.split('@')[0];
  const _0x404d98 = _0x269b22.PREFIX;
  const _0x2f823a = _0x223c34.body.startsWith(_0x404d98) ? _0x223c34.body.slice(_0x404d98.length).split(" ")[0].toLowerCase() : '';
  if (_0x2f823a !== "restart") {
    return;
  }
  if (_0x1c31ae !== _0x191789) {
    const _0x14c046 = {
      text: "❌ *Only the Owner can restart the bot!*"
    };
    return await _0x1cff87.sendMessage(_0x223c34.from, _0x14c046, {
      'quoted': _0x223c34
    });
  }
  const _0x19d7e3 = {
    text: "🔄 *Restarting... Please wait!*"
  };
  await _0x1cff87.sendMessage(_0x223c34.from, _0x19d7e3, {
    'quoted': _0x223c34
  });
  console.log("🛠 Restarting bot...");
  process.exit(1);
};
export default restartBot;