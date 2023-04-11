function oddEvenChecker (number){
    if (typeof number === 'number'){
        (number % 2 === 0) ? console.log('The number is even.') : console.log('The number is odd.');
    } else
        console.log('Invalid Output.');
}

function budgetChecker(number){
    if (typeof number === 'number'){
        (number > 40000) ? console.log('You are over the budget.') : console.log('You have resources left');
    } else
        console.log('Invalid Output.');
    }

oddEvenChecker(4);
oddEvenChecker(7);
oddEvenChecker('Hello');
budgetChecker(45000);
budgetChecker(35000);
budgetChecker('Fifty-Thousand');