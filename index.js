// burger

let burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.header__nav'),
    menuLinks = document.querySelectorAll('.header__link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger--active')
        menu.classList.toggle('header__nav--active')
    })

    menuLinks.forEach((el) => {
        el.addEventListener('click', () => {
            burger.classList.remove('header__burger--active')
            menu.classList.remove('header__nav--active')
        })
    })

// Форма

let form = document.querySelector('.hero__form');
    form.addEventListener('submit', function (e) {
        e.preventDefault()
    });

let input = document.querySelector('.hero__input');
    input.addEventListener('input', () => {
        if (input.value === '!' || input.value === '@' || input.value === '#'|| input.value === '$' || input.value === '%' ||input.value === '^' || input.value === '&' || input.value === '*' || input.value === '(' || input.value === ')') {
            alert("Данные символы запрещены!")
            input.value = ''
        }
    })

// animation

let $flagIndia = document.querySelector('.india'),
    $flagBritain = document.querySelector('.britain'),
    $flagItaly = document.querySelector('.italy'),
    $flagIndiaBig = document.querySelector('.india-big'),
    $flagIndiaRight = document.querySelector('.india-right')

let interval = null;
clearInterval(interval);

function preload() {

    interval = setTimeout(() => {
        interval = setTimeout(() => {
            $flagIndia.classList.add('india-preload')
        }, 400)
        interval = setTimeout(() => {
            $flagBritain.classList.add('britain-preload')
        }, 800)
        interval = setTimeout(() => {
            $flagItaly.classList.add('italy-preload')
        }, 1200)
        interval = setTimeout(() => {
            $flagIndiaBig.classList.add('india-big-preload')
        }, 1600)
        interval = setTimeout(() => {
            $flagIndiaRight.classList.add('india-right-preload')
        }, 2000)
    }, 3000)

} preload()

function animationStart() {
        interval = setTimeout(() => {
        $flagIndia.classList.add('india__animate');
        $flagBritain.classList.add('britain__animate');
        $flagItaly.classList.add('italy__animate');
        $flagIndiaBig.classList.add('india-big__animate');
        $flagIndiaRight.classList.add('india-right__animate');
        }, 6000)
} animationStart()

