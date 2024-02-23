function addition(num1, num2) {
    let result = num1 + num2;
     return result;
}

let result1 = addition(2000000000, 100000000000, 300000000000)
let result = addition(34, 56);


function formatNumberToCurrency(num) {
    const suffixes = ["", "K", "M", "B", "T", "N"];
    const magnitude = Math.floor(Math.log(Math.abs(num)) / Math.log(1000));
    const normalizedNum = num / Math.pow(1000, magnitude);
    const prefix = (num < 0) ? "-" : "";
    const num_0 = (num === 0) ? 0 : prefix;
    
    return num === 0 ? "$0" : `$${prefix}${num_0}${normalizedNum.toFixed(0)}${suffixes[magnitude]}`;
  }
  

  const randomValue = Math.random() * (200000000000 - 0 + 1) + 0;
  const formattedValue = formatNumberToCurrency(randomValue);
  console.log(formattedValue); // Output

  
document.ge
const additionResult = document.querySelector(".title1");
additionResult.textContent = (formattedValue);
// When someone enters the website, display elon's net worth guessing number randomly 

// then, if the user clicks the true button, show a message

document.querySelector(".True-button-guess-elon-money").addEventListener("click", ()=> {
    alert("I mean, we really don't know lol");
});
document.querySelector(".False-button-guess-elon-money").addEventListener("click", ()=> {
    alert("Well, you're probably right because we really don't know lol");
});

// Add div of elon musk trough the years
const elonImg1 = document.querySelector(".elon-img-1");

const images = ["images/elon1.png", "images/elon2.png", "images/elon3.png", "images/elon4.png", "images/elon5.png", "images/elon6.png", "images/elon7.png", "images/elon8.png", "images/elon9.png", "images/elon10.png", "images/elon11.png", "images/elon12.png", "images/elon13.png", "images/elon14.png"];
let currentImageIndex = 0;

elonImg1.onclick = ()=> {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    elonImg1.setAttribute("src", images[currentImageIndex]);
};

let myButton = document.querySelector(".changeuser-button");
let myHeading = document.querySelector(".username-greetings");

function setUserName() {
    const myName = prompt("Enter your name.");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome back, ${myName}`;
    }
}


myButton.onclick = () => {
    setUserName();
};
