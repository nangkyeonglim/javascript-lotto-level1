const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
  PRICE: 1_000,
};

const GAME_COMMAND = {
  YES: 'y',
  NO: 'n',
};

const LOTTO_RANK = {
  FIRST: {
    NAME: 'first',
    PRIZE: 2_000_000_000,
    MATCHED_NUMBER_COUNT: 6,
  },
  SECOND: {
    NAME: 'second',
    PRIZE: 30_000_000,
    MATCHED_NUMBER_COUNT: 5,
  },
  THIRD: {
    NAME: 'third',
    PRIZE: 1_500_000,
    MATCHED_NUMBER_COUNT: 5,
  },
  FOURTH: {
    NAME: 'fourth',
    PRIZE: 50_000,
    MATCHED_NUMBER_COUNT: 4,
  },
  FIFTH: {
    NAME: 'fifth',
    PRIZE: 5_000,
    MATCHED_NUMBER_COUNT: 3,
  },
};

const RANK_NAME = {
  [LOTTO_RANK.FIRST.MATCHED_NUMBER_COUNT]: LOTTO_RANK.FIRST.NAME,
  [LOTTO_RANK.THIRD.MATCHED_NUMBER_COUNT]: LOTTO_RANK.THIRD.NAME,
  [LOTTO_RANK.FOURTH.MATCHED_NUMBER_COUNT]: LOTTO_RANK.FOURTH.NAME,
  [LOTTO_RANK.FIFTH.MATCHED_NUMBER_COUNT]: LOTTO_RANK.FIFTH.NAME,
};

module.exports = {
  LOTTO,
  GAME_COMMAND,
  LOTTO_RANK,
};
