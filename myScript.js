
const phrase="Hi I'm Mark Angelo De Guzman";
    const targetEl= document.getElementById("bubble-hover");

    phrase.split("").map((char, idx)=> {
    const el = document.createElement("span");

    el.innerText = char;
    el.setAttribute("data-index", idx.toString());
    el.classList.add("hover-char");
    
    targetEl.appendChild(el);
});

const hoverChars = [...document.getElementsByClassName("hover-char")];

const removeClasses = () => {
    hoverChars.map((char) =>    { 
        char.classList.remove("hovered");
        char.classList.remove("hovered-adjacent");
    });
};

hoverChars.map((char) => { 
    char.addEventListener("mouseover", (e) =>
    {
        removeClasses();

        const currentElement = e.target;
        const index= parseInt(currentElement.getAttribute("data-index"), 10);

        const prevIndex = index === 0 ? null: index - 1;
        const nextIndex = index === phrase.length - 1 ? null: index + 1;

        const prevEl = 
        prevIndex !== null &&
        document.querySelector(`[data-index="${prevIndex}`);

        const nextEl = 
        nextIndex !== null &&
        document.querySelector(`[data-index="${nextIndex}`);

        e.target.classList.add("hovered");
        prevEl && prevEl.classList.add("hovered-adjacent");
        nextEl && nextEl.classList.add("hovered-adjacent");
    });
});

document
.getElementById("bubble-hover")
.addEventListener("mouseleave", () => {
    removeClasses();
});