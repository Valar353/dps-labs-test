import React from 'react';
import style from './App.module.scss';
import HistoryContainer from "../../containers/HistoryContainer";
import StreamContainer from "../../containers/StreamContainer";

export default class App extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <StreamContainer />
                <HistoryContainer />
            </div>
        );
    }
}