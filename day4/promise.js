console.log('Lunch time!', new Date());

const hungryInterval = setInterval(() => console.log('Hungry customers!'), 2000);

const pr = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Rice is cooked!'), 5000);
});
pr.then(kitchenFn);

function kitchenFn(v) {
    console.log(v, new Date());
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
