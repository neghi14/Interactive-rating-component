const rateContainer = document.querySelectorAll('.rateContainer li');
const btn = document.querySelector('button');
const rating = document.querySelectorAll('.rating');
const paragraph = document.createElement('p')
const span = document.querySelector('span')

rateContainer.forEach(container => {
    container.addEventListener('click', () => {
        removeClass();
        container.classList.add('select');
        span.innerHTML = `${container.textContent}`
    })
});


function removeClass() {
    rateContainer.forEach(container => {
        container.classList.remove('select')
    })
}

btn.addEventListener('click', () => {
    rateContainer.forEach(container => {
        if (container.classList.contains('select')) {
            rating[0].classList.add('hidden');
            rating[1].classList.remove('hidden');
        }
        rating[0].appendChild(paragraph);

        paragraph.textContent = 'Please choose a rating' ;
        paragraph.style.color = '#fff';
        paragraph.style.textAlign = 'center'

    })
})
