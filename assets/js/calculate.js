const title = document.querySelector('#score');
title.innerHTML = "0"
buffer = "";

let a = "";
let b = "";

let count = 0;
let type = null;

const buttonGroup = document.querySelectorAll('.button').forEach(function(button) {
  button.addEventListener("click", function(ele) {
    if (!isNaN(button.innerHTML)) {
      buffer += button.innerHTML;
      title.innerHTML = buffer

      if (count == 2) {
        b = button.innerHTML;
      }
    }

  });
});

const addButton = document.querySelector("#add").addEventListener("click", function(ele) {
  ++count;
  title.innerHTML = "0";
  type = "add";
  if (count == 1) { 
    ("a");
    a = buffer;
    count++;
  } else if (count == 2) {
    ("b");
    b = buffer
    count = 0;
  }
  buffer = "";
});

const subtractButton = document.querySelector("#subtract").addEventListener("click", function(ele) {
  ++count;
  title.innerHTML = "0";
  type = "subtract";
  if (count == 1) { 
    ("a");
    a = buffer;
    count++;
  } else if (count == 2) {
    ("b");
    b = buffer
    count = 0;
  }
  buffer = "";
});

const multiplyButton = document.querySelector("#multiply").addEventListener("click", function(ele) {
  ++count;
  title.innerHTML = "0";
  type = "multiply";
  if (count == 1) { 
    ("a");
    a = buffer;
    count++;
  } else if (count == 2) {
    ("b");
    b = buffer
    count = 0;
  }
  buffer = "";
});

const divideButton = document.querySelector("#divide").addEventListener("click", function(ele) {
  ++count;
  title.innerHTML = "0";
  type = "divide";
  if (count == 1) { 
    ("a");
    a = buffer;
    count++;
  } else if (count == 2) {
    ("b");
    b = buffer
    count = 0;
  }
  buffer = "";
});

const equalsButton = document.querySelector("#equal").addEventListener("click", function(ele) {
  count = 0;
  if (type === "add") {
    title.innerHTML = "" + add(a, b)
    buffer = "";
    type = null;
  }
  else if (type === "subtract") {
    title.innerHTML = "" + subtract(a, b)
    buffer = "";
    type = null
  }
  else if (type === "multiply") {
    title.innerHTML = "" + multiply(a, b)
    buffer = "";
    type = null
  }
  else if (type === "divide") {
    title.innerHTML = "" + divide(a, b)
    buffer = "";
    
    type = null;
  } else {
    return;
  }
});

const clearButton = document.querySelector('#clear').addEventListener("click", function() {
  buffer = "";
  title.innerHTML = "0";
  a = null;
  b = null;
});

function add(a, b) {
  return Number(a) + Number(b);
}
function subtract(a, b) {
  return Number(a) - Number(b);
}
function multiply(a, b) {
  return Number(a) * Number(b);
}
function divide(a, b) {
  return Number(a) / Number(b);
}