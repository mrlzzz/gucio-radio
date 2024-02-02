import { useEffect, useRef, useState } from "react";
import ListScreen from "./ListScreen";
import SongScreen from "./SongScreen";

const Screen = () => {
    const screenRef = useRef<THREE.Mesh>(null!);
    const [screenTypeIndex, setScreenTypeIndex] = useState<number>(0);
    const screenType = [
        <SongScreen screenRef={screenRef} />,
        <ListScreen screenRef={screenRef} />,
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
    }, [screenTypeIndex]);

    return screenType[screenTypeIndex];
};

export default Screen;
