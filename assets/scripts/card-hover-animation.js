function handlemouseEnter() {
    this.classList.add('card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handlemouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener("mouseenter", handlemouseEnter);
        card.addEventListener("mouseleave", handlemouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);