import React from "react";
import PropTypes from "prop-types";
import "../assets/css/Piece.css";

const Piece = ({ type, color }) => {
  const pieceMap = {
    K: "♚",
    Q: "♛",
    R: "♜",
    B: "♝",
    N: "♞",
    P: "♟",
  };

  return <span className={`piece ${color} ${type}`}>{pieceMap[type]}</span>;
};

Piece.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Piece;
