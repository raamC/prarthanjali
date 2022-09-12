import React from "react"

const VideoContainer = ({ youtubeLinksArray }) => {
  return (
    <div class="box">
      <h3 class="title">Videos</h3>
      {youtubeLinksArray.map(link => (
        <iframe
          width="100%"
          src={link}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ))}
    </div>
  )
}

export default VideoContainer
