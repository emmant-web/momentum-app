

// for adding tasks
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value;

    // creating elements
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    const checkBox = document.createElement("input");


    listItem.classList.add("task-item"); // Style the background
    label.classList.add("task-label"); // Style the text
    // adding functionality
    label.textContent = taskText;
    checkBox.type = "checkbox";
 
   
    checkBox.onclick = function() {
        label.classList.toggle("completed");
    }


    // appending the elements
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
}

document.getElementById("addButton").addEventListener("click", addTask);









// for editing the name
function editName() {
    let header = document.querySelector(".header");
    let name = document.querySelector("#name");
    const editButton = document.querySelector("#editButton");

    editButton.addEventListener("click", editName);

    // header.textContent = `Good Evening, ${name.value}`;

    const greetingTime = new Date().getHours();

    if(greetingTime < 10){
        header.textContent =  `Good Morning, ${name.value}`
    } else if (greetingTime < 20){
        header.textContent = `Good Afternoon, ${name.value}`
    } else {
        header.textContent =  `Good Evening, ${name.value}`
    }


}


document.getElementById("editButton").addEventListener("click", editName);











function backgroundChange(){
    let background = document.querySelector(".background");
    

    const backgroundTime = new Date().getHours();

    if(backgroundTime < 11){
        background.style.backgroundImage = "url('./imgs/morning-mountain.jpg')";
    } else if (backgroundTime < 20){
        background.style.backgroundImage = "url('./imgs/afternoon-mountain.jpg')";
    } else {
        background.style.backgroundImage = "url('./imgs/night-mountain.jpg')";
    }

 
}

window.onload = backgroundChange;





let time = document.getElementById("time");

function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // shows 0 in displayed time
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time.textContent = `${hours}:${minutes}`;
}

// Call once to set the initial time
updateClock();





// quote content
const quotes = [
    "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Compare yourself to who you were yesterday, not to who someone else is today.",
    "If you fulfill your obligations everyday you don't need to worry about the future."
];


// Function to display a random quote
function showRandomQuote() {
    let randomNumber = Math.random() * quotes.length;
    let newNumber = Math.floor(randomNumber);
    document.getElementById("randomQuote").textContent = quotes[newNumber];
}

// Display a random quote when the page loads
showRandomQuote();




// Event listener for "Add Quote" button
document.getElementById("addQuote").addEventListener("click", function() {
    // Use prompt to get input from user
    const newQuote = prompt("Enter a new quote:");
    
    // Check if user entered something and didn't cancel
    if (newQuote !== null && newQuote.trim() !== "") {
        // Add the new quote to the array
        quotes.push(newQuote);
        
        // Display the new quote immediately
        document.getElementById("randomQuote").textContent = newQuote;
        
        // Show confirmation alert
        alert("Quote added successfully!");
    } else if (newQuote !== null) {
        // If user entered an empty string
        alert("Please enter a valid quote.");
    }
    // If user clicked cancel, do nothing
});