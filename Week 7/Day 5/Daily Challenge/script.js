function bottles() {
    let bottle = prompt(`Enter a number so we can start counting bottles`)
    for (let n=1; bottle>=0; n++){
        if (bottle>n){
        wordsOfSong(bottle,n)
        bottle -= n;
        } else {
        n=bottle;
        wordsOfSong(bottle,n);
        return;
        }
    }
}

function wordsOfSong(bottle, down) {
    if (bottle === 1){
        console.log(
        `${bottle} bottle of beer on the wall
        ${bottle} bottle of beer
        Take ${down} down, pass it around
        ${bottle-down} bottle of beer on the wall`)
    } else if (bottle === down) {
        console.log(`
        ${bottle} bottles of beer on the wall
        ${bottle} bottles of beer
        Take ${down} down, pass them around
        ${bottle-down} bottle of beer on the wall`)
    } else {
        console.log(`
        ${bottle} bottles of beer on the wall
        ${bottle} bottles of beer
        Take ${down} down, pass them around
        ${bottle-down} bottles of beer on the wall`)
    }
}

bottles()