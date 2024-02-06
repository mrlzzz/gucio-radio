// @ts-expect-error JS module, no type declarations
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// @ts-expect-error JS module, no type declarations
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Vector3 } from "@react-three/fiber";
import firaFont from "../../assets/font/fira-code-font.json";
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";

type ScreenTextType = {
    text: string;
    position?: Vector3 | undefined;
    size?: number;
    height?: number;
    color?: string;
};

//position={[0.35, 0.02, -0.01]}
//rotation={[-Math.PI, Math.PI, 0]}
//size: 0.03
//height: 0.02
//color: black

const ScreenText = ({
    text,
    position,
    size = 0.03,
    height = 0.02,
    color = "black",
}: ScreenTextType) => {
    const font = useMemo(() => {
        return new FontLoader().parse(firaFont);
    }, []);

    const textGeom = useMemo(() => {
        return new TextGeometry(text, {
            font: font,
            size: size,
            height: height,
        });
    }, [text, font, size, height]);

    const textMat = useMemo(() => {
        return new MeshStandardMaterial({
            color: color,
            opacity: 0.8,
        });
    }, [color]);

    return (
        <mesh
            position={position}
            rotation={[-Math.PI, Math.PI, 0]}
            geometry={textGeom}
            material={textMat}
        ></mesh>
    );
};

export default ScreenText;
