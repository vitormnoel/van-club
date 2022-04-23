let pop_up = document.querySelector('#overlay')
let button = document.getElementsByClassName('button')[0]
let button1 = document.getElementsByClassName('button')[1]
let button2 = document.getElementsByClassName('button')[2]
let button3 = document.getElementsByClassName('button')[3]
let button4 = document.getElementsByClassName('button')[4]
let button5 = document.getElementsByClassName('button')[5]
let button6 = document.getElementsByClassName('button')[6]
let button7 = document.getElementsByClassName('button')[7]
let button8 = document.getElementsByClassName('button')[8]
let close_popUp = document.getElementById('close__pop_up')

function open_popUp() {
    pop_up.style.display = 'block'
    console.log(button)
}

button.addEventListener('click', open_popUp) 
button1.addEventListener('click', open_popUp) 
button2.addEventListener('click', open_popUp) 
button3.addEventListener('click', open_popUp) 
button4.addEventListener('click', open_popUp) 
button5.addEventListener('click', open_popUp)  
button6.addEventListener('click', open_popUp) 
button7.addEventListener('click', open_popUp) 
button8.addEventListener('click', open_popUp) 

close_popUp.addEventListener('click', function(){
    pop_up.style.display = 'none'
})