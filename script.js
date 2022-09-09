import getElements from './for-each.js';
import train from './array.js';
import getElementsForIn from './for-in.js';
import getElementsForOf from './for-of.js';

console.log("For-Each loop");
getElements(train);
console.log("For-In Loop");
getElementsForIn(train);
console.log("For-Of loop");
getElementsForOf(train);