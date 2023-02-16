const Console = require('../util/Console');

const InputView = {
  readUserBudget(callback) {
    Console.read('구입금액을 입력해 주세요.', callback);
  },

  readLottoWinningNumber(callback) {
    Console.read('당첨 번호를 입력해 주세요.', callback);
  },

  readLottoBonusNumber(callback) {
    Console.read('보너스 번호를 입력해 주세요.', callback);
  },
};