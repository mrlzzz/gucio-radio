// @ts-expect-error JS module, no type declarations
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// @ts-expect-error JS module, no type declarations
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import { extend } from "@react-three/fiber";
import firaFont from "../../assets/font/fira-code-font.json";
import { Color } from "three";

extend({ TextGeometry });

type ScreenItemType = {
    isActive?: boolean;
    positionY: number;
    text: string;
};

const ScreenItem = ({ isActive = false, positionY, text }: ScreenItemType) => {
    const font = new FontLoader().parse(firaFont);
    return (
        <mesh position={[0, positionY, 0.01]}>
            <boxGeometry args={[0.75, 0.1, 0.01]} />
            <meshStandardMaterial
                color={isActive ? "hotpink" : "lightblue"}
                opacity={0.3}
            />

            <mesh
                position={[0.35, 0.02, -0.01]}
                rotation={[-Math.PI, Math.PI, 0]}
            >
                {/* @ts-expect-error lol */}
                <textGeometry
                    args={[
                        text,
                        { font, size: 0.03, height: 0.02, color: "black" },
                    ]}
                />
                <meshStandardMaterial color={"black"} opacity={0.8} />
            </mesh>
        </mesh>
    );
};

export default ScreenItem;
