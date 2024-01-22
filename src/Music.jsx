import React, { useState, useRef, useEffect } from "react";
import TimeSlider from "react-input-slider";
import PrevIcon from "./icons/PrevIcon";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import audios from "./audios";

const Music = () => {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    const handleEnded = () => {
      // Auto play the next audio when the current one ends
      setAudioIndex((prevIndex) => (prevIndex + 1) % audios.length);
      setPlay(true);
    };

    audioRef.current.addEventListener("ended", handleEnded);

    // Cleanup event listener on component unmount
    return () => {
      audioRef.current.removeEventListener("ended", handleEnded);
    };
  }, [audioIndex]);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col gap-2 w-60 items-center">
      <div className="flex flex-col items-center">
        <img
          className={`Song-Thumbnail ${
            isPlay ? "animate-rotate-center" : "animate-none"
          }`}
          src="pic/cute_cat.webp"
          alt="Music"
        />
        <h2 className="Song-Title pt-2 font-bold">
          {audios[audioIndex].title}
        </h2>
        <p className="Singer">{audios[audioIndex].artist}</p>
      </div>

      <div className="Control-Button-Group">
        <div
          className="Prev-Button"
          onClick={() =>
            setAudioIndex((audioIndex - 1 + audios.length) % audios.length)
          }
        >
          <PrevIcon />
        </div>
        <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
          {isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
        <div
          className="Next-Button"
          onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
        >
          <NextIcon />
        </div>
      </div>
      <TimeSlider
        axis="x"
        xmax={duration}
        x={currentTime}
        onChange={handleTimeSliderChange}
        styles={{
          track: {
            backgroundColor: "#e3e3e3",
            height: "2px",
          },
          active: {
            backgroundColor: "#333",
            height: "2px",
          },
          thumb: {
            marginTop: "-3px",
            width: "8px",
            height: "8px",
            backgroundColor: "#333",
            borderRadius: 0,
          },
        }}
      />
      <audio
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
      />
    </div>
  );
};

export default Music;
