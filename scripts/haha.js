module.exports = (robot) => {
  robot.hear(/hello/, (res) => {
    res.send('hello, world');
  });

  robot.hear(/how old are you?/, (res) => {
    res.reply('I am Five!');
  });

  robot.hear(/haha/i, (res) => {
    res.reply('SAY AGAIN?');
  });
}
