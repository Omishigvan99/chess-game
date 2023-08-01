import React from "react";
import Square from "./Sqaures";
import styles from "./ChessBoard.module.css";

export default function ChessBoard({ chessBoardState, dispatchChessBoard }) {
    
    return (
        <>
            <div className={styles.boardContainer}>
                <div className={styles.upperGuide}>
                    <span className={styles.upperGuideItem}>A</span>
                    <span className={styles.upperGuideItem}>B</span>
                    <span className={styles.upperGuideItem}>C</span>
                    <span className={styles.upperGuideItem}>D</span>
                    <span className={styles.upperGuideItem}>E</span>
                    <span className={styles.upperGuideItem}>F</span>
                    <span className={styles.upperGuideItem}>G</span>
                    <span className={styles.upperGuideItem}>H</span>
                </div>

                <div className={styles.lowerGuide}>
                    <span className={styles.lowerGuideItem}>A</span>
                    <span className={styles.lowerGuideItem}>B</span>
                    <span className={styles.lowerGuideItem}>C</span>
                    <span className={styles.lowerGuideItem}>D</span>
                    <span className={styles.lowerGuideItem}>E</span>
                    <span className={styles.lowerGuideItem}>F</span>
                    <span className={styles.lowerGuideItem}>G</span>
                    <span className={styles.lowerGuideItem}>H</span>
                </div>

                <div className={styles.board}>
                    {chessBoardState.map((row, rowindex) => {
                        return row.map((item, colindex) => {
                            return (
                                <Square
                                    key={rowindex + "" + colindex}
                                    rowIndex={rowindex}
                                    colIndex={colindex}
                                    dispatch={dispatchChessBoard}
                                    squareInfo={
                                        chessBoardState[rowindex][colindex]
                                    }
                                ></Square>
                            );
                        });
                    })}
                </div>

                <div className={styles.rightSideGuide}>
                    <span className={styles.rightSideGuideItem}>8</span>
                    <span className={styles.rightSideGuideItem}>7</span>
                    <span className={styles.rightSideGuideItem}>6</span>
                    <span className={styles.rightSideGuideItem}>5</span>
                    <span className={styles.rightSideGuideItem}>4</span>
                    <span className={styles.rightSideGuideItem}>3</span>
                    <span className={styles.rightSideGuideItem}>2</span>
                    <span className={styles.rightSideGuideItem}>1</span>
                </div>

                <div className={styles.leftSideGuide}>
                    <span className={styles.leftSideGuideItem}>8</span>
                    <span className={styles.leftSideGuideItem}>7</span>
                    <span className={styles.leftSideGuideItem}>6</span>
                    <span className={styles.leftSideGuideItem}>5</span>
                    <span className={styles.leftSideGuideItem}>4</span>
                    <span className={styles.leftSideGuideItem}>3</span>
                    <span className={styles.leftSideGuideItem}>2</span>
                    <span className={styles.leftSideGuideItem}>1</span>
                </div>
            </div>

            <button
                onClick={() => {
                    dispatchChessBoard({
                        type: "init",
                    });
                }}
            >
                Reset Board
            </button>
        </>
    );
}
