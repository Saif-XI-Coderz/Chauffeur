let IO = require("./IO.js");

async function bootstrap() {
    var {parameters, rides} = await IO.read(process.argv[2]);
    console.info("parameters", parameters);
    console.info("rides", rides);
    console.info(rides.map(ride => getDistance(getStartPoint(ride), getFinishPoint(ride))));
    console.info(nearestPickup({r: 2, c: 2}, rides))
}

function getDistance(start, end) {
  return Math.abs(start.r - end.r) + Math.abs(start.c - end.c);
}

function nearestPickup(position, rides) {
  return rides.reduce(
    (nearestRide, ride) => getDistance(getStartPoint(ride) , position) < getDistance(getStartPoint(nearestRide), position) ? ride : nearestRide
  );
}

function getFinishPoint(ride) {
    return {r: ride.x, c: ride.y};
}

function getStartPoint(ride) {
    return {r: ride.a, c: ride.b};
}

bootstrap();
