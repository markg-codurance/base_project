// Given any positive integer find the prime factors
// A prime is any integer that is divisible by itself and 1 only
// 1 is not a prime number

import {primeFactoriser} from "../main/primeFactoriser";

describe('When finding prime factors', () => {

    it("should return an empty list for 1", () => {
        expect(primeFactoriser(1)).toEqual([]);
    } );

    it ("should return 2 for 2", () => {
        expect(primeFactoriser(2)).toEqual([2]);
    });

    it ("should return 3 for 3", () => {
        expect(primeFactoriser(3)).toEqual([3]);
    });

});
