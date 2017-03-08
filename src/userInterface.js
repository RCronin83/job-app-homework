(function uiModule(){
  window.todoApp = window.todoApp || {};

  function checkValueLength(eventObj){
    console.log(eventObj.target.value);
    if(eventObj.target.value.length > 0){
      eventObj.target.parentNode.parentNode.classList.remove('has-error');

    } else {
      eventObj.target.parentNode.parentNode.classList.add('has-error');
    }

  }

    document.querySelector('#full-name')
      .addEventListener('blur', checkValueLength);

})();
