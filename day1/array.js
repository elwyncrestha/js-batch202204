const foods = ['🍎', '🍌', '🥕', '🍩'];

console.log(foods.length);
console.log(foods.concat('🍇', '🥒'));
console.log(foods.includes('🍎'));
console.log(foods.indexOf('🥕'));
console.log(foods.join('🔪'));

foods.push('🍔')
console.log(foods);

console.log(foods.pop());
console.log(foods);

foods.unshift('🥭');
console.log(foods);

console.log(foods.shift());
console.log(foods);

console.log(foods.slice(1, 3));
console.log(foods.splice(1, 1));
