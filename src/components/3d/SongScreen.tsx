import React from "react";
import SongScreenAlbum from "./SongScreenAlbum";
import SongScreenTitle from "./SongScreenTitle";

type SongScreenType = {
    screenRef: React.RefObject<THREE.Mesh>;
};
const SongScreen = ({ screenRef }: SongScreenType) => {
    return (
        <mesh
            ref={screenRef}
            position={[0.12, 0.55, 0]}
            rotation={[(2 * Math.PI) / 2, Math.PI / 2, 0]}
        >
            <boxGeometry args={[0.8, 0.65, 0.01]} />
            <meshStandardMaterial color="white" transparent opacity={0.8} />
            <SongScreenAlbum />
            <SongScreenTitle
                titleText="Pink Floyd"
                subTitleText="Another Side Of The Moon"
            />
        </mesh>
    );
};

export default SongScreen;
