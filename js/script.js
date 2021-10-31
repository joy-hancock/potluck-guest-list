// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// only appears when guest list is full
const assignButton = document.querySelector(".assign");
// populates guest's name and assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
	const guest = guestInput.value;
	//console.log(guest);
	if (guest !== "") {
		let listItem = document.createElement("li");
		listItem.innerText = guest;
		guestList.append(listItem);
		guestList.classList.remove("hide");
		clearInput();
		updateGuestCount();
	}
});

const clearInput = function () {
	guestInput.value = "";
	console.log(clearInput);
};

const updateGuestCount = function () {
	const guests = document.querySelectorAll(".guest-list li");
	guestCount.innerText = guests.length;
	if (guests.length === 8) {
		addGuestButton.classList.add("hide");
		guestInput.classList.add("hide");
		guestInputLabel.classList.add("hide");
		guestFull.classList.remove("hide");
	}
};

const assignItems = function () {
	const potluckItems = [
		"deviled eggs",
		"cheese plate",
		"olives and pickles",
		"couscous salad",
		"watermelon",
		"lemonade",
		"sweet tea",
		"cupcakes",
		"cookies",
		"fried chicken",
		"corn on the cob",
		"chili"
	];
	const allGuests = document.querySelectorAll(".guest-list li");
	for (let guest of allGuests) {
		let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
		let randomPotluckItem = potluckItems[randomPotluckIndex];
		let listItem = document.createElement("li");
		listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
		assignedItems.append(listItem);
		potluckItems.splice(randomPotluckIndex, 1);
	}
};

assignButton.addEventListener("click", function () {
	assignItems();
	assignButton.disabled = true;
});
