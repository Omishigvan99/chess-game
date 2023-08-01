function whiteMovesHighlight(chessState, row, col, highlightValue) {
    try {
        if (
            chessState[row][col].color === "black" &&
            chessState[row][col].role !== "king"
        ) {
            chessState[row][col].isVulnerable = highlightValue;
        } else if (chessState[row][col].color === "white") {
            chessState[row][col].isHighlighted = false;
        } else {
            chessState[row][col].isHighlighted = highlightValue;
        }
    } catch (error) {}

    return chessState;
}

function blackMovesHighlight(chessState, row, col, highlightValue) {
    try {
        if (
            chessState[row][col].color === "white" &&
            chessState[row][col].role !== "king"
        ) {
            chessState[row][col].isVulnerable = highlightValue;
        } else if (chessState[row][col].color === "black") {
            chessState[row][col].isHighlighted = false;
        } else {
            chessState[row][col].isHighlighted = highlightValue;
        }
    } catch (error) {}

    return chessState;
}

// function whiteCastleMoveHighlight(chessState, row, col, highlightValue) {}

function whiteChecksPredictor(chessState, row, col) {
    try {
        if (
            chessState[row][col].color === "black" &&
            chessState[row][col].role === "king"
        ) {
            return true;
        }
        return false;
    } catch (error) {}
}

function blackChecksPredictor(chessState, row, col) {
    try {
        if (
            chessState[row][col].color === "white" &&
            chessState[row][col].role === "king"
        ) {
            return true;
        }
        return false;
    } catch (error) {}
}

// function kingCastlingChecker(chessState, row, col) {
//     if(chessState.color)
//  }

function kingMovesHiglight(
    chessState,
    row,
    col,
    highlightValue,
    hasWhiteRookOrKingMoved,
    hasBlackRookOrKingMoved
) {
    switch (chessState[row][col].color) {
        case "white":
            if (
                !hasWhiteRookOrKingMoved &&
                chessState[row][col + 1].role === "" &&
                chessState[row][col + 2].role === "" &&
                chessState[row][col + 3].role === "rook"
            ) {
                console.log("Castling is possible for White");
                chessState = whiteMovesHighlight(
                    chessState,
                    row,
                    col + 2,
                    highlightValue
                );
            }

            if (
                !hasWhiteRookOrKingMoved &&
                chessState[row][col - 1].role === "" &&
                chessState[row][col - 2].role === "" &&
                chessState[row][col - 3].role === "" &&
                chessState[row][col - 4].role === "rook"
            ) {
                console.log("Castling is possible for White");
                chessState = whiteMovesHighlight(
                    chessState,
                    row,
                    col - 2,
                    highlightValue
                );

                chessState = whiteMovesHighlight(
                    chessState,
                    row,
                    col - 3,
                    highlightValue
                );
            }

            chessState = whiteMovesHighlight(
                chessState,
                row - 1,
                col - 1,
                highlightValue
            );

            chessState = whiteMovesHighlight(
                chessState,
                row - 1,
                col,
                highlightValue
            );

            chessState = whiteMovesHighlight(
                chessState,
                row - 1,
                col + 1,
                highlightValue
            );

            chessState = whiteMovesHighlight(
                chessState,
                row,
                col + 1,
                highlightValue
            );

            chessState = whiteMovesHighlight(
                chessState,
                row + 1,
                col + 1,
                highlightValue
            );

            chessState = whiteMovesHighlight(
                chessState,
                row + 1,
                col,
                highlightValue
            );

            chessState = whiteMovesHighlight(
                chessState,
                row + 1,
                col - 1,
                highlightValue
            );

            chessState = whiteMovesHighlight(
                chessState,
                row,
                col - 1,
                highlightValue
            );

            return chessState;

        case "black":
            // Castling checking and highlighting
            if (
                !hasBlackRookOrKingMoved &&
                chessState[row][col + 1].role === "" &&
                chessState[row][col + 2].role === "" &&
                chessState[row][col + 3].role === "rook"
            ) {
                console.log("Castling is possible for White");
                chessState = whiteMovesHighlight(
                    chessState,
                    row,
                    col + 2,
                    highlightValue
                );
            }

            if (
                !hasBlackRookOrKingMoved &&
                chessState[row][col - 1].role === "" &&
                chessState[row][col - 2].role === "" &&
                chessState[row][col - 3].role === "" &&
                chessState[row][col - 4].role === "rook"
            ) {
                console.log("Castling is possible for White");
                chessState = whiteMovesHighlight(
                    chessState,
                    row,
                    col - 2,
                    highlightValue
                );

                chessState = whiteMovesHighlight(
                    chessState,
                    row,
                    col - 3,
                    highlightValue
                );
            }
            //

            chessState = blackMovesHighlight(
                chessState,
                row - 1,
                col - 1,
                highlightValue
            );

            chessState = blackMovesHighlight(
                chessState,
                row - 1,
                col,
                highlightValue
            );

            chessState = blackMovesHighlight(
                chessState,
                row - 1,
                col + 1,
                highlightValue
            );

            chessState = blackMovesHighlight(
                chessState,
                row,
                col + 1,
                highlightValue
            );

            chessState = blackMovesHighlight(
                chessState,
                row + 1,
                col + 1,
                highlightValue
            );

            chessState = blackMovesHighlight(
                chessState,
                row + 1,
                col,
                highlightValue
            );

            chessState = blackMovesHighlight(
                chessState,
                row + 1,
                col - 1,
                highlightValue
            );

            chessState = blackMovesHighlight(
                chessState,
                row,
                col - 1,
                highlightValue
            );
            return chessState;
        default:
            return chessState;
    }
}

function kingChecksPredictor(chessState, row, col) {
    switch (chessState[row][col].color) {
        case "white":
            // upper
            if (whiteChecksPredictor(chessState, row - 1, col - 1)) return true;
            else if (whiteChecksPredictor(chessState, row - 1, col + 1))
                return true;
            else if (whiteChecksPredictor(chessState, row - 1, col))
                return true;
            // mid
            else if (whiteChecksPredictor(chessState, row, col - 1))
                return true;
            else if (whiteChecksPredictor(chessState, row, col + 1))
                return true;
            // lower
            else if (whiteChecksPredictor(chessState, row + 1, col - 1))
                return true;
            else if (whiteChecksPredictor(chessState, row + 1, col + 1))
                return true;
            else if (whiteChecksPredictor(chessState, row + 1, col))
                return true;
            else return false;

        case "black":
            // upper
            if (blackChecksPredictor(chessState, row - 1, col - 1)) return true;
            else if (blackChecksPredictor(chessState, row - 1, col + 1))
                return true;
            else if (blackChecksPredictor(chessState, row - 1, col))
                return true;
            // mid
            else if (blackChecksPredictor(chessState, row, col - 1))
                return true;
            else if (blackChecksPredictor(chessState, row, col + 1))
                return true;
            // lower
            else if (blackChecksPredictor(chessState, row + 1, col - 1))
                return true;
            else if (blackChecksPredictor(chessState, row + 1, col + 1))
                return true;
            else if (blackChecksPredictor(chessState, row + 1, col))
                return true;
            else return false;

        default:
            return false;
    }
}

export { kingMovesHiglight, kingChecksPredictor };
