function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById('btn-close');

// ***************** DOM Elements : saisies formulaires 
const formFirst = document.getElementById('first');
const formLast = document.getElementById('last');
const formEmail = document.getElementById('email');
const formBirthdate = document.getElementById('birthdate');
const formQuantity = document.getElementById('quantity');
const formLocation = document.getElementsByName('location');
const formCheckbox1 = document.getElementById('checkbox1');
const formCheckbox2 = document.getElementById('checkbox2');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer formulaire Event
closeModalBtn.addEventListener('click', ($event) => {
  $event.preventDefault();
  closeModal();
});

// fermer formulaire 
function closeModal() {
  modalbg.style.display = "none";

  }

// Vérifie si la saisie est valide, sinon message d'erreur
function validateFirst(){
  if(formFirst.value.length <= 1 )
  {
    first_errMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    first_errMessage.style.display = "block";    
    return false;
  }
  else{
    first_errMessage.style.display = "none"; 
    return true;   
  }
}


