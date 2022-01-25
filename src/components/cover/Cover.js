import React from 'react';
import './Cover.css';
import coverVideo from '../../assets/cover-video2.mp4';

const Cover = () => {
  return (
    <div className="cover-container">
        <video className="video" src={coverVideo} autoPlay loop muted />
        <h1 className="nombre">Alvaro Torralba</h1>
        <p> Developer </p>
    </div>
  );
};

export default Cover;
