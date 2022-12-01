import { Entry } from "./Entry.js";
import { ListTemplate } from "./ListTemplate.js";

 const entryForm = document.forms[0] as HTMLFormElement;
 const categoryInput = entryForm.querySelector("#category") as HTMLInputElement;
 const dateInput = entryForm.querySelector("#date") as HTMLInputElement;
 const priceInput = entryForm.querySelector("#price") as HTMLInputElement;
 const detailsInput = entryForm.querySelector("#details") as HTMLInputElement;
 const unorderedList = document.querySelector(".outlays-list") as HTMLUListElement;

 const listTemplate = new ListTemplate(unorderedList);

 entryForm.addEventListener("submit", function (e: Event) {
    e.preventDefault();

    let entryToAdd = new Entry(categoryInput.value, new Date(dateInput.value), priceInput.valueAsNumber, detailsInput.value);
    listTemplate.render(entryToAdd.category, `You have spent ${entryToAdd.price} on ${entryToAdd.details} on ${entryToAdd.date.toDateString()}`);
    localStorage.setItem(`${entryToAdd.category}${entryToAdd.date}`, JSON.stringify(entryToAdd));

    console.log("The value has been saved!");
 });

 document.addEventListener("DOMContentLoaded", function (e: Event) {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)!;
        const entry = JSON.parse(localStorage[key]) as Entry;
        listTemplate.render(entry.category, `You have spent ${entry.price} on ${entry.details} on ${entry.date}`);
    }
 });

 unorderedList.addEventListener("click", function (e: Event) {
   const closeBtnTarget = e.target as Element;
   if(closeBtnTarget.tagName === 'DIV') {
      const listItemParent = closeBtnTarget.parentElement!;
      unorderedList.removeChild(listItemParent);
   }
 });