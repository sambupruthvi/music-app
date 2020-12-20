import { combineReducers } from 'redux';
const songReducer = () => {
    return [
        {
            title: 'Levitating',
            duration: '4.50'
        },
        {
            title: 'Uptown Funk',
            duration: '3.20'
        },
        {
            title: 'The Blinding Lights',
            duration: '5.20'
        },
        {
            title: 'Criminal',
            duration: '5.00'
        }
    ];
}

const songSelectedReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: songSelectedReducer
})