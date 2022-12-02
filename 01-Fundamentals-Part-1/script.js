"use strict";

/*  ***************************************************************************************************
 *   Example Operator math
 *  ***************************************************************************************************/
{
    const now = 2022;
    const ageStepan = now - 2001;
    const ageBoy = now - 1991;

    console.log(ageStepan, ageBoy);
    console.log(ageStepan * 2, ageBoy / 10, 2 ** 3); // 2 ** 3 = 2 * 2 * 2
}

/*  ***************************************************************************************************
 *   Example Operator assignment
 *  ***************************************************************************************************/
{
    let X = 3 + 15; // the answer 18
    X += 10; // the answer X = X + 10 = 28
    X *= 2; // the answer X = X * 2 = 56
    X++; // the answer X = X + 1 = 57
    ++X; // the answer X = X + 1 = 58
    X--; // the answer X = X - 1 = 57
    --X; // the answer X = X - 1 = 56
    console.log(X);
}

/*  ***************************************************************************************************
 *   TYPE CONVERSION AND COERCION
 *  ***************************************************************************************************/
{
    // Example :
    3 > 2 && 2 > 1; // return true

    3 > 2 > 1; // Return false ( because 3 > 2 is true, then true is converted to 1 in inequality operators, therefore true > 1 becomes 1 > 1, which is false. Adding parentheses makes things clear: (3 > 2) > 1 )
}

/*  ***************************************************************************************************
 *   Example logical operators
 *  ***************************************************************************************************/
{
    let a = 10;
    let b = 12;
    console.log(!(a < 15 && b > 10)); // !(true dan true) !(true) so (false)

    let language = "english";
    let greeting = "selamat pagi";

    if (language === "english") {
        greeting = "hallo";
    }
    console.log(greeting);

    for (let i = 0; i < 6; i++) {
        console.log(i);
    }
}
