// Function for how the networth text is displayed
function formatNumberToCurrency(num) {
  const suffixes = ["", "K", "M", "B", "T", "N"];
  const magnitude = Math.floor(Math.log(Math.abs(num)) / Math.log(1000));
  const normalizedNum = num / Math.pow(1000, magnitude);
  const prefix = num < 0 ? "-" : "";
  const num_0 = num === 0 ? 0 : prefix;

  return num === 0
    ? "$0"
    : `$${prefix}${num_0}${normalizedNum.toFixed(0)}${suffixes[magnitude]}`;
}

const randomValue = Math.random() * (200000000000 - 0 + 1) + 0;
const formattedValue = formatNumberToCurrency(randomValue);

// When someone enters the website, display elon's net worth guessing number randomly using the previous function

document.ge;
const additionResult = document.querySelector(".title1");
additionResult.textContent = formattedValue;

// then, if the user clicks the true & false buttons, show their respective modals.

// assigning variables to HTML elements
const trueButton = document.querySelector(".True-button-guess-elon-money");
const trueButtonModal = document.querySelector(".weDontKnowModal");
const falseButton = document.querySelector(".False-button-guess-elon-money");
const falseButtonModal = document.querySelector(".weDontKnowModal");

// Function for clicking true button
const trueClickButton = function () {
  trueButtonModal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  cancelmodal2.addEventListener("click", function () {
    trueButtonModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
};

trueButton.addEventListener("click", trueClickButton);

// Function for clicking false button
const falseClickButton = function () {
  falseButtonModal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  cancelmodal2.addEventListener("click", function () {
    falseButtonModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
};

falseButton.addEventListener("click", trueClickButton);

// When the user clicks the image story of elon musk, show the next images on the array, and when the array gets to the last image, restart it again.
let elonImg1 = document.querySelector(".elon-img-1");

const images = [
  "images/elon1.png",
  "images/elon2.png",
  "images/elon3.png",
  "images/elon4.png",
  "images/elon5.png",
  "images/elon6.png",
  "images/elon7.png",
  "images/elon8.png",
  "images/elon9.png",
  "images/elon10.png",
  "images/elon11.png",
  "images/elon12.png",
  "images/elon13.png",
  "images/elon14.png",
];

let imagesIndex = 0;

elonImg1.addEventListener("click", function () {
  imagesIndex++;
  if (imagesIndex === images.length - 1) {
    imagesIndex = 0;
  }
  elonImg1.src = images[imagesIndex];
});

// If the user clicks "change user" button, make the login modal appear again.
let myButton = document.querySelector(".changeuser-button");
let myHeading = document.querySelector(".username-greetings");

// myButton.textContent = setUserName().value;

// When user clicks the no button for the "Do you want us to say hi?" question
const questionAnswerNo = document.querySelector(
  ".user-login-question-answer-no"
);
const questionAnswerYes = document.querySelector(
  ".user-login-question-answer-yes"
);
const userLoginDiv = document.querySelector(".user-login");
const userLoginQuestion = document.querySelector(".user-login-question");
const userAnswerNoButton = document.querySelector(".userNoQuestionAnswerBig");
const userAnswerYesButton = document.querySelector(".userYesQuestionAnswerBig");
const overlay = document.querySelector(".overlay");
const modalLogin = document.querySelector(".answerYesModalLogin");

// Function for the moment the user clicks the no button on the user login question
const closeButtonNo = function () {
  userAnswerNoButton.classList.remove("hidden");
  setTimeout(function () {
    userLoginDiv.classList.add("hidden");
  }, 700 /* In miliseconds */);
};

questionAnswerNo.addEventListener("click", closeButtonNo);

// Function for the moment the user clicks the yes button on the user login question
const closeButtonYes = function () {
  userAnswerYesButton.classList.remove("hidden");
  questionAnswerNo.classList.add("hidden");
  overlay.classList.remove("hidden");
  modalLogin.classList.remove("hidden");

  setTimeout(function () {
    userAnswerYesButton.classList.add("hidden");
    userLoginDiv.classList.add("hidden");
  }, 700 /* In miliseconds */);
};

questionAnswerYes.addEventListener("click", closeButtonYes);

// If the user completes login form, store the info on an object

const usersData = {};

const nameInput = document.querySelector(".inputName");
const emailInput = document.querySelector(".inputEmail");
const okButton = document.querySelector(".inputsOkButton");
const emptyValueMessage = document.querySelector(".emptyValuesMessage");
const emptyValueMessage2 = document.querySelector(".emptyValuesMessage2");
const modalHeader = document.querySelector(".modalHeader");
const cancelmodal = document.querySelector(".cancelModalButton");
const cancelmodal2 = document.querySelector(".cancelModalButton2");
const cancelmodal3 = document.querySelector(".cancelModalButton3");
const emailNotValid = document.querySelector(".emailNotValidMessage");
const welcomeUserMessage = document.querySelector(".welcomeUserMessage");
// Function for when the user clicks the Ok button of the Modal

const acceptModal = function () {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  // Define regex for validity of email
  const emailPattern = /^[a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]+$/;

  if (!nameValue && !emailValue) {
    emptyValueMessage.classList.remove("hidden");
    modalHeader.style.top = "10px";
    return;
  } else if (!nameValue || !emailValue) {
    emptyValueMessage2.classList.remove("hidden");
    modalHeader.style.top = "10px";
    return;
  } else if (!emailPattern.test(emailValue)) {
    emailNotValid.classList.remove("hidden");
    return;
  } else if (emailValue !== "" && nameValue !== "") {
    emptyValueMessage.classList.add("hidden");
    emptyValueMessage2.classList.add("hidden");
    modalHeader.style.top = "35px";
    modalLogin.classList.add("hidden");
    overlay.classList.add("hidden");

    usersData[nameValue] = {
      name: nameValue,
      email: emailValue,
    };

    const lastUserKey =
      Object.keys(usersData)[Object.keys(usersData).length - 1];

    welcomeUserMessage.textContent = `Welcome ${usersData[lastUserKey].name}`;

    console.log(usersData);
    return;
  }
};

okButton.addEventListener("click", acceptModal);

cancelmodal.addEventListener("click", function () {
  modalLogin.classList.add("hidden");
  overlay.classList.add("hidden");
});
