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

shuffled.forEach((square) => {
  const newDiv = document.createElement("div");
  const newSquare = document.createTextNode(square);
  newDiv.appendChild(newSquare);
  newDiv.classList.add("square");

  squares.appendChild(newDiv);
});
