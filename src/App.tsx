import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

import AudioPlayerModel from "./components/3d/AudioPlayerModel";

const App = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Canvas>
                <Stats />
                <ambientLight intensity={Math.PI / 2} />
                {/* <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    decay={0}
                    intensity={Math.PI}
                />
                <pointLight
                    position={[-10, -10, -10]}
                    decay={0}
                    intensity={Math.PI}
                /> */}
                <AudioPlayerModel position={[0, 0, 0]} />
            </Canvas>
            {/* <div className="p-4 lg:p-10 border border-zinc-500 w-full max-w-7xl">
                <AudioPlayer></AudioPlayer>
            </div> */}
        </div>
    );
};

export default App;
