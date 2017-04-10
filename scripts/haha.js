module.exports = (robot) => {
  robot.hear(/hello/, (res) => {
    res.send('hello, world');
  });

  robot.hear(/how old are you?/, (res) => {
    res.reply('I am Five!');
  });

  robot.respond('念两句诗', (res) => {
    robot.emit('bearychat.attachment', {
      message: res.message,
      text: '当时我就念了',
      attachments: [
        {'text': '苟利国家生死以', color: '#cb3f20'},
        {'text': '岂因祸福避趋之', },
        {
          'images': [
            {url: 'https://img1.doubanio.com/view/status/median/public/11fd57b1170ab3a.jpg'},
          ],
        }
      ]
    });
  });

  robot.hear(/haha/i, (res) => {
    res.reply('SAY AGAIN?');
  });
}
