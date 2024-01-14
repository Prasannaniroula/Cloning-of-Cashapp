let num = document.getElementById('number')
console.log(num.innerText)
let button = document.getElementById('sendto')
button.addEventListener('click',()=>{
    let input= document.getElementById('input')
    console.log(input.value)
    if(input.value == ''){
        alert("Enter User and Amount to transfer")
    }
    else{
// Normal
    num.innerHTML= num.innerText-input.value;
    input.value='';
    let user = document.getElementById('user')
    user.value='';
    alert('Successfully Paid')
    }
})
