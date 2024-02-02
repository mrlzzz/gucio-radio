import { Vector3 } from "@react-three/fiber";
import ScreenText from "./ScreenText";
import { shortenString } from "@/lib/utils";

type SongScreenTitleType = { titleText: string; subTitleText: string };

//position={[0.35, 0.02, -0.01]}
//rotation={[-Math.PI, Math.PI, 0]}
//size: 0.03
//height: 0.02
//color: black

const SongScreenTitle = ({ titleText, subTitleText }: SongScreenTitleType) => {
    const POSITION_TITLE: Vector3 = [0.009, -0.22, -0.01];
    const POSITION_SUB_TITLE: Vector3 = [0.009, -0.14, -0.01];
    const SIZE_SUB_TITLE: number = 0.022;

    const splitStringIfLong = (inputString: string) => {
        if (inputString.length <= 20) {
            return (
                <ScreenText
                    text={inputString}
                    position={POSITION_SUB_TITLE}
                    size={SIZE_SUB_TITLE}
                />
            );
        } else {
            const firstPart = inputString.substring(0, 20);
            const secondPart = inputString.substring(20);
            return [
                <ScreenText
                    key={0}
                    text={firstPart}
                    position={POSITION_SUB_TITLE}
                    size={SIZE_SUB_TITLE}
                />,
                <ScreenText
                    key={1}
                    text={secondPart}
                    position={[0.009, -0.09, -0.01]}
                    size={SIZE_SUB_TITLE}
                />,
            ];
        }
    };
    const subTitle = splitStringIfLong(subTitleText);
    const titleTextShorten = shortenString(titleText, 13);
    return (
        <>
            <ScreenText text={titleTextShorten} position={POSITION_TITLE} />
            {subTitle}
        </>
    );
};

export default SongScreenTitle;
