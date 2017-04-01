/*jshint esversion: 6*/

var chai = require("chai");
var expect = chai.expect;
var bowling = require("../bowling");

var oneFrame = [ { ball1: 2,
                    ball2: 3,
                    spare: false,
                    strike: false
                  }
                ];

var twoFrames =  [ { ball1: 2,
                      ball2: 3,
                      spare: false,
                      strike: false
                    },
                    { ball1: 2,
                      ball2: 3,
                      spare: false,
                      strike: false
                    }
                  ];

var goodBowl = [  { ball1: 10,
                    ball2: 0,
                    spare: false,
                    strike: true
                  },
                  { ball1: 7,
                    ball2: 3,
                    spare: true,
                    strike: false
                  },
                  { ball1: 5,
                    ball2: 5,
                    spare: true,
                    strike: false
                  },
                  { ball1: 0,
                    ball2: 10,
                    spare: true,
                    strike: false
                  },
                  { ball1: 10,
                    ball2: 0,
                    spare: false,
                    strike: true
                  }
              ];

var strikeBowl = [  { ball1: 10,
                    ball2: 0,
                    spare: false,
                    strike: true
                  },
                  { ball1: 10,
                    ball2: 0,
                    spare: false,
                    strike: true
                  },
                  { ball1: 10,
                    ball2: 0,
                    spare: false,
                    strike: true
                  },
                  { ball1: 10,
                    ball2: 0,
                    spare: false,
                    strike: true
                  }
              ];

var spareBowl = [  { ball1: 3,
                    ball2: 7,
                    spare: true,
                    strike: false
                  },
                  { ball1: 9,
                    ball2: 1,
                    spare: true,
                    strike: false
                  },
                  { ball1: 5,
                    ball2: 5,
                    spare: true,
                    strike: false
                  },
                  { ball1: 2,
                    ball2: 8,
                    spare: true,
                    strike: false
                  },
                  { ball1: 2,
                    ball2: 3,
                    spare: false,
                    strike: false
                  },
                   { ball1: 0,
                    ball2: 5,
                    spare: false,
                    strike: false
                  }
              ];



describe("add", function(){

  it("should be a function", function(){
    expect(bowling).to.be.a("function");
  });

  it("should return a final-score in a number data-type", function(){
    expect(bowling(oneFrame)).to.be.a("number");
    expect(bowling.bind(null,[{}])).to.throw(Error);
  });

  it("should take the argument 'frames' values of keys 'frameScore' and add it to final-score ", function(){
    expect(bowling(oneFrame)).to.equal(5);
    expect(bowling(twoFrames)).to.equal(10);
  });

  it("should be able to determine if a frame is a spare and award bonus points", function(){
    expect(bowling(spareBowl)).to.equal(68);

  });

  it("should be able to determine if a frame was a strike and award bonus points", function(){
    expect(bowling(goodBowl)).to.equal(65);
    expect(bowling(strikeBowl)).to.equal(70);
    expect(bowling(spareBowl)).to.equal(68);

  });

  it.skip ("should be able to apply award bonus to the last (tenth) frame", function(){

  });

});