import { Canvas } from "@react-three/fiber";
import AudioPlayer from "./components/features/AudioPlayer";
import Model from "./components/3d/Ipod_classic";
import Box from "./components/3d/box";

const App = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    decay={0}
                    intensity={Math.PI}
                />
                {/* <pointLight
                    position={[-10, -10, -10]}
                    decay={0}
                    intensity={Math.PI}
                /> */}
                {/* <Box></Box> */}
                <Model position={[0, 0, 0]} />
                <Box position={[10, 0, 3]} />
            </Canvas>
            <div className="p-4 lg:p-10 border border-zinc-500 w-full max-w-7xl">
                <AudioPlayer></AudioPlayer>
            </div>
        </div>
    );
};

export default App;
