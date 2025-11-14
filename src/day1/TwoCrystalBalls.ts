export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    while (i < i + jmpAmount && i + jmpAmount < breaks.length) {
        if (breaks[i]) {
            return i;
        }
        i += 1;
    }

    return -1;
}
