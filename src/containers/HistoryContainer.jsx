import React from 'react';
import { connect } from 'react-redux';
import History from "../components/History/History";

function HistoryContainer(props) {
    return (
        <History state={props} />
    )
}
const mapStateToProps = function(state) {
    return {
        arrSnapshots: state.arrSnapshots
    }
};

export default connect(mapStateToProps)(HistoryContainer);