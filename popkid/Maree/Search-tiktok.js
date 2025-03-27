const _0xad9dd1 = function () {
  let _0xc46339 = true;
  return function (_0x3ede7e, _0x47fa8d) {
    const _0x51a7b1 = _0xc46339 ? function () {
      if (_0x47fa8d) {
        const _0x85a82a = _0x47fa8d.apply(_0x3ede7e, arguments);
        _0x47fa8d = null;
        return _0x85a82a;
      }
    } : function () {};
    _0xc46339 = false;
    return _0x51a7b1;
  };
}();
const _0x233594 = _0xad9dd1(this, function () {
  return _0x233594.toString().search("(((.+)+)+)+$").toString().constructor(_0x233594).search("(((.+)+)+)+$");
});
_0x233594();
const _0x24fedc = function () {
  let _0x24385f = true;
  return function (_0x301590, _0x2dc491) {
    const _0x13ef09 = _0x24385f ? function () {
      if (_0x2dc491) {
        const _0x2c26df = _0x2dc491.apply(_0x301590, arguments);
        _0x2dc491 = null;
        return _0x2c26df;
      }
    } : function () {};
    _0x24385f = false;
    return _0x13ef09;
  };
}();
const _0x6a85b5 = _0x24fedc(this, function () {
  let _0x2a11ac;
  try {
    const _0x227d89 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2a11ac = _0x227d89();
  } catch (_0x3c4d54) {
    _0x2a11ac = window;
  }
  const _0x1f1f1a = _0x2a11ac.console = _0x2a11ac.console || {};
  const _0x14c991 = ["log", "warn", "info", "error", 'exception', 'table', "trace"];
  for (let _0x3f6eda = 0; _0x3f6eda < _0x14c991.length; _0x3f6eda++) {
    const _0x8bfb98 = _0x24fedc.constructor.prototype.bind(_0x24fedc);
    const _0x40a89b = _0x14c991[_0x3f6eda];
    const _0x2c1645 = _0x1f1f1a[_0x40a89b] || _0x8bfb98;
    _0x8bfb98.__proto__ = _0x24fedc.bind(_0x24fedc);
    _0x8bfb98.toString = _0x2c1645.toString.bind(_0x2c1645);
    _0x1f1f1a[_0x40a89b] = _0x8bfb98;
  }
});
_0x6a85b5();
import _0x417554 from 'node-fetch';
import _0x30ad06 from '../../config.cjs';
const tiktoksearch = async (_0x1d0e6b, _0x2215d6) => {
  const _0x7a1735 = _0x30ad06.PREFIX;
  const _0x15112d = _0x1d0e6b.body.startsWith(_0x7a1735) ? _0x1d0e6b.body.slice(_0x7a1735.length).split(" ")[0].toLowerCase() : '';
  const _0x277d54 = _0x1d0e6b.body.slice(_0x7a1735.length + _0x15112d.length).trim();
  if (_0x15112d === "tiktoksearch" || _0x15112d === "tiktoks" || _0x15112d === "tiks") {
    if (!_0x277d54) {
      const _0x531421 = {
        text: "🌸 What do you want to search on TikTok?\n\n*Usage Example:*\n.tiktoksearch <query>"
      };
      return _0x2215d6.sendMessage(_0x1d0e6b.from, _0x531421, {
        'quoted': _0x1d0e6b
      });
    }
    await _0x1d0e6b.React('⌛');
    try {
      const _0xfdb3a5 = {
        text: "🔎 Searching TikTok for: *" + _0x277d54 + '*'
      };
      _0x2215d6.sendMessage(_0x1d0e6b.from, _0xfdb3a5, {
        'quoted': _0x1d0e6b
      });
      const _0x458293 = await _0x417554("https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=" + encodeURIComponent(_0x277d54));
      const _0x562a27 = await _0x458293.json();
      if (!_0x562a27 || !_0x562a27.data || _0x562a27.data.length === 0) {
        await _0x1d0e6b.React('❌');
        const _0x42ce4b = {
          text: "❌ No results found for your query. Please try with a different keyword."
        };
        return _0x2215d6.sendMessage(_0x1d0e6b.from, _0x42ce4b, {
          'quoted': _0x1d0e6b
        });
      }
      const _0xb16049 = _0x562a27.data.slice(0, 7).sort(() => Math.random() - 0.5);
      for (const _0x55e213 of _0xb16049) {
        const _0x41e21c = "🌸 *_Sarkar-MD TikTok Video Result_* :\n\n" + ("*• Title*: " + _0x55e213.title + "\n") + ("*• Author*: " + (_0x55e213.author || "Unknown") + "\n") + ("*• Duration*: " + (_0x55e213.duration || "Unknown") + "\n") + ("*• URL*: " + _0x55e213.link + "\n\n");
        if (_0x55e213.nowm) {
          const _0x3ca53b = {
            url: _0x55e213.nowm
          };
          const _0x9ce5ff = {
            newsletterJid: "120363290715861418@newsletter",
            newsletterName: "popkid",
            serverMessageId: -1
          };
          const _0x4bb6da = {
            title: "popkid",
            body: "TikTok Search Results",
            thumbnailUrl: "https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp",
            sourceUrl: "https://github.com/Popkiddevs/POPKID-XTECH/fork",
            mediaType: 0x1,
            renderLargerThumbnail: false
          };
          const _0x43d0ab = {
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x9ce5ff,
            forwardingScore: 0x3e7,
            externalAdReply: _0x4bb6da
          };
          const _0x41464c = {
            video: _0x3ca53b,
            caption: _0x41e21c,
            contextInfo: _0x43d0ab
          };
          await _0x2215d6.sendMessage(_0x1d0e6b.from, _0x41464c, {
            'quoted': _0x1d0e6b
          });
        } else {
          const _0x55809a = {
            text: "❌ Failed to retrieve video for *\"" + _0x55e213.title + "\"*."
          };
          _0x2215d6.sendMessage(_0x1d0e6b.from, _0x55809a, {
            'quoted': _0x1d0e6b
          });
        }
      }
      await _0x1d0e6b.React('✅');
    } catch (_0x3745e7) {
      console.error("Error in TikTokSearch command:", _0x3745e7);
      await _0x1d0e6b.React('❌');
      const _0x542c27 = {
        text: "❌ An error occurred while searching TikTok. Please try again later."
      };
      _0x2215d6.sendMessage(_0x1d0e6b.from, _0x542c27, {
        'quoted': _0x1d0e6b
      });
    }
  }
};
export default tiktoksearch;