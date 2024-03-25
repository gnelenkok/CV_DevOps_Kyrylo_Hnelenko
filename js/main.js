/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

var readmore = document.querySelectorAll(".readmore-link a");

for (var i = 0; i < readmore.length; i++) {
  readmore[i].onclick = function() {
    let readmoreContainer = this.closest(".readmore");
    readmoreContainer.classList.toggle("open");

    let label = (this.innerHTML === "...see more") ? "less" : "...see more";
    this.innerHTML = label;

    return false;
  };
}



// Batton more cards
const btnShowMoreCards = document.querySelector('.btm-more');
const hiddenCards = document.querySelectorAll('.card--hidden');
const chevronIcon = document.getElementById('chevron-icon');

btnShowMoreCards.addEventListener('click', function () {    
    hiddenCards.forEach(function(card) {
        card.classList.toggle('card--hidden');
    });

    // Змінюємо клас іконки при кожному кліку
    chevronIcon.classList.toggle('rotate-icon');

    // Опціонально: змінення тексту кнопки
    const buttonText = btnShowMoreCards.querySelector('span');
    buttonText.textContent = (buttonText.textContent === 'More') ? 'Less' : 'More';
});
