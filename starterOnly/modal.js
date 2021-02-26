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

const formFirstName = document.getElementById('first-name');
const formLastName = document.getElementById('last-name');
const formEmail = document.getElementById('email');
const formBirthdate = document.getElementById('birthdate');
const formQuantity = document.getElementById('quantity');
const formLocation = document.getElementsByName('location');
const formCheckbox1 = document.getElementById('checkbox1');
const formCheckbox2 = document.getElementById('checkbox2');

const formSubmitBtn = document.getElementById('btn-submit');

const firstNameErrorMessage = document.getElementById('first-name_errorMessage');
const lastNameErrorMessage = document.getElementById('last-name_errorMessage');
const emailErrorMessage = document.getElementById('email_errorMessage');
const birthdateErrorMessage = document.getElementById('birthdate_errorMessage');
const quantityErrorMessage = document.getElementById('quantity_errorMessage');
const locationErrorMessage = document.getElementById('location_errorMessage');
const checkbox1ErrorMessage = document.getElementById('checkbox1_errorMessage');

const submitSuccessMessage = document.getElementById('modal-submitSuccess');

const formScreen = document.getElementById('form-screen');
const successScreen = document.getElementById('success-screen');
const closeSuccessBtn = document.getElementById('btn-success');
const SuccessTxt = document.getElementById('success-text');

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

  // Réinitialise l'état du form après fermeture
  formFirstName.value = " ";
  formLastName.value = " ";
  formEmail.value = " ";
  formBirthdate.value = " ";
  formQuantity.value = " ";
  formLocation.checked = false; /* ne décoche pas les cases à la fermeture, pk? */
  formCheckbox1.checked = false;
  formCheckbox2.checked = false;

    // Retire les messages d'erreur après fermeture 
  firstNameErrorMessage.style.display = "none";  
  lastNameErrorMessage.style.display = "none";  
  emailErrorMessage.style.display = "none";  
  birthdateErrorMessage.style.display = "none";  
  quantityErrorMessage.style.display = "none";  
  locationErrorMessage.style.display = "none";  
  checkbox1ErrorMessage.style.display = "none";  
  submitSuccessMessage.style.display = "none"; 

    // Réinitialise l'état du form après validation et retire le success screen
  formScreen.style.display = "block";
  successScreen.style.display = "none";
}


// Vérifie si la saisie est valide, sinon message d'erreur

// <!-- ******************************** Prénom ***************************** -->
function validateFirstName(){
  if(formFirstName.value.length<=1)
  {
    firstNameErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameErrorMessage.style.display = "block";    
    return false;
  }
  else{
    firstNameErrorMessage.style.display = "none"; 
    return true;   
  }
}

// <!-- ******************************** Nom ***************************** -->
function validateLastName(){
  if(formLastName.value.length<=1)
  {
    lastNameErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastNameErrorMessage.style.display = "block";  
    return false;  
  }
  else{
    lastNameErrorMessage.style.display = "none";   
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
    locationErrorMessage.textContent = "Vous devez choisir une option.";
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


// Si tous les champs bien remplis > Submit btn = success message puis success screen
formSubmitBtn.addEventListener('click', ($event) => {
  $event.preventDefault();

  if(validateFirstName()
  && validateLastName()
  && validateEmail()
  && validateBirthdate()
  && validateQuantity()
  && validateLocation()
  && validateCheckbox1())
  {
    submitSuccessMessage.style.display = "block";
    setTimeout(showSuccessScreen, 2000); /* délai affichage success screen */
  }

  else {
    alert('Veuillez saisir les champs avant de valider. ')
  }
});

// Ecran de confirmation : success screen
function showSuccessScreen()
{
  formScreen.style.display = "none"; /* masque le formulaire une fois validé */
  successScreen.style.display = "block";
}