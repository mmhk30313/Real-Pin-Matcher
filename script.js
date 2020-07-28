//Submission Left at most three times...

let submissionCount = 3;
let submitChecker = true;

//Generating Pin For Generation...

const pin = document.getElementById('generate');
pin.addEventListener('click', function(){
    invisibleNotify();
    pinGenerating();
});

//Pin Generating function() for random number in 4 digits...

function pinGenerating(){
    let random = Math.random();
    // console.log(Math.round(random*10000));
    let number = Math.round(random*10000).toString();
    // console.log({number});
    if(number.length == 4){
        document.getElementById('generative-pin').value = number;
        //My Secrete Pin is (123)...
        if(document.getElementById('tested-pin').value == '123' && submitChecker == false){
            findSubmitButton();
        }
        return;
    }
    pinGenerating();
}

//Backing submission button up to the screen...

function findSubmitButton(){
    document.getElementById('submit').style.display = "block";
    document.getElementById('submit').style.margin = "0 auto";
    document.getElementById('submit').style.marginTop = "20px";
    document.getElementById('tested-pin').placeholder = "Required: 4 digits of pin";
    document.getElementById('tested-pin').value = "";
    document.getElementById('generative-pin').value = "";
    document.getElementById('try-left').innerHTML = "3";
    submitChecker = true;
}

//Tested Pin For Testing...

let number = document.getElementsByClassName('button');
for(let i=0;i<number.length;i++){
    // console.log(number[i].id);
    number[i].addEventListener('click', function(){
        invisibleNotify();
        pinCatenating(this.id);
    });
}

//Pin Catenating function() by the user...

function pinCatenating(digit){
    let previousPin = document.getElementById('tested-pin').value;
    //If the requirement of at most 4 digit of pin in tested-pin bar...
    // if(previousPin.length<4){
    //     document.getElementById('tested-pin').value += digit;
    // }
    document.getElementById('tested-pin').value += digit;
}

//Clearing & Deleting Digit By Digit From The Test Bar Pin...

let operation = document.getElementsByClassName('operation');
for(let i=0;i<operation.length;i++){
    // console.log(operation[i].id);
    operation[i].addEventListener('click', function(){
        invisibleNotify();
        clearingTestedPin(this.id);
    });
}

//Used the below function() for clearing or deleting...

function clearingTestedPin(id){
    if(id=='clear'){
        document.getElementById('tested-pin').value = "";
    }else{
        let deleteValue = document.getElementById('tested-pin').value;
        document.getElementById('tested-pin').value = deleteValue.substr(0,deleteValue.length-1);
        // console.log(deleteValue.substr(0,deleteValue.length-1));
    }
}

//Submission...Test function()

const submit = document.getElementById('submit');
submit.addEventListener('click', isMatched);
function isMatched(){
    const generative = document.getElementById('generative-pin');
    const tested = document.getElementById('tested-pin');
    if(generative.value == "" && tested.value ==""){
        return;
    }
    submissionCount -= 1;
    if(parseInt(generative.value)>-1 || parseInt(tested.value)>-1){
        if(generative.value == tested.value){
            document.getElementById('matched').style.display = 'block';
            submissionCount = 3;
            document.getElementById('try-left').innerHTML = "3";
            // generative.value = "";//Jodi generate pin match hower por na dekhte chai...
        }else{
            document.getElementById('not-matched').style.display = 'block';
            document.getElementById('matched').style.display = 'none';
        }
    }else{
        invisibleNotify();
    }
    if(submissionCount == 0){
        submit.style.display = 'none';
        document.getElementById('try-left').innerHTML = 'You have no';
        tested.placeholder = "Please, enter the secrete code! & click GP";
        submitChecker = false;
        submissionCount = 3;
    }else{
        document.getElementById('try-left').innerHTML = submissionCount.toString();
    }
    // generative.value = "";
    // clearingTestedPin('clear');//Jodi test-bar er pin na dekhte chai...
}

//Notification invisible function()

function invisibleNotify(){
    document.getElementById('matched').style.display = 'none';
    document.getElementById('not-matched').style.display = 'none';
}

//Cross invisible...Anonymous function()

document.getElementById('cross').addEventListener('click', function(){
    document.getElementById('not-matched').style.display = 'none';
});