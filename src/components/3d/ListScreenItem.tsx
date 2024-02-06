// @ts-expect-error JS module, no type declarations
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// @ts-expect-error JS module, no type declarations
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import {
    Color,
    BoxGeometry,
    MeshStandardMaterial,
    MeshBasicMaterial,
} from "three";
import firaFont from "../../assets/font/fira-code-font.json";
import { useMemo } from "react";

type ScreenItemType = {
    isActive?: boolean;
    positionY: number;
    text: string;
};

const ListScreenItem = ({
    isActive = false,
    positionY,
    text,
}: ScreenItemType) => {
    const font = useMemo(() => {
        return new FontLoader().parse(firaFont);
    }, []);

    const geom = useMemo(() => new BoxGeometry(0.75, 0.1, 0.01), []);

    const mat = useMemo(() => {
        const ipodBlue = new Color(0x3d75cb);
        return new MeshBasicMaterial({
            color: isActive ? ipodBlue : "white",
        });
    }, [isActive]);

    const textGeom = useMemo(() => {
        return new TextGeometry(text, { font: font, size: 0.03, height: 0.02 });
    }, [text, font]);

    const textMat = useMemo(() => {
        return new MeshStandardMaterial({
            color: isActive ? "white" : "black",
            opacity: 0.8,
        });
    }, [isActive]);

    return (
        <mesh position={[0, positionY, 0.01]} geometry={geom} material={mat}>
            <mesh
                position={[0.35, 0.02, -0.01]}
                rotation={[-Math.PI, Math.PI, 0]}
                geometry={textGeom}
                material={textMat}
            ></mesh>
        </mesh>
    );
};

export default ListScreenItem;
