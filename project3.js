window.onload = function () {
  var button = $("testOptions");
  button.onclick = testOptions;
};

// function to make it so that the show all test options button (onclick) will append 4 new buttons onto the screen with different functions attached to each one
function testOptions() {
  var area = $("buttonArea");

  // test if inputs are a triangle button
  var button1 = document.createElement("button");
  button1.innerHTML = "(1) Test whether these three sides can form a triangle";
  if ($("button1") == null) {
    area.appendChild(button1);
  }
  button1.id = "button1";
  button1.style.display = "block";
  button1.onclick = triangle;

  // right triangle button
  var button2 = document.createElement("button");
  button2.innerHTML =
    "(2) Test whether these three sides can form a right triangle";
  if ($("button2") == null) {
    area.appendChild(button2);
  }
  button2.id = "button2";
  button2.style.display = "block";
  button2.onclick = rightTriangle;

  //test both functions at once button
  var button3 = document.createElement("button");
  button3.innerHTML = "(3) Test both (1) and (2)";
  if ($("button3") == null) {
    area.appendChild(button3);
  }
  button3.id = "button3";
  button3.style.display = "block";
  button3.onclick = testBoth;

  // clear result button
  var button4 = document.createElement("button");
  button4.innerHTML = "(4) Clear Result!";
  if ($("button4") == null) {
    area.appendChild(button4);
  }
  button4.id = "button4";
  button4.style.display = "block";
  button4.onclick = clear;
}

// function to determine if html inputs make a triangle and append a span giving the result
function triangle() {
  var a = $("firstLength").value;
  var b = $("secondLength").value;
  var c = $("thirdLength").value;
  //I couldn't find another way to get this to work besides using parseInt on each value. They showed as strings in the console and would make the if statement return the wrong value here.
  var intA = parseInt(a);
  var intB = parseInt(b);
  var intC = parseInt(c);

  var result = document.createElement("span");
  var area = $("resultArea");

  if (a.length === 0 || b.length === 0 || c.length === 0) {
    result.innerHTML = "<br /> Please input values into all three boxes!";
  } else if (intA + intB > intC && intA + intC > intB && intB + intC > intA) {
    result.innerHTML = "<br /> These three sides can form a triangle!";
  } else {
    result.innerHTML = "<br /> These three sides cannot form a triangle!";
  }

  if ($("result") == null) {
    area.appendChild(result);
  }

  result.id = "result";
}

// function to determine if html inputs make a right triangle and append a span giving the result
function rightTriangle() {
  var a = $("firstLength").value;
  var b = $("secondLength").value;
  var c = $("thirdLength").value;
  var intA = parseInt(a);
  var intB = parseInt(b);
  var intC = parseInt(c);

  console.log(a, b, c);

  var rightResult = document.createElement("span");
  var area = $("resultArea");
  if (a.length === 0 || b.length === 0 || c.length === 0) {
    rightResult.innerHTML = "<br /> Please input values into all three boxes!";
  } else if (
    intA * intA === intB * intB + intC * intC ||
    intB * intB === intA * intA + intC * intC ||
    intC * intC === intA * intA + intB * intB
  ) {
    rightResult.innerHTML =
      "<br /> These three sides can form a right triangle!";
  } else
    rightResult.innerHTML =
      "<br /> These three sides cannot form a right triangle!";

  if ($("rightResult") == null) {
    area.appendChild(rightResult);
  }

  rightResult.id = "rightResult";
}

// function to determine if html inputs make a right triangle and a regular triangle and append spans giving the results
function testBoth() {
  triangle();
  rightTriangle();
}

// function to clear the span with results
function clear() {
  var area = $("resultArea");
  area.innerHTML = "<br />";
}
