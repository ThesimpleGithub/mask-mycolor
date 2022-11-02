const map = new Map();
const arr = new Array(100000).fill(0);
for (let i = 0; i < 1000000; i++) {
  map.set(i, 0);
}

//데이터 생성 후z

function test1() {
  for (let i = 0; i < 1000000; i++) {
    map.delete(i);
  }
}

function test2() {
  for (let i = 0; i < 1000000; i++) {
    arr.splice(i, 1);
  }
}

console.time('map delete');
test1();
console.timeEnd('map delete');

console.time('arr delete');
test2();
console.timeEnd('arr delete');
