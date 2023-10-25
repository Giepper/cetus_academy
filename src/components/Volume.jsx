import { useEffect } from "react";
import { Howl } from "howler";
import music from "../assets/music.mp3";
import "./Volume.css";

export function Volume(props) {
  useEffect(() => {
    const sound = new Howl(
      {
        src: [music],
        loop: true,
        volume: props.volume / 100,
      },
      [props.volume]
    );

    sound.play();

    return () => {
      sound.unload();
    };
  }, [props.volume]);
  const handleVolumeChange = (e) => {
    props.onVolumeChange(e);
  };
  return (
    <>
      <div className="volume-control">
        <h2>Volume</h2>
        <input
          className="volume-input"
          type="range"
          min="0"
          max="100"
          value={props.volume}
          onChange={handleVolumeChange}
        />
      </div>
    </>
  );
}