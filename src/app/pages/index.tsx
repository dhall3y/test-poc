import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const videoUrls = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  ];

  return (
    <div>
      <h1>Video Platform</h1>
      <div className={styles.grid}>
        {videoUrls.map((url, index) => (
          <VideoPlayer key={index} videoUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default Home;