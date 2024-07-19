// JavaScript functions for calculator operations

function addToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch(error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function operate(operator) {
    document.getElementById('display').value += operator;
  }
  