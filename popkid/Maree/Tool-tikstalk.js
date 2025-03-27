const _0x466b29 = function () {
  let _0x101a29 = true;
  return function (_0x2b4c23, _0x54f7b8) {
    const _0x2a149 = _0x101a29 ? function () {
      if (_0x54f7b8) {
        const _0x24a111 = _0x54f7b8.apply(_0x2b4c23, arguments);
        _0x54f7b8 = null;
        return _0x24a111;
      }
    } : function () {};
    _0x101a29 = false;
    return _0x2a149;
  };
}();
const _0x100ec2 = _0x466b29(this, function () {
  return _0x100ec2.toString().search("(((.+)+)+)+$").toString().constructor(_0x100ec2).search("(((.+)+)+)+$");
});
_0x100ec2();
const _0x4cdfce = function () {
  let _0x2507e4 = true;
  return function (_0x476561, _0x41a27d) {
    const _0x530c9e = _0x2507e4 ? function () {
      if (_0x41a27d) {
        const _0x44a4b0 = _0x41a27d.apply(_0x476561, arguments);
        _0x41a27d = null;
        return _0x44a4b0;
      }
    } : function () {};
    _0x2507e4 = false;
    return _0x530c9e;
  };
}();
const _0x1a3e75 = _0x4cdfce(this, function () {
  let _0x30a5b2;
  try {
    const _0x482187 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x30a5b2 = _0x482187();
  } catch (_0x5e94f4) {
    _0x30a5b2 = window;
  }
  const _0x30db43 = _0x30a5b2.console = _0x30a5b2.console || {};
  const _0x5a0923 = ['log', "warn", 'info', "error", "exception", "table", "trace"];
  for (let _0x2a76cd = 0; _0x2a76cd < _0x5a0923.length; _0x2a76cd++) {
    const _0x5b7bf4 = _0x4cdfce.constructor.prototype.bind(_0x4cdfce);
    const _0x555cff = _0x5a0923[_0x2a76cd];
    const _0x152749 = _0x30db43[_0x555cff] || _0x5b7bf4;
    _0x5b7bf4.__proto__ = _0x4cdfce.bind(_0x4cdfce);
    _0x5b7bf4.toString = _0x152749.toString.bind(_0x152749);
    _0x30db43[_0x555cff] = _0x5b7bf4;
  }
});
_0x1a3e75();
import _0x1d62fb from 'axios';
import _0x34e95d from '../../config.cjs';
const tiktokStalkCommand = async (_0x5483d2, _0x87f105) => {
  const _0xe5df74 = _0x34e95d.PREFIX;
  const _0x546345 = _0x5483d2.body.startsWith(_0xe5df74) ? _0x5483d2.body.slice(_0xe5df74.length).split(" ")[0].toLowerCase() : '';
  const _0x19b49a = _0x5483d2.body.slice(_0xe5df74.length + _0x546345.length).trim();
  if (_0x546345 === "tiktokstalk" || _0x546345 === "tstalk" || _0x546345 === "ttstalk") {
    if (!_0x19b49a) {
      return await _0x5483d2.reply("❎ Please provide a TikTok username.\n\n*Example:* .tiktokstalk mrbeast");
    }
    await _0x5483d2.React('📱');
    try {
      const _0x3bf78a = "https://api.siputzx.my.id/api/stalk/tiktok?username=" + encodeURIComponent(_0x19b49a);
      const {
        data: _0x3a3c19
      } = await _0x1d62fb.get(_0x3bf78a);
      if (!_0x3a3c19 || !_0x3a3c19.status || !_0x3a3c19.data) {
        return await _0x5483d2.reply("❌ Invalid API response. Please try again later.");
      }
      const _0x180717 = _0x3a3c19.data.user;
      const _0x117fc9 = _0x3a3c19.data.stats;
      if (!_0x180717 || !_0x117fc9) {
        return await _0x5483d2.reply("❌ User data not found. Please check the username and try again.");
      }
      const _0x5d376a = "\n\n╭━━━〔 *POPKID-MD* 〕━━━┈⊷\n\n┃▸╭───────────\n\n┃▸┃๏ *TikTok Profile Stalker*\n\n┃▸└───────────···๏\n\n╰────────────────┈⊷\n\n👤 *Username:* @" + (_0x180717.uniqueId || "N/A") + "\n\n📛 *Nickname:* " + (_0x180717.nickname || "N/A") + "\n\n✅ *Verified:* " + (_0x180717.verified ? "Yes ✅" : "No ❌") + "\n\n📍 *Region:* " + (_0x180717.region || "N/A") + "\n\n📝 *Bio:* " + (_0x180717.signature || "No bio available.") + "\n\n🔗 *Bio Link:* " + (_0x180717.bioLink?.["link"] || "No link available.") + "\n\n📊 *Statistics:*\n\n👥 *Followers:* " + (_0x117fc9.followerCount?.["toLocaleString"]() || "N/A") + "\n\n👤 *Following:* " + (_0x117fc9.followingCount?.["toLocaleString"]() || "N/A") + "\n\n❤️ *Likes:* " + (_0x117fc9.heartCount?.["toLocaleString"]() || "N/A") + "\n\n🎥 *Videos:* " + (_0x117fc9.videoCount?.["toLocaleString"]() || "N/A") + "\n\n📅 *Account Created:* " + (_0x180717.createTime ? new Date(_0x180717.createTime * 1000).toLocaleDateString() : "N/A") + "\n\n🔒 *Private Account:* " + (_0x180717.privateAccount ? "Yes 🔒" : "No 🌍") + "\n\n🔗 *Profile URL:* [Click Here](https://www.tiktok.com/@" + (_0x180717.uniqueId || "N/A") + ")\n\n*_POWERED BY POPKID-MD_*";
      const _0x4011d2 = {
        newsletterJid: "120363290715861418@newsletter",
        newsletterName: "popkid",
        serverMessageId: -1
      };
      const _0x40d535 = {
        title: "popkid",
        body: "Live TikTok Profile Stalker",
        thumbnailUrl: _0x180717.avatarLarger || '',
        sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH/fork",
        mediaType: 0x1,
        renderLargerThumbnail: true
      };
      const _0x355d72 = {
        isForwarded: true,
        forwardedNewsletterMessageInfo: _0x4011d2,
        forwardingScore: 0x3e7,
        externalAdReply: _0x40d535
      };
      const _0x5e84d9 = {
        text: _0x5d376a,
        contextInfo: _0x355d72
      };
      await _0x87f105.sendMessage(_0x5483d2.from, _0x5e84d9, {
        'quoted': _0x5483d2
      });
      await _0x5483d2.React('✅');
    } catch (_0x227529) {
      console.error("❌ Error in TikTok stalk command:", _0x227529);
      await _0x5483d2.reply("⚠️ An error occurred while fetching TikTok profile data. Please try again later.");
      await _0x5483d2.React('❌');
    }
  }
};
export default tiktokStalkCommand;