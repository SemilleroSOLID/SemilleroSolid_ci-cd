const { multiplicacion } = require("../../multipicacion");

describe("Test about dummy function", () => {
    it("should return a * b number", () => {
        const result = multiplicacion(4, 3);
        expect(result).toBe(12);
    });
    
    it("should fail", () => {
        const numberA = 5;
        const numberB = 6;
        const result = multiplicacion(numberA, numberB);
        expect(result).not.toEqual(40);
    })
})