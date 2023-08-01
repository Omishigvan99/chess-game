export { queenMovesHiglight, queenChecksPredictor };

function queenMovesHiglight(chessState, row, col, highlightValue) {
    switch (chessState[row][col].color) {
        case "white":
            // Diagonally Highlighting

            for (
                let rowIndex = row - 1, colIndex = col - 1;
                rowIndex >= 0 && colIndex >= 0;
                colIndex--, rowIndex--
            ) {
                if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            for (
                let rowIndex = row - 1, colIndex = col + 1;
                rowIndex >= 0 && colIndex < 8;
                colIndex++, rowIndex--
            ) {
                if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            for (
                let rowIndex = row + 1, colIndex = col - 1;
                rowIndex < 8 && colIndex >= 0;
                colIndex--, rowIndex++
            ) {
                if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            for (
                let rowIndex = row + 1, colIndex = col + 1;
                rowIndex < 8 && colIndex < 8;
                colIndex++, rowIndex++
            ) {
                if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            // Highlighting in '+' symbol

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
            // Diagonally Highlighting
            for (
                let rowIndex = row - 1, colIndex = col - 1;
                rowIndex >= 0 && colIndex >= 0;
                colIndex--, rowIndex--
            ) {
                if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            for (
                let rowIndex = row - 1, colIndex = col + 1;
                rowIndex >= 0 && colIndex < 8;
                colIndex++, rowIndex--
            ) {
                if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            for (
                let rowIndex = row + 1, colIndex = col - 1;
                rowIndex < 8 && colIndex >= 0;
                colIndex--, rowIndex++
            ) {
                if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            for (
                let rowIndex = row + 1, colIndex = col + 1;
                rowIndex < 8 && colIndex < 8;
                colIndex++, rowIndex++
            ) {
                if (chessState[rowIndex][colIndex].color === "white") {
                    chessState[rowIndex][colIndex].isVulnerable =
                        highlightValue;
                    break;
                } else if (chessState[rowIndex][colIndex].color === "black") {
                    chessState[rowIndex][colIndex].isHighlighted = false;
                    break;
                } else {
                    chessState[rowIndex][colIndex].isHighlighted =
                        highlightValue;
                }
            }

            // Veritcally and horizontally Highlighting

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


function queenChecksPredictor(chessState, row, col) {
    switch (chessState[row][col].color) {
        case "white":

                // Diagonally checking
            for (
                let rowIndex = row - 1, colIndex = col - 1;
                rowIndex >= 0 && colIndex >= 0;
                rowIndex--, colIndex--
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "black" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }

            for (
                let rowIndex = row - 1, colIndex = col + 1;
                rowIndex >= 0 && colIndex <= 7;
                rowIndex--, colIndex++
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "black" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }

            for (
                let rowIndex = row + 1, colIndex = col - 1;
                rowIndex <= 7 && colIndex >= 0;
                rowIndex++, colIndex--
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "black" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }

            for (
                let rowIndex = row + 1, colIndex = col + 1;
                rowIndex <= 7 && colIndex <= 7;
                rowIndex++, colIndex++
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "black" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }
            
            // Horizontally and vertically checking

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
                    break;
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
                    break;
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
                    break;
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
                    break;
            }
            
            break
        case "black":

            for (
                let rowIndex = row - 1, colIndex = col - 1;
                rowIndex >= 0 && colIndex >= 0;
                rowIndex--, colIndex--
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "white" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }

            for (
                let rowIndex = row - 1, colIndex = col + 1;
                rowIndex >= 0 && colIndex <= 7;
                rowIndex--, colIndex++
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "white" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }

            for (
                let rowIndex = row + 1, colIndex = col - 1;
                rowIndex <= 7 && colIndex >= 0;
                rowIndex++, colIndex--
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "white" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }

            for (
                let rowIndex = row + 1, colIndex = col + 1;
                rowIndex <= 7 && colIndex <= 7;
                rowIndex++, colIndex++
            ) {
                if (
                    chessState[rowIndex][colIndex].color === "white" &&
                    chessState[rowIndex][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][colIndex].color === "white" ||
                    chessState[rowIndex][colIndex].color === "black"
                )
                    break;
            }

            // Horizontally and vertically checking

            for (let rowIndex = row - 1; rowIndex >= 0; rowIndex--) {
                if (
                    chessState[rowIndex][col].color === "white" &&
                    chessState[rowIndex][col].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][col].color === "white" ||
                    chessState[rowIndex][col].color === "black"
                )
                    break;
            }

            for (let rowIndex = row + 1; rowIndex <= 7; rowIndex++) {
                if (
                    chessState[rowIndex][col].color === "white" &&
                    chessState[rowIndex][col].role === "king"
                )
                    return true;
                else if (
                    chessState[rowIndex][col].color === "white" ||
                    chessState[rowIndex][col].color === "black"
                )
                    break;
            }

            for (let colIndex = col - 1; colIndex >= 0; colIndex--) {
                if (
                    chessState[row][colIndex].color === "white" &&
                    chessState[row][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[row][colIndex].color === "white" ||
                    chessState[row][colIndex].color === "black"
                )
                    break;
            }

            for (let colIndex = col + 1; colIndex <= 7; colIndex++) {
                if (
                    chessState[row][colIndex].color === "white" &&
                    chessState[row][colIndex].role === "king"
                )
                    return true;
                else if (
                    chessState[row][colIndex].color === "white" ||
                    chessState[row][colIndex].color === "black"
                )
                    break;
            }
            break
        default:
            return false
    }
}