var btn1plus = document.getElementsByClassName("btn1+");
var btn1moin = document.getElementsByClassName("btn1-");
var c1 = document.getElementsByClassName("c1");
var hearts = document.getElementsByClassName("fa-solid");
var title = document.getElementsByClassName("card_title");
var prt = document.getElementById("parent");
var prx = document.getElementsByClassName("prix");
var total = document.getElementById("total");

var somme = 0;

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].style.color === "black") {
      hearts[i].style.color = "red";
    } else {
      hearts[i].style.color = "black";
    }
  });
}

for (let i = 0; i < btn1plus.length; i++) {
  let compteur1 = 0;

  btn1plus[i].addEventListener("click", function () {
    compteur1 += 1;
    c1[i].innerHTML = compteur1;

    somme += parseInt(prx[i].innerHTML);

    total.innerHTML = somme;

    if (compteur1 > 0) {
      var newDiv = document.createElement("li");
      var newContent = document.createTextNode(title[i].textContent);
      newDiv.appendChild(newContent);
      prt.appendChild(newDiv);
    }
  });

  btn1moin[i].addEventListener("click", function () {
    if (compteur1 > 0) {
      compteur1 -= 1;
      c1[i].innerHTML = compteur1;

      somme -= parseInt(prx[i].innerHTML);
      total.innerHTML = somme;
    }
  });

  var deleteButton = btn1plus[i].closest('.card').querySelector('.btn-delete');
  deleteButton.addEventListener("click", function () {
    var cardPrice = parseFloat(prx[i].textContent);
    somme -= cardPrice;
    total.innerHTML = somme;
    prt.removeChild(deleteButton.closest(".card"));
  });
}
