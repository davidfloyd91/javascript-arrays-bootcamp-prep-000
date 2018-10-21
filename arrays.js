var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

function addElementToBeginningOfArray(array,element) {
  return [element, ...array];
};

function addElementToEndOfArray(array, element) {
  [...array, element];
  return array;
};

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
};

function accessElementInArray(array, element) {
  return array[2];
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
};

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
};

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
};

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
};
