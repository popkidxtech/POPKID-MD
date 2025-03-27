const _0x44c2e7 = function () {
  const _0x2512e8 = {
    bXVtw: function (_0x4ba601, _0x2a7c87) {
      return _0x4ba601 === _0x2a7c87;
    }
  };
  _0x2512e8.xIgXS = "FrJdF";
  _0x2512e8.AJmVx = "JUMwL";
  _0x2512e8.OFFjf = 'bEycE';
  let _0x5ec8c3 = true;
  return function (_0x4aad81, _0x42dbb4) {
    const _0x13407c = {
      'tyyom': function (_0x515ec7, _0x15e967) {
        return _0x515ec7 === _0x15e967;
      },
      'kAfuC': _0x2512e8.xIgXS,
      'PuWyf': _0x2512e8.AJmVx
    };
    if (_0x2512e8.OFFjf === "bEycE") {
      const _0x46c545 = _0x5ec8c3 ? function () {
        if (_0x42dbb4) {
          if (_0x13407c.kAfuC === _0x13407c.PuWyf) {
            const _0x4930ec = _0x1b7e38.apply(_0x5c26a7, arguments);
            _0x44a976 = null;
            return _0x4930ec;
          } else {
            const _0x258eaf = _0x42dbb4.apply(_0x4aad81, arguments);
            _0x42dbb4 = null;
            return _0x258eaf;
          }
        }
      } : function () {};
      _0x5ec8c3 = false;
      return _0x46c545;
    } else {
      const _0x1fe461 = {
        text: "*❌ Please provide a Twitter link.*\n\n📌 *Example:* .twitter https://twitter.com/example/status/123456"
      };
      const _0x43073d = {
        quoted: _0x50bd64
      };
      return _0x557e32.sendMessage(_0x1ab2ab.from, _0x1fe461, _0x43073d);
    }
  };
}();
const _0x2679f9 = _0x44c2e7(this, function () {
  return _0x2679f9.toString().search("(((.+)+)+)+$").toString().constructor(_0x2679f9).search("(((.+)+)+)+$");
});
_0x2679f9();
const _0x31c11f = function () {
  const _0x6fcec1 = {
    ZRZUu: "(((.+)+)+)+$"
  };
  _0x6fcec1.NJXon = "vhXDs";
  _0x6fcec1.dCOku = "CpBSm";
  let _0x32a3a6 = true;
  return function (_0x38f2d7, _0x31778e) {
    const _0xe65f08 = {
      CHApa: "(((.+)+)+)+$",
      ZwFrl: function (_0x57cc47, _0x35c81c) {
        return _0x57cc47 === _0x35c81c;
      }
    };
    _0xe65f08.ftmjp = _0x6fcec1.NJXon;
    _0xe65f08.jQVDl = _0x6fcec1.dCOku;
    _0xe65f08.tWtOd = "vcSuF";
    const _0x31bef4 = _0x32a3a6 ? function () {
      if (_0xe65f08.ftmjp === _0xe65f08.ftmjp) {
        if (_0x31778e) {
          if (_0xe65f08.jQVDl === _0xe65f08.tWtOd) {
            const _0x464573 = _0xd0aaa3 ? function () {
              if (_0x5c77f9) {
                const _0x12726f = _0xd996c.apply(_0x31b0b8, arguments);
                _0x52e2b7 = null;
                return _0x12726f;
              }
            } : function () {};
            _0x3ca927 = false;
            return _0x464573;
          } else {
            const _0x2cbf50 = _0x31778e.apply(_0x38f2d7, arguments);
            _0x31778e = null;
            return _0x2cbf50;
          }
        }
      } else {
        return _0x160cca.toString().search("(((.+)+)+)+$").toString().constructor(_0x46c411).search("(((.+)+)+)+$");
      }
    } : function () {};
    _0x32a3a6 = false;
    return _0x31bef4;
  };
}();
const _0x2746d4 = _0x31c11f(this, function () {
  let _0x26c4a7;
  try {
    const _0x4e4902 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x26c4a7 = _0x4e4902();
  } catch (_0xdaafd) {
    _0x26c4a7 = window;
  }
  const _0xfd68e5 = _0x26c4a7.console = _0x26c4a7.console || {};
  const _0x46b8c0 = ['log', "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x107654 = 0; _0x107654 < _0x46b8c0.length; _0x107654++) {
    const _0x16e37f = _0x31c11f.constructor.prototype.bind(_0x31c11f);
    const _0x32dde4 = _0x46b8c0[_0x107654];
    const _0x5560f5 = _0xfd68e5[_0x32dde4] || _0x16e37f;
    _0x16e37f.__proto__ = _0x31c11f.bind(_0x31c11f);
    _0x16e37f.toString = _0x5560f5.toString.bind(_0x5560f5);
    _0xfd68e5[_0x32dde4] = _0x16e37f;
  }
});
_0x2746d4();
import _0xdb01d5 from 'axios';
import _0x5d2bbb from '../../config.cjs';
const twitter = async (_0x1d58d8, _0x5bfe47) => {
  const _0x3b51b6 = _0x5d2bbb.PREFIX;
  const _0x583ad0 = _0x1d58d8.body.startsWith(_0x3b51b6) ? _0x1d58d8.body.slice(_0x3b51b6.length).split(" ")[0].toLowerCase() : '';
  const _0x4f489a = _0x1d58d8.body.slice(_0x3b51b6.length + _0x583ad0.length).trim();
  if (_0x583ad0 === "twitter" || _0x583ad0 === 'tweet') {
    if (!_0x4f489a) {
      const _0x26c302 = {
        text: "*❌ Please provide a Twitter link.*\n\n📌 *Example:* .twitter https://twitter.com/example/status/123456"
      };
      return _0x5bfe47.sendMessage(_0x1d58d8.from, _0x26c302, {
        'quoted': _0x1d58d8
      });
    }
    const _0x23af4a = "https://api.paxsenix.biz.id/dl/twitter?url=" + encodeURIComponent(_0x4f489a);
    const _0x360926 = {
      text: "🔄 *Fetching Twitter media...*"
    };
    await _0x5bfe47.sendMessage(_0x1d58d8.from, _0x360926, {
      'quoted': _0x1d58d8
    });
    try {
      const _0x49a6af = await _0xdb01d5.get(_0x23af4a);
      const {
        ok: _0xdecaab,
        desc: _0x1df377,
        HD: _0x3f7ece,
        SD: _0x49e4b3,
        audio: _0x3ce945
      } = _0x49a6af.data;
      if (!_0xdecaab) {
        const _0x3de716 = {
          text: "*❌ Failed to retrieve the media. The API may be down or the link is invalid.*"
        };
        return _0x5bfe47.sendMessage(_0x1d58d8.from, _0x3de716, {
          'quoted': _0x1d58d8
        });
      }
      if (_0x3f7ece) {
        const _0x56fec6 = {
          'url': _0x3f7ece
        };
        const _0x2ccea3 = {
          video: _0x56fec6,
          caption: "🎥 *Twitter Video (HD)*\n\n*_DOWNLOADED BY POPKID-MD_*"
        };
        await _0x5bfe47.sendMessage(_0x1d58d8.from, _0x2ccea3, {
          'quoted': _0x1d58d8
        });
      } else {
        if (_0x49e4b3) {
          const _0x43acfb = {
            'url': _0x49e4b3
          };
          const _0x317d46 = {
            video: _0x43acfb,
            caption: "🎥 *Twitter Video (SD)*\n\n*_DOWNLOADED BY POPKID-MD_*"
          };
          await _0x5bfe47.sendMessage(_0x1d58d8.from, _0x317d46, {
            'quoted': _0x1d58d8
          });
        } else {
          if (_0x3ce945) {
            const _0x3c7f32 = {
              url: _0x3ce945
            };
            const _0x526aa1 = {
              audio: _0x3c7f32,
              mimetype: 'audio/mp4',
              caption: "🎵 *Twitter Audio*\n\n*_DOWNLOADED BY POPKID-MD_*"
            };
            await _0x5bfe47.sendMessage(_0x1d58d8.from, _0x526aa1, {
              'quoted': _0x1d58d8
            });
          } else {
            const _0x23baf6 = {
              text: "*❌ No media found in this link.*"
            };
            await _0x5bfe47.sendMessage(_0x1d58d8.from, _0x23baf6, {
              'quoted': _0x1d58d8
            });
          }
        }
      }
    } catch (_0x23ceb4) {
      console.error(_0x23ceb4);
      const _0x4f36e4 = {
        text: "*❌ An error occurred while processing your request. Please try again later.*"
      };
      return _0x5bfe47.sendMessage(_0x1d58d8.from, _0x4f36e4, {
        'quoted': _0x1d58d8
      });
    }
  }
};
export default twitter;