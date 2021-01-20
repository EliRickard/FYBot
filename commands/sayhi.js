module.exports = {
  name: "sayhi",
  cooldown: 0,
  description: "A command for the bot to tell you a little about it's self.",
  execute(message) {
    var bchannel = "<#801278369643102218>"
    message.channel.send("Hi, I'm FY Bot, I have now been merged with FY music bot to provide server management, role asignment and music for the " + '"Fuck You Network" server; For a full list of commands use "!help"').catch(console.error);
     message.channel.send('This bot is still in development and as new commands are added and improvements are made, updates will be posted in the ' + bchannel + ' channel.');
     message.channel.send('This bot is open source, visit the GitHub page for the bot using the following link ');
  }
};
