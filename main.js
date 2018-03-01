let IO = require("./IO.js");

async function bootstrap(){
  var {parameters, rides} = await IO.read(process.argv[2]);

  console.info("parameters", parameters);
  console.info("rides", rides);

    for(var i =0; i<rides.length; i++) {
        console.log(calcDistance(parseInt(rides[i]['y'] )+ parseInt(rides[i]['x']), (parseInt(rides[i]['a'] )+ parseInt(rides[i]['b']))));
        //console.log(Math.abs((parseInt(rides[i]['y'] )+ parseInt(rides[i]['x'])) - (parseInt(rides[i]['a'] )+ parseInt(rides[i]['b']))));
    }
}
function calcDistance (objA, objB) {

    return Math.abs(objA-objB);
}

bootstrap();
