import * as THREE from "three";

type ControlsType = {
    handlers: {
        listChange: (delta: number) => void;
        screenChange: () => void;
    };
};

const Controls = ({ handlers }: ControlsType) => {
    const COLOR_GRAY = new THREE.Color(0xaaaaaa);
    const COLOR_LIGHT_GRAY = new THREE.Color(0xb8b8b8);

    return (
        <>
            <mesh rotation={[0, Math.PI / 2, 0]} position={[0.14, -0.388, 0]}>
                <mesh
                    position={[0, 0, 0.0001]}
                    onClick={() => handlers.screenChange()}
                >
                    <circleGeometry
                        args={[0.415, 32, Math.PI / 4, Math.PI / 2]}
                    />
                    <meshBasicMaterial color={COLOR_GRAY} />
                </mesh>
                <mesh
                    position={[0, 0, 0.0001]}
                    onClick={() => handlers.listChange(1)}
                >
                    <circleGeometry
                        args={[0.415, 32, Math.PI + 9.4 / 4, Math.PI / 2]}
                    />
                    <meshBasicMaterial color={COLOR_GRAY} />
                </mesh>
                <mesh
                    position={[0, 0, 0.0001]}
                    onClick={() => handlers.listChange(-1)}
                >
                    <circleGeometry
                        args={[0.415, 32, Math.PI - 3.13 / 4, Math.PI / 2]}
                    />
                    <meshBasicMaterial color={COLOR_GRAY} />
                </mesh>
                <mesh position={[0, 0, 0.0001]} onClick={() => {}}>
                    <circleGeometry
                        args={[0.415, 32, Math.PI + 3.1 / 4, Math.PI / 2]}
                    />
                    <meshBasicMaterial color={COLOR_GRAY} />
                </mesh>
                <mesh
                    position={[0, 0, 0.0002]}
                    onClick={() => handlers.screenChange()}
                >
                    <circleGeometry args={[0.13, 32]} />
                    <meshBasicMaterial color={COLOR_LIGHT_GRAY} />
                </mesh>
            </mesh>
        </>
    );
};

export default Controls;
