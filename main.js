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

bootstrap();
