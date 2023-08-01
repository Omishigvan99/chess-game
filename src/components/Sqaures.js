import React from "react";
import blackBishop from "../images/BlackBishop.svg";
import blackKnight from "../images/BlackKnight.svg";
import blackPawn from "../images/BlackPawn.svg";
import blackQueen from "../images/BlackQueen.svg";
import blackKing from "../images/BlackKing.svg";
import blackRook from "../images/BlackRook.svg";

import whiteBishop from "../images/WhiteBishop.svg";
import whiteKnight from "../images/WhiteKnight.svg";
import whitePawn from "../images/WhitePawn.svg";
import whiteQueen from "../images/WhiteQueen.svg";
import whiteKing from "../images/WhiteKing.svg";
import whiteRook from "../images/WhiteRook.svg";

export default function Sqaures(props) {
    let squareImage = ((squareInfo) => {
        switch (squareInfo.color) {
            case "black":
                switch (squareInfo.role) {
                    case "pawn":
                        return blackPawn;

                    case "rook":
                        return blackRook;

                    case "bishop":
                        return blackBishop;

                    case "knight":
                        return blackKnight;

                    case "queen":
                        return blackQueen;

                    case "king":
                        return blackKing;

                    default:
                        return null;
                }

            case "white":
                switch (squareInfo.role) {
                    case "pawn":
                        return whitePawn;

                    case "rook":
                        return whiteRook;

                    case "bishop":
                        return whiteBishop;

                    case "knight":
                        return whiteKnight;

                    case "queen":
                        return whiteQueen;

                    case "king":
                        return whiteKing;

                    default:
                        return null;
                }

            default:
                break;
        }
    })(props.squareInfo);

    let clickHandler = () => {
        if (
            !props.squareInfo.isHighlighted &&
            !props.squareInfo.isVulnerable &&
            props.squareInfo.isNext
        ) {
            if (props.squareInfo.role !== "") {
                props.dispatch({
                    type: "activated",
                    payload: {
                        piece: props.squareInfo,
                        rowIndex: props.rowIndex,
                        colIndex: props.colIndex,
                        selected: !props.squareInfo.isSelected,
                    },
                });
            }
        } else if (
            props.squareInfo.isHighlighted ||
            props.squareInfo.isVulnerable
        ) {
            let squareInfo = props.squareInfo;
            squareInfo = {
                ...squareInfo,
                isSelected: false,
            };
            props.dispatch({
                type: "moved",
                payload: {
                    piece: squareInfo,
                    rowIndex: props.rowIndex,
                    colIndex: props.colIndex,
                },
            });
        }
        // console.log("Got Called");
    };

    let outline;
    if (props.squareInfo.isSelected) {
        outline = "2px solid greenyellow";
    } else if (props.squareInfo.isNext) {
        outline = "2px solid yellow";
    } else if (props.squareInfo.isHighlighted) {
        outline = "2px solid purple";
    } else if (props.squareInfo.isVulnerable) {
        outline = "2px solid red";
    } else {
        outline = null;
    }

    return (
        <button
            style={{
                position: "relative",
                height: "4rem",
                width: "4rem",
                background:
                    (props.rowIndex + props.colIndex) % 2 === 0
                        ? "#FFF8DC"
                        : "#D2B48C",
                outline: outline,
                outlineOffset: "-4px",
            }}
            onClick={() => {
                clickHandler();
            }}
        >
            <img src={squareImage} alt="" />
            {/* <div
                style={{
                    position: "absolute",
                    height: "auto",
                    width: "90%",
                    top: "0",
                    left: "0",
                    // margin:"0 auto",
                    border: "2px solid black",
                    borderRadius: "50%",
                    background: "white",
                    zIndex:0,
                }}
            ></div> */}
        </button>
    );
}
