import {ADD_SNAPSHOT, CLEAR_HISTORY, SWITCH_RECORDER} from "./constant";

export function actionAddSnapshot(snapshot) {
    return {
        type: ADD_SNAPSHOT,
        snapshot
    }
}
export function actionSwitchRecorder(val) {
    return {
        type: SWITCH_RECORDER,
        val
    }
}
export function actionClearHistory() {
    return {
        type: CLEAR_HISTORY,
    }
}
