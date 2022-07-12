const smileyChecker = (array) => {
    const validSmileys = [':)',':-)',':~)',':D',':-D',':~D',';)',';D',';-)',';-D',';~)',';~D'];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < validSmileys.length; j++) {
            array[i] === validSmileys[j] ? counter += 1: counter = counter;
        }
    }
    return counter;
}

console.log(smileyChecker([':)', ':-D', ':(', ';-(', ';~D']));