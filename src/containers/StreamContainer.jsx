import React from 'react';
import { connect } from 'react-redux';
import Stream from "../components/Stream/Stream";

function StreamContainer(props) {
    return (
        <Stream state={props} />
    )
}
const mapStateToProps = function(state) {
    return {
        isRecorded: state.isRecorded,
        snapshotsLength: state.arrSnapshots.length
    }
};

export default connect(mapStateToProps)(StreamContainer);