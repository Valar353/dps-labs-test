import React from 'react';
import style from './Stream.module.scss';
import {store} from "../../redux/store";
import {actionAddSnapshot, actionClearHistory, actionSwitchRecorder} from "../../redux/action";


export default class Stream extends React.Component {
    constructor(props) {
        super(props);
        this._preview = '';
    }

    componentDidMount() {
        this._preview = document.getElementById("preview");

    }

    render() {
        const isRecorded = this.props.state.isRecorded;
        const snapshotsLength = this.props.state.snapshotsLength;
        let buttons, preview, disBtn = true;
        if (isRecorded) {
            preview = <div className={style.mask}><div className={style.signature}>Video stream</div></div>;
            buttons = (
                <>
                    <button onClick={this.takeASnap} className={style.btn}>Capture</button>
                    <button onClick={this.stopStream} className={style.btn + ' ' + style.btnBack}>Back</button>
                </>
            )
        }else{
            preview = <div className={style.preview}/>;
            if(snapshotsLength > 0) disBtn = false;
            buttons = (
                <>
                    <button onClick={this.startStream} className={style.btn}>Open camera</button>
                    <button onClick={this.clearHistory} className={style.btn + ' ' + style.btnClearHistory} disabled={disBtn}>Clear history</button>
                </>
            )
        }//width="400" height="300"
        return (
            <>
                <div className={style.stream}>
                    <video id="preview" autoPlay/>
                    {preview}
                    <div className={style.menu}>
                        {buttons}
                    </div>
                </div>
            </>
        );
    }
    clearHistory = () => {
      store.dispatch(actionClearHistory());
    };
    startStream = () => {
        this.recordingVideo();
    };
    stopStream = () => {
        this._preview.srcObject.getTracks().forEach(track => track.stop());
        store.dispatch(actionSwitchRecorder(false));
    };
    startRecording = stream => {
        let recorder = new MediaRecorder(stream);
        recorder.onstart = () => {
            store.dispatch(actionSwitchRecorder(true));
        };
        recorder.start();
    };

    recordingVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: true,
        }).then(stream => {
            this._preview.srcObject = stream;
            this._preview.captureStream = this._preview.captureStream || this._preview.mozCaptureStream;
        }).then(() => {
            this.startRecording(this._preview.captureStream())
        })
            .catch((error) => console.log(error));
    };
    takeASnap = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = this._preview.videoWidth;
        canvas.height = this._preview.videoHeight;
        ctx.drawImage(this._preview, 0, 0);
        const img = canvas.toDataURL("image/png");
        store.dispatch(actionAddSnapshot(img));
    };

}