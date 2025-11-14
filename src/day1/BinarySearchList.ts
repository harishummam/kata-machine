export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2); // Gets the middle index
        const v = haystack[m]; // Gets the value of the middle index
        if (v === needle) {
            return true;
        } else if (needle < v) {
            hi = m;
        } else if (needle > v) {
            lo = m + 1;
        }
    }

    return false;
}
