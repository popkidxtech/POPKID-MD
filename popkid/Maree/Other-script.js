const _0x38ff04 = function () {
  let _0x1a6dcb = true;
  return function (_0x4e1c06, _0x2ef824) {
    const _0x3245d9 = _0x1a6dcb ? function () {
      if (_0x2ef824) {
        const _0x31084c = _0x2ef824.apply(_0x4e1c06, arguments);
        _0x2ef824 = null;
        return _0x31084c;
      }
    } : function () {};
    _0x1a6dcb = false;
    return _0x3245d9;
  };
}();
const _0x41c656 = _0x38ff04(this, function () {
  return _0x41c656.toString().search("(((.+)+)+)+$").toString().constructor(_0x41c656).search("(((.+)+)+)+$");
});
_0x41c656();
const _0x2fd96e = function () {
  let _0x8b920 = true;
  return function (_0x28e93d, _0x1321b8) {
    const _0x32d77b = _0x8b920 ? function () {
      if (_0x1321b8) {
        const _0x32f851 = _0x1321b8.apply(_0x28e93d, arguments);
        _0x1321b8 = null;
        return _0x32f851;
      }
    } : function () {};
    _0x8b920 = false;
    return _0x32d77b;
  };
}();
const _0x4039aa = _0x2fd96e(this, function () {
  let _0x3361ab;
  try {
    const _0x558404 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3361ab = _0x558404();
  } catch (_0x401ec0) {
    _0x3361ab = window;
  }
  const _0x43d511 = _0x3361ab.console = _0x3361ab.console || {};
  const _0x49956d = ["log", 'warn', "info", "error", "exception", 'table', "trace"];
  for (let _0x171e1a = 0; _0x171e1a < _0x49956d.length; _0x171e1a++) {
    const _0x43a8a6 = _0x2fd96e.constructor.prototype.bind(_0x2fd96e);
    const _0x1477e9 = _0x49956d[_0x171e1a];
    const _0x2ed45b = _0x43d511[_0x1477e9] || _0x43a8a6;
    _0x43a8a6.__proto__ = _0x2fd96e.bind(_0x2fd96e);
    _0x43a8a6.toString = _0x2ed45b.toString.bind(_0x2ed45b);
    _0x43d511[_0x1477e9] = _0x43a8a6;
  }
});
_0x4039aa();
import _0x22031a from 'node-fetch';
import _0x198d3e from '../../config.cjs';
const sc = async (_0x2919b7, _0x1aa48b) => {
  const _0x494e79 = _0x198d3e.PREFIX;
  const _0xe45d17 = _0x2919b7.body.startsWith(_0x494e79) ? _0x2919b7.body.slice(_0x494e79.length).split(" ")[0].toLowerCase() : '';
  if (_0xe45d17 === 'sc' || _0xe45d17 === "repo") {
    await _0x2919b7.React('⏳');
    try {
      const _0x1f324b = await _0x22031a("https://api.github.com/repos/Popkiddevs/POPKID-XTECH");
      const _0x48652e = await _0x1f324b.json();
      const _0x21f193 = await _0x22031a("https://api.github.com/repos/Popkiddevs/POPKID-XTECH/commits");
      const _0x341d43 = await _0x21f193.json();
      const _0x16afdc = Array.isArray(_0x341d43) ? _0x341d43.length : "Unknown";
      if (!_0x48652e || _0x48652e.message) {
        throw new Error("GitHub API Error");
      }
      const _0x376781 = _0x48652e.stargazers_count || 0;
      const _0x47cea1 = _0x48652e.forks_count || 0;
      const _0x26136d = _0x48652e.watchers_count || 0;
      const _0x21ba47 = _0x48652e.open_issues_count || 0;
      const _0x511a96 = _0x48652e.license ? _0x48652e.license.name : "No License";
      const _0x2836a7 = (_0x48652e.size / 1024).toFixed(2) + " MB";
      const _0x204c33 = new Date(_0x48652e.created_at).toLocaleString("en-PK");
      const _0x40211a = new Date(_0x48652e.updated_at).toLocaleString("en-PK");
      const _0xc54ce0 = _0x48652e.owner.avatar_url || '';
      const _0x5da09 = "\n\n🌟 *Popkid-MD GitHub Repository* 🌟\n\n> 🌟 Stars: " + _0x376781 + "\n\n> 🍴 Forks: " + _0x47cea1 + "\n\n> 👀 Watchers: " + _0x26136d + "\n\n> ❌ Open Issues: " + _0x21ba47 + "\n\n> 📌 Total Commits: " + _0x16afdc + "\n\n> 📅 Created At: " + _0x204c33 + "\n\n> 🔄 Last Updated: " + _0x40211a + "\n\n> 📜 License: " + _0x511a96 + "\n\n> 💾 Repo Size: " + _0x2836a7 + "\n\n> 🔗 GitHub Repo: " + "https://github.com/Popkiddevs/POPKID-XTECH" + "\n\n> *Powered by Sarkar-MD*\n\n";
      const _0x13257d = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "popkid",
        serverMessageId: -1
      };
      const _0x464c73 = {
        title: "popkid-MD GitHub Repository",
        body: "Check out the latest details of popkid-MD on GitHub.",
        thumbnailUrl: _0xc54ce0,
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH",
        mediaType: 0x1,
        renderLargerThumbnail: false
      };
      await _0x1aa48b.sendMessage(_0x2919b7.from, {
        'text': _0x5da09,
        'contextInfo': {
          'mentionedJid': [_0x2919b7.sender],
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': _0x13257d,
          'forwardingScore': 0x3e7,
          'externalAdReply': _0x464c73
        }
      }, {
        'quoted': _0x2919b7
      });
      await _0x2919b7.React('✅');
    } catch (_0x148758) {
      const _0x489a0e = {
        text: "⚠️ Error fetching GitHub data. Try again later!"
      };
      await _0x1aa48b.sendMessage(_0x2919b7.from, _0x489a0e, {
        'quoted': _0x2919b7
      });
      await _0x2919b7.React('❌');
    }
  }
};
export default sc;