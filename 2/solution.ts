const file = await Deno.readTextFile("./input.txt");
const splited = file.split(/\r?\n/);
const matrix = splited.map((string) => string.split(" "));

let depth = 0;
let forward = 0;

for (let x of matrix) {
  switch (x[0]) {
    case "forward":
      forward += parseInt(x[1]);
      break;
    case "down":
      depth += parseInt(x[1]);
      break;
    case "up":
      depth -= parseInt(x[1]);
      break;
  }
}

const res = depth * forward;

console.log(res);

//PART 2

let aim = 0;
let depth2 = 0;
let forward2 = 0;

for (let x of matrix) {
  switch (x[0]) {
    case "forward":
      forward2 += parseInt(x[1]);
      if (aim != 0) {
        depth2 += aim * parseInt(x[1]);
      }
      break;
    case "down":
      aim += parseInt(x[1]);
      break;
    case "up":
      aim -= parseInt(x[1]);
      break;
  }
}

const res2 = depth2 * forward2;

console.log(res2);
