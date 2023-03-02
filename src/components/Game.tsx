import React, {useEffect, useRef, useState} from 'react';
import {result} from "../utils/constants";
import {Card, GameResult} from "../utils/types";

interface Props {
    changePage: (page: string) => void
    changeRes: (res: GameResult) => void
    name: string
}


const Game = ({changePage, name, changeRes}: Props) => {
    const [compCard, setCompCard] = useState('computer card');
    const [playerCard, setPlayerCard] = useState('player card');
    const compDeck = useRef<Card[]>([]);
    const playerDeck = useRef<Card[]>([])
    const matchResult = useRef<GameResult>({winner:'',playerCount:0,compCount:0})

    useEffect(() => {
        compDeck.current = [{rank: 2, suit: 'heart'}, {rank: 5, suit: 'club'}];
        playerDeck.current = [{rank: 2, suit: 'diamond'}, {rank: 7, suit: 'spade'}];
    }, [])

    const handleClickNext = () => {
        if (compDeck.current.length) {
            const player = playerDeck.current.pop();
            const comp = compDeck.current.pop();
            setCompCard(`${comp!.rank} ${comp!.suit}`);
            setPlayerCard(`${player!.rank} ${player!.suit}`)
            if (player!.rank > comp!.rank) {
                matchResult.current!.playerCount += 1
            } else if (player!.rank < comp!.rank) {
                matchResult.current!.compCount += 1
            }

        } else {
            if (matchResult.current!.playerCount > matchResult.current!.compCount) {
                matchResult.current!.winner='Player'
            } else if (matchResult.current!.playerCount < matchResult.current!.compCount) {
                matchResult.current!.winner='Computer'
            } else {
                matchResult.current!.winner='standoff'
            }
             changeRes(matchResult.current!)
            changePage(result)
        }
    }

    return (
        <>
            <h2>Computer</h2>
            <p>{compCard}</p>
            <p>{playerCard}</p>
            <h2>{name}</h2>
            <button onClick={handleClickNext}>Next</button>
        </>
    );
};

export default Game;
