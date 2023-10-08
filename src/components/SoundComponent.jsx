import { useEffect } from "react";
import { Howl } from "howler";
import music from "../assets/music.mp3";

export function SoundComponent() {
  useEffect(() => {
    const sound = new Howl({
      src: [music],
    });

    sound.play();
    sound.loop(true);

    return () => {
      // sound.unload();
    };
  }, []);
}
