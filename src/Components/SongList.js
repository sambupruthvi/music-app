import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/action';

class SongList extends React.Component {
    render(){
        const renderSongList = () => {
            return this.props.songs.map(song => {
                return (
                    <div className = 'item' key = {song.title}>
                        <div className = 'right floated content'>
                            <button className = 'ui button primary' onClick = {() => {this.props.selectSong(song)}}>Select</button>
                        </div>
                        <div className = 'content' >
                            {song.title}
                        </div>
                    </div>
                ) 
            })
        }
        return (
            <div className = 'ui divided list'>
                {renderSongList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
}
// We use connect function component to connect to Provide component and get access to state props
// We pass mapStateToProps as a first prop. This function helps to map the state from provider and pass it as a prop to the components which implemented this.

export default connect(mapStateToProps, { selectSong })(SongList);
