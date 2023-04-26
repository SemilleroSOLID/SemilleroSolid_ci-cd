const { sumar } = require('../../sumar')

describe('Pre-commit hook', () => {
    it('La función sumar debe devolver 11', () => {
      const resultado = sumar(5, 7);
      expect(resultado).toBe(12);
    });
  });

  