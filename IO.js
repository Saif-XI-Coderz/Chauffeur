const readline = require('readline');
const fs = require('fs');

function read(filename){
  const input = readline.createInterface({
    input: fs.createReadStream(filename),
    crlfDelay: Infinity
  });
  let firstLine = true;
  let parameters = {};
  let rides = [];
  input.on('line', line => {
    let args = line.split(" ")
    if(firstLine){
      [parameters.R, parameters.C, parameters.F, parameters.N, parameters.B, parameters.T] = args;
    }
    else {
      rides.push({a: args[0],b: args[1],x: args[2],y: args[3],s: args[4],f: args[5]});
    }
    firstLine = false;
  });

  return new Promise(resolve => {
    input.on('close',resolve.bind(input, {parameters,rides}));
  });
}

function write(){

}

module.exports = {read, write};
