import {
    highlightPeicePath,
    resetPieceHighlightsAndVulnerablity,
    whiteIsNext,
    blackIsNext,
    checksPredictor,
} from "../hooks/ChessBoardUtility";

import initializeChessBoard from "../hooks/InitializeBoard";

let activatedPiece = {
    squareInfo: null,
    rowIndex: null,
    colIndex: null,
};

let chessBoardReducer = (state, action) => {
    switch (action.type) {
        case "init":
            return {
                ...state,
                boardState: initializeChessBoard(),
            };
        case "activated": {
            let updatedState = state.boardState.slice();
            let row = action.payload.rowIndex;
            let col = action.payload.colIndex;
            updatedState[row][col].isSelected = action.payload.selected;

            if (updatedState[row][col].isSelected) {
                if (activatedPiece.squareInfo === null) {
                    activatedPiece = {
                        squareInfo: updatedState[row][col],
                        rowIndex: row,
                        colIndex: col,
                    };
                } else {
                    updatedState = highlightPeicePath(
                        updatedState,
                        activatedPiece.rowIndex,
                        activatedPiece.colIndex,
                        false,
                        state.hasWhiteRookOrKingMoved,
                        state.hasBlackRookOrKingMoved,
                    );
                    updatedState[activatedPiece.rowIndex][
                        activatedPiece.colIndex
                    ].isSelected = false;

                    activatedPiece = {
                        squareInfo: updatedState[row][col],
                        rowIndex: row,
                        colIndex: col,
                    };
                }

                updatedState = highlightPeicePath(
                    updatedState,
                    row,
                    col,
                    true,
                    state.hasWhiteRookOrKingMoved,
                    state.hasBlackRookOrKingMoved
                );
                updatedState[row][col].isSelected = true;
                // console.log("Post:", updatedState[row][col]);
            } else {
                updatedState = highlightPeicePath(
                    updatedState,
                    row,
                    col,
                    false
                );

                activatedPiece = {
                    squareInfo: null,
                    rowIndex: null,
                    colIndex: null,
                };
            }
            return {
                ...state,
                boardState: updatedState,
            };
        }

        case "moved": {
            let updatedState = state.boardState.slice();
            let row = action.payload.rowIndex;
            let col = action.payload.colIndex;
            updatedState[row][col] = activatedPiece.squareInfo;
            updatedState[row][col].isSelected = false;

            updatedState[activatedPiece.rowIndex][activatedPiece.colIndex] = {
                role: "",
                color: "",
                isSelected: false,
                isHighlighted: false,
                isVulnerable: false,
                isNext: false,
                isPromoted: false,
            };

            updatedState = resetPieceHighlightsAndVulnerablity(updatedState);

            // Performing Promotion of pawn when it reaches highest order
            if (
                (row === 7 || row === 0) &&
                updatedState[row][col].role === "pawn"
            ) {
                updatedState[row][col].role = prompt(
                    "Promote To:",
                    "eg:- queen, knight, bishop, rook"
                );
            }

            // Alternating Whose turn it is below
            if (updatedState[row][col].color === "white") {
                updatedState = blackIsNext(updatedState, true);
                updatedState = whiteIsNext(updatedState, false);
            } else if (updatedState[row][col].color === "black") {
                updatedState = blackIsNext(updatedState, false);
                updatedState = whiteIsNext(updatedState, true);
            }

            // Checks predictor for opposition
            if (checksPredictor(updatedState, row, col)) {
                // alert("Checks");
                return {
                    boardState: updatedState,
                    isChecks: true,
                };
            }

            if (
                !state.hasWhiteCastled &&
                !state.hasWhiteRookOrKingMoved &&
                updatedState[row][col].color === "white" &&
                updatedState[row][col].role === "king"
            ) {
                if (
                    col === 6 &&
                    updatedState[row][7].color === "white" &&
                    updatedState[row][7].role === "rook"
                ) {
                    updatedState[row][col - 1].role = "rook";
                    updatedState[row][col - 1].color = "white";
                    updatedState[row][7].role = "";
                    updatedState[row][7].color = "";
                } else if (
                    col === 1 &&
                    updatedState[row][0].color === "white" &&
                    updatedState[row][0].role === "rook"
                ) {
                    updatedState[row][col + 1].role = "rook";
                    updatedState[row][col + 1].color = "white";
                    updatedState[row][0].role = "";
                    updatedState[row][0].color = "";
                } else if (
                    col === 2 &&
                    updatedState[row][0].color === "white" &&
                    updatedState[row][0].role === "rook"
                ) {
                    updatedState[row][col + 1].role = "rook";
                    updatedState[row][col + 1].color = "white";
                    updatedState[row][0].role = "";
                    updatedState[row][0].color = "";
                }

                return {
                    ...state,
                    boardState: updatedState,
                    hasWhiteCastled: true,
                    hasWhiteRookOrKingMoved: true,
                };
            }


            if (
                !state.hasBlackCastled &&
                !state.hasBlackRookOrKingMoved &&
                updatedState[row][col].color === "black" &&
                updatedState[row][col].role === "king"
            ) {
                if (
                    col === 6 &&
                    updatedState[row][7].color === "black" &&
                    updatedState[row][7].role === "rook"
                ) {
                    updatedState[row][col - 1].role = "rook";
                    updatedState[row][col - 1].color = "black";
                    updatedState[row][7].role = "";
                    updatedState[row][7].color = "";
                } else if (
                    col === 1 &&
                    updatedState[row][0].color === "black" &&
                    updatedState[row][0].role === "rook"
                ) {
                    updatedState[row][col + 1].role = "rook";
                    updatedState[row][col + 1].color = "black";
                    updatedState[row][0].role = "";
                    updatedState[row][0].color = "";
                } else if (
                    col === 2 &&
                    updatedState[row][0].color === "black" &&
                    updatedState[row][0].role === "rook"
                ) {
                    updatedState[row][col + 1].role = "rook";
                    updatedState[row][col + 1].color = "black";
                    updatedState[row][0].role = "";
                    updatedState[row][0].color = "";
                }

                return {
                    ...state,
                    boardState: updatedState,
                    hasBlackCastled: true,
                    hasBlackRookOrKingMoved: true,
                };
            }

            // Checking if White King or Pawn has moved For castling purpose
            if (
                (updatedState[row][col].color === "white" &&
                    updatedState[row][col].role === "rook") ||
                (updatedState[row][col].color === "white" &&
                    updatedState[row][col].role === "king")
            ) {
                return {
                    ...state,
                    boardState: updatedState,
                    hasWhiteRookOrKingMoved: true,
                };
            }

            // Checking if Black king or rook has moved for castling purpose
            if (
                (updatedState[row][col].color === "black" &&
                    updatedState[row][col].role === "rook") ||
                (updatedState[row][col].color === "black" &&
                    updatedState[row][col].role === "king")
            ) {
                return {
                    ...state,
                    boardState: updatedState,
                    hasBlackRookOrKingMoved: true,
                };
            }

            return {
                ...state,
                boardState: updatedState,
            };
        }

        case "closeAlerts":
            return {
                ...state,
                isChecks: false,
            };

        default:
            return state;
    }
};

export { chessBoardReducer };
