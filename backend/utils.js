 const randomize = (str, len=1)=>{
    const min = 10000;
    const max = 99900;
    return Math.floor(Math.random() * (max-min)+ min);
}

module.exports = randomize;
