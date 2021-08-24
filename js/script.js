function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var contactsButton = document.querySelector('#contacts');
var newsButton = document.querySelector('#news');

var infoBlock = document.querySelector('#info');
var newsBlock = document.querySelector('#news');


contactsButton.addEventListener('click', () => {
    scrollTo(infoBlock);
})

newsButton.addEventListener('click', () => {
    scrollTo(newsBlock);
})