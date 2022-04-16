// var
{
    var x = 2;
    // reassign
    x = 3;
    console.log(x);
    // redeclare
    var x = 10;
    console.log(x);
}
// Access `x` outside of the scope.
console.log(x);
// Modify `x` outside of the scope.
x = 4;
console.log(x);

// let
{
    let y = 2;
    // reassign
    y = 3;
    console.log(y);
    // !cannot redeclare
    // let y = 10;
}
// Cannot access outside of the scope.
// console.log(y);
// *outside `y` has its own scope.
let y = 4;
console.log(y);

// const
{
    const z = 2;
    // !cannot reassign
    // z = 3;
    // !cannot redeclare
    // const z = 10;
}
// Cannot access outside of the scope.
// console.log(z);
// *outside `z` has its own scope.
let z = 4;
console.log(z);
