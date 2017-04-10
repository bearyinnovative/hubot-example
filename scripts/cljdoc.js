const cljdoc = require('query-doc').cljdoc;

module.exports = (robot) => {
  robot.hear(/^cljdoc(.*)/i, (res) => {
    const keyword = res.match[1].trim();
    cljdoc(keyword).then((doc) => {
      res.send(`\`\`\`\n${doc.formatted}\n\`\`\``);
    }).catch((err) => {
      robot.logger.info('cljdoc failed', err);
      res.reply('sorry, found nothing');
    });
  });
}
