const { resta } = require("../../resta");

describe("Test about dummy function", () => {
    it("should return a + b number", () => {
        const result = resta(4, 3);
        expect(result).toBe(1);
    });
    
    it("should fail", () => {
        const numberA = 5;
        const numberB = 4;
        const result = resta(numberA, numberB);
        expect(result).not.toEqual(14);
    })
})
