import React, {useState} from 'react';
import './App.css';
import Result from "./components/Result";
import {game, result, start} from "./utils/constants";
import Game from "./components/Game";
import Start from "./components/Start";
import {GameResult} from "./utils/types";

function App() {
    const [page, setPage] = useState(start);
    const [name, setName] = useState('YOU');
    const [res,setRes] = useState<GameResult>();

    const changeName = (name: string) => {
        if (name) {
            setName(name);
        }
    }

    switch (page) {
        case result:
            return <Result changePage={setPage} res={res!}/>;
        case game:
            return <Game name={name} changePage={setPage} changeRes={setRes}/>;
        default:
            return <Start changeName={changeName} changePage={setPage}/>
    }
}

export default App;
