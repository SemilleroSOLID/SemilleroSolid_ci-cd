const { division } = require("../../division");

describe("Test about dummy function", () => {
    it("should return a / b number", () => {
        const result = division(12, 3);
        expect(result).toBe(4);
    });
    
    it("should fail", () => {
        const numberA = 4;
        const numberB = 2;
        const result = division(numberA, numberB);
        expect(result).not.toEqual(40);
    })
})