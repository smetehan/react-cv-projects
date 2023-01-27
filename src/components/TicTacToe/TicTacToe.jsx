import React, { useState } from "react";
import "./tictactoe.css";
const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [tie, setTie] = useState("");
  const [winbool, setWinbool] = useState(true);
  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          setTie("");
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          return (
            setWinner(squares[pattern[0]]),
            setTie(""),
            setTurn(squares[pattern[0]]),
            setWinbool(false),
            console.log(winbool)
          );
        } else if (
          (squares[pattern[0]] !== squares[pattern[1]] &&
            squares[pattern[1]] !== squares[pattern[2]] &&
            winbool === true) ||
          (squares[pattern[0]] === squares[pattern[1]] &&
            squares[pattern[1]] === squares[pattern[2]] &&
            winbool === true) ||
          (squares[pattern[0]] === squares[pattern[1]] &&
            squares[pattern[1]] !== squares[pattern[2]] &&
            winbool === true) ||
          (squares[pattern[0]] !== squares[pattern[1]] &&
            squares[pattern[1]] === squares[pattern[2]] &&
            winbool === true) ||
          (squares[pattern[0]] !== squares[pattern[1]] &&
            squares[pattern[1]] === squares[pattern[2]] &&
            squares[pattern[0]] === squares[pattern[2]] &&
            winbool === true) ||
          (squares[pattern[0]] !== squares[pattern[1]] &&
            squares[pattern[1]] === squares[pattern[2]] &&
            squares[pattern[0]] !== squares[pattern[2]] &&
            winbool === true) ||
          (squares[pattern[0]] === squares[pattern[1]] &&
            squares[pattern[1]] === squares[pattern[2]] &&
            squares[pattern[0]] !== squares[pattern[2]] &&
            winbool === true)
        ) {
          return setTie("you are tied");
        }
      });
    }
  };
  const handleClick = (num) => {
    if (cells[num] !== "") {
      return;
    }
    let squares = [...cells];

    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      squares[num] = "O";
      setTurn("X");
    }

    checkForWinner(squares);
    setCells(squares);
  };
  const Cell = ({ num }) => {
    if (!winner) {
      return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
    } else if (winner) {
      return <td>{cells[num]}</td>;
    }
  };
  const handleRestart = () => {
    setCells(Array(9).fill(""));
    setWinner(null);
    setTie("");
  };
  return (
    <div className="tictactoe">
      <p className="turn">Turn:{turn}</p>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <div className="winplay">
        {winner && (
          <>
            <div className="winner">
              <p>{winner} winner!</p>
            </div>
            <div>
              <button onClick={() => handleRestart()} className="tictacbutton">
                Play Again
              </button>
            </div>
          </>
        )}
      </div>
      <div className="winplay">
        {tie && (
          <>
            <p className="winner">you are tied</p>
            <button onClick={() => handleRestart()} className="tictacbutton">
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
