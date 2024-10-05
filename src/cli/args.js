const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsMap = [];
  for (let i = 0; i < args.length; i += 2) {
    argsMap.push([args[i].slice(2), args[i + 1]]);
  }
  const resultText = argsMap.reduce((msg, arg, argIndex, args) => {
    return msg + `${arg[0]} is ${arg[1]}` + (argIndex + 1 !== args.length ? ", " : "");
  }, "");
  console.log(resultText);
};

parseArgs();
