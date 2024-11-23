import React from "react";
import "../assets/css/Chessboard.css";
import Piece from "./Piece";

const Chessboard = () => {
  const initialBoard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    Array(8).fill("P"),
    ...Array(4).fill(Array(8).fill(null)),
    Array(8).fill("p"),
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ];

  const getColor = (piece) =>
    piece === piece.toUpperCase() ? "white" : "black";

  return (
    <div className="chessboard">
      {initialBoard.flat().map((piece, index) => {
        const rowIdx = Math.floor(index / 8);
        const colIdx = index % 8;
        const isDark = (rowIdx + colIdx) % 2 === 1;

        return (
          <div
            key={`${rowIdx}-${colIdx}`}
            className={`square ${isDark ? "dark" : "light"}`}
          >
            {piece && (
              <Piece type={piece.toUpperCase()} color={getColor(piece)} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Chessboard;
