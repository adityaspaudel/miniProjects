"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(e.target.value);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div>
      <h1>🎵 Simple Player</h1>

      {/* Audio */}
      <audio ref={audioRef} src="" />

      {/* Progress Bar */}
      <input type="range" value={progress} onChange={handleSeek} />

      {/* Controls */}
      <button onClick={togglePlay}>{isPlaying ? "⏸ Pause" : "▶ Play"}</button>
    </div>
  );
}
