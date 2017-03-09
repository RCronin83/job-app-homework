(function uiModule(){
  window.todoApp = window.todoApp || {};

  function checkValueLength(eventObj){
    if(eventObj.target.value.length > 0){
      eventObj.target.parentNode.parentNode.classList.remove('has-error');
    } else {
      eventObj.target.parentNode.parentNode.classList.add('has-error');
    }
  }

  document.querySelector('#full-name')
    .addEventListener('blur', checkValueLength);

  function rangeUpdate(eventObj){
    eventObj.target.parentNode.childNodes[3].innerText =
      eventObj.target.value + 'years';

  }
  document.querySelector('#exp').addEventListener('change', rangeUpdate);


  let checkCount = 0;
  function checkBoxCount(eventObj){
    if (eventObj.target.checked) {
        checkCount++;
    } else {
        checkCount--;
    }

    eventObj.target.parentNode.parentNode.childNodes[7].innerText = checkCount + ' languages';

  }
  Array.from(document.querySelectorAll('[name="languages"]'))
    .forEach(function add(box){
      box.addEventListener('change', checkBoxCount);

    });
    document.querySelector('form')
      .addEventListener('submit', function doNotSubmit(evt){
      evt.preventDefault();
    });

})();
