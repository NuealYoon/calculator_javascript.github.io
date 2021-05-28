// - aws 연결
// - 도메인 구매 및 연결
//    - https://www.hosting.kr/
// - 키보드 입력
// - 구조 변경 



let divs = document.querySelectorAll('Div');
let buttons = document.querySelectorAll('Button');

divs[0].innerHTML = '0';

// console.log(divs);
// console.log(buttons);

let tasks = [];//  234234, '+', 345345

let remember = 0;
let simbol = 'empty';

// let check_simbol2first = True

let plus = function () {
    console.log('더하기 버튼');

    if (simbol === 'empty') {
        simbol = 'sum';
        remember = divs[0].innerHTML;
        divs[0].innerHTML = '0';
    }
    else if (simbol === 'sum') {
        sumNum = Number(divs[0].innerHTML) + Number(remember);
        remember = sumNum;
        divs[0].innerHTML = String(sumNum);
    }
}

let equal = function () {
    console.log('equal 버튼');
    if (simbol === 'sum') {
        sumNum = Number(divs[0].innerHTML) + Number(remember);
        divs[0].innerHTML = sumNum;
    }
}

let clear = function () {
    console.log('clear 버튼');
    divs[0].innerHTML = '0';
    simbol = 'empty';
    remember = 0;
}

let backSpace = function () {
    console.log('back space 버튼');
    let number_str = divs[0].innerHTML;
    console.log(number_str);
    let numberOutput_str = [];
    console.log(number_str.length);
    for (let cnt = 0; cnt < number_str.length - 1; cnt++) {
        numberOutput_str.push(number_str[cnt]);
    }
    console.log(numberOutput_str);
    // return;

    //numberOutput_str = number_str[:-1]
    //''.join(numberOutput_str)

    numberOutput_str = numberOutput_str.join('')


    divs[0].innerHTML = numberOutput_str;

    if (divs[0].innerHTML.length === 0) {
        divs[0].innerHTML = '0';
    }


}

for (let cnt = 0; cnt < 10; cnt++) {
    let displayNum = cnt;
    let button = function () {
        console.log('------');
        console.log(remember);
        console.log(simbol);


        number_string = divs[0].innerHTML + String(displayNum);
        divs[0].innerHTML = String(Number(number_string));


    }
    buttons[cnt].addEventListener('click', button);
}

buttons[10].addEventListener('click', plus);
buttons[11].addEventListener('click', equal);
buttons[12].addEventListener('click', clear);
buttons[13].addEventListener('click', backSpace);

