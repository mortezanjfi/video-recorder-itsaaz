const { exec } = require("child_process");
let args = process.argv;
args = args.slice(2);
let str = args.join(" ");

const cb = (err, strout, stdin) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log({ strout });
    console.log({ stdin });
  }
};

exec("git add .", cb);
exec(`git commit -m "${str}"`, cb);