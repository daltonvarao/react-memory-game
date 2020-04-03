export function shuffle(array = []) {
  array.forEach((item, index) => {
    let randomIndexOne = Math.floor(Math.random() * (array.length - 1));
    let randomIndexTwo = Math.floor(Math.random() * (array.length - 1));

    let tmpRandomPosition = array[randomIndexOne];

    array[randomIndexOne] = array[randomIndexTwo];
    array[randomIndexTwo] = tmpRandomPosition;
  });
}
