/* Animates an array of strings */
const spin = function(arr) {
  let timer = 100;
  for (const el of arr) {
    setTimeout(() => {
      write(el);
    }, timer);
    timer += 200;
  }
};

const write = function(str) {
  process.stdout.write('\r' + str + '   ');
};

const spinVal = ['|', '/', '-', '\\', '|'];
spin(spinVal);