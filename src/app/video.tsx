import { useEffect, useState } from "react";

type VideoProps = {
  curRadio: number;
  setCurRadio: (curRadio: number) => void;
};

export const Video: React.FC<VideoProps> = ({ curRadio, setCurRadio }) => {
  const songs = [
    "https://17793.live.streamtheworld.com/KFAXAM.mp3?dist=ChristianRadio",
    "https://uk4-vn.mixstream.net/:9270/listen.mp3",
  ];

  const ad = new Audio("/ad1.mp3");

  const [audio, setAudio] = useState(new Audio(songs[curRadio]));

  audio.onended = () => {
    setCurRadio((curRadio + 1) % songs.length);
    setAudio(new Audio(songs[(curRadio + 1) % songs.length]));
    audio.play();
  };

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * songs.length);
    setCurRadio(randomValue);

    // play the ad
    const adInterval = setInterval(() => {
      audio.pause();
      ad.play();
      ad.onended = () => {
        if (document.querySelector("video:hover")) {
          audio.play();
        }
      };
    }, 30000);

    return () => {
      clearInterval(adInterval);
      audio.pause();
    };
  }, []);

  const playVideo = () => {
    const video = document.querySelector("video");
    if (video) {
      video.play();
      audio.play();
    }
  };

  const pauseVideo = () => {
    const video = document.querySelector("video");
    if (video) {
      video.pause();
      audio.pause();
    }
  };

  return (
    <video
      width="full"
      height="240"
      preload="auto"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      loop
      className="justify-self-center absolute top-0"
    >
      {" "}
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
