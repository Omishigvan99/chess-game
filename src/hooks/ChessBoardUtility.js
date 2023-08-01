// import React, { useRef } from "react";
import { pawnMovesHighlight, pawnChecksPredictor } from "./Pawn";
import { rookMovesHighlight, rookChecksPredictor } from "./Rook";
import { bishopChecksPredictor, bishopMovesHighlight } from "./Bishop";
import { queenChecksPredictor, queenMovesHiglight } from "./Queen";
import { knightMovesHighlight, knightChecksPredictor } from "./Knight";
import { kingMovesHiglight, kingChecksPredictor } from "./King";

function highlightPeicePath(chessState, row, col, value, isWhiteCastlingAllowed, isBlackCastlingAllowed) {
    let piece = chessState[row][col];
    // console.log("Executed: ",value)
    switch (piece.role) {
        case "pawn":
            chessState = pawnMovesHighlight(chessState, row, col, value);
            // console.log("highlightpiece: ",chessState[row][col])
            return chessState;

        case "rook":
            chessState = rookMovesHighlight(chessState, row, col, value);
            return chessState;

        case "bishop":
            chessState = bishopMovesHighlight(chessState, row, col, value);
            return chessState;

        case "queen":
            chessState = queenMovesHiglight(chessState, row, col, value);
            return chessState;

        case "knight":
            chessState = knightMovesHighlight(chessState, row, col, value);
            return chessState;

        case "king":
            chessState = kingMovesHiglight(chessState, row, col, value, isWhiteCastlingAllowed, isBlackCastlingAllowed);
            return chessState;

        default:
            return chessState;
    }
}

function resetPieceHighlightsAndVulnerablity(chessState) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            chessState[row][col].isHighlighted = false;
            chessState[row][col].isVulnerable = false;
        }
    }

    return chessState;
}

function whiteIsNext(chessState, value) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (chessState[row][col].color === "white") {
                chessState[row][col].isNext = value;
                chessState[row][col].isSelected = false;
            }
        }
    }

    return chessState;
}

function blackIsNext(chessState, value) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (chessState[row][col].color === "black") {
                chessState[row][col].isNext = value;
                chessState[row][col].isSelected = false;
            }
        }
    }

    return chessState;
}

function checksPredictor(chessState, row, col) {
    console.log("Got called");
    switch (chessState[row][col].role) {
        case "pawn":
            return pawnChecksPredictor(chessState, row, col);

        case "knight":
            return knightChecksPredictor(chessState, row, col);

        case "king":
            return kingChecksPredictor(chessState, row, col);
        
        case "rook":
            return rookChecksPredictor(chessState, row, col);
        
        case "bishop":
            return bishopChecksPredictor(chessState, row, col);
        
        case "queen":
            return queenChecksPredictor(chessState, row, col);
        

        default:
            return false;
    }
}

export {
    highlightPeicePath,
    resetPieceHighlightsAndVulnerablity,
    whiteIsNext,
    blackIsNext,
    checksPredictor,
};
