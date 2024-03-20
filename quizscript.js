const input1=document.querySelector('.q1Ans');
const input2=document.querySelector('.q2Ans');
const rate=document.querySelector('.rate')



const submit = document.querySelector('.cyber');


submit.addEventListener('submit', e=>{
e.preventDefault();

    let counter=10;
    const name = document.querySelector('.label1');
    const email = document.querySelector('.label2');
    const output = document.querySelector('.counter');
    
    const ans4= document.querySelector('#radio6');
    const ans5= document.querySelector('#radio11');
    const ans6= document.querySelector('#radio13');
    const ans7= document.querySelector('#radio17');
    const ans8= document.querySelector('#radio21');
    const ans9= document.querySelector('#radio24');
    const ans10= document.querySelector('#radio29');


if(input1){
    counter+=10;
    console.log(input1.value)
    name.textContent='Name: ' + input1.value;
}
else{
    counter+=0;
}

 if(input2){
counter+=10;
email.textContent='Email: ' + input2.value;
}
else{
    counter+=0;
}

if(ans4.checked){
    counter+=10;
}
else{
    counter+=0;
}
if(ans5.checked){
    counter+=10;
}
else{
    counter+=0;
}
if(ans6.checked){
    counter+=10;
}
else{
    counter+=0;
}
if(ans7.checked){
    counter+=10;
}
else{
    counter+=0;
}
if(ans8.checked){
    counter+=10;
}
else{
    counter+=0;
}
if(ans9.checked){
    counter+=10;
}
else{
    counter+=0;
}
if(ans10.checked){
    counter+=10;
}
else{
    counter+=0;
}
output.textContent='Score: ' + counter + "%";
switch(counter){
    case 100:rate.textContent="You are real Ninja!!!";
    break;
    case 90: 
    rate.textContent='Excellent!!';
    break;
    case 80:
        rate.textContent='You Passed, very Good!';
        break;
        case 70:
            rate.textContent='You Passed, Good!';
            break;
            case 60:
                rate.textContent='You Passed';
                break;
                case 50:
                    rate.textContent='You Passed';
                    break;
        default:
            rate.textContent='You Failed the Test!!!, Refresh and Try Again';
}


console.log(counter)
});


