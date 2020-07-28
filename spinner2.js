/* Animates an array of strings with a spinner example */
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