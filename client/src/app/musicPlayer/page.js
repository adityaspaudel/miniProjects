"use client";

import { useRef, useState, useEffect } from "react";

const CLIENT_ID = "6556974e"; // Your Jamendo Client ID

export default function JamendoMusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch multiple tracks from Jamendo API
  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch(
          `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&limit=5&format=json`
        );
        const data = await res.json();

        if (data.results && data.results.length > 0) {
          const formattedTracks = data.results.map((t) => ({
            title: t.name,
            artist: t.artist_name,
            url: t.audio,
            image: t.album_image,
          }));
          setTracks(formattedTracks);
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTracks();
  }, []);

  // Play / Pause toggle
  const togglePlay = () => {
    if (!tracks.length) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Go to next track
  const nextTrack = () => {
    if (!tracks.length) return;
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentIndex(nextIndex);
    setProgress(0);
    setIsPlaying(true);
  };

  // Go to previous track
  const prevTrack = () => {
    if (!tracks.length) return;
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentIndex(prevIndex);
    setProgress(0);
    setIsPlaying(true);
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  // Seek audio
  const handleSeek = (e) => {
    const time = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(e.target.value);
  };

  // Listen for time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener("timeupdate", handleTimeUpdate);

    // Auto-next when track ends
    audio.addEventListener("ended", nextTrack);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", nextTrack);
    };
  }, [currentIndex, tracks]);

  // Play automatically when track changes
  useEffect(() => {
    if (!tracks.length) return;
    audioRef.current.load();
    if (isPlaying) audioRef.current.play();
  }, [currentIndex, tracks]);

  const currentTrack = tracks[currentIndex];

  return (
    <div className="p-6 flex flex-col gap-4 justify-center items-center bg-gray-100 rounded-xl shadow-md w-96 mx-auto text-black h-screen w-screen">
      <h1 className="text-xl font-bold">🎵 Jamendo Music Player</h1>

      {loading && <p>Loading tracks...</p>}

      {currentTrack && (
        <>
          <img
            src={currentTrack.image}
            alt={currentTrack.title}
            className="w-40 h-40 rounded-lg shadow"
          />
          <p className="font-semibold">{currentTrack.title}</p>
          <p className="text-sm text-gray-600">By {currentTrack.artist}</p>

          <audio ref={audioRef} src={currentTrack.url} />

          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="w-full"
          />

          <div className="flex gap-4 mt-2">
            <button
              onClick={prevTrack}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              ⏮ Previous
            </button>
            <button
              onClick={togglePlay}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
            <button
              onClick={nextTrack}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              ⏭ Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
