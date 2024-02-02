import { PlayIcon } from "lucide-react";
import { PauseIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useEventListener, useInterval } from "usehooks-ts";
import { Slider } from "../ui/slider";
import testAudio from "../../assets/test-audio/Anitek-Komorebi.mp3";
import { calculateTime } from "@/lib/utils";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [duration, setDuration] = useState<string>("");
    const [delay, setDelay] = useState<number>(1000);
    const audioRef = useRef<HTMLAudioElement>(null);

    const onLoadedMetadata = () => {
        const durationTime = calculateTime(audioRef.current?.duration);
        setDuration(durationTime);
    };

    useEventListener("loadedmetadata", onLoadedMetadata, audioRef);

    useInterval(
        () => {
            setTime(time + 1);
        },
        isPlaying ? delay : null
    );
    const handleIsPlaying = () => {
        if (!isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
        setIsPlaying(!isPlaying);
        setDelay(1000);
    };
    const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const clickedDiv = event.currentTarget;
        const clickX = event.clientX - clickedDiv.getBoundingClientRect().left;
        const divWidth = clickedDiv.clientWidth;
        const percentageClicked = (clickX / divWidth) * 100;
        setTime(percentageClicked);

        console.log(`Clicked at ${percentageClicked}% of the div width`);
    };
    return (
        <div className="flex flex-col gap-4">
            <h1>AudioPlayer</h1>

            <Button
                onClick={handleIsPlaying}
                variant="secondary"
                className="bg-black/50 w-fit"
            >
                {isPlaying ? (
                    <PauseIcon color="#abc" />
                ) : (
                    <PlayIcon color="#abc" />
                )}
            </Button>
            <p>Time: {time}</p>
            <p>Duration: {duration}</p>
            <Progress value={time} onClick={handleProgressClick}></Progress>

            <p>Volume</p>
            <Slider></Slider>
            <audio ref={audioRef} src={testAudio} preload="metadata" loop />
        </div>
    );
};

export default AudioPlayer;
