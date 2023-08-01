function bishopMovesHighlight(chessState, row, col, highlightValue) {
    switch (chessState[row][col].color) {
        case "white":
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

            return chessState;

        case "black":
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

            return chessState;

        default:
            return chessState;
    }
}

function bishopChecksPredictor(chessState, row, col) {
    switch (chessState[row][col].color) {
        case "white":
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
                    break
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
                    break
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
                    break
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
                    break
            }
            break;
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
                    break
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
                    break
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
                    break
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
                    break
            }

            break;
        default:
            return false;
    }
}

export { bishopMovesHighlight, bishopChecksPredictor };
