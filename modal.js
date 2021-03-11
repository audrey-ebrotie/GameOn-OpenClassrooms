// Toggle menu
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// DOM Elements (variables)
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById('btn-close');

const iconSuccess = document.querySelectorAll(".fas fa-check-circle");
const iconError = document.querySelectorAll(".fas fa-exclamation-circle");

const formFirstName = document.getElementById('first-name');
const formLastName = document.getElementById('last-name');
const formEmail = document.getElementById('email');
const formBirthdate = document.getElementById('birthdate');
const formQuantity = document.getElementById('quantity');
const formLocation1 = document.getElementById('location1');
const formLocation2 = document.getElementById('location2');
const formLocation3 = document.getElementById('location3');
const formLocation4 = document.getElementById('location4');
const formLocation5 = document.getElementById('location5');
const formLocation6 = document.getElementById('location6');
const formCheckboxTerms = document.getElementById('checkbox2-1');
const formCheckbox2 = document.getElementById('checkbox2-2');

const formSubmitBtn = document.getElementById('btn-submit');

const firstNameErrorMessage = document.getElementById('first-name_errorMessage');
const lastNameErrorMessage = document.getElementById('last-name_errorMessage');
const emailErrorMessage = document.getElementById('email_errorMessage');
const birthdateErrorMessage = document.getElementById('birthdate_errorMessage');
const quantityErrorMessage = document.getElementById('quantity_errorMessage');
const locationErrorMessage = document.getElementById('location_errorMessage');
const checkboxTermsErrorMessage = document.getElementById('checkboxTerms_errorMessage');

const submitSendingMessage = document.getElementById('modal-submitSending');

const formScreen = document.getElementById('form-screen');
const confirmationScreen = document.getElementById('confirmation-screen');
const closeConfirmationBtn = document.getElementById('btn-confirmation');
const confirmationTxt = document.getElementById('confirmation-text');

// ouvrir formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
  document.body.style.overflowY = "hidden"; // Empêche le scrolling du body quand modal ouvert
  document.body.style.height = "100%"; 
  window.scrollTo(0,0);
}

// Ferme le modal si clic à l'extérieur
window.onclick = function(event) {
  if(event.target == modalbg) {
    modalbg.style.display = "none";
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto";  
  }
}

// fermer formulaire
closeModalBtn.addEventListener('click', closeModal);

// fermer écran succès
closeConfirmationBtn.addEventListener('click', closeModal);

function closeModal() {
  modalbg.style.display = "none";
  document.body.style.overflow = "auto"; // Réative le scrolling du body quand modal fermé
  document.body.style.height = "auto";

  // Réinitialise l'état du form après fermeture
  formFirstName.value = " ";
  formLastName.value = " ";
  formEmail.value = " ";
  formBirthdate.value = " ";
  formQuantity.value = " ";
  formLocation1.checked = false;
  formLocation2.checked = false; 
  formLocation3.checked = false; 
  formLocation4.checked = false; 
  formLocation5.checked = false; 
  formLocation6.checked = false; 
  formCheckboxTerms.checked = false;
  formCheckbox2.checked = false;

    // Retire les messages et bordures d'erreur après fermeture modal
  firstNameErrorMessage.style.display = "none"; 
  formFirstName.style.border = "none"; 
  
  lastNameErrorMessage.style.display = "none"; 
  formLastName.style.border = "none"; 

  emailErrorMessage.style.display = "none";  
  formEmail.style.border = "none";  

  birthdateErrorMessage.style.display = "none";  
  formBirthdate.style.border = "none";  

  quantityErrorMessage.style.display = "none";  
  formQuantity.style.border = "none"; 

  locationErrorMessage.style.display = "none";  
  checkboxTermsErrorMessage.style.display = "none";  
  submitSendingMessage.style.display = "none"; 

    // Réinitialise l'état du form après validation et retire affichage final confirmation
  formScreen.style.display = "block";
  confirmationScreen.style.display = "none";
}


// Vérifie si la saisie est valide, sinon message d'erreur + bordure rouge

// <!-- ******************************** Prénom ***************************** -->
function validateFirstName(){

  if(formFirstName.value.length <= 1)
  {
    firstNameErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameErrorMessage.style.display = "block"; 
    formFirstName.style.border="2px solid #db2f40";
    return false;
  }
  else{
    firstNameErrorMessage.style.display = "none"; 
    formFirstName.style.border = "2px solid #279e7a";
    return true;   
  }

}

// <!-- ******************************** Nom ***************************** -->
function validateLastName(){
  if(formLastName.value.length <= 1)
  {
    lastNameErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastNameErrorMessage.style.display = "block";  
    formLastName.style.border="2px solid #db2f40";
    return false;  
  }
  else{
    lastNameErrorMessage.style.display = "none";
    formLastName.style.border="2px solid #279e7a";  
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
    formEmail.style.border="2px solid #279e7a";
    return true;
     
  } else {
    emailErrorMessage.textContent = "Vous devez saisir une adresse mail valide. ";
    emailErrorMessage.style.display = "block";  
    formEmail.style.border="2px solid #db2f40";
    return false;  
  }
}

// <!-- ******************************** Date de naissance ***************************** -->
function validateBirthdate(){
  if(!formBirthdate.value)
  {
    birthdateErrorMessage.textContent = "Vous devez entrer votre date de naissance.";
    birthdateErrorMessage.style.display = "block";    
    formBirthdate.style.border="2px solid #db2f40";
    return false;
  }
  else{
    birthdateErrorMessage.style.display = "none";   
    formBirthdate.style.border="2px solid #279e7a"; 
    return true;
  }
}

// <!-- ******************************** Tournois ***************************** -->
function validateQuantity(){
  if(formQuantity.value < 0 || formQuantity.value === "")
  {
    quantityErrorMessage.textContent = "Vous devez saisir un chiffre ou nombre valide. ";
    quantityErrorMessage.style.display = "block"; 
    formQuantity.style.border="2px solid #db2f40"; 
    return false;  
  }
  else{
    quantityErrorMessage.style.display = "none";  
    formQuantity.style.border="2px solid #279e7a"; 
    return true;  
  }
}

// <!-- ******************************** Villes ***************************** -->
function validateLocation(){
  let boxChecked = false;
  
  if(formLocation1.checked){
    boxChecked = true;
  }

  else if(formLocation2.checked){
    boxChecked = true;
  }

  else if(formLocation3.checked){
    boxChecked = true;
  }

  else if(formLocation4.checked){
    boxChecked = true;
  }

  else if(formLocation5.checked){
    boxChecked = true;
  }

  else if(formLocation6.checked){
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
function validateCheckboxTerms(){
  if(formCheckboxTerms.checked) {
    checkboxTermsErrorMessage.style.display = "none";    
    return true;

  } else {
    checkboxTermsErrorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    checkboxTermsErrorMessage.style.display = "block";  
    return false;  
  }
  
}

// Si tous les champs bien remplis > Submit btn = message puis affichage final confirmation
formSubmitBtn.addEventListener('click', function(e) {

  e.preventDefault(); /* par défaut le formulaire se ferme tout de suite après le clic */

  if(validateFirstName()
  && validateLastName()
  && validateEmail()
  && validateBirthdate()
  && validateQuantity()
  && validateLocation()
  && validateCheckboxTerms())
  {
    submitSendingMessage.style.display = "block";
    setTimeout(showConfirmationScreen, 2000); /* délai affichage final confirmation */
  }
});

// Ecran de confirmation 
function showConfirmationScreen()
{
  formScreen.style.display = "none"; /* masque le formulaire une fois validé */
  confirmationScreen.style.display = "inline-flex";

}