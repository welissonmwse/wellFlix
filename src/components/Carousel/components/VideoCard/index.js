import React from 'react';
import { VideoCardContainer } from './styles';
import PlayVideo from '../../../PlayVideo';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer>

    <PlayVideo 
      url={videoURL}
      />
      </VideoCardContainer>
    // <VideoCardContainer
    //   url={image}
    //   href={videoURL}
    //   target="_blank"
    //   style={{ borderColor: categoryColor || 'red' }}
    //   title={videoTitle}
    // />
  );
}

export default VideoCard;
