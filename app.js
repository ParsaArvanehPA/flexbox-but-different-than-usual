const btn = document.getElementsByTagName('button');
const items = document.querySelectorAll('.item');
const text = document.getElementsByTagName('p');

const txt = [
    "تک ستونه",
    "دو ستونه",
    "سه ستونه"
]

let index = 0;

btn[0].addEventListener('click', () => {
    index++;
    if(index === 3 ){
        index = 0
    }
    text[0].innerText = txt[index];

    items.forEach(item => {
        item.classList.remove('one-column', 'two-column', 'three-column');

        if(index === 0) {
            item.classList.add('one-column');
        } else if(index === 1) {
            item.classList.add('two-column');
        } else if(index === 2) {
            item.classList.add('three-column');
        }
    })
})
