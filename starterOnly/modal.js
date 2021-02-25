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


function closeModal() {
  modalbg.style.display = "none";
}

// Vérifie si le mail est valide
function confirmEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Vérifie si la saisie est valide, sinon message d'erreur
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

function validateEmail(){
  if(!confirmEmail(formEmail.value))
  {
    emailErrorMessage.textContent = "Vous devez saisir une adresse mail valide. ";
    emailErrorMessage.style.display = "block";  
    return false;  
  }
  else{
    emailErrorMessage.style.display = "none"; 
    return true;   
  }
}

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

function validateLocation(){
  let oneIsChecked = false;
  for(let i=0; i<formLocation.length;i++)
  {
    if(formLocation[i].checked)
    {
      oneIsChecked = true;
      break;
    }
  }

  if(!oneIsChecked)
  {
    locationErrorMessage.textContent = "Vous devez choisir une option.";
    locationErrorMessage.style.display = "block";  
    return false;  
  }
  else{
    locationErrorMessage.style.display = "none";   
    return true; 
  }
}

function validateCheckbox1(){
  if(!formCheckbox1.checked)
  {
    checkbox1ErrorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    checkbox1ErrorMessage.style.display = "block";  
    return false;  
  }
  else{
    checkbox1ErrorMessage.style.display = "none";    
    return true;
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
  }
});
