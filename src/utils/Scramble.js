function scramble() {
  const moves = ["U", "D", "R", "L", "F", "B"];
  const slice = ["", "'", "2"];

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let scramble = "";
  let lastMove = Math.floor(Math.random() * moves.length);

  for (let i = 0; i < random(19, 21); i++) {
    let move = lastMove;
    while (move === lastMove) move = Math.floor(Math.random() * moves.length);
    const random_moves = moves[move];
    const random_slice = slice[Math.floor(Math.random() * slice.length)];
    const result = random_moves + random_slice;
    scramble += result + " ";
    lastMove = move;
  }
  return scramble;
}

export default scramble;
