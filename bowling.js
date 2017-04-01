

module.exports = function(frames) {

  var score = 0;

  for (var i= 0; i < frames.length; i++){
    var isNotScore = !(frames[i].hasOwnProperty("ball1")) || !(frames[i].hasOwnProperty("ball2")) || !(frames[i].hasOwnProperty("strike"))|| !(frames[i].hasOwnProperty("spare"));
    var frameScore = frames[i].ball1 + frames[i].ball2;


    if (isNotScore){
      throw new Error ("We are not able to get your score. Maybe get a beer? ");
    }

    if (frames[i].spare === true){
      var spareBonus = frames[i+1].ball1;

      score += frameScore;
      score += spareBonus;
    }

    if (frames[i].strike === true){

        if (frames[i+1] !== undefined && frames[i+1].strike === true){
          var strikeBonusStrikes = frames[i+1].ball1 + frames[i+2].ball1;
          frameScore += strikeBonusStrikes;

        }

        if(frames[i+1] !== undefined && frames[i+1].strike !== true){
          var strikeBonus = frames[i+1].ball1 + frames[i+1].ball2;
          frameScore += strikeBonus;
        }
      score += frameScore;
    }

    if (frames[i].spare !== true && frames[i].strike !== true){
    score += frameScore;

    }

    console.log(score);
    console.log(frameScore);
    console.log(bonus);
    console.log(score);
  }
  return score;
};