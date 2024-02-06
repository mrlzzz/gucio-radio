import { useMemo } from "react";
import SongScreenAlbum from "./SongScreenAlbum";
import SongScreenTitle from "./SongScreenTitle";
import SongScreenDuration from "./SongScreenDuration";
// import { useInterval } from "usehooks-ts";
import { BoxGeometry, MeshStandardMaterial } from "three";

type SongScreenType = {
    screenRef: React.RefObject<THREE.Mesh>;
    songsData: {
        bandName: string;
        songName: string;
        albumCover: string;
        duration: number;
    }[];
    activeItemIndex: number;
};
const SongScreen = ({
    screenRef,
    songsData,
    activeItemIndex,
}: SongScreenType) => {
    //const [elapsedTime, setElapsedTime] = useState<number>(0);
    const geom = useMemo(() => {
        return new BoxGeometry(0.85, 0.7, 0.01);
    }, []);
    const mat = useMemo(() => {
        return new MeshStandardMaterial({
            color: "white",
            transparent: true,
            opacity: 0.8,
        });
    }, []);
    // useInterval(() => {
    //     setElapsedTime((prev) => prev + 1);
    // }, 1000);
    const currentSong = {
        title: songsData[activeItemIndex].bandName,
        subTitle: songsData[activeItemIndex].songName,
        albumCover: songsData[activeItemIndex].albumCover,
        duration: songsData[activeItemIndex].duration,
    };
    return (
        <mesh
            ref={screenRef}
            position={[0.12, 0.55, 0]}
            rotation={[(2 * Math.PI) / 2, Math.PI / 2, 0]}
            geometry={geom}
            material={mat}
        >
            <SongScreenAlbum img={currentSong.albumCover} />
            <SongScreenTitle
                titleText={currentSong.title}
                subTitleText={currentSong.subTitle}
            />
            <SongScreenDuration time={0} songDuration={currentSong.duration} />
        </mesh>
    );
};

export default SongScreen;
