// Duration slider from 0 to 0.723
type SongScreenDurationType = {
    time: number;
    songDuration: number;
};

const SongScreenDuration = ({ time, songDuration }: SongScreenDurationType) => {
    const progressLength = Math.min((time / songDuration) * 0.723, 0.723);
    return (
        <mesh position={[0, 0.15, 0.01]}>
            <boxGeometry args={[0.733, 0.03, 0.01]} />
            <meshStandardMaterial color={"gray"} />
            <mesh>
                <boxGeometry args={[progressLength, 0.02, 0.011]} />
                <meshStandardMaterial color={"black"} />
            </mesh>
        </mesh>
    );
};

export default SongScreenDuration;
