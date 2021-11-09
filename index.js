// Code your solutions in this file
function writeCards(name, event) {
    const messages =[];
    for (let i = 0; i < name.length; i++){
        messages.splice(i,0, `Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(int) {
    let number = int;
    while (number >= 0) {
        console.log(number);
        number--;
    }
    return number;
}

