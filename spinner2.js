// process.stdout.write('hello from spinner1.js.... \rheyyy\n');
let time = 100;
let writeArr = ['\r|    ', '\r/    ', '\r-    ', "\r\\   "];
const characters = "|/-\\";
let index = 0;

for (let char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, time);
  time += 200;
}


// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);