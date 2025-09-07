"use client";

import { useRef, useState, useEffect } from "react";

const CLIENT_ID = "6556974e"; // Your Jamendo Client ID

export default function JamendoMusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch a random track from Jamendo API
  useEffect(() => {
    async function fetchMusic() {
      try {
        const res = await fetch(
          `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&limit=1&format=json`
        );
        const data = await res.json();

        if (data.results && data.results.length > 0) {
          const t = data.results[0];
          setTrack({
            title: t.name,
            artist: t.artist_name,
            url: t.audio, // streamable mp3 URL
            image: t.album_image,
          });
        }
      } catch (error) {
        console.error("Error fetching track:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMusic();
  }, []);

  const togglePlay = () => {
    if (!track) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(e.target.value);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="p-6 flex flex-col gap-4 items-center bg-gray-100 rounded-xl shadow-md w-96 mx-auto">
      <h1 className="text-xl font-bold">🎵 Jamendo Music Player</h1>

      {loading && <p>Loading free track...</p>}

      {track && (
        <>
          <img
            src={track.image}
            alt={track.title}
            className="w-40 h-40 rounded-lg shadow"
          />
          <p className="font-semibold">{track.title}</p>
          <p className="text-sm text-gray-600">By {track.artist}</p>

          {/* Audio */}
          <audio ref={audioRef} src={track.url} />

          {/* Progress Bar */}
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="w-full"
          />

          {/* Controls */}
          <button
            onClick={togglePlay}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>
        </>
      )}
    </div>
  );
}
