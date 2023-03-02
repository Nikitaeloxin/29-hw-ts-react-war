import React, {useState} from 'react';
import {game} from "../utils/constants";

interface Props {
    changePage: (page: string) => void,
    changeName: (page: string) => void
}

const Start = ({changePage, changeName}: Props) => {
    const [name, setName] = useState('');
    const handleClickStart = () => {
        changePage(game);
        changeName(name);
    }
    return (
        <>
            <h1>Ready For War</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value.toUpperCase())}
                type='text'
                placeholder='Enter your name'
            />
            <button onClick={handleClickStart}>Start</button>
        </>
    );
};

export default Start;