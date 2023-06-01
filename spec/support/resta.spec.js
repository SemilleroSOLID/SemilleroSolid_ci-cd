const { resta } = require("../../resta");

describe("Test about dummy function", () => {
    it("should return a - b number", () => {
        const result = resta(4, 3);
        expect(result).toBe(1);
    });
    
    it("should fail", () => {
        const numberA = 8;
        const numberB = 2;
        const result = resta(numberA, numberB);
        expect(result).not.toEqual(14);
    })
})
