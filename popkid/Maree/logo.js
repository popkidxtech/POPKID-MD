const _0x57bbbc = function () {
  let _0x113c42 = true;
  return function (_0x1d5276, _0xbc4fa3) {
    const _0x1f95c2 = _0x113c42 ? function () {
      if (_0xbc4fa3) {
        const _0x214635 = _0xbc4fa3.apply(_0x1d5276, arguments);
        _0xbc4fa3 = null;
        return _0x214635;
      }
    } : function () {};
    _0x113c42 = false;
    return _0x1f95c2;
  };
}();
const _0xd7c2fd = _0x57bbbc(this, function () {
  return _0xd7c2fd.toString().search("(((.+)+)+)+$").toString().constructor(_0xd7c2fd).search("(((.+)+)+)+$");
});
_0xd7c2fd();
const _0x192ea8 = function () {
  let _0x28e6c8 = true;
  return function (_0x47c731, _0x43e51f) {
    const _0x14465b = _0x28e6c8 ? function () {
      if (_0x43e51f) {
        const _0x200380 = _0x43e51f.apply(_0x47c731, arguments);
        _0x43e51f = null;
        return _0x200380;
      }
    } : function () {};
    _0x28e6c8 = false;
    return _0x14465b;
  };
}();
const _0x49c553 = _0x192ea8(this, function () {
  let _0x1342e7;
  try {
    const _0x3ca19c = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1342e7 = _0x3ca19c();
  } catch (_0x19dae6) {
    _0x1342e7 = window;
  }
  const _0x6ab76d = _0x1342e7.console = _0x1342e7.console || {};
  const _0x59e3ab = ["log", "warn", "info", "error", 'exception', "table", 'trace'];
  for (let _0x5a3919 = 0; _0x5a3919 < _0x59e3ab.length; _0x5a3919++) {
    const _0x468cd7 = _0x192ea8.constructor.prototype.bind(_0x192ea8);
    const _0x54f39c = _0x59e3ab[_0x5a3919];
    const _0x192796 = _0x6ab76d[_0x54f39c] || _0x468cd7;
    _0x468cd7.__proto__ = _0x192ea8.bind(_0x192ea8);
    _0x468cd7.toString = _0x192796.toString.bind(_0x192796);
    _0x6ab76d[_0x54f39c] = _0x468cd7;
  }
});
_0x49c553();
import _0x47027c from '../../config.cjs';
import _0x5d7674 from 'node-fetch';
const logo = async (_0x89f4c, _0x25bca1) => {
  const _0x21fdf6 = _0x47027c.PREFIX;
  const _0x26786c = _0x89f4c.body.startsWith(_0x21fdf6) ? _0x89f4c.body.slice(_0x21fdf6.length).split(" ")[0].toLowerCase() : '';
  const _0x167dde = _0x89f4c.body.slice(_0x21fdf6.length + _0x26786c.length).trim();
  if (_0x26786c === 'logo') {
    if (!_0x167dde) {
      const _0x3ed1cd = {
        text: "*_Please provide a text to generate the logo._*"
      };
      return _0x25bca1.sendMessage(_0x89f4c.from, _0x3ed1cd, {
        'quoted': _0x89f4c
      });
    }
    const _0x2008d2 = "*🤍 POPKID-MD LOGO MAKER 💫*\n\n╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻\n" + ("*◈ Text:* " + _0x167dde + "\n") + "╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻\n\n" + "*🔢 Reply with a number to choose a style ➠*\n\n" + " 1 ➠ Black Pink\n" + " 2 ➠ Black Pink 2\n" + " 3 ➠ Silver 3D\n" + " 4 ➠ Naruto\n" + " 5 ➠ Digital Glitch\n" + " 6 ➠ Pixel Glitch\n" + " 7 ➠ Comic Style\n" + " 8 ➠ Neon Light\n" + " 9 ➠ Free Bear\n" + "10 ➠ Devil Wings\n" + "11 ➠ Sad Girl\n" + "12 ➠ Leaves\n" + "13 ➠ Dragon Ball\n" + "14 ➠ Handwritten\n" + "15 ➠ Neon Light \n" + "16 ➠ 3D Castle Pop\n" + "17 ➠ Frozen Christmas\n" + "18 ➠ 3D Foil Balloons\n" + "19 ➠ 3D Colourful Paint\n" + "20 ➠ American Flag 3D\n\n" + "> *© POWERED BY POPKID*";
    const _0x3438a3 = {
      text: _0x2008d2
    };
    const _0x5cee8d = await _0x25bca1.sendMessage(_0x89f4c.from, _0x3438a3, {
      'quoted': _0x89f4c
    });
    _0x25bca1.ev.on("messages.upsert", async _0x42e0f9 => {
      const _0x5d3b43 = _0x42e0f9.messages[0];
      if (!_0x5d3b43.message || !_0x5d3b43.message.extendedTextMessage) {
        return;
      }
      const _0x5a1307 = _0x5d3b43.message.extendedTextMessage.text.trim();
      if (_0x5d3b43.message.extendedTextMessage.contextInfo && _0x5d3b43.message.extendedTextMessage.contextInfo.stanzaId === _0x5cee8d.key.id) {
        const _0x50d44d = {
          '1': "https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html",
          '2': "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html",
          '3': "https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html",
          '4': "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html",
          '5': "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html",
          '6': "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html",
          '7': "https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html",
          '8': "https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html",
          '9': "https://en.ephoto360.com/free-bear-logo-maker-online-673.html",
          '10': "https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html",
          '11': "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
          '12': "https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html",
          '13': "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
          '14': "https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html",
          '15': "https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html",
          '16': "https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html",
          '17': "https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html",
          '18': "https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html",
          '19': "https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html",
          '20': "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html"
        };
        if (_0x50d44d[_0x5a1307]) {
          const _0x419efb = "https://api-pink-venom.vercel.app/api/logo?url=" + _0x50d44d[_0x5a1307] + '&name=' + _0x167dde;
          try {
            const _0x3d8d34 = await _0x5d7674(_0x419efb);
            const _0x2e06ea = await _0x3d8d34.json();
            const _0x427390 = {
              url: _0x2e06ea.result.download_url
            };
            const _0x2efd69 = {
              image: _0x427390,
              caption: "> *© POWERED BY POPKID*"
            };
            await _0x25bca1.sendMessage(_0x89f4c.from, _0x2efd69, {
              'quoted': _0x89f4c
            });
          } catch (_0x904aef) {
            console.error(_0x904aef);
            const _0x2092b6 = {
              text: "*_Error generating logo. Please try again later._*"
            };
            _0x25bca1.sendMessage(_0x89f4c.from, _0x2092b6, {
              'quoted': _0x89f4c
            });
          }
        } else {
          const _0x5a43fc = {
            text: "*_Invalid number. Please reply with a valid number._*"
          };
          _0x25bca1.sendMessage(_0x89f4c.from, _0x5a43fc, {
            'quoted': _0x89f4c
          });
        }
      }
    });
  }
};
export default logo;