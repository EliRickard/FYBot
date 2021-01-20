module.exports = {
  name: "gay",
  cooldown: 0,
  description: "Run the gay test on a friend. !gay (Name)",
  execute(message, args) {
    
var rndtime = Math.floor(Math.random() * 56) + 12;
 if ((args == "elir") | (args == "eli") | (args == "Eli") | (args == "eli rickard") | (args == "Eli,rickard") | (args == "Eli,Rickard") | (args == "eli,Rickard") | (args == "ELI,RICKARD") | (args == "ELI")) {
    result = message.channel.send('Calculating...');
               message.channel.send('```css\n-/--------------------------------- \n```'); 
               message.channel.send('After generative AI, genome sequencing, social media scanning and deep learning analysis;\nthe "Fuck You bot" has determined that **' + args + '** is, **_not gay._**');
               message.channel.send('Calculation time: *0.' + rndtime +"s*" );
               message.channel.send('```css\n-/--------------------------------- \n```');

  } else {
    result = message.channel.send('Calculating...');
               message.channel.send('```diff\n-/--------------------------------- \n```');
               message.channel.send('After generative AI, genome sequencing, social media scanning and deep learning analysis;\nthe "Fuck You bot" has determined that **' + args + '** is, **_gay._**');
               message.channel.send('Calculation time: *0.' + rndtime +"s*" );
               message.channel.send('```diff\n-/--------------------------------- \n```');

  }


  }
};