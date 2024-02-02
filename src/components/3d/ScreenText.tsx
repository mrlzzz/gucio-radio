// @ts-expect-error JS module, no type declarations
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// @ts-expect-error JS module, no type declarations
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Vector3, extend } from "@react-three/fiber";
import firaFont from "../../assets/font/fira-code-font.json";

type ScreenTextType = {
    text: string;
    position?: Vector3 | undefined;
    size?: number;
    height?: number;
    color?: string;
};

extend({ TextGeometry });

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
    const font = new FontLoader().parse(firaFont);
    return (
        <mesh position={position} rotation={[-Math.PI, Math.PI, 0]}>
            {/* @ts-expect-error lol */}
            <textGeometry
                args={[
                    text,
                    { font, size: size, height: height, color: color },
                ]}
            />
            <meshStandardMaterial color={color} opacity={0.8} />
        </mesh>
    );
};

export default ScreenText;
