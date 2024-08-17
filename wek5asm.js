//Week 5 Assignment

//1.  Even or Odd Function
evod = document.getElementById("eo")
function evenOrOdd(num) {
    if(num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
const x = 4;
evod.innerHTML = evenOrOdd(x)

//2. Add Item to List

const addItem = document.getElementById("addList")
const buttn = document.getElementById("bn")

const added = () => {
    addItem.innerHTML = `
    <ul>
        <li>Backend</li>
        <li>Frontend</li>
        <li>Cybersecurity</li>
        <li>digital Marketing</li>
    </ul>
    `
}

buttn.addEventListener("click", added)


//3. Change Background Color Based on Response

const wd = "successful"
const changeBgColor = () => {
    if(wd === "successful") {
        document.getElementById("chgbgc").style.backgroundColor = "green";
    }else {
        document.getElementById("chgbgc").style.backgroundColor = "red";
    }
    
}
changeBgColor()


//4.  Fetch and Display Data

const commonMan = document.getElementById("content")
const importantData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
    .then(myComments => myComments.json())
    .then(sComments => sComments.forEach((scom, i) => {
        commonMan.innerHTML += `
        <div id="contn">
            <h3 id="ha">Id: ${scom.id}</h3>
            <h3 id="hc">PostId: ${scom.postId}</h3>
            <h3 id="hb">Name: ${scom.name}</h3>
            <h3 id="h3">Email: ${scom.email}</h3>
            <p id="p">${scom.body}</P>
        </div>
        `        
    }))
}
importantData()

//5. Solve and Arithmetic Problem Using a Formula
// formular to find the area of a circle = Math.PI * (r**2)

const areaOfACircle = (r) => {
    document.getElementById("aoc").innerHTML = `Ans: ${Math.PI * (r ** 2)}m`;
};

areaOfACircle(17);




