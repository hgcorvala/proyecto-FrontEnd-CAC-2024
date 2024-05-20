// funciona para reddirecionar al usuario al blog deseado

let btn = document.querySelectorAll('.button__blog');

btn.forEach((btn) => {
    console.log(btn)
    btn.addEventListener('click', (e) => {
        let url = btn.getAttribute('data-url');
        window.location.href =  url;
    })
})
