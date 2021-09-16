let form = document.forms.landingForm;
let error = document.querySelector('.error-message');
let errorEmpty = document.querySelector('.error-message-empty');
let inputField = form.elements.email;


let userInput = '';
// Handle Events focus/blur
inputField.onfocus = function(){
  inputField.value = userInput;
}
inputField.onblur = function(){
  userInput = inputField.value;
}

function onSubmitHandler(){
  resetDiplayStyle();
  if(userInput.length === 0){
    errorEmpty.style.display = "block";
    return false;
  }
  if(checkEmail(userInput)){
    form.action="#";
    form.method="POST";
    form.send();
  }else{
    inputField.classList.add('form__input-error');
    error.style.display = "block";
    return false;
  }
}

function resetDiplayStyle(){
  errorEmpty.style.display = 'none';
  error.style.display='none';
}

function checkEmail(email){
  const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
  if(reg.test(email)) return true;
  return false;
}