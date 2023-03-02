import React from 'react';
import {game} from "../utils/constants";
import {GameResult} from "../utils/types";

interface Props {
    changePage: (page: string) => void
    res:GameResult
}

const Result = ({changePage,res}: Props) => {
    return (
        <>
            <h1>{res.winner} win</h1>
            <h2>{res.playerCount} - {res.compCount}</h2>
            <button onClick={() => changePage(game)}>Again?</button>
        </>
    );
};

export default Result;