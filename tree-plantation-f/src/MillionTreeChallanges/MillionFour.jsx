import React from 'react';

const YoutubeEmbed = ({ videoId }) => {
  return (
    <div className="flex justify-center  py-16">
      <iframe
        className="w-full h-[300px] md:h-[550px] lg:h-[700px] xl:h-[800px] rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture"
        allowFullScreen
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="container  mx-auto p-4">
      <YoutubeEmbed videoId="GAxI36fyB-c" />
    </div>
  );
};

export default App;