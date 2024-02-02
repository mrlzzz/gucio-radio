import React, { useState } from "react";
import SongScreenAlbum from "./SongScreenAlbum";
import SongScreenTitle from "./SongScreenTitle";
import SongScreenDuration from "./SongScreenDuration";
import { useInterval } from "usehooks-ts";

type SongScreenType = {
    screenRef: React.RefObject<THREE.Mesh>;
    songsData: {
        bandName: string;
        songName: string;
        albumCover: string;
        duration: number;
    }[];
    activeItemIndex: number;
};
const SongScreen = ({
    screenRef,
    songsData,
    activeItemIndex,
}: SongScreenType) => {
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const currentSong = {
        title: songsData[activeItemIndex].bandName,
        subTitle: songsData[activeItemIndex].songName,
        albumCover: songsData[activeItemIndex].albumCover,
        duration: songsData[activeItemIndex].duration,
    };
    useInterval(() => {
        setElapsedTime((prev) => prev + 1);
    }, 1000);

    return (
        <mesh
            ref={screenRef}
            position={[0.12, 0.55, 0]}
            rotation={[(2 * Math.PI) / 2, Math.PI / 2, 0]}
        >
            <boxGeometry args={[0.85, 0.7, 0.01]} />
            <meshStandardMaterial color="white" transparent opacity={0.8} />
            <SongScreenAlbum img={currentSong.albumCover} />
            <SongScreenTitle
                titleText={currentSong.title}
                subTitleText={currentSong.subTitle}
            />
            <SongScreenDuration
                time={elapsedTime}
                songDuration={currentSong.duration}
            />
        </mesh>
    );
};

export default SongScreen;
