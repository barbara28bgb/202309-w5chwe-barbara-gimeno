import World from "./world";

describe("Given the method initBoard in the class World", () => {
  describe("When it's calles with 4 and false ", () => {
    test("Then it should return and object with two propieties pointing to 4 and false", () => {
      const expectedLength = 4;
      const expectedBoolean = true;

      const board = new World();
      const values = board.initBoard(4, true);

      expect(values.length).toBe(expectedLength);
      expect(values[0][0].isAlive).toBe(expectedBoolean);
    });
  });
});
