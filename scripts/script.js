//Завдання 1
function Task1() {
    alert("Завдання 1");
    const firstNum = Number(prompt("Enter start number"));
    const endNum = Number(prompt("Enter end number"));
    const arr = [];
    if (firstNum && endNum) {
        let sum = 0;

        for (let i = firstNum; i <= endNum; i++) {
            arr.push(i);
        }
        for (const iter of arr) {
            sum += iter;
        }
        alert(`Your summ = ${sum}`);
    }
}

//Завдання 2
function Task2(a, b) {
    alert("Завдання 2")
    let nodFirst = Number(prompt("Enter 1 number"));
    let nodSeccond = Number(prompt("Enter 2 number"));
    if (b === 0) {
        return a
    }
    return alert(Task2(b, a % b));
}

//Завдання 3
function Task3() {
    alert("Завдання 3")
    let userNum = Number(prompt("Enter your number"));
    let arrayOfDividers = [];
    if (userNum && userNum != 0) {
        for (let i = 0; i <= userNum; i++) {
            if (userNum % i == 0) {
                arrayOfDividers.push(i);
            }
        }
        alert(`Dividers: ${arrayOfDividers}`);
    }
}

//Завдання 4
function Task4() {
    alert("Завдання 4")
    let userNumberToString = prompt("Enter your number");
    alert(`Length of number is -${userNumberToString.length}`);//знаю як зробити і циклом)))
}

//Завдання 5
function Task5() {
    let tenNumbersArr = [];
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    let even = 0;
    let notEven = 0;
    for (let i = 0; i < 10; i++) {
        tenNumbersArr.push(Number(prompt(`Enter first ${i + 1} number`)));
        console.log(i);
    }
    for (const iter of tenNumbersArr) {
        if (iter > 0) {
            positive++;
        } else if (iter == 0) {
            zeros++;
        } else {
            negative++;
        }
        if (iter % 2 == 0) {
            even++;
        } else {
            notEven++;
        }
    }
    alert(`Positives: ${positive}, negative: ${negative}, zeros: ${zeros}, even: ${even}, not even: ${notEven}.`)
}

function Task6() {
    alert('Task 6')
    while (true) {
        let calcNum1 = Number(prompt("Enter 1 number"));
        let calcNum2 = Number(prompt('Enter 2 number'));
        let action = prompt("Enter action(+, -, *, /)");
        if (action == '+') {
            alert(calcNum1 + calcNum2);
        } else if (action == '-') {
            alert(calcNum1 - calcNum2);
        } else if (action == '*') {
            alert(calcNum1 * calcNum2);
        } else if (action == '/') {
            alert(calcNum1 / calcNum2);
        }
        if (prompt('Want to continue? 1 - yes, 0 - no') == 1) {
            continue;
        } else {
            break;
        }
    }
}

function Task7() {
    let userStrNumber = prompt("Enter number!");
    let k = prompt("By how many digits should it be moved?");

    alert(userStrNumber.substring(k) + userStrNumber.substring(0, k));

}

function Task8() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currDay = 0;

    while (confirm(`${days[currDay]}. Want to see the next day?`)) {
        currDay = (currDay + 1) % days.length;
    }
}

function Task9() {

}

function Task10() {
    let arr = [...Array(100)].map((_, ind) => ind + 1)
    alert('Guess the number!')
    while (true) {
        let ask = prompt(`The requested number is greater or less than ${arr[Math.floor(arr.length / 2) - 1]} ?  (>, <, =)`)
        if (!ask) break
        if (ask == '=') {
            alert(`Requested number - ${arr[Math.floor(arr.length / 2) - 1]}`)

            break
        }
        if (ask == '>') {
            arr = arr.slice(Math.floor(arr.length / 2))
        }
        if (ask == '<') {
            arr = arr.slice(0, Math.floor(arr.length / 2))
        }
    }
}