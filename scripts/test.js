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
const changeUserButton = document.querySelector(".changeuser-button");

changeUserButton.addEventListener("click", function () {
  modalLogin.style.top = "2600px";
  modalLogin.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // If the "welcome [user] header message appears, eliminate the login question"

  if (welcomeUserMessage.textContent !== "") {
    userLoginDiv.remove("hidden");
  }
});
// changeUserButton.textContent = setUserName().value;

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

// Dark & White Mode button On and Off
const circleButton = document.querySelector(".sexyCircle");
const overallButton = document.querySelector(".DarkWhiteModeDiv");
const htmlBody = document.querySelector("html");
const headerBorder = document.querySelector(".header-div");
const guessElonTitle = document.querySelector(".guess-elon-money");
const netWorthTitle = document.querySelector(".title1");
const elonSummary = document.querySelector(".elon-summary");
const elonMoreInfoLink = document.querySelector(".more-info-elon-wiki");
const elonProfileX = document.querySelector(".x-logo-elon-profile");
const divider = document.querySelector(".divider");
const trueFalseDiv = document.querySelector(
  ".true-false-buttons-guess-elon-money-div"
);
const life30Div = document.querySelector(".life30-div");
const onWarDiv = document.querySelector(".OnWar-div");
const superintelligenceDiv = document.querySelector(".Superintelligence-div");
const life30AuthorProfile = document.querySelector(".author-life30-div-circle");
const onWarAuthorProfile = document.querySelector(
  ".carl-von-clausewitz-author-div-circle"
);
const superintelligenceAuthorProfile = document.querySelector(
  ".nick-bostrom-author-div-circle"
);
const life30Quote = document.querySelector(".life30-elon-quote");
const onWarQuote = document.querySelector(".OnWar-elon-quote");
const superintelligenceQuote = document.querySelector(
  ".Superintelligence-elon-quote"
);
const life30Author = document.querySelector(".max-tegmark-author");
const onWarAuthor = document.querySelector(".carl-von-clausewitz-author");
const superintelligenceAuthor = document.querySelector(".nick-bostrom-author");
const superintelligenceTitle = document.querySelector(
  ".Superintelligence-title"
);
const superintelligenceSubtitle = document.querySelector(
  ".Superintelligence-subtitle"
);
const onWarTitle = document.querySelector(".OnWar-title");
const onWarSubtitle = document.querySelector(".OnWar-subtitle");
const life30Title = document.querySelector(".life30-title");
const life30Subtitle = document.querySelector(".life30-subtitle");
const clickOnImageMessage = document.querySelector(
  ".elon-images-story-subtitle"
);
const nerdyLogo = document.querySelector(".most-recommended-books-img");

let isOriginalButtonStyle = true;

overallButton.addEventListener("click", function () {
  if (isOriginalButtonStyle) {
    circleButton.style.left = "41px";
    htmlBody.style.backgroundColor = "#000000";
    headerBorder.style.borderBottom = "1px solid white";
    guessElonTitle.style.color = "#dadada";
    netWorthTitle.style.color = "#dadada";
    elonSummary.style.color = "#dadada";
    elonMoreInfoLink.style.color = "rgb(197, 13, 178)";
    elonMoreInfoLink.addEventListener("mouseenter", function () {
      elonMoreInfoLink.style.color = "rgb(255, 98, 239)";
    });
    elonMoreInfoLink.addEventListener("mouseleave", function () {
      elonMoreInfoLink.style.color = "rgb(255, 6, 230)";
    });
    elonProfileX.style.border = "1px solid rgb(255, 0, 230)";
    elonProfileX.addEventListener("mouseenter", function () {
      elonProfileX.style.border = "2px solid rgb(255, 0, 230)";
      elonProfileX.style.top = "-67px";
      elonProfileX.style.left = "81px";
    });
    elonProfileX.addEventListener("mouseleave", function () {
      elonProfileX.style.border = "1px solid rgb(255, 0, 230)";
      elonProfileX.style.top = "-66px";
      elonProfileX.style.left = "82px";
    });
    divider.style.color = "white";
    trueFalseDiv.style.backgroundColor = "#423f3f";
    life30Div.style.backgroundColor = "#423f3f";
    life30Quote.style.color = "white";
    onWarDiv.style.backgroundColor = "#423f3f";
    onWarQuote.style.color = "white";
    superintelligenceDiv.style.backgroundColor = "#423f3f";
    superintelligenceQuote.style.color = "white";
    life30AuthorProfile.style.border = "2px solid rgb(225, 13, 211)";
    onWarAuthorProfile.style.border = "2px solid rgb(225, 13, 211)";
    superintelligenceAuthorProfile.style.border = "2px solid rgb(225, 13, 211)";
    life30Author.style.color = "rgb(255, 255, 255)";
    onWarAuthor.style.color = "white ";
    superintelligenceAuthor.style.color = "white";
    // life30 title
    life30Title.style.background =
      "radial-gradient(rgb(255, 255, 255), rgb(243, 9, 255))";
    life30Title.style.backgroundSize = "190% 200%";
    life30Title.style.backgroundPosition = "100% 100%";
    life30Title.style.backgroundClip = "text";
    life30Title.style.webkitTextFillColor = "transparent";
    life30Title.style.marginTop = "16px";
    life30Title.style.paddingBottom = "12px";
    // OnWar title
    onWarTitle.style.background =
      "radial-gradient(rgb(255, 255, 255), rgb(243, 9, 255))";
    onWarTitle.style.backgroundSize = "190% 200%";
    onWarTitle.style.backgroundPosition = "100% 100%";
    onWarTitle.style.backgroundClip = "text";
    onWarTitle.style.webkitTextFillColor = "transparent";
    onWarTitle.style.marginTop = "16px";
    onWarTitle.style.paddingBottom = "12px";
    // Superintelligence title
    superintelligenceTitle.style.background =
      "radial-gradient(rgb(255, 255, 255), rgb(243, 9, 255))";
    superintelligenceTitle.style.backgroundSize = "190% 200%";
    superintelligenceTitle.style.backgroundPosition = "100% 100%";
    superintelligenceTitle.style.backgroundClip = "text";
    superintelligenceTitle.style.webkitTextFillColor = "transparent";
    superintelligenceTitle.style.marginTop = "16px";
    superintelligenceTitle.style.paddingBottom = "12px";
    // life30 subtitle
    life30Subtitle.style.background =
      "radial-gradient(rgb(243, 9, 255), rgb(255, 255, 255))";
    life30Subtitle.style.backgroundSize = "190% 200%";
    life30Subtitle.style.backgroundPosition = "100% 100%";
    life30Subtitle.style.backgroundClip = "text";
    life30Subtitle.style.webkitTextFillColor = "transparent";
    // onwar subtitle
    onWarSubtitle.style.background =
      "radial-gradient(rgb(243, 9, 255), rgb(255, 255, 255))";
    onWarSubtitle.style.backgroundSize = "190% 200%";
    onWarSubtitle.style.backgroundPosition = "100% 100%";
    onWarSubtitle.style.backgroundClip = "text";
    onWarSubtitle.style.webkitTextFillColor = "transparent";
    // superintelligence subtitle
    superintelligenceSubtitle.style.background =
      "radial-gradient(rgb(243, 9, 255), rgb(255, 255, 255))";
    superintelligenceSubtitle.style.backgroundSize = "190% 200%";
    superintelligenceSubtitle.style.backgroundPosition = "100% 100%";
    superintelligenceSubtitle.style.backgroundClip = "text";
    superintelligenceSubtitle.style.webkitTextFillColor = "transparent";

    clickOnImageMessage.style.color = "white";
    userLoginDiv.style.backgroundColor = "#423f3f";
    userLoginQuestion.style.color = "white";
    nerdyLogo.style.cssText = "transition: opacity 0.1s; opacity: 0;";
    setTimeout(() => {
      nerdyLogo.src = "images/nerdyBlack.png";
      nerdyLogo.style.opacity = "1";
    }, 500);
  } else {
    nerdyLogo.style.cssText = "transition: opacity 0.1s; opacity: 0;";
    setTimeout(() => {
      nerdyLogo.src = "images/nerdy.png";
      nerdyLogo.style.opacity = "1";
    }, 500);
    circleButton.style.left = "4px";
    htmlBody.style.backgroundColor = "transparent";
    headerBorder.style.borderBottom = "1px solid black";
    guessElonTitle.style.color = "#000000";
    netWorthTitle.style.color = "#000000";
    elonSummary.style.color = "#000000";
    elonMoreInfoLink.style.color = "1px solid transparent";
    divider.style.color = "black";
    trueFalseDiv.style.backgroundColor = "#dadada";
    life30Div.style.backgroundColor = "rgb(220, 220, 220)";
    onWarDiv.style.backgroundColor = "rgb(220, 220, 220)";
    superintelligenceDiv.style.backgroundColor = "rgb(220, 220, 220)";
    onWarQuote.style.color = "#000000";
    superintelligenceQuote.style.color = "#000000";
    life30Quote.style.color = "#000000";
    life30Author.style.color = "rgb(117, 32, 132)";
    onWarAuthor.style.color = "rgb(117, 32, 132)";
    superintelligenceAuthor.style.color = "rgb(117, 32, 132)";
    // Life30 title
    life30Title.style.background =
      "radial-gradient(rgb(165, 27, 163), rgb(98, 8, 125))";
    life30Title.style.backgroundSize = "190% 200%";
    life30Title.style.backgroundPosition = "100% 100%";
    life30Title.style.backgroundClip = "text";
    life30Title.style.webkitTextFillColor = "transparent";
    life30Title.style.marginTop = "16px";
    life30Title.style.paddingBottom = "12px";
    // OnWar title
    onWarTitle.style.background =
      "radial-gradient(rgb(165, 27, 163), rgb(98, 8, 125))";
    onWarTitle.style.backgroundSize = "190% 200%";
    onWarTitle.style.backgroundPosition = "100% 100%";
    onWarTitle.style.backgroundClip = "text";
    onWarTitle.style.webkitTextFillColor = "transparent";
    onWarTitle.style.marginTop = "16px";
    onWarTitle.style.paddingBottom = "12px";
    // Superintelligence title
    superintelligenceTitle.style.background =
      "radial-gradient(rgb(165, 27, 163), rgb(98, 8, 125))";
    superintelligenceTitle.style.backgroundSize = "190% 200%";
    superintelligenceTitle.style.backgroundPosition = "100% 100%";
    superintelligenceTitle.style.backgroundClip = "text";
    superintelligenceTitle.style.webkitTextFillColor = "transparent";
    superintelligenceTitle.style.marginTop = "16px";
    superintelligenceTitle.style.paddingBottom = "12px";
    // Life30 subtitle
    life30Subtitle.style.background =
      "radial-gradient(rgb(255, 111, 255), rgb(38, 1, 50))";
    life30Subtitle.style.backgroundSize = "190% 200%";
    life30Subtitle.style.backgroundPosition = "100% 100%";
    life30Subtitle.style.backgroundClip = "text";
    life30Subtitle.style.webkitTextFillColor = "transparent";
    // Onwar subtitle
    onWarSubtitle.style.background =
      "radial-gradient(rgb(255, 111, 255), rgb(38, 1, 50))";
    onWarSubtitle.style.backgroundSize = "190% 200%";
    onWarSubtitle.style.backgroundPosition = "100% 100%";
    onWarSubtitle.style.backgroundClip = "text";
    onWarSubtitle.style.webkitTextFillColor = "transparent";
    // Superintelligence subtitle
    superintelligenceSubtitle.style.background =
      "radial-gradient(rgb(255, 111, 255), rgb(38, 1, 50))";
    superintelligenceSubtitle.style.backgroundSize = "190% 200%";
    superintelligenceSubtitle.style.backgroundPosition = "100% 100%";
    superintelligenceSubtitle.style.backgroundClip = "text";
    superintelligenceSubtitle.style.webkitTextFillColor = "transparent";

    clickOnImageMessage.style.color = "black";
    userLoginDiv.style.backgroundColor = "rgb(202, 191, 191)";
    userLoginQuestion.style.color = "black";
  }

  isOriginalButtonStyle = !isOriginalButtonStyle;
});
