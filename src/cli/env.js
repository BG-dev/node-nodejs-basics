const parseEnv = () => {
  const args = Object.entries(process.env);
  const filteredArgs = args.filter((arg) => arg[0].startsWith("RSS_"));

  const resultText = filteredArgs.reduce((msg, arg, argIndex, args) => {
    return msg + `${arg[0]}=${arg[1]}` + (argIndex + 1 !== args.length ? "; " : "");
  }, "");
  console.log(resultText);
};

parseEnv();
