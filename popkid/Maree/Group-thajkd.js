const _0x3e3f0e = function () {
  let _0x178c05 = true;
  return function (_0x5241d7, _0x3afaa5) {
    const _0x141413 = _0x178c05 ? function () {
      if (_0x3afaa5) {
        const _0x2fe1ab = _0x3afaa5.apply(_0x5241d7, arguments);
        _0x3afaa5 = null;
        return _0x2fe1ab;
      }
    } : function () {};
    _0x178c05 = false;
    return _0x141413;
  };
}();
const _0xceb5c8 = _0x3e3f0e(this, function () {
  return _0xceb5c8.toString().search("(((.+)+)+)+$").toString().constructor(_0xceb5c8).search("(((.+)+)+)+$");
});
_0xceb5c8();
const _0x7867a3 = function () {
  let _0x932aec = true;
  return function (_0x3be124, _0x48e714) {
    const _0x4dcfb5 = _0x932aec ? function () {
      if (_0x48e714) {
        const _0x1595da = _0x48e714.apply(_0x3be124, arguments);
        _0x48e714 = null;
        return _0x1595da;
      }
    } : function () {};
    _0x932aec = false;
    return _0x4dcfb5;
  };
}();
const _0x390a2a = _0x7867a3(this, function () {
  let _0xcc3fc8;
  try {
    const _0xdd2552 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xcc3fc8 = _0xdd2552();
  } catch (_0x1589e6) {
    _0xcc3fc8 = window;
  }
  const _0x5d4029 = _0xcc3fc8.console = _0xcc3fc8.console || {};
  const _0x20e552 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x3bc9a4 = 0; _0x3bc9a4 < _0x20e552.length; _0x3bc9a4++) {
    const _0x1c1bdd = _0x7867a3.constructor.prototype.bind(_0x7867a3);
    const _0x4edd80 = _0x20e552[_0x3bc9a4];
    const _0x25372d = _0x5d4029[_0x4edd80] || _0x1c1bdd;
    _0x1c1bdd.__proto__ = _0x7867a3.bind(_0x7867a3);
    _0x1c1bdd.toString = _0x25372d.toString.bind(_0x25372d);
    _0x5d4029[_0x4edd80] = _0x1c1bdd;
  }
});
_0x390a2a();
import _0x440173 from '../../config.cjs';
const GroupCmds = async (_0x5ad112, _0x4a3968) => {
  try {
    const _0x2163b3 = _0x440173.OWNER_NUMBER.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    const _0x579350 = await _0x4a3968.decodeJid(_0x4a3968.user.id);
    const _0x1112d9 = _0x440173.PREFIX;
    if (!_0x5ad112.body.startsWith(_0x1112d9)) {
      return;
    }
    const _0x2bb048 = _0x5ad112.body.slice(_0x1112d9.length).trim().split(/\s+/);
    const _0x338df7 = _0x2bb048.shift().toLowerCase();
    const _0x2c7158 = _0x2bb048.join(" ");
    const _0x59f7d7 = ["tagall", "hidetag", "open", 'close', 'dis', 'kick', "add", 'invite'];
    if (!_0x59f7d7.includes(_0x338df7)) {
      return;
    }
    const _0x33769a = await _0x4a3968.groupMetadata(_0x5ad112.from);
    const _0x2b9f37 = _0x33769a.participants;
    const _0x374310 = _0x2b9f37.find(_0x356ddc => _0x356ddc.id === _0x579350)?.['admin'];
    const _0x3543fa = _0x2b9f37.find(_0x345f06 => _0x345f06.id === _0x5ad112.sender)?.['admin'];
    if (!_0x374310) {
      return _0x5ad112.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    if (!_0x3543fa) {
      return _0x5ad112.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");
    }
    switch (_0x338df7) {
      case "tagall":
        let _0x1a910a = "📢 *Attention Everyone!* 📢\n\n🔹 *Message:* " + (_0x2c7158 || "⚠️ No message provided ⚠️") + "\n\n";
        for (let _0x150f11 of _0x2b9f37) {
          _0x1a910a += "❒ @" + _0x150f11.id.split('@')[0] + "\n";
        }
        await _0x4a3968.sendMessage(_0x5ad112.from, {
          'text': _0x1a910a,
          'mentions': _0x2b9f37.map(_0x225c5c => _0x225c5c.id)
        }, {
          'quoted': _0x5ad112
        });
        break;
      case "hidetag":
        await _0x4a3968.sendMessage(_0x5ad112.from, {
          'text': "📢 *" + (_0x2c7158 || "⚠️ No message provided ⚠️") + '*',
          'mentions': _0x2b9f37.map(_0x4520c5 => _0x4520c5.id)
        }, {
          'quoted': _0x5ad112
        });
        break;
      case "open":
        await _0x4a3968.groupSettingUpdate(_0x5ad112.from, "not_announcement");
        await _0x5ad112.reply("✅ *Group is now open! Everyone can send messages.*");
        break;
      case 'close':
        await _0x4a3968.groupSettingUpdate(_0x5ad112.from, "announcement");
        await _0x5ad112.reply("🔒 *Group is now closed! Only admins can send messages.*");
        break;
      case 'dis':
        const _0x42fb9d = {
          "24h": 0x15180,
          '7d': 0x93a80,
          "90d": 0x76a700,
          off: 0x0
        };
        let _0x325ee4 = _0x42fb9d[_0x2bb048[0]];
        if (_0x325ee4 === undefined) {
          return await _0x5ad112.reply("⚠️ *Invalid duration! Use:* \n\n- `24h` (1 day)\n- `7d` (1 week)\n- `90d` (90 days)\n- `off` (Disable)");
        }
        try {
          const _0x5aae0a = {
            disappearingMessagesInChat: _0x325ee4
          };
          await _0x4a3968.sendMessage(_0x5ad112.from, _0x5aae0a);
          await _0x5ad112.reply(_0x325ee4 === 0 ? "🛑 *Disappearing messages have been turned OFF!*" : "✅ *Disappearing messages enabled for " + _0x2bb048[0] + '!*');
        } catch {
          await _0x5ad112.reply("❌ *Failed to update disappearing messages!*");
        }
        break;
      case 'kick':
        if (_0x2bb048.length === 0 && !_0x5ad112.quoted) {
          return await _0x5ad112.reply("⚠️ *Please mention a user or provide a number!*");
        }
        let _0x511ea3 = _0x5ad112.quoted ? _0x5ad112.quoted.sender : _0x2bb048[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        if (_0x511ea3 === _0x579350) {
          return await _0x5ad112.reply("⚠️ *I can't kick myself!*");
        }
        if (_0x511ea3 === _0x2163b3) {
          return await _0x5ad112.reply("⚠️ *I can't kick my owner!*");
        }
        if (!_0x2b9f37.find(_0xa7994a => _0xa7994a.id === _0x511ea3)) {
          return await _0x5ad112.reply("⚠️ *User is not in this group!*");
        }
        try {
          await _0x4a3968.groupParticipantsUpdate(_0x5ad112.from, [_0x511ea3], "remove");
          await _0x5ad112.reply("✅ *@" + _0x511ea3.split('@')[0] + " has been removed!*", {
            'mentions': [_0x511ea3]
          });
        } catch {
          await _0x5ad112.reply("❌ *Failed to remove the user!*");
        }
        break;
      case "add":
        if (_0x2bb048.length === 0) {
          return await _0x5ad112.reply("⚠️ *Please provide a phone number!*");
        }
        let _0x38a8a6 = _0x2bb048[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        if (_0x2b9f37.find(_0x206b1a => _0x206b1a.id === _0x38a8a6)) {
          return await _0x5ad112.reply("⚠️ *User is already in this group!*");
        }
        try {
          await _0x4a3968.groupParticipantsUpdate(_0x5ad112.from, [_0x38a8a6], "add");
          await _0x5ad112.reply("✅ *@" + _0x38a8a6.split('@')[0] + " has been added to the group!*", {
            'mentions': [_0x38a8a6]
          });
        } catch {
          await _0x5ad112.reply("❌ *Failed to add the user! Make sure the number is correct and can be added to the group.*");
        }
        break;
      case "invite":
        if (_0x2bb048.length === 0 && !_0x5ad112.quoted) {
          return await _0x5ad112.reply("⚠️ *Please mention a user or provide a number!*");
        }
        let _0x274341 = _0x5ad112.quoted ? _0x5ad112.quoted.sender : _0x2bb048[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        try {
          const _0x4263e5 = await _0x4a3968.groupInviteCode(_0x5ad112.from);
          const _0x14662a = "https://chat.whatsapp.com/" + _0x4263e5;
          const _0x213eab = await _0x4a3968.onWhatsApp(_0x274341);
          if (!_0x213eab.length) {
            return await _0x5ad112.reply("⚠️ *User not found on WhatsApp or privacy settings prevent inviting!*");
          }
          const _0x202d6d = {
            text: "📩 *You have been invited to join the group!*\n\n🔗 " + _0x14662a
          };
          await _0x4a3968.sendMessage(_0x274341, _0x202d6d);
          await _0x5ad112.reply("✅ *Invite link sent to @" + _0x274341.split('@')[0] + '!*', {
            'mentions': [_0x274341]
          });
        } catch {
          await _0x5ad112.reply("❌ *Failed to send invite link! Make sure the bot is an admin and the user can receive invites.*");
        }
        break;
      default:
        return;
    }
  } catch (_0x193395) {
    console.error("Error:", _0x193395);
    await _0x5ad112.reply("❌ *An error occurred while processing the command.*");
  }
};
export default GroupCmds;