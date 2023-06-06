let fs = require('fs');
fs.writeFile('write.txt', `Come on, flip the pickle, 
Morty, you're not gonna regret it. 
The payoff is huge. 
I turned myself into a pickle, Morty! Boom! Big reveal! 
I'm a pickle! What do you think about that? I turned myself into a pickle! 
W-w-what are you just staring at me for, bro, I turned myself into a pickle,
Morty.`, function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});

fs.appendFile('write.txt', ` I'M A PICKLE! I'm pickle Riiiiiick!` + '\n', function (err) {
    if (err) {
        console.error(err)
    }
});

fs.unlink('write.txt', function (err) {
    console.log('write operation complete.');
});


