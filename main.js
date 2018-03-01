let IO = require("./IO.js");

async function bootstrap(){
  var {parameters, rides} = await IO.read(process.argv[2]);
  console.info("parameters", parameters);
  console.info("rides", rides);
  console.info(rides.map(ride => distance({r:ride.a,c:ride.b},{r:ride.x,c:ride.y})));
}

function distance(start, end) {
  return Math.abs(start.r-end.r) + Math.abs(start.c-end.c);
}

function getClosesDist(x, y, rides) {
    console.log(x, y)

    var distOrig = calcDistance(x, y);
    var objCoordinateNext = {a:'',b:''};
    var distance = 0;
    for(var i =0; i<rides.length; i++) {
        if(distance == 0) {
            distance = calcDistance((parseInt(x) + parseInt(y)) , parseInt(rides[i]['a'] )+ parseInt(rides[i]['b']));
            objCoordinateNext['a'] = rides[i]['a'];
            objCoordinateNext['b'] = rides[i]['b'];
        }
        if(calcDistance((parseInt(x) + parseInt(y)) , parseInt(rides[i]['a'] )+ parseInt(rides[i]['b'])) < distance) {
            distance = calcDistance((parseInt(x) + parseInt(y)) , parseInt(rides[i]['a'] )+ parseInt(rides[i]['b']));
            objCoordinateNext['a'] = rides[i]['a'];
            objCoordinateNext['b'] = rides[i]['b'];
        }
    }

    console.log(objCoordinateNext)
}

bootstrap();
