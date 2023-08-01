
import { whiteIsNext } from "./ChessBoardUtility"

export default function initializeChessBoard() {

    let Block = {
        role: "",
        color: "",
        isHighlighted: false,
        isSelected: false,
        isVulnerable: false,
        isNext: false,
        isPromoted: false,
    };

    let initialChessBoard = new Array(8).fill(0).map((item) => {
        return new Array(8).fill(null).map((item) => {
            return Object.create(Block);
        });
    });

    for (let row = 1,col=0; col < initialChessBoard.length; col++) {
        initialChessBoard[row][col].color = "black"
        initialChessBoard[row][col].role = "pawn"
        // initialChessBoard[row][col].isPawnsInitialState=true
        
    }

    for (let row = 0,col=0; col < initialChessBoard.length; col++) {
        initialChessBoard[row][col].color="black"
    }

    initialChessBoard[0][0].role="rook"
    initialChessBoard[0][7].role = "rook"
    
    initialChessBoard[0][1].role = "knight"
    initialChessBoard[0][6].role = "knight"

    initialChessBoard[0][2].role = "bishop"
    initialChessBoard[0][5].role = "bishop"

    initialChessBoard[0][3].role = "queen"
    initialChessBoard[0][4].role = "king"
    
    for (let row = 6 , col=0; col < initialChessBoard.length; col++) {
        initialChessBoard[row][col].color = "white";
        initialChessBoard[row][col].role = "pawn";
        // initialChessBoard[row][col].isPawnsInitialState = true;
    }

    for (let row = 7, col = 0; col < initialChessBoard.length; col++) {
        initialChessBoard[row][col].color = "white";
    }

    initialChessBoard[7][0].role = "rook";
    initialChessBoard[7][7].role = "rook";

    initialChessBoard[7][1].role = "knight";
    initialChessBoard[7][6].role = "knight";

    initialChessBoard[7][2].role = "bishop";
    initialChessBoard[7][5].role = "bishop";

    initialChessBoard[7][3].role = "queen";
    initialChessBoard[7][4].role = "king";


   initialChessBoard=whiteIsNext(initialChessBoard,true)
    return initialChessBoard
}