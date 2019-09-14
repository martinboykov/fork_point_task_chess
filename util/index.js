const TYPES = {
  king: 'k',
  queen: 'q',
  rook: 'r',
  bishop: 'b',
  knight: 'n',
  pawn: 'p',
};

const COLORS = {
  white: true,
  black: false,
};

const PLAY_ORDER = {
  white: true,
  black: false,
};

const MOVEMENT_PATTERNS = {
  up: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
  down: [[0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7]],
  left: [[-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]],
  right: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]],
  diag: {
    up_left: [[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7]],
    up_right: [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    down_left: [[-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]],
    down_right: [[-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7]],
  },
};

const STATE = {
  regular: 0,
  check: 1,
  checkmate: 2,
};

module.exports = {
  TYPES,
  COLORS,
  MOVEMENT_PATTERNS,
  STATE,
};
