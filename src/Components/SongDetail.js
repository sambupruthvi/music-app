import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({songSelected}) => {
    if (!songSelected) {
        return <div>No Song Selected</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {songSelected.title}</p>
            <p>Duration: {songSelected.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { songSelected : state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);