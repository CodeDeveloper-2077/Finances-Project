import { Entry } from "./Entry";

export class ListTemplate {
    constructor(private readonly _unorderedList: HTMLUListElement) {}

    public render(entry: Entry, position: 'start'|'end' = 'end'): HTMLLIElement {
        let li = document.createElement("li");

        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close-btn");
        closeBtn.innerText = 'x';
        li.append(closeBtn);

        let h3 = document.createElement("h3");
        h3.innerText = entry.category;
        li.append(h3);

        let data = document.createElement("div");
        data.innerText = `You have spent ${entry.price} on ${entry.details} on ${entry.date}`;
        li.append(data);

        if (position === 'start')
            this._unorderedList.append(li);
        else
            this._unorderedList.prepend(li);

        return li;
    }
}