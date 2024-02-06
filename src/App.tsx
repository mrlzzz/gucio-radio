import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

import AudioPlayerModel from "./components/3d/AudioPlayerModel";

const App = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Canvas>
                <Stats />
                <ambientLight intensity={Math.PI / 2} />
                <AudioPlayerModel position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
};

export default App;
