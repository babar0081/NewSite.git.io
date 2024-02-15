import React from 'react';
import ReactPlayer from 'react-player';

function PlayerComponent() {
  const videoUrl = 'https://youtube.com/watch?v=s4xnyr2mCuI'; // Replace with your actual video URL

  return (
    <div className="relative w-full h-full lg:h-screen object-cover p-0 overflow-hidden">
      
      <ReactPlayer  url={videoUrl}
  playing={true}
  muted={true}
  loop={true}
  width="100%"
  height="100%%"
  className="object-cover shadow-md absolute top-0 left-0 w-full h-full object-cover shadow-md pointer-events-none "
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
    </div >
  );
}

export default PlayerComponent;



