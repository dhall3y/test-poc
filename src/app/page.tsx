
import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import styles from './styles/Home.module.css';
import { generateSignedUrl } from '../utils/signedUrl';

const HomePage: React.FC = () => {
  const videoIds = [
    'bc32e38e-32cf-456a-9607-7988caa8297d'
  ];

  const videoUrls = videoIds.map(id => generateSignedUrl(id, 3600));

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

export default HomePage;
