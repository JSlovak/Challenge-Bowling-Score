

module.exports = function(frames) {

  var score = 0;

  for (var i= 0; i < frames.length; i++){

    var frameScore = frames[i].ball1 + frames[i].ball2;

    if (!(frames[i].hasOwnProperty("ball1")) || !(frames[i].hasOwnProperty("ball2")) || !(frames[i].hasOwnProperty("strike"))|| !(frames[i].hasOwnProperty("spare"))){
      throw new Error ("We are not able to get your score. Maybe get a beer? ");
    }

    if ( frame[i].strike === true){
      score += frameScore;

    }
    if (frame[i].spare === false){

    }

    score += frameScore;
  }

  return score;
};