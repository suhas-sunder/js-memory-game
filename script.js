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

const shuffled = memoryArr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const squares = document.getElementById("squares");

const handleClick = (e) => {
  e.target.style.color === "white" ?  e.target.style.color = "black" : e.target.style.color = "white";
};

shuffled.forEach((square) => {
  const newDiv = document.createElement("button");
  const newSquare = document.createTextNode(square);
  newDiv.appendChild(newSquare);
  newDiv.classList.add("square");
  newDiv.onclick = handleClick;

  squares.appendChild(newDiv);
});
