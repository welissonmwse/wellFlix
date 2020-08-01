import React from 'react'
import ReactPlayer from 'react-player'

function PlayVideo ({url}){
    return(
        <ReactPlayer 
            url={url}
            controls='true'
            width='400px'
            height='300px'
        />
    )
}

export default PlayVideo