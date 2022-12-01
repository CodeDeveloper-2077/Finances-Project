export class ListTemplate {
    constructor(private readonly _unorderedList: HTMLUListElement) {}

    public render(category: string, message: string, position: 'start'|'end' = 'end'): void {
        let li = document.createElement("li");

        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close-btn");
        closeBtn.innerText = 'x';
        li.append(closeBtn);

        let h3 = document.createElement("h3");
        h3.innerText = category;
        li.append(h3);

        let data = document.createElement("div");
        data.innerText = message;
        li.append(data);

        if (position === 'start')
            this._unorderedList.append(li);
        else
            this._unorderedList.prepend(li);
    }
}