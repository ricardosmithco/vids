import React from 'react';

const VideoItem = (props) => {
    return (
    <div>
        <img src={props.vid.snippet.thumbnails.high.url} />
        {props.vid.snippet.title}
    </div>
    )
};

export default VideoItem;