import { useMemo } from "react";
import { BoxGeometry, MeshStandardMaterial } from "three";

// Duration slider from 0 to 0.723
type SongScreenDurationType = {
    time: number;
    songDuration: number;
};

const SongScreenDuration = ({ time, songDuration }: SongScreenDurationType) => {
    /*
        Consider using `useFrame` 
    */
    const progressLength = Math.min((time / songDuration) * 0.723, 0.723);
    const geomOuter = useMemo(() => {
        return new BoxGeometry(0.733, 0.03, 0.01);
    }, []);
    const geomInner = useMemo(() => {
        return new BoxGeometry(progressLength, 0.02, 0.011);
    }, [progressLength]);
    const matGray = useMemo(() => {
        return new MeshStandardMaterial({ color: "gray" });
    }, []);
    const matBlack = useMemo(() => {
        return new MeshStandardMaterial({ color: "black" });
    }, []);

    return (
        <mesh
            position={[0, 0.15, 0.01]}
            geometry={geomOuter}
            material={matGray}
        >
            <mesh geometry={geomInner} material={matBlack}></mesh>
        </mesh>
    );
};

export default SongScreenDuration;
