import React, { useRef, useEffect } from 'react';

interface VideoProps {
  videoUrl: string;
  isPlaying: boolean;
  isMuted: boolean;
  onVideoEnd?: () => void;
}

const Video: React.FC<VideoProps> = ({ videoUrl, isPlaying, isMuted, onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const handleEnded = () => {
      if (onVideoEnd) {
        onVideoEnd();
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleEnded);
      return () => {
        videoElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [onVideoEnd]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover rounded-lg z-20 relative"
      muted={isMuted}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
