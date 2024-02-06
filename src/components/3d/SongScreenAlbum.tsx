import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { BoxGeometry, MeshStandardMaterial } from "three";
type SongScreenAlbumType = {
    img: string;
};
const SongScreenAlbum = ({ img }: SongScreenAlbumType) => {
    const texture = useTexture({
        map: `${img}`,
    });
    const geom = useMemo(() => {
        return new BoxGeometry(0.33, 0.3, 0.01);
    }, []);
    const mat = useMemo(() => {
        return new MeshStandardMaterial({
            map: texture.map,
        });
    }, [texture]);
    return (
        <mesh
            position={[0.2, -0.14, 0.01]}
            rotation={[0, 0, Math.PI]}
            geometry={geom}
            material={mat}
        ></mesh>
    );
};

export default SongScreenAlbum;
