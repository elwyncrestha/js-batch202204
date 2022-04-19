console.log('Lunch time!', new Date());
const hungryInterval = setInterval(() => console.log('Hungry customers!'), 2000);
setTimeout(kitchenFn, 10000);

function kitchenFn() {
    console.log('Rice is cooked!', new Date());
    clearInterval(hungryInterval);
    console.log('Food is served!');
    cleanTables();
    cleanKitchen();
}

function cleanKitchen() {
    callCleaners();
    cleanUtensils();
}

function callCleaners() {
    console.log('Cleaners called!');
}

function cleanUtensils() {
    console.log('Utensils called!');
}

function cleanTables() {
    console.log('Tables called!');
}
