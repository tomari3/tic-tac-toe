const Game = (function () {
  const Gameboard = {
    gameboard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  };
  const players = [];

  const newPlayer = (name, sign) => {
    return { name, sign };
  };

  let p1 = newPlayer("Player 1", "X");
  players.push(p1);
  let p2 = newPlayer("Player 2", "O");
  players.push(p2);
  let AI = newPlayer("AI", "O");
  players.push(AI);

  console.log(players);

  let Flow = {
    turn: players[0],
  };

  //   Dom
  const gameArticle = document.getElementById("game");
  const resetButton = document.getElementById("reset");
  const selectedSign = document.querySelectorAll('input[name="mark"]');
  const isAiChecked = document.querySelector('input[name="AI"]');
  const getName = document.querySelector('input[name="name');
  const submitName = document.getElementById("submit-name");

  function setName() {
    if ((getName.value.trim = "")) {
      return;
    }
    players[0].name = getName.value;
  }

  submitName.addEventListener("click", (e) => {
    e.preventDefault();
    setName();
  });

  isAiChecked.addEventListener("change", (e) => {
    if (isAiChecked.checked) {
      players[1] = AI;
    } else players[1] = p2;
  });

  selectedSign.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (element.id == "X") {
        (players[0].sign = "X"), (players[1].sign = "O");
      }
      if (element.id == "O") {
        (players[0].sign = "O"), (players[1].sign = "X");
      }
    });
  });

  function reset() {
    const grid = gameArticle.childNodes;
    for (let i = 0; i < 9; i++) {
      grid[i].textContent = Gameboard.gameboard[i] = " ";
    }
    Flow.turn = players[0];
  }

  resetButton.addEventListener("click", (e) => {
    reset();
  });

  (function createGrid() {
    Gameboard.gameboard.forEach((element) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = element;
      div.appendChild(p);
      gameArticle.appendChild(div);
    });
  })();

  function nextTurn() {
    if (Flow.turn == players[0]) {
      Flow.turn = players[1];
    } else Flow.turn = players[0];
  }

  //   (function randomBoard(board) {
  //     const grid = gameArticle.childNodes;
  //     grid.forEach((element, i) => {
  //       signs = ["X", "O", " "];
  //       sign = Math.floor(Math.random() * 3);
  //       Gameboard.gameboard.splice(i, 1, signs[sign]);
  //       console.log(Gameboard.gameboard);
  //       render(i);
  //     });
  //   })();

  function AIbot() {
    randomInput = Math.floor(Math.random() * 9);
    return randomInput;
  }

  function AIClick() {
    let i = AIbot();
    if (isGameOver() == true) {
      return;
    }
    if (Gameboard.gameboard[i] !== " ") {
      // check valid
      AIClick();
    } else {
      changeBoard(i);
      nextTurn();
    }
  }

  (function gridClick() {
    const grid = gameArticle.childNodes;
    grid.forEach((element, i) => {
      element.addEventListener("click", (e) => {
        if (isGameOver() == true) {
          return;
        } else if (Gameboard.gameboard[i] !== " ") {
          // check valid
          return;
        } else {
          changeBoard(i);
          nextTurn();
          if (players[0] == AI || players[1] == AI) {
            AIClick();
          }
        }
      });
    });
  })();

  function changeBoard(i) {
    Gameboard.gameboard.splice(i, 1, Flow.turn.sign);
    console.log(Gameboard.gameboard);
    render(i);
    isGameOver();
  }

  function render(i) {
    const grid = gameArticle.childNodes;
    grid[i].textContent = Gameboard.gameboard[i];
  }

  function isGameOver() {
    function check3X(a, b, c) {
      if (
        Gameboard.gameboard[a] == "X" &&
        Gameboard.gameboard[b] == "X" &&
        Gameboard.gameboard[c] == "X"
      )
        return true;
    }
    function check3O(a, b, c) {
      if (
        Gameboard.gameboard[a] == "O" &&
        Gameboard.gameboard[b] == "O" &&
        Gameboard.gameboard[c] == "O"
      )
        return true;
    }

    if (
      check3X(0, 1, 2) || // rows
      check3X(3, 4, 5) ||
      check3X(6, 7, 8) ||
      check3X(0, 3, 6) || // columns
      check3X(1, 4, 7) ||
      check3X(2, 5, 8) ||
      check3X(0, 4, 8) || // diagonals
      check3X(2, 4, 6)
    ) {
      return true;
    } else if (
      check3O(0, 1, 2) || // rows
      check3O(3, 4, 5) ||
      check3O(6, 7, 8) ||
      check3O(0, 3, 6) || // columns
      check3O(1, 4, 7) ||
      check3O(2, 5, 8) ||
      check3O(0, 4, 8) || // diagonals
      check3O(2, 4, 6)
    ) {
      return true;
    } else if (!Gameboard.gameboard.includes(" ")) {
      return true;
    }
    return false;
  }

  return {};
})();
