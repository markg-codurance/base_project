export function primeFactoriser(input: number) : number[] {

    let result: number[] = [];

    let divisor = 2;
    
    while (input > 1) {

        while (input % divisor === 0) {
            result.push(divisor);
            input /= divisor;
        }

        divisor++;

    }

    return result;

}
