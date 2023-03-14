"use strict";

function renderUi(array) {
	for (let item of array) {
		let Li = document.createElement("li");
		let Img = document.createElement("img");
		let Name = document.createElement("h2");
		let Book = document.createElement("h2");
		let Year = document.createElement("p");
		let Number = document.createElement("p");
		let Lang = document.createElement("p");

		Li.setAttribute("class", "card");
		Img.setAttribute("class", "card-img");
		Name.setAttribute("class", "card-name");
		Book.setAttribute("class", "card-book");
		Year.setAttribute("class", "card-year");
		Number.setAttribute("class", "card-number");
		Lang.setAttribute("class", "card-lang");

		Img.src = item.imageLink;
		Title.textContent = item.name;
		Text.textContent = item.candy;
		Mass.textContent = item.weight;
		Age.textContent = item.avg_spawns + " age";
	}
}

renderUi(books);
