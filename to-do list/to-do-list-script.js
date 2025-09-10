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
        const {newList, check_box, firstSpan, dateTime, secondSpan} = createNewElements();
        addClassNames(check_box, firstSpan, dateTime, secondSpan)
        addTextContent(check_box, firstSpan, dateTime, value, secondSpan)
        addChild(newList, check_box, firstSpan, dateTime, secondSpan)
        saveToStorage();
        addBookForm.reset();
    } else {
        alert("Please enter schedule");
    }
});

const search_book = document.getElementById("search-books");
search_book.addEventListener("keyup", (event) => {
    const value = event.target.value.trim();

    const lists = document.querySelectorAll("li")
    lists.forEach(li => {
        (li.textContent.toLowerCase().includes(value.toLowerCase()))
            ? li.style.display = "" : li.style.display = "none";
    })
})

function createNewElements(){
    let newList = document.createElement("li");
    let check_box = document.createElement("input");
    check_box.type = "checkbox";
    let firstSpan = document.createElement("span");
    let dateTime = document.createElement("span");
    let secondSpan = document.createElement("span")
    return {newList, check_box, firstSpan, dateTime, secondSpan};
}

function addClassNames(check_box, firstSpan, dateTime,  secondSpan){
    check_box.classList.add("check-box");
    firstSpan.classList.add("name");
    dateTime.classList.add("dateTime");
    secondSpan.classList.add("delete");
}

function addTextContent(check_box, firstSpan, date_time, value, secondSpan){
    check_box.textContent = check_box.value;
    firstSpan.textContent = toTitleCase(value);
    date_time.textContent = dateTime();
    secondSpan.textContent = "delete";
}

// const { MongoClient } = require('mongodb');
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

function addChild(newList, check_box, firstSpan, dateTime, secondSpan){
    newList.appendChild(check_box);
    newList.appendChild(firstSpan);
    newList.appendChild(dateTime);
    newList.appendChild(secondSpan);
    booklist.append(newList);

    // Convert children to serializable format
    const childrenArray = Array.from(newList.children).map(child => child.textContent);
    localStorage.setItem("booklist", JSON.stringify(childrenArray));

    const item = localStorage.getItem("booklist");
    console.log(item);

    // async function run() {
    //     await client.connect();
    //     const db = client.db("securityApp");
    //     const collection = db.collection("alerts");

    // await collection.insertOne({ list: firstSpan, datetime: dateTime });
    // console.log("Data saved!");
    // await client.close();
    // }
    // run();
}

function toTitleCase(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function dateTime(){
    const date_time = new Date();
    return date_time.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function saveToStorage(){
    const items = [];
    const lists = document.querySelectorAll("li")
    lists.forEach(li => {
        items.push(
            li.querySelector(".name").textContent)
            li.querySelector(".dateTime").textContent
    })
    localStorage.setItem("booklist", JSON.stringify(items));
}

function getFromStorage(){
    const items = localStorage.getItem("booklist");
    items.forEach(item => {
        const li = document.createElement("li");
        const check_box = document.createElement("input");
        check_box.type = "checkbox";
        check_box.className = "check-box";

        const firstSpan = document.createElement("span");
        firstSpan.className = "name";
        firstSpan.textContent = item;

        const dateTime = document.createElement("span");
        dateTime.className = "dateTime";
        dateTime.textContent = dateTime();

        const secondSpan = document.createElement("span");
        secondSpan.className = "delete";
        secondSpan.textContent = "delete";


        li.appendChild(check_box);
        li.appendChild(firstSpan);
        li.appendChild(dateTime);
        li.appendChild(secondSpan);
        booklist.append(li);
    });
}

getFromStorage();