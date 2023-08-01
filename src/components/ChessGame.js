import React,{useReducer} from 'react'

import ChessBoard from "./ChessBoard"
import Alerts from "./Alerts"


import initializeChessBoard from "../hooks/InitializeBoard";

import {chessBoardReducer} from "../hooks/Reducer"

let initialState = {
    boardState: initializeChessBoard(),
    isChecks: false,
    player: "",
    hasBlackRookOrKingMoved: false,
    hasWhiteRookOrKingMoved: false,
    hasWhiteCastled: false,
    hasBlackCastled: false,
}

export default function ChessGame() {

    const [chessBoardState, dispatchChessBoard] = useReducer(
        chessBoardReducer,
        initialState
    );

    return (
        <>
            {chessBoardState.isChecks? <Alerts message={null} dispatch={dispatchChessBoard}></Alerts> : null}
            <ChessBoard
                chessBoardState={chessBoardState.boardState}
                dispatchChessBoard={dispatchChessBoard}
            ></ChessBoard>
        </>
    );
}
