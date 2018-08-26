//  VERSION SIMPLE

// var display = document.getElementById("display");
//
//
// function AddNum(operator){
//   operations.push(operator)
//   display.value += operator;
// }
//
// function Clear(){
//   display.value = '';
// }
//
// function Result(){
//   var operators = display.value;
//   operators = eval(operators);
//   display.value = operators;
// }


//VERSION COMPLEX
var display = document.getElementById('display');
var saved_value = null;
var operator = '';
var displayIsResult = false;

document.querySelectorAll('.number').forEach(function(element){
  element.addEventListener('click', function(event){
    if (displayIsResult){
      display.value = event.target.value;
      displayIsResult = false;
    } else {
      display.value += event.target.value;
    }
  });
});
document.getElementById('multi').addEventListener('click', multi);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('plus').addEventListener('click', plus);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('clear').addEventListener('click', clear);

function clear(){
  clearDisplay();
  reset();
}

function clearDisplay(){
  display.value = '';
}

function reset(){
  saved_value = 0;
  operator = '';
}

function compute(){
  switch (operator) {

    case 'minus':
      var new_value = parseFloat(display.value);
      saved_value = saved_value - new_value ;
      break;
    case 'multi':
      var new_value = parseFloat(display.value);
      saved_value = saved_value * new_value ;
      break;
    case 'plus':
      var new_value = parseFloat(display.value);
      saved_value = saved_value + new_value ;
      break;
    case 'divide':
      var new_value = parseFloat(display.value);
      saved_value = saved_value / new_value ;
      break;

    default:
      saved_value = parseFloat(display.value);
  }
}

function changeDisplay(){
  if (operator == '') {
    clearDisplay();
  } else {
    displayIsResult = true;
    display.value = saved_value;
  }
}

function multi(){
  compute();
  changeDisplay();
  operator = 'multi';
}

function minus(){
  compute();
  changeDisplay();
  operator = 'minus';
}

function plus(){
  compute();
  changeDisplay();
  operator = 'plus';
}

function divide(){
  compute();
  changeDisplay();
  operator = 'divide';
}

function Result(){
  compute();
  changeDisplay();
  reset();
}
