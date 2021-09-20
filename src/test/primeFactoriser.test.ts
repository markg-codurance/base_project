// Given any positive integer find the prime factors
// A prime is any integer that is divisible by itself and 1 only
// 1 is not a prime number

import {primeFactoriser} from "../main/primeFactoriser";

describe('When finding prime factors', () => {

    it.each([
        [[], 1],
        [[2], 2],
        [[3], 3],
        [[2, 2], 4],
        [[5], 5],
        [[2, 3], 6],
        [[7], 7],
        [[2, 2, 2], 8],
        [[3, 3], 9],
        [[5,5], 25]
    ])("should return %s for %s", (expected: number[], given: number) => {
        expect(primeFactoriser(given)).toEqual(expected);
    });

});
