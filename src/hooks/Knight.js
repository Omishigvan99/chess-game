export { knightMovesHighlight, knightChecksPredictor };
function whiteMovesHiglight(chessState, row, col, highlightValue) {
    try {
        if (chessState[row][col].color === "black") {
            chessState[row][col].isVulnerable = highlightValue;
        } else if (chessState[row][col].color === "white") {
            chessState[row][col].isHighlighted = false;
        } else {
            chessState[row][col].isHighlighted = highlightValue;
        }
    } catch (error) {}

    return chessState;
}

function blackMovesHiglight(chessState, row, col, highlightValue) {
    try {
        if (chessState[row][col].color === "white") {
            chessState[row][col].isVulnerable = highlightValue;
        } else if (chessState[row][col].color === "black") {
            chessState[row][col].isHighlighted = false;
        } else {
            chessState[row][col].isHighlighted = highlightValue;
        }
    } catch (error) {}

    return chessState;
}

function whiteChecksPredictor(chessState, row, col) {
    try {
        if (
            chessState[row][col].color === "black" &&
            chessState[row][col].role === "king"
        ) {
            return true;
        }
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
    } catch (error) {}
}

function knightMovesHighlight(chessState, row, col, highlightValue) {
    switch (chessState[row][col].color) {
        case "white":
            // Upper half of Knight

            chessState = whiteMovesHiglight(
                chessState,
                row - 1,
                col - 2,
                highlightValue
            );

            chessState = whiteMovesHiglight(
                chessState,
                row - 2,
                col - 1,
                highlightValue
            );

            chessState = whiteMovesHiglight(
                chessState,
                row - 1,
                col + 2,
                highlightValue
            );

            chessState = whiteMovesHiglight(
                chessState,
                row - 2,
                col + 1,
                highlightValue
            );

            //Lower Half Knight

            chessState = whiteMovesHiglight(
                chessState,
                row + 2,
                col + 1,
                highlightValue
            );

            chessState = whiteMovesHiglight(
                chessState,
                row + 1,
                col + 2,
                highlightValue
            );

            chessState = whiteMovesHiglight(
                chessState,
                row + 1,
                col - 2,
                highlightValue
            );

            chessState = whiteMovesHiglight(
                chessState,
                row + 2,
                col - 1,
                highlightValue
            );

            return chessState;
        case "black":
            // Upper half of Knight

            chessState = blackMovesHiglight(
                chessState,
                row - 1,
                col - 2,
                highlightValue
            );

            chessState = blackMovesHiglight(
                chessState,
                row - 2,
                col - 1,
                highlightValue
            );

            chessState = blackMovesHiglight(
                chessState,
                row - 1,
                col + 2,
                highlightValue
            );

            chessState = blackMovesHiglight(
                chessState,
                row - 2,
                col + 1,
                highlightValue
            );

            //Lower Half Knight

            chessState = blackMovesHiglight(
                chessState,
                row + 2,
                col + 1,
                highlightValue
            );

            chessState = blackMovesHiglight(
                chessState,
                row + 1,
                col + 2,
                highlightValue
            );

            chessState = blackMovesHiglight(
                chessState,
                row + 1,
                col - 2,
                highlightValue
            );

            chessState = blackMovesHiglight(
                chessState,
                row + 2,
                col - 1,
                highlightValue
            );

            return chessState;
        default:
            return chessState;
    }
}

function knightChecksPredictor(chessState, row, col) {
    switch (chessState[row][col].color) {
        case "white":
            // upper direction
            if (whiteChecksPredictor(chessState, row - 1, col - 2)) return true;
            else if (whiteChecksPredictor(chessState, row - 2, col - 1))
                return true;
            else if (whiteChecksPredictor(chessState, row - 1, col + 2))
                return true;
            else if (whiteChecksPredictor(chessState, row - 2, col + 1))
                return true;
            //lower direction
            else if (whiteChecksPredictor(chessState, row + 2, col - 1))
                return true;
            else if (whiteChecksPredictor(chessState, row + 1, col - 2))
                return true;
            else if (whiteChecksPredictor(chessState, row + 2, col + 1))
                return true;
            else if (whiteChecksPredictor(chessState, row + 1, col + 2))
                return true;
            else return false;

        case "black":
            // upper direction
            if (blackChecksPredictor(chessState, row - 1, col - 2)) return true;
            else if (blackChecksPredictor(chessState, row - 2, col - 1))
                return true;
            else if (blackChecksPredictor(chessState, row - 1, col + 2))
                return true;
            else if (blackChecksPredictor(chessState, row - 2, col + 1))
                return true;
            //lower direction
            else if (blackChecksPredictor(chessState, row + 2, col - 1))
                return true;
            else if (blackChecksPredictor(chessState, row + 1, col - 2))
                return true;
            else if (blackChecksPredictor(chessState, row + 2, col + 1))
                return true;
            else if (blackChecksPredictor(chessState, row + 1, col + 2))
                return true;
            else return false;

        default:
            return false;
    }
}
