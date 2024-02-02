import React, { useEffect } from "react";
import ListScreenItem from "./ListScreenItem";
import { shortenString } from "@/lib/utils";

type ListScreenType = {
    screenRef: React.RefObject<THREE.Mesh>;
    songsData: {
        bandName: string;
        songName: string;
        albumCover: string;
    }[];
    setActiveItemIndex: React.Dispatch<React.SetStateAction<number>>;
    activeItemIndex: number;
};

const ListScreen = ({
    screenRef,
    songsData,
    activeItemIndex,
    setActiveItemIndex,
}: ListScreenType) => {
    const SPACE_BETWEEN = 0.11;
    const INITAL_ANCHOR_HEIGHT = -0.23;
    /*
        Dummy data
    */
    // const screenItemsData = Array.from({ length: 5 }, (_, index) => ({
    //     positionY: INITAL_ANCHOR_HEIGHT + index * SPACE_BETWEEN,
    //     isActive: index === activeItemIndex,
    // }));

    const screenItemsData = songsData.map((item, idx) => {
        return {
            positionY: INITAL_ANCHOR_HEIGHT + idx * SPACE_BETWEEN,
            isActive: idx === activeItemIndex,
            text: shortenString(item.bandName + " - " + item.songName, 25),
        };
    });

    const screenItems = screenItemsData.map((item, idx) => {
        return (
            <ListScreenItem
                key={idx}
                positionY={item.positionY}
                isActive={item.isActive}
                text={item.text}
                onClick={() => {
                    setActiveItemIndex(idx);
                }}
            />
        );
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "z" || event.key === "Z") {
                setActiveItemIndex((prev) => (prev + 1) % screenItems.length);
            }
            if (event.key === "a" || event.key === "A") {
                setActiveItemIndex(
                    (prev) =>
                        (prev - 1 + screenItems.length) % screenItems.length
                );
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [screenItems.length, setActiveItemIndex]);

    return (
        <mesh
            ref={screenRef}
            position={[0.12, 0.55, 0]}
            rotation={[(2 * Math.PI) / 2, Math.PI / 2, 0]}
        >
            <boxGeometry args={[0.85, 0.7, 0.01]} />
            <meshStandardMaterial color="white" transparent opacity={0.8} />

            {screenItems}
        </mesh>
    );
};

export default ListScreen;
