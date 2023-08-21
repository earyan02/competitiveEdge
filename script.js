function myFunction() {
    const infoDiv = document.getElementById("moreInfo");
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
    } else {
      infoDiv.style.display = "none";
    }
}

    function moreLess() {

    let btnText = document.querySelectorAll('#btn').innerText

    if (btnText == 'click for more') {
        btnText == 'click for less';
    } else {
        btnText = 'click for more';
    }
}