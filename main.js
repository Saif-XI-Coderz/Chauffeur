let IO = require("./IO.js");

async function bootstrap(){
  var {parameters, rides} = await IO.read(process.argv[2]);

  console.info("parameters", parameters);
  console.info("rides", rides);
}

bootstrap();
