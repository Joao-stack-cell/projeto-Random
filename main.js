function buttonAction() {
const min =  Math.ceil(document.querySelector('.prime').value);
const max =  Math.floor(document.querySelector('.two').value);

const result = Math.floor(Math.random() * (max-min + 1 )) + min;
alert (result)



}