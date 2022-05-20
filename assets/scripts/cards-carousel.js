function handleCardMouseEnter() {
    this.classList.add('card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleCardMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener("mouseenter", handleCardMouseEnter);
        card.addEventListener("mouseleave", handleCardMouseLeave);
    }
}

function setActiveController(selectedController) {
    const activeButtonElement = document.querySelector('.controller__button--active');
    activeButtonElement.classList.remove('controller__button--active');
    selectedController.classList.add('controller__button--active');
}

function setActiveCard(selectedCard) {
    const activeCard = document.querySelector('.card--active');
    activeCard.classList.remove('card--active');
    selectedCard.classList.add('card--active');
}

function selectCarouselItem() {
    const selectedItem = this.id.substr(-1,2);
    const carousel = document.querySelector('.cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * ( Number(selectedItem) -1 );
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    const selectedCard = document.getElementById(`spider-man-0${selectedItem}`);

    carousel.style.transform = newTransform;
    setActiveController(this);
    setActiveCard(selectedCard);
}

function addEventListenerToControllers() {
    const controllerElements = document.getElementsByClassName('controller__button');

    for (let i = 0; i < controllerElements.length; i++) {
        const controller = controllerElements[i];
        controller.addEventListener("click", selectCarouselItem);
    };
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
document.addEventListener("DOMContentLoaded", addEventListenerToControllers, false);