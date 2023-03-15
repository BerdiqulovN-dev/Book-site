"use strict";

let elList = document.querySelector(".list");
let elNums = document.querySelector(".option-numbers");
let elSelect = document.querySelector(".select");
let elSearch = document.querySelector(".header-input");

function renderUi(array) {
	array.forEach((item) => {
		let elLi = document.createElement("li");
		elLi.setAttribute("class", "card");

		elLi.innerHTML = `
		
		<img src="${item.imageLink}" width="240px" height="260px" alt="book img" class="img">
	    <h2 class="name">${item.author}: ${item.title}</h2>
	    <div class="span">
		   <p class="year">${item.year}</p>
		   <p class="page">${item.pages}</p>
	    </div>
	    <div class="spann">
		   <a href="${item.link}" class="wikipediya">
		   <p class="link">Wikipediya</p>
		   </a>
		   <p class="language">${item.language}</p>
	    </div>
		<a href="#" class="savat">
		   <img src="./images/basket.svg" width="20px" height="20px" alt="basket" class="savatcha">
		</a>
	    
		`;
		elList.append(elLi);
	});
}
renderUi(books);

for (let i = 1; i < 10; i++) {
	let elNumLi = document.createElement("li");
	elNumLi.setAttribute("class", "number");
	elNumLi.innerHTML = `
	<a href="#" class="number-link">${i}</a>
	`;
	elNums.append(elNumLi);
}



let selectArr = [];
let selectArr2 = [];

function select(arr) {
	arr.forEach((item) => {
		let elOption = document.createElement("option");
		selectArr = item.language;
		if (!selectArr2.includes(selectArr)) {
			selectArr2.push(selectArr);

			for (let i = 0; i < selectArr2.length; i++) {
				elOption.textContent = selectArr2[i];
				elSelect.append(elOption);
			}
		}
	});
}
select(books);

elSelect.addEventListener("change", (evt) => {
	evt.preventDefault();
	let value = evt.target.value;
	elList.innerHTML = "";
	if (value == "all") {
		renderUi(books);
		search(books);
	} else {
		const newItem = books.filter((item) => {
			return value == item.language;
		});
		renderUi(newItem);
		search(newItem);
	}
});

function search(array) {
	elSearch.addEventListener("keyup", (evt) => {
		evt.preventDefault();
		let value = evt.target.value;
		elList.innerHTML = "";
		const newItem = array.filter((item) => {
			return item.title.includes(value);
		});
		renderUi(newItem);
	});
}
search(books);
