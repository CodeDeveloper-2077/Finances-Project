import { Entry } from "./Entry.js";
import { ListTemplate } from "./ListTemplate.js";
const entryForm = document.forms[0];
const categoryInput = entryForm.querySelector("#category");
const dateInput = entryForm.querySelector("#date");
const priceInput = entryForm.querySelector("#price");
const detailsInput = entryForm.querySelector("#details");
const unorderedList = document.querySelector(".outlays-list");
const listTemplate = new ListTemplate(unorderedList);
entryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let entryToAdd = new Entry(categoryInput.value, new Date(dateInput.value), priceInput.valueAsNumber, detailsInput.value);
    listTemplate.render(entryToAdd.category, `You have spent ${entryToAdd.price} on ${entryToAdd.details} on ${entryToAdd.date.toDateString()}`);
    localStorage.setItem(`${entryToAdd.category}${entryToAdd.date}`, JSON.stringify(entryToAdd));
    console.log("The value has been saved!");
});
document.addEventListener("DOMContentLoaded", function (e) {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const entry = JSON.parse(localStorage[key]);
        listTemplate.render(entry.category, `You have spent ${entry.price} on ${entry.details} on ${entry.date}`);
    }
});
unorderedList.addEventListener("click", function (e) {
    const closeBtnTarget = e.target;
    if (closeBtnTarget.tagName === 'DIV') {
        const listItemParent = closeBtnTarget.parentElement;
        unorderedList.removeChild(listItemParent);
    }
});
