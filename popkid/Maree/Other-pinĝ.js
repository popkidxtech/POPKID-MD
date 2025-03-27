import config from '../../config.cjs';

const fancyStyles = [
  "⭐ *𝙋𝙊𝙋𝙆𝙄𝘿-𝙈𝘿 𝙎𝙋𝙀𝙀𝘿:* ⚡",
  "🚀 *ᑭOᑭKIᗪ-ＭＤ ＳＰＥＥＤ:* 💨",
  "🔥 *ℙ𝕆ℙ𝕂𝕀𝔻-𝕄𝔻 𝕊ℙ𝔼𝔼𝔻:* ⚡",
  "✨ *𝓟𝓞𝓟𝓚𝓘𝓓-𝓜𝓓 𝓢𝓟𝓔𝓔𝓓:* 🚀",
  "💎 *ᴘᴏᴘᴋɪᴅ-𝙼𝙳 𝚂𝙿𝙴𝙴𝙳:* 🌟",
  "🔮 *𝖯𝖮𝖯𝖪𝖨𝖣－ＭＤ Ｓｐｅｅｄ:* ⚡",
  "💥 *𝐏𝐎𝐏𝐊𝐈𝐃-𝐌𝐃 𝐒𝐏𝐄𝐄𝐃:* 🚀",
  "🌀 *POPKIDＭＤ ＳＰＥＥＤ:* ⚡",
  "🎯 *ℙ𝕆ℙ𝕂𝕀𝔻 𝕄𝔻 𝕊ℙ𝔼𝔼𝔻:* 💥",
  "⚡ *𝗣𝗢𝗣𝗞𝗜𝗗-𝗠𝗗 𝗦𝗣𝗘𝗘𝗗:* 🌪️",
  "💫 *𝘗𝘖𝘗𝘒𝘐𝘋-𝘔𝘋 𝘚𝘗𝘌𝘌𝘋:* 🚀",
  "🌟 *𝙿𝙾𝙿𝙺𝙸𝙳-𝙼𝙳 𝚂𝙿𝙴𝙴𝙳:* 🔥",
  "🔰 *POPKID －ＭＤ ＳＰＥＥＤ:* ⚡",
  "🛸 *𝓟𝓞𝓟𝓚𝓘𝓓-𝑀𝒟 𝒮𝒫𝐸𝐸𝒟:* 💨",
  "🌪️ *𝙋𝙊𝙋𝙆𝙄𝘿-𝙈𝘿 𝙎𝙋𝙀𝙀𝘿:* 💎"
];

const colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🟤", "⚫", "⚪"];

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "ping") {
    const start = new Date().getTime();
    await m.React('⏳'); // Loading reaction
    const end = new Date().getTime();
    const responseTime = (end - start).toFixed(2);

    // Select a random fancy style and color
    const fancyText = fancyStyles[Math.floor(Math.random() * fancyStyles.length)];
    const colorEmoji = colors[Math.floor(Math.random() * colors.length)];

    const responseText = `${colorEmoji} *${fancyText}* *${responseTime}ms*`;

    await m.React('✅'); // Success reaction

    await sock.sendMessage(
      m.from,
      {
        text: responseText,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363290715861418@newsletter',
            newsletterName: "popkid",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "💝popkid💝",
            body: "Ping Speed Calculation",
            thumbnailUrl: 'https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp',
            sourceUrl: 'https://github.com/Popkiddevs/POPKID-XTECH/fork',
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default ping;
