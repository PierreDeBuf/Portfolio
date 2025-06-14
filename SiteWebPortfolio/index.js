const article = document.querySelectorAll('.article button');
const images = document.querySelectorAll('.images .liste');

const liste = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    images.forEach(debut => {
        debut.classList.add('hidden');
        if(debut.dataset.name === e.target.dataset.name || e.target.dataset.name === "tous"){
            debut.classList.remove('hidden');
        }
    });
}


article.forEach(debut=>{
    debut.addEventListener('click',liste);
});


