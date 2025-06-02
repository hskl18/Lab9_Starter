// get references to DOM elements
const form = document.querySelector("form");
const errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));
const output = document.querySelector("output");

// set up calculator
form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const firstNum = document.querySelector("#first-num").value;
    const secondNum = document.querySelector("#second-num").value;
    const operator = document.querySelector("#operator").value;

    if (operator === "/" && secondNum === "0")
      throw new DivisionByZeroError("Cannot divide by zero");
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (error) {
    console.error("Calculation error:", error);
    output.innerHTML = `Error: ${error.message}`;
  }
});

// custom error class
class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

// set up button event listeners
errorBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const buttonText = btn.textContent;

    switch (buttonText) {
      case "Console Log":
        console.log("This is a standard console log message");
        break;

      case "Console Error":
        console.error("This is an error message in the console");
        break;

      case "Console Count":
        console.count("Button click counter");
        break;

      case "Console Warn":
        console.warn("This is a warning message in the console");
        break;

      case "Console Assert":
        console.assert(false, "This assertion failed intentionally");
        break;

      case "Console Clear":
        console.clear();
        console.log("Console was cleared");
        break;

      case "Console Dir":
        console.dir(document.querySelector("Giao"));
        break;

      case "Console dirxml":
        console.dirxml(document.querySelector("Giao"));
        break;

      case "Console Group Start":
        console.group("Grouped Console Messages");
        console.log("This is inside a console group");
        console.log("You can collapse this group in the console");
        break;

      case "Console Group End":
        console.groupEnd();
        break;

      case "Console Table":
        console.table([
          { name: "A", age: 25, role: "Developer" },
          { name: "B", age: 30, role: "Designer" },
          { name: "C", age: 35, role: "Developer" },
        ]);
        break;

      case "Start Timer":
        console.time("Timer Demo");
        break;

      case "End Timer":
        console.timeEnd("Timer Demo");
        break;

      case "Console Trace":
        console.trace("Trace function call stack");
        break;

      case "Trigger a Global Error":
        nonExistentFunction();
        break;
    }
  });
});

// global error handler
window.onerror = function (message, source, lineno, colno, error) {
  console.log("Global error caught:");
  console.log("Message:", message);
  console.log("Source:", source);
  console.log("Line:", lineno);
  console.log("Column:", colno);
  console.log("Error object:", error);

  return true;
};

// alternative way using addEventListener
window.addEventListener("error", function (event) {
  console.log("Error caught with addEventListener:", event.error);
});
