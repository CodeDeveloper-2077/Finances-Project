import { Entry } from "./Entry.js";
import { ListTemplate } from "./ListTemplate.js";

 const entryForm = document.forms[0];
 const categoryInput = <HTMLInputElement>entryForm.querySelector("#category");
 const dateInput = entryForm.querySelector("#date") as HTMLInputElement;
 const priceInput = entryForm.querySelector("#price") as HTMLInputElement;
 const detailsInput = <HTMLInputElement>entryForm.querySelector("#details");
 const unorderedList = document.querySelector(".outlays-list") as HTMLUListElement;
 const entries: Entry[] = [];

 const listTemplate = new ListTemplate(unorderedList);

 entryForm.addEventListener("submit", function (e: Event) {
    e.preventDefault();

    let entryToAdd = new Entry(categoryInput.value, new Date(dateInput.value), priceInput.valueAsNumber, detailsInput.value);
    listTemplate.render(entryToAdd.category, `You have spent ${entryToAdd.price} on ${entryToAdd.details} on ${entryToAdd.date}`);
    entries.push(entryToAdd);
    localStorage.setItem((entries.length - 1).toString(), JSON.stringify(entryToAdd));

    console.log("The value has been saved!");
 });

 document.addEventListener("DOMContentLoaded", function (e: Event) {
   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)!;         
      const value = JSON.parse(localStorage.getItem(key)!);
      entries.push(value);
      listTemplate.render(value.category, `You have spent ${value.price} on ${value.details} on ${value.date}`);
   }
 });

 unorderedList.addEventListener("click", function (e: Event) {
   const closeBtnTarget = e.target as Element;
   if(closeBtnTarget.tagName === 'DIV') {
      const listItemParent = closeBtnTarget.parentElement!;
      let index = Array.from(unorderedList.children).findIndex(li => li === listItemParent);
      localStorage.removeItem(index.toString());
      unorderedList.removeChild(listItemParent);
   }
 });

 console.log(entries);