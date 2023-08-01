function rookMovesHighlight(chessState, row, col, highlightValue) {
    console.log(chessState[row][col]);
    // chessState[row][col].isHighlighted=false
    switch (chessState[row][col].color) {
        case "white":
            for (let rowIndex = row - 1; rowIndex >= 0; rowIndex--) {
                if (chessState[rowIndex][col].color === "black") {
                    chessState[rowIndex][col].isVulnerable = highlightValue;
                    break;
                } else if (chessState[rowIndex][col].color === "white") {
                    chessState[rowIndex][col].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][col].isHighlighted = highlightValue;
                }
            }

            for (let rowIndex = row + 1; rowIndex < 8; rowIndex++) {
                if (chessState[rowIndex][col].color === "black") {
                    chessState[rowIndex][col].isVulnerable = highlightValue;
                    break;
                } else if (chessState[rowIndex][col].color === "white") {
                    chessState[rowIndex][col].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][col].isHighlighted = highlightValue;
                }
            }

            for (let colIndex = col + 1; colIndex < 8; colIndex++) {
                if (chessState[row][colIndex].color === "black") {
                    chessState[row][colIndex].isVulnerable = highlightValue;
                    break;
                } else if (chessState[row][colIndex].color === "white") {
                    chessState[row][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[row][colIndex].isHighlighted = highlightValue;
                }
            }

            for (let colIndex = col - 1; colIndex >= 0; colIndex--) {
                if (chessState[row][colIndex].color === "black") {
                    chessState[row][colIndex].isVulnerable = highlightValue;
                    break;
                } else if (chessState[row][colIndex].color === "white") {
                    chessState[row][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[row][colIndex].isHighlighted = highlightValue;
                }
            }

            return chessState;
        case "black":
            for (let rowIndex = row - 1; rowIndex >= 0; rowIndex--) {
                if (chessState[rowIndex][col].color === "white") {
                    chessState[rowIndex][col].isVulnerable = highlightValue;
                    break;
                } else if (chessState[rowIndex][col].color === "black") {
                    chessState[rowIndex][col].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][col].isHighlighted = highlightValue;
                }
            }

            for (let rowIndex = row + 1; rowIndex < 8; rowIndex++) {
                if (chessState[rowIndex][col].color === "white") {
                    chessState[rowIndex][col].isVulnerable = highlightValue;
                    break;
                } else if (chessState[rowIndex][col].color === "black") {
                    chessState[rowIndex][col].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][col].isHighlighted = highlightValue;
                }
            }

            for (let colIndex = col + 1; colIndex < 8; colIndex++) {
                if (chessState[row][colIndex].color === "white") {
                    chessState[row][colIndex].isVulnerable = highlightValue;
                    break;
                } else if (chessState[row][colIndex].color === "black") {
                    chessState[row][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[row][colIndex].isHighlighted = highlightValue;
                }
            }

            for (let colIndex = col - 1; colIndex >= 0; colIndex--) {
                if (chessState[row][colIndex].color === "white") {
                    chessState[row][colIndex].isVulnerable = highlightValue;
                    break;
                } else if (chessState[row][colIndex].color === "black") {
                    chessState[row][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[row][colIndex].isHighlighted = highlightValue;
                }
            }

            return chessState;

        default:
            return chessState;
    }
}

function rookChecksPredictor(chessState, row, col) {
    switch (chessState[row][col].color) {
        case "white":
            for (let rowIndex = row - 1; rowIndex >= 0; rowIndex--) {
                if (
                    chessState[rowIndex][col].color === "black" &&
                    chessState[rowIndex][col].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][col].color === "white" ||
                    chessState[rowIndex][col].color === "black"
                )
                    break
            }

            for (let rowIndex = row + 1; rowIndex <= 7; rowIndex++) {
                if (
                    chessState[rowIndex][col].color === "black" &&
                    chessState[rowIndex][col].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][col].color === "white" ||
                    chessState[rowIndex][col].color === "black"
                )
                    break
            }

            for (let colIndex = col - 1; colIndex >= 0; colIndex--) {
                if (
                    chessState[row][colIndex].color === "black" &&
                    chessState[row][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[row][colIndex].color === "white" ||
                    chessState[row][colIndex].color === "black"
                )
                    break
            }

            for (let colIndex = col + 1; colIndex <= 7; colIndex++) {
                if (
                    chessState[row][colIndex].color === "black" &&
                    chessState[row][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[row][colIndex].color === "white" ||
                    chessState[row][colIndex].color === "black"
                )
                    break
            }

            break;

        case "black":
            for (let rowIndex = row - 1; rowIndex >= 0; rowIndex--) {
                if (
                    chessState[rowIndex][col].color === "white" &&
                    chessState[rowIndex][col].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][col].color === "black" ||
                    chessState[rowIndex][col].color === "white"
                )
                    break
            }

            for (let rowIndex = row + 1; rowIndex <= 7; rowIndex++) {
                if (
                    chessState[rowIndex][col].color === "white" &&
                    chessState[rowIndex][col].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][col].color === "black" ||
                    chessState[rowIndex][col].color === "white"
                )
                    break
            }

            for (let colIndex = col - 1; colIndex >= 0; colIndex--) {
                if (
                    chessState[row][colIndex].color === "white" &&
                    chessState[row][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[row][colIndex].color === "black" ||
                    chessState[row][colIndex].color === "white"
                )
                    break
            }

            for (let colIndex = col + 1; colIndex <= 7; colIndex++) {
                if (
                    chessState[row][colIndex].color === "white" &&
                    chessState[row][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[row][colIndex].color === "black" ||
                    chessState[row][colIndex].color === "white"
                )
                    break
            }
            break;

        default:
            return false;
    }
}

export { rookMovesHighlight, rookChecksPredictor };
