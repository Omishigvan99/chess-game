
// import { whiteIsNext, blackIsNext } from "./ChessBoardUtility"

export { pawnMovesHighlight, pawnChecksPredictor };

function pawnMovesHighlight(chessState, row, col, highlightValue) {
    let piece = chessState[row][col];

    switch (piece.color) {
        case "white":
            if (row === 6) {
                try {
                    if (chessState[row - 1][col - 1].color === "black") {
                        chessState[row - 1][col - 1].isVulnerable =
                            highlightValue;
                    }
                } catch (error) {}

                try {
                    if (chessState[row - 1][col + 1].color === "black") {
                        chessState[row - 1][col + 1].isVulnerable =
                            highlightValue;
                    }
                } catch (error) {}

                if (chessState[row - 1][col].role !== "") {
                    chessState[row - 1][col].isHighlighted = false;
                } else {
                    if (chessState[row - 2][col].role !== "") {
                        chessState[row - 2][col].isHighlighted = false;
                    } else {
                        chessState[row - 2][col].isHighlighted = highlightValue;
                    }
                    chessState[row - 1][col].isHighlighted = highlightValue;
                }
                return chessState;
            }

            if (row === 0) {
                return chessState
            }

            try {
                if (chessState[row - 1][col - 1].color === "black") {
                    chessState[row - 1][col - 1].isVulnerable = highlightValue;
                }
            } catch (error) {}

            try {
                if (chessState[row - 1][col + 1].color === "black") {
                    chessState[row - 1][col + 1].isVulnerable = highlightValue;
                }
            } catch (error) {}

            if (chessState[row - 1][col].role !== "") {
                chessState[row - 1][col].isHighlighted = false;
            } else {
                chessState[row - 1][col].isHighlighted = highlightValue;
            }
            return chessState;

        case "black":
            if (row === 1) {
                try {
                    if (chessState[row + 1][col - 1].color === "white") {
                        chessState[row + 1][col - 1].isVulnerable =
                            highlightValue;
                    }
                } catch (error) {}
                try {
                    if (chessState[row + 1][col + 1].color === "white") {
                        chessState[row + 1][col + 1].isVulnerable =
                            highlightValue;
                    }
                } catch (error) {}

                if (chessState[row + 1][col].role !== "") {
                    chessState[row + 1][col].isHighlighted = false;
                } else {
                    if (chessState[row + 2][col].role !== "") {
                        chessState[row + 2][col].isHighlighted = false;
                    } else {
                        chessState[row + 2][col].isHighlighted = highlightValue;
                    }
                    chessState[row + 1][col].isHighlighted = highlightValue;
                }

                return chessState;
            }

            if (row === 7) {
                return chessState
            }

            try {
                if (chessState[row + 1][col - 1].color === "white") {
                    chessState[row + 1][col - 1].isVulnerable = highlightValue;
                }
            } catch (error) {}
            try {
                if (chessState[row + 1][col + 1].color === "white") {
                    chessState[row + 1][col + 1].isVulnerable = highlightValue;
                }
            } catch (error) {}
            if (chessState[row + 1][col].role !== "") {
                chessState[row + 1][col].isVulnerable = false;
            } else {
                chessState[row + 1][col].isHighlighted = highlightValue;
            }

            return chessState;
        default:
            return chessState;
    }
}

function pawnChecksPredictor(chessState, row, col) {
    console.log("pawn got called")
    let piece = chessState[row][col]
    switch (piece.color) {
        case "white":
            console.log("White Got Called")
            try {
                if (chessState[row - 1][col - 1].role === "king" && chessState[row - 1][col -1 ].color === "black") {
                    console.log("First Condition got executed")
                    return true
                } else if (chessState[row - 1][col + 1].role === "king" && chessState[row - 1][col -1 ].color === "black") {
                    console.log(" Condition got executed");
                    return true
                } else {
                    console.log("Thirds Coditon got executed");
                    return false
                }
            } catch (error) { }
            break
        case "black":
            try {
                if (chessState[row + 1][col - 1].role === "king" && chessState[row+1][col-1].color === "white") {
                    return true
                } else if (chessState[row + 1][col + 1].role === "king" && chessState[row+1][col-1].color === "white") {
                    return true
                } else {
                    return false
                }
            } catch (error) { }
            break
        
        default:
            break
    }
}


