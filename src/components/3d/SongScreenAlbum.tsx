import { useTexture } from "@react-three/drei";

const SongScreenAlbum = () => {
    const props = useTexture({
        map: "album-cover.jpg",
    });
    return (
        <mesh position={[0.2, -0.14, 0.01]} rotation={[0, 0, Math.PI]}>
            <boxGeometry args={[0.33, 0.3, 0.01]} />
            <meshStandardMaterial {...props} color={"lightblue"} />
        </mesh>
    );
};

export default SongScreenAlbum;
