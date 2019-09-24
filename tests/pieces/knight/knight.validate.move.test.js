const COLORS = require('../../../util').COLORS;
const { Board } = require('../../../board');
const { Knight } = require('../../../pieces/knight');

/* disable eslint*/
describe('knight', () => {
  beforeAll(() => {

  });
  describe('validateMove', () => {
    describe('without piece at end', () => {
      it('should return "true" if knight start pos is "e4" and end pos is "f6" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f6';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "g5" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g5';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "g3" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'g3';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "f2" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'f2';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "d2" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'd2';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "c3" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'c3';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "c5" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'c5';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
      it('should return "true" if knight start pos is "e4" and end pos is "d6" without piece at end', () => { // eslint-disable-line max-len
        const start = 'e4';
        const end = 'd6';
        const board = new Board();
        const delta = board.calculateDelta(end, start);
        const knight = new Knight(start, COLORS.black);
        board.pieces[knight.pos] = knight;
        const result = knight.validateMove(
          delta, false, knight, board, start, end);
        expect(result).toBe(true);
      });
    });
    describe('with piece at end', () => {
      describe('same color', () => {
        it('should return "true" if knight start pos is "e4" and end pos is "f6" with piece of same color  at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.black);
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "g5" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g5';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.black);
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "g3" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g3';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "f2" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f2';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "d2" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd2';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "c3" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c3';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "c5" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c5';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
        it('should return "false" if knight start pos is "e4" and end pos is "d6" with piece of same color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.black);
          const result = knight.validateMove(
            delta, false, knight, board, start, end);
          expect(result).toBe(false);
        });
      });
      describe('another color', () => {
        it('should return "true" if knight start pos is "e4" and end pos is "f6" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "g5" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g5';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "g3" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'g3';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "f2" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'f2';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "d2" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd2';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "c3" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c3';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[end] = new Knight(start, COLORS.white);
          board.pieces[knight.pos] = knight;
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "c5" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'c5';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
        it('should return "true" if knight start pos is "e4" and end pos is "d6" with piece of another color at end', () => { // eslint-disable-line max-len
          const start = 'e4';
          const end = 'd6';
          const board = new Board();
          const delta = board.calculateDelta(end, start);
          const knight = new Knight(start, COLORS.black);
          board.pieces[knight.pos] = knight;
          board.pieces[end] = new Knight(start, COLORS.white);
          const result = knight.validateMove(
            delta, true, knight, board, start, end);
          expect(result).toBe(true);
        });
      });
    });
  });
});