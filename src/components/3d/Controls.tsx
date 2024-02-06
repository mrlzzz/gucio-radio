import { useMemo } from "react";
import { Color, CircleGeometry, MeshBasicMaterial } from "three";

type ControlsType = {
    handlers: {
        listChange: (delta: number) => void;
        screenChange: () => void;
    };
};

const Controls = ({ handlers }: ControlsType) => {
    const matGray = useMemo(() => {
        const COLOR_GRAY = new Color(0xaaaaaa);
        return new MeshBasicMaterial({ color: COLOR_GRAY });
    }, []);
    const matLightGray = useMemo(() => {
        const COLOR_LIGHT_GRAY = new Color(0xb8b8b8);
        return new MeshBasicMaterial({ color: COLOR_LIGHT_GRAY });
    }, []);
    const geomUp = useMemo(() => {
        return new CircleGeometry(0.415, 32, Math.PI / 4, Math.PI / 2);
    }, []);
    const geomRight = useMemo(() => {
        return new CircleGeometry(0.415, 32, Math.PI + 9.4 / 4, Math.PI / 2);
    }, []);
    const geomBottom = useMemo(() => {
        return new CircleGeometry(0.415, 32, Math.PI - 3.13 / 4, Math.PI / 2);
    }, []);
    const geomLeft = useMemo(() => {
        return new CircleGeometry(0.415, 32, Math.PI + 3.1 / 4, Math.PI / 2);
    }, []);
    const geomMiddle = useMemo(() => {
        return new CircleGeometry(0.13, 32);
    }, []);

    return (
        <>
            <mesh rotation={[0, Math.PI / 2, 0]} position={[0.14, -0.388, 0]}>
                <mesh
                    position={[0, 0, 0.0001]}
                    onClick={() => handlers.screenChange()}
                    geometry={geomUp}
                    material={matGray}
                />
                <mesh
                    position={[0, 0, 0.0001]}
                    onClick={() => handlers.listChange(1)}
                    geometry={geomRight}
                    material={matGray}
                />
                <mesh
                    position={[0, 0, 0.0001]}
                    onClick={() => handlers.listChange(-1)}
                    geometry={geomBottom}
                    material={matGray}
                />
                <mesh
                    position={[0, 0, 0.0001]}
                    onClick={() => {}}
                    geometry={geomLeft}
                    material={matGray}
                />
                <mesh
                    position={[0, 0, 0.0002]}
                    onClick={() => handlers.screenChange()}
                    geometry={geomMiddle}
                    material={matLightGray}
                />
            </mesh>
        </>
    );
};

export default Controls;
