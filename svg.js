let click = document.querySelectorAll('.click');
let text = document.querySelectorAll('.text');
for (let i = 0; i<= click.length; i++) {click[i].addEventListener ('click', (event) => {
text[i].style.display = 'block'
setTimeout(remove, 2000)
function remove () {
    text[i].style.display = 'none'
   } 
})}

