let IO = require("./IO.js");

async function bootstrap(){
  var {parameters, rides} = await IO.read(process.argv[2]);
  console.info("parameters", parameters);
  console.info("rides", rides);
  console.info(rides.map(ride => getDistance({r:ride.a,c:ride.b},{r:ride.x,c:ride.y})));
  console.info(nearestPickup({r:0,c:3}, rides))
}

function getDistance(start, end) {
  return Math.abs(start.r-end.r) + Math.abs(start.c-end.c);
}

function nearestPickup(position, rides){
  return rides.reduce(
    (nearestRide,ride) => getDistance({r:ride.a,c:ride.b},position) < getDistance({r:nearestRide.a,c:nearestRide.b},position) ? ride : nearestRide
  );
}

function getFinishPoint(ride){
  return { r:ride.x, c:ride.y};
}

bootstrap();
