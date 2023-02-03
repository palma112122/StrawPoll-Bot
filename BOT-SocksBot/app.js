const botPoll = require('strawpoll-bots').default;
const { join } = require('path');
console.log("Iniciando bot :)");


// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.com/polls/BJnX84GJOnv', 4, false, null, 1800);
