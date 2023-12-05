const forLoopExample = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const forOfLoopExample = (array) => {
  for (const element of array) {
    console.log(element);
  }
};

const forEachExample = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

const mapExample = (array) => {
  const newArray = array.map((element) => {
    return element * 2;
  });
  console.log(newArray);
};

const filterExample = (array) => {
  const filteredArray = array.filter((element) => {
    return element > 2;
  });
  console.log(filteredArray);
};

const reduceExample = (array) => {
  const sum = array.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  console.log(sum);
};

const findExample = (array) => {
  const foundElement = array.find((element) => {
    return element === 3;
  });
  console.log(foundElement);
};

const someExample = (array) => {
  const hasEvenNumber = array.some((element) => {
    return element % 2 === 0;
  });
  console.log(hasEvenNumber);
};

const everyExample = (array) => {
  const allEvenNumbers = array.every((element) => {
    return element % 2 === 0;
  });
  console.log(allEvenNumbers);
};

const array = [1, 2, 3, 4, 5];
const evenNumbers = [2, 4, 6, 8, 10];

// Loops
forLoopExample(array);
forOfLoopExample(array);

// Methods
forEachExample(array);
mapExample(array);
filterExample(array);
reduceExample(array);
findExample(array);
someExample(array);
everyExample(evenNumbers);
