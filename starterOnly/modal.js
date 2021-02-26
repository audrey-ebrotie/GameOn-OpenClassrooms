function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements (variables)
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById('btn-close');

const formFirst = document.getElementById('first');
const formLast = document.getElementById('last');
const formEmail = document.getElementById('email');
const formBirthdate = document.getElementById('birthdate');
const formQuantity = document.getElementById('quantity');
const formLocation = document.getElementsByName('location');
const formCheckbox1 = document.getElementById('checkbox1');
const formCheckbox2 = document.getElementById('checkbox2');

const formSubmitBtn = document.getElementById('btn-submit');
const firstErrorMessage = document.getElementById('first_errorMessage');
const lastErrorMessage = document.getElementById('last_errorMessage');
const emailErrorMessage = document.getElementById('email_errorMessage');
const birthdateErrorMessage = document.getElementById('birthdate_errorMessage');
const quantityErrorMessage = document.getElementById('quantity_errorMessage');
const locationErrorMessage = document.getElementById('location_errorMessage');
const checkbox1ErrorMessage = document.getElementById('checkbox1_errorMessage');

const submitSucess_message = document.getElementById('modal-submitSucess');

const form_screen = document.getElementById('formScreen');
const success_screen = document.getElementById('successScreen');
const closeSuccessBtn = document.getElementById('btn-success');
const SuccessTxt = document.getElementById('successText');

// ouvrir formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

// fermer formulaire
closeModalBtn.addEventListener('click', ($event) => {
  $event.preventDefault();
  closeModal();
});

// fermer écran succès
closeSuccessBtn.addEventListener('click', ($event) => {
  $event.preventDefault();
  closeModal();
});

function closeModal() {
  modalbg.style.display = "none";

  // Efface le formulaire à la fermeture
  first_errMessage.style.display = "none";  
  last_errMessage.style.display = "none";  
  email_errMessage.style.display = "none";  
  birthdate_errMessage.style.display = "none";  
  quantity_errMessage.style.display = "none";  
  location_errMessage.style.display = "none";  
  checkbox1_errMessage.style.display = "none";  
  submitSucess_message.style.display = "none"; 
  form_screen.style.display = "block";
  success_screen.style.display = "none";
}



// Vérifie si la saisie est valide, sinon message d'erreur

// <!-- ******************************** Prénom ***************************** -->
function validateFirst(){
  if(formFirst.value.length<=1)
  {
    firstErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstErrorMessage.style.display = "block";    
    return false;
  }
  else{
    firstErrorMessage.style.display = "none"; 
    return true;   
  }
}

// <!-- ******************************** Nom ***************************** -->
function validateLast(){
  if(formLast.value.length<=1)
  {
    lastErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastErrorMessage.style.display = "block";  
    return false;  
  }
  else{
    lastErrorMessage.style.display = "none";   
    return true; 
  }
}

// <!-- ******************************** Email ***************************** -->
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateEmail() {
let email = document.getElementById("email").value;

  if(checkEmail(email))
  {
    emailErrorMessage.style.display = "none";
    return true;
     
  } else {
    emailErrorMessage.textContent = "Vous devez saisir une adresse mail valide. ";
    emailErrorMessage.style.display = "block";  
    return false;  
  }
}

// <!-- ******************************** Date de naissance ***************************** -->
function validateBirthdate(){
  if(!formBirthdate.value)
  {
    birthdateErrorMessage.textContent = "Vous devez entrer votre date de naissance.";
    birthdateErrorMessage.style.display = "block";    
    return false;
  }
  else{
    birthdateErrorMessage.style.display = "none";    
    return true;
  }
}

// <!-- ******************************** Tournois ***************************** -->
function validateQuantity(){
  if(formQuantity.value < 0 || formQuantity.value === "")
  {
    quantityErrorMessage.textContent = "Vous devez saisir un chiffre ou nombre valide. ";
    quantityErrorMessage.style.display = "block";  
    return false;  
  }
  else{
    quantityErrorMessage.style.display = "none";  
    return true;  
  }
}

// <!-- ******************************** Villes ***************************** -->
function validateLocation(){
  let boxChecked = false;
  
  if(document.getElementById("location1").checked){
    boxChecked = true;
  }

  else if(document.getElementById("location2").checked){
    boxChecked = true;
  }

  else if(document.getElementById("location3").checked){
    boxChecked = true;
  }

  else if(document.getElementById("location4").checked){
    boxChecked = true;
  }

  else if(document.getElementById("location5").checked){
    boxChecked = true;
  }

  else if(document.getElementById("location6").checked){
    boxChecked = true;
  }

  if(boxChecked) {
    locationErrorMessage.style.display = "none";   
    return true; 
  }

  else {
    locationErrorMessage.textContent = "Vous devez choisir au moins une option.";
    locationErrorMessage.style.display = "block";  
    return false;  
  }

}

// <!-- ******************************** Conditions d'utilisation ***************************** -->
function validateCheckbox1(){
  if(formCheckbox1.checked) {
    checkbox1ErrorMessage.style.display = "none";    
    return true;

  } else {
    checkbox1ErrorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    checkbox1ErrorMessage.style.display = "block";  
    return false;  
  }
  
}


// ok si tous les champs bien remplis > message de confirmation
formSubmitBtn.addEventListener('click', ($event) => {
  $event.preventDefault();

  if(validateFirst()
  && validateLast()
  && validateEmail()
  && validateBirthdate()
  && validateQuantity()
  && validateLocation()
  && validateCheckbox1())
  {
    submitSucess_message.style.display = "block";
    setTimeout(showSuccessScreen, 2000);
  }
});

// Ecran de confirmation 
function showSuccessScreen()
{
  form_screen.style.display = "none";
  success_screen.style.display = "flex";
  success_screen.style.flexDirection = "column";
  success_screen.style.justifyContent = "space-between";

}