/* eslint-disable max-len */
/* eslint-disable no-unused-vars 
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

const numbers = require('../src/numbers');

describe('Casos de testes para a função `numbers`', () => {
  it('Deve retornar true quando o array contém apenas números', () => {
    
        // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  it('Deve retornar false quando o array contém strings', () => {

        // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  });

  it('Deve retornar false quando o array contém elementos que não são números', () => {

        // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    expect(numbers([1, 'a', 3])).toBe(false);
  });

  it('Deve retornar false quando recebe um array vazio', () => {

        // Escreva um teste em que a função recebe [' '] e retorna false
    expect(numbers([' '])).toBe(false);
  });
});
