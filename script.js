function myFunction() {
    const infoDiv = document.getElementById("moreInfo");
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
    } else {
      infoDiv.style.display = "none";
    }

    let button = document.querySelector("#btn");
  
    if (button.innerText === "Click for more") {
      button.innerText = "Click for less";
    } else {
      button.innerText = "Click for more";
    }
}

// function moreLess() {
//     let button = document.querySelector("#btn");
  
//     if (button.innerText === "click for more") {
//       button.innerText = "click for less";
//     } else {
//       button.innerText = "click for more";
//     }
//   }

// My original code:

//     function moreLess() {

//     let btnText = document.querySelectorAll('#btn').innerText ((this is a copy of the attribute, this is not selecting the attribute to change))

//     if (btnText == 'click for more') {   << on this line, the "click for more" is not capitalized and so it doesnt match the html, so even in this code btnText does not match
//         btnText == 'click for less';
//     } else {
//         btnText = 'click for more';
//     }
// }