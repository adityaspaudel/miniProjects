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
    <div className="p-6 flex flex-col gap-4 justify-center items-center bg-purple-400  shadow-md  mx-auto text-black min-h-screen w-screen">
      <div className="flex flex-col gap-4 items-center content-center bg-stone-400 rounded-xl p-4 min-h-1/2 w-1/2">
        <h1 className="text-4xl font-bold flex">
          🎵
          <div>
            Jamendo Music Player
            <hr className="border-black" />
          </div>
        </h1>
        {loading && <p>Loading tracks...</p>}
        {currentTrack && (
          <>
            <img
              src={currentTrack.image}
              alt={currentTrack.title}
              className="w-40 h-40 rounded-lg shadow"
            />
            <p className="font-semibold" title="song">
              {currentTrack.title}
            </p>
            <p className="text-sm text-yellow-800" title="artist">
              By {currentTrack.artist}
            </p>
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
                className="bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-500 transition text-white"
              >
                ⏮ Previous
              </button>
              <button
                onClick={togglePlay}
                className="bg-blue-500 text-white  rounded-lg shadow hover:bg-blue-600 transition"
              >
                {isPlaying ? (
                  <span className="hover:bg-red-400 px-6 py-3 h-full w-full rounded-lg">
                    ⏸ Pause
                  </span>
                ) : (
                  <span className="hover:bg-green-400 h-full w-full px-6 py-3 rounded-lg">
                    ▶ Play
                  </span>
                )}
              </button>
              <button
                onClick={nextTrack}
                className="bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-500 transition text-white"
              >
                ⏭ Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
