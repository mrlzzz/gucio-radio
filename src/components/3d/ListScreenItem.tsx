// @ts-expect-error JS module, no type declarations
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// @ts-expect-error JS module, no type declarations
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import firaFont from "../../assets/font/fira-code-font.json";

extend({ TextGeometry });

type ScreenItemType = {
    isActive?: boolean;
    positionY: number;
    text: string;
    onClick: () => void;
};

const ListScreenItem = ({
    isActive = false,
    positionY,
    text,
    onClick,
}: ScreenItemType) => {
    const font = new FontLoader().parse(firaFont);
    const ipodBlue = new THREE.Color(0x3d75cb);

    return (
        <mesh position={[0, positionY, 0.01]} onClick={onClick}>
            <boxGeometry args={[0.75, 0.1, 0.01]} />
            <meshStandardMaterial color={isActive ? ipodBlue : "white"} />

            <mesh
                position={[0.35, 0.02, -0.01]}
                rotation={[-Math.PI, Math.PI, 0]}
            >
                {/* @ts-expect-error lol */}
                <textGeometry
                    args={[text, { font, size: 0.03, height: 0.02 }]}
                />
                <meshStandardMaterial
                    color={isActive ? "white" : "black"}
                    opacity={0.8}
                />
            </mesh>
        </mesh>
    );
};

export default ListScreenItem;
