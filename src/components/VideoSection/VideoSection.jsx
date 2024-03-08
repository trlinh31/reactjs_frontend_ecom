import React from 'react';
import Videos from './../../assets/videos/video.mov';
export default function VideoSection() {
  return (
    <section className='video-section w-full container overflow-hidden mb-10 h-max'>
      <video src={Videos} className='video rounded-xl' playsInline loop muted autoPlay></video>
    </section>
  );
}
