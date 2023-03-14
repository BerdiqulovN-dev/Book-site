"use strict";

let elList = document.querySelector(".list");

function renderUi(array) {
	array.forEach((item) => {
		let elLi = document.createElement("li");
		elLi.setAttribute("class", "card");
		console.log("elLi");

		elLi.innerHTML = `
		
		<img src="${item.imageLink}" width="240px" height="260px" alt="book img" class="img">
	    <h2 class="name">${item.author}</h2>
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
