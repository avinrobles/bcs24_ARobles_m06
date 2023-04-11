/* Switch - Conditional Statement that evaluates an expression and matches at least to one of several possible cases.
        - Alternative to if-else-if statements

    Syntax:
    switch(expression){
        case 1:
            console.log(...)
            -Code to be executed if expression matches value
            -Case represents a possible match
        break;
            - A point control is transferred and it will finish the code
        case 2:
            console.log(...)
        break;
        case 3:
            if {

            }else{

            }
        break;
        case 4:
            console.log(...)
        break;
        default:
            - Code to be exectued if expression matches value

    }
*/

let color = 'red'
switch(color){
    case 'red':
        console.log('The color is red');
    //break;
    //The break statement ensures that the code inside the other cases is not executed.

    case 'green':
        console.log('The color is green');
    break;

    case 'blue':
        console.log('The color is blue');
    break;
    default:
        console.log('The color is unknown');
}

//Mini-activity
function miniAct (day) {
    let  today = day;
    if (typeof(today) === 'string'){
        switch(today.toLowerCase()){
    case 'monday':
        console.log(`If ${today}, wear Black`);
    break;

    case 'tuesday':
        console.log(`If ${today}, wear Green`)
    break;

    case 'wednesday':
        console.log(`If ${today}, wear Yellow`)
    break;

    case 'thursday':
        console.log(`If ${today}, wear Red`)
    break;

    case 'friday':
        console.log(`If ${today}, wear Violet`)
    break;

    case 'saturday':
        console.log(`If ${today}, wear Blue`)
    break;

    case 'sunday':
        console.log(`If ${today}, wear White`)
    break;
    default:
        console.log('Invalid Input. Enter a valid day of the week.');
    }
} else {
    console.log('Invalid Input. Please input a string.')
}
}

miniAct ('Monday');
miniAct ('Tuesday');
miniAct ('Wednesday');
miniAct ('Thursday');
miniAct ('Friday');
miniAct ('Saturday');
miniAct ('Sunday');
miniAct (27);

function gradeEvaluator(grade){
    switch(true) {
        case grade >= 90:
            console.log('Your grade is A');
            break;

        case grade >= 80:
            console.log('Your grade is B');
            break;

        case grade >= 71:
            console.log('Your grade is C');
            break;

        case grade <= 70:
            console.log('Your grade is F');
            break;
        
        default:
            console.log('Invalid');
    }
}

gradeEvaluator(69);
gradeEvaluator(75);
gradeEvaluator(80);
gradeEvaluator(90);
gradeEvaluator('Hello');