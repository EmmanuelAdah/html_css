const wrapper = document.getElementById("wrapper");
// console.log(wrapper);

// const titles = document.getElementsByClassName("title");
// console.log(titles);

const list = document.getElementsByTagName("li")
// console.log(Array.isArray(list));
// console.log(Array.from(list));

const ul = document.querySelectorAll("li")
// console.log(ul)


 const booklist = document.querySelector("#book-list ul");
booklist.addEventListener("click", (event) => {
    // console.log(event)
    if (event.target.textContent === "delete") {
        // let li = event.target.closest("li");
        // let li = event.target.parentElement;
        let li = event.target.parentNode;
        // booklist.removeChild(li);
        li.remove();
    }
});

const addBookForm = document.getElementById("add-book");
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = document.querySelector("#add-book input").value.trim();

if (value !== "") {
    const {newList, firstSpan, secondSpan} = createNewElements();
    addClassNames(firstSpan, secondSpan)
    addTextContent(firstSpan, value, secondSpan)
    appendChild(newList, firstSpan, secondSpan)
} else {
    alert("Please enter a book title");
}
});


// const searchBook = document.getElementById("search-books");
// searchBook.addEventListener("keydown", (event) => {
//     event.preventDefault();
//     const value = event.target.value.trim();
//     const ul = document.querySelectorAll("li")
//     compareNames(ul, value)
// });


// function compareNames(ul, value) {
//     const names = Array.from(ul).map(li => li.textContent);
//     names.includes(value) ? name.style.display = "" : name.style.display = "none";
// }

const searchBook = document.getElementById("search-books");
searchBook.addEventListener("keydown", (event) => {
    const value = event.target.value.trim();

    const lists = document.querySelectorAll("li")
    lists.forEach(li => {
        (li.textContent.toLowerCase().includes(value.toLowerCase()))
            ? li.style.display = "" : li.style.display = "none";
        })
})

function createNewElements(){
    let newList = document.createElement("li");
    let firstSpan = document.createElement("span");
    let secondSpan = document.createElement("span")
    return {newList, firstSpan, secondSpan};
}

function addClassNames(firstSpan, secondSpan){
    firstSpan.classList.add("name");
    secondSpan.classList.add("delete");
}

function addTextContent(firstSpan, value, secondSpan){
    firstSpan.textContent = toSentenceCase(value);
    secondSpan.textContent = "delete";
}

function appendChild(newList, firstSpan, secondSpan){
    newList.appendChild(firstSpan);
    newList.appendChild(secondSpan);
    booklist.append(newList);
}

function toTitleCase(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function toSentenceCase(sentence) {
    return sentence
        .charAt(0)
        .toUpperCase() + sentence.slice(1);
}

function titleCase(sentence) {
    return sentence.replace(/\w\S*/g, function(txt){return txt
        .charAt(0)
        .toUpperCase() + txt.substr(1)
        .toLowerCase();});
}