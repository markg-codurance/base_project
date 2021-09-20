
export function primeFactoriser(input: number) : number[] {
    let result: number[] = [];

    if (input > 1) {
        while (input % 2 === 0) {
            result.push(2);
            input /= 2;
        }

        if (input > 1) result.push(input);
    }

    return result;
}
