const _0x4b3598 = function () {
  let _0x5b3baf = true;
  return function (_0x5e4464, _0x2e194e) {
    const _0x40870f = _0x5b3baf ? function () {
      if (_0x2e194e) {
        const _0x23f203 = _0x2e194e.apply(_0x5e4464, arguments);
        _0x2e194e = null;
        return _0x23f203;
      }
    } : function () {};
    _0x5b3baf = false;
    return _0x40870f;
  };
}();
const _0x6b0789 = _0x4b3598(this, function () {
  return _0x6b0789.toString().search("(((.+)+)+)+$").toString().constructor(_0x6b0789).search("(((.+)+)+)+$");
});
_0x6b0789();
const _0x2f5ea1 = function () {
  let _0x1689e8 = true;
  return function (_0x282927, _0x119edd) {
    const _0x386cc4 = _0x1689e8 ? function () {
      if (_0x119edd) {
        const _0x4ad76f = _0x119edd.apply(_0x282927, arguments);
        _0x119edd = null;
        return _0x4ad76f;
      }
    } : function () {};
    _0x1689e8 = false;
    return _0x386cc4;
  };
}();
const _0x465057 = _0x2f5ea1(this, function () {
  let _0x8b2fda;
  try {
    const _0x2aa079 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x8b2fda = _0x2aa079();
  } catch (_0x4559f3) {
    _0x8b2fda = window;
  }
  const _0x5b1e64 = _0x8b2fda.console = _0x8b2fda.console || {};
  const _0xaf98ce = ["log", 'warn', "info", 'error', "exception", 'table', "trace"];
  for (let _0xe3960e = 0; _0xe3960e < _0xaf98ce.length; _0xe3960e++) {
    const _0x5840bc = _0x2f5ea1.constructor.prototype.bind(_0x2f5ea1);
    const _0xa83ec2 = _0xaf98ce[_0xe3960e];
    const _0x257f9d = _0x5b1e64[_0xa83ec2] || _0x5840bc;
    _0x5840bc.__proto__ = _0x2f5ea1.bind(_0x2f5ea1);
    _0x5840bc.toString = _0x257f9d.toString.bind(_0x257f9d);
    _0x5b1e64[_0xa83ec2] = _0x5840bc;
  }
});
_0x465057();
import _0x20cade from 'node-fetch';
import _0x787b2a from '../../config.cjs';
const npmInfo = async (_0x6c0774, _0x5d3ba6) => {
  const _0x3f6282 = _0x787b2a.PREFIX;
  const _0x577c83 = _0x6c0774.body.startsWith(_0x3f6282) ? _0x6c0774.body.slice(_0x3f6282.length).split(" ")[0].toLowerCase() : '';
  const _0x52c883 = _0x6c0774.body.slice(_0x3f6282.length).split(" ").slice(1);
  if (_0x577c83 === 'npm') {
    if (!_0x52c883.length) {
      const _0x2eb22c = {
        text: "🔍 *Please provide a package name!*\nExample: `.npm express`"
      };
      return await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x2eb22c, {
        'quoted': _0x6c0774
      });
    }
    const _0x5d6d38 = _0x52c883[0];
    const _0x2c44e3 = "https://registry.npmjs.org/" + _0x5d6d38;
    const _0x443077 = {
      text: "🔍 𝐒𝐄𝐀𝐑𝐂𝐇𝐈𝐍𝐆 𝐍𝐏𝐌.."
    };
    let _0x4346d3 = await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x443077, {
      'quoted': _0x6c0774
    });
    try {
      const _0x4b0140 = await _0x20cade(_0x2c44e3);
      if (!_0x4b0140.ok) {
        throw new Error("Package not found!");
      }
      const _0x56aacf = await _0x4b0140.json();
      const _0x46f953 = _0x56aacf["dist-tags"]?.["latest"] || "Unknown";
      const _0xa5c905 = _0x56aacf.description || "No description available";
      const _0xc247ff = _0x56aacf.author?.["name"] || "Unknown";
      const _0x4855bc = _0x56aacf.homepage || "https://www.npmjs.com/package/" + _0x5d6d38;
      const _0x1da806 = "🛠 *𝐏𝐨𝐩𝐤𝐢𝐝-𝐌𝐃 𝐍𝐩𝐦 𝐈𝐧𝐟𝐨*\n\n📦 *𝐏𝐚𝐜𝐤𝐚𝐠𝐞:* " + _0x5d6d38 + "\n🔖 *𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* " + _0x46f953 + "\n👤 *𝐀𝐮𝐭𝐡𝐨𝐫:* " + _0xc247ff + "\n📜 *𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧:* " + _0xa5c905 + "\n🔗 *𝐇𝐨𝐦𝐞𝐏𝐚𝐠𝐞:*(" + _0x4855bc + ")\n\n*_𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃_*";
      await new Promise(_0x4bdcf4 => setTimeout(_0x4bdcf4, 500));
      const _0x393c00 = {
        edit: _0x4346d3.key,
        text: '𝐍'
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x393c00);
      await new Promise(_0x3a0353 => setTimeout(_0x3a0353, 500));
      const _0x15aa9e = {
        edit: _0x4346d3.key,
        text: "𝐍𝐏"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x15aa9e);
      await new Promise(_0x5d4be6 => setTimeout(_0x5d4be6, 500));
      const _0x148517 = {
        edit: _0x4346d3.key,
        text: '𝐍𝐏𝐌'
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x148517);
      await new Promise(_0x4474bc => setTimeout(_0x4474bc, 500));
      const _0x3e4192 = {
        edit: _0x4346d3.key,
        text: "𝐍𝐏𝐌 𝐒"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x3e4192);
      await new Promise(_0x2789cd => setTimeout(_0x2789cd, 500));
      const _0x19e0d9 = {
        edit: _0x4346d3.key,
        text: "𝐍𝐏𝐌 𝐒𝐄"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x19e0d9);
      await new Promise(_0xcabc69 => setTimeout(_0xcabc69, 500));
      const _0x1be096 = {
        edit: _0x4346d3.key,
        text: "𝐍𝐏𝐌 𝐒𝐄𝐀"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x1be096);
      await new Promise(_0x21e10d => setTimeout(_0x21e10d, 500));
      const _0x46b49c = {
        edit: _0x4346d3.key,
        text: "𝐍𝐏𝐌 𝐒𝐄𝐀𝐑"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x46b49c);
      await new Promise(_0x4952e3 => setTimeout(_0x4952e3, 500));
      const _0x4790a7 = {
        edit: _0x4346d3.key,
        text: "𝐍𝐏𝐌 𝐒𝐄𝐀𝐑𝐂"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x4790a7);
      await new Promise(_0x344f5d => setTimeout(_0x344f5d, 500));
      const _0x553706 = {
        edit: _0x4346d3.key,
        text: "𝐍𝐏𝐌 𝐒𝐄𝐀𝐑𝐂𝐇"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x553706);
      await new Promise(_0xb1bcf8 => setTimeout(_0xb1bcf8, 500));
      const _0x3392dc = {
        edit: _0x4346d3.key,
        text: _0x1da806
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x3392dc);
    } catch (_0x4c66fe) {
      const _0x4339be = {
        edit: _0x4346d3.key,
        text: "❌ *Package not found or API Error!*"
      };
      await _0x5d3ba6.sendMessage(_0x6c0774.from, _0x4339be);
    }
  }
};
export default npmInfo;