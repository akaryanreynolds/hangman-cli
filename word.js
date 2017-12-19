
var WordBank = ['kawasaki', 'ducati', 'honda', 'yamaha', 'suzuki', 'ktm', 'bmw', 'harley', 'triumph', 'indian', 'husqvarna', 'zero'];

var RandomWords = function(){
    var index = Math.floor(Math.random() * WordBank.length);
    this.word = WordBank[index];
    this.lettersLength = WordBank[index].length;
    //console.log(this.word)
}

module.exports = RandomWords