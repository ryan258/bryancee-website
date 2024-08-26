'use client';
// components/MusicPlayer.js
import { useState, useRef, useEffect } from 'react'

const tracks = [
  { title: "Long Lost Brother", src: "/music-samples/long-lost-brother.mp3" },
  { title: "Caribbean Nights", src: "/music-samples/caribbean-nights.mp3" },
  { title: "Classical Fusion", src: "/music-samples/classical-fusion.mp3" },
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef(null)

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play()
//     } else {
//       audioRef.current.pause()
//     }
//   }, [isPlaying, currentTrack])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

//   const handleTrackChange = (index) => {
//     setCurrentTrack(index)
//     setIsPlaying(true)
//   }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">{tracks[currentTrack].title}</h3>
      <audio ref={audioRef} src={tracks[currentTrack].src} />
      <div className="flex justify-between items-center">
        <button
          onClick={handlePlayPause}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="space-x-2">
          {/* {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => handleTrackChange(index)}
              className={`py-1 px-3 rounded ${
                currentTrack === index ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {index + 1}
            </button>
          ))} */}
        </div>
      </div>
    </div>
  )
}