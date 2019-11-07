import React from 'react';
import style from './History.module.scss';


export default class History extends React.Component {
    render() {
        const snapshotList = this.props.state.arrSnapshots.map((item, i) => {
            return (
                <div key={i} className={style.snapshotItem}>
                    <img src={item}/>
                    <div className={style.signature}>Photo</div>
                </div>
            );
        });
        return (
            <div className={style.history}>
                <h2>History</h2>
                <div className={style.snapshotList}>
                    {snapshotList}
                </div>
            </div>
        );
    }

}