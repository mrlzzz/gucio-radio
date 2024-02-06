export function calculateTime(secs: number | undefined) {
    if (secs) {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }
    return "0";
}

export const shortenString = (inputString: string, stringLength: number) => {
    if (inputString.length > stringLength) {
        return inputString.slice(0, stringLength) + "…";
    } else {
        return inputString;
    }
};
