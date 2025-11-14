export default function bubble_sort(arr: number[]): void {
    // Method 1: Tutorial

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    // Method 2: My Version

    // let j = arr.length - 1;

    // while (0 !== j) {
    //     for (let i = 0; i < j; i++) {
    //         if (arr[i + 1] < arr[i]) {
    //             let tmp = arr[i];
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = tmp;
    //         }
    //     }
    //     j -= 1;
    // }

    // Both methods pass the jest test
}
