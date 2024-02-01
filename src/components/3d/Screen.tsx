import { useEffect, useRef, useState } from "react";

import ScreenItem from "./ScreenItem";

const Screen = () => {
    const screenRef = useRef<THREE.Mesh>(null!);
    const [activeIndex, setActiveIndex] = useState(0);

    const SPACE_BETWEEN = 0.11;
    const INITAL_ANCHOR_HEIGHT = -0.23;

    const screenItemsData = Array.from({ length: 5 }, (_, index) => ({
        positionY: INITAL_ANCHOR_HEIGHT + index * SPACE_BETWEEN,
        isActive: index === activeIndex,
    }));

    const screenItems = screenItemsData.map((item, idx) => {
        return (
            <ScreenItem
                key={idx}
                positionY={item.positionY}
                isActive={item.isActive}
                text={"Song #" + (idx + 1)}
            />
        );
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "z" || event.key === "Z") {
                setActiveIndex((prev) => (prev + 1) % screenItems.length);
            }
            if (event.key === "a" || event.key === "A") {
                setActiveIndex(
                    (prev) =>
                        (prev - 1 + screenItems.length) % screenItems.length
                );
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [screenItems.length]);

    return (
        <mesh
            ref={screenRef}
            position={[0.12, 0.55, 0]}
            rotation={[(2 * Math.PI) / 2, Math.PI / 2, 0]}
        >
            <boxGeometry args={[0.8, 0.65, 0.01]} />
            <meshStandardMaterial color="white" transparent opacity={0.8} />

            {screenItems}
        </mesh>
    );
};

export default Screen;
