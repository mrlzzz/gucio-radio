import React, { useEffect, useRef } from "react";
import ListScreen from "./ListScreen";
import SongScreen from "./SongScreen";

type ScreenType = {
    activeItemIndex: number;
    setActiveItemIndex: React.Dispatch<React.SetStateAction<number>>;
    screenTypeIndex: number;
    setScreenTypeIndex: React.Dispatch<React.SetStateAction<number>>;
    data: {
        bandName: string;
        songName: string;
        albumCover: string;
        duration: number;
    }[];
};

const Screen = ({
    data,
    activeItemIndex,
    setActiveItemIndex,
    screenTypeIndex,
    setScreenTypeIndex,
}: ScreenType) => {
    const screenRef = useRef<THREE.Mesh>(null!);
    const songsData = data;
    const screenType = [
        <SongScreen
            screenRef={screenRef}
            songsData={songsData}
            activeItemIndex={activeItemIndex}
        />,
        <ListScreen
            screenRef={screenRef}
            songsData={songsData}
            activeItemIndex={activeItemIndex}
            setActiveItemIndex={setActiveItemIndex}
        />,
    ];
    useEffect(() => {
        /* 
            Refactor the handler later on
        */
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space" && screenTypeIndex === 0) {
                setScreenTypeIndex(1);
            } else if (event.code === "Space" && screenTypeIndex === 1) {
                setScreenTypeIndex(0);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [screenTypeIndex, setScreenTypeIndex]);

    return screenType[screenTypeIndex];
};

export default Screen;
