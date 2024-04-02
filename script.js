//There is an edge case I need to fix where clicking on the same letter/option twice registers as a win.
const memoryArr = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H",
];

let clickCount = 0;
let lastLetter = "";

const shuffled = memoryArr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const squares = document.getElementById("squares");

const handleClick = (e) => {
  e.target.classList.contains("square") && e.target.style.color === "white"
    ? (e.target.style.color = "black")
    : (e.target.style.color = "white");

  const allSquares = document.getElementsByClassName("square");

  const lastMatchingSquare = Array.from(allSquares).filter(
    (square) =>
      square.textContent === e.target.textContent && square !== e.target
  )[0];

  if (clickCount % 2 === 0) {
    Array.from(allSquares).forEach((square) => {
      if (square !== e.target) {
        square.style.color = "black";
      }
    });
  }
  clickCount++;

  //Disables matching buttons or resets unmatched btns
  if (clickCount % 2 === 0 && lastLetter === e.target.textContent) {
    e.target.classList.remove("square");
    e.target.classList.add("completed");
    e.target.style.color = "black";
    e.target.disabled = true;

    lastMatchingSquare.classList.remove("square");
    lastMatchingSquare.classList.add("completed");
    lastMatchingSquare.style.color = "black";
    lastMatchingSquare.disabled = true;
  }

  lastLetter = e.target.textContent;
};

shuffled.forEach((square) => {
  const newDiv = document.createElement("button");
  const newSquare = document.createTextNode(square);
  newDiv.appendChild(newSquare);
  newDiv.classList.add("square");
  newDiv.onclick = handleClick;

  squares.appendChild(newDiv);
});
