import { useEffect, useMemo } from "react";
import ListScreenItem from "./ListScreenItem";
import { shortenString } from "@/lib/utils";
import { BoxGeometry, MeshBasicMaterial } from "three";

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

    const mat = useMemo(
        () =>
            new MeshBasicMaterial({
                color: "white",
                opacity: 0.8,
                transparent: true,
            }),
        []
    );
    const geom = useMemo(() => new BoxGeometry(0.85, 0.7, 0.01), []);

    const screenItemsData = songsData.map((item, idx) => {
        return {
            positionY: INITAL_ANCHOR_HEIGHT + idx * SPACE_BETWEEN,
            isActive: idx === activeItemIndex,
            text: shortenString(item.bandName + " - " + item.songName, 25),
        };
    });

    const screenItems = screenItemsData.map((item) => {
        return (
            <ListScreenItem
                key={item.text}
                positionY={item.positionY}
                isActive={item.isActive}
                text={item.text}
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
            geometry={geom}
            material={mat}
        >
            {screenItems}
        </mesh>
    );
};

export default ListScreen;
