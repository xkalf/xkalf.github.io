const nnCubes = {
  "2x2": [["U"], ["R"], ["F"]],
  "3x3": [
    ["U", "D"],
    ["R", "L"],
    ["F", "B"],
  ],
  "4x4": [
    ["U", "D", "Uw", "Dw"],
    ["R", "L", "Rw", "Lw"],
    ["F", "B", "Fw", "Bw"],
  ],
  "5x5": [
    ["U", "D", "Uw", "Dw"],
    ["R", "L", "Rw", "Lw"],
    ["F", "B", "Fw", "Bw"],
  ],
  "6x6": [
    ["U", "D", "Uw", "Dw", "3Uw", "3Dw"],
    ["R", "L", "Rw", "Lw", "3Rw", "3Lw"],
    ["F", "B", "Fw", "Bw", "3Fw", "3Bw"],
  ],
  "7x7": [
    ["U", "D", "Uw", "Dw", "3Uw", "3Dw"],
    ["R", "L", "Rw", "Lw", "3Rw", "3Lw"],
    ["F", "B", "Fw", "Bw", "3Fw", "3Bw"],
  ],
};
const scrambleLength = {
  "2x2": [9, 10],
  "3x3": [19, 21],
  "4x4": [44, 46],
  "5x5": [60, 60],
  "6x6": [80, 80],
  "7x7": [100, 100],
};
const nnScramble = (type) => {
  const moves = nnCubes[type];
  const slice = ["", "'", "2"];

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let scramble = [];
  let lastMove;

  for (
    let i = 0;
    i < random(scrambleLength[type][0], scrambleLength[type][1]);
    i++
  ) {
    let move = lastMove;
    while (move === lastMove) move = Math.floor(Math.random() * moves.length);
    const random_moves =
      moves[move][Math.floor(Math.random() * moves[move].length)];
    const random_slice = slice[Math.floor(Math.random() * slice.length)];
    const result = random_moves + random_slice;
    scramble = [...scramble, result];
    lastMove = move;
  }
  return scramble.join(" ");
};

const megaminxScramble = () => {
  const moves = ["--", "++"];
  const lastMove = [" ", "'"];
  let scramble = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      let rMove = "R" + moves[Math.floor(Math.random() * moves.length)];
      let dMove = "D" + moves[Math.floor(Math.random() * moves.length)];
      scramble = [...scramble, rMove, dMove];
    }
    let uMove = "U" + lastMove[Math.floor(Math.random() * lastMove.length)];
    scramble = [...scramble, uMove, "\n"];
  }
  return scramble.join(" ");
};

function mainScramble(type) {
  if (type === "megaminx") return megaminxScramble();
  else return nnScramble(type);
}

export default mainScramble;
