import LottoGame from '../src/domain/LottoGame';

describe('LottoGame 생성 테스트', () => {
  test('구입 금액으로 8000원이 들어왔을 때 8장의 로또가 발행된다.', () => {
    const userBudget = 8000;
    const lottoGame = new LottoGame(userBudget);

    expect(lottoGame.getLottoTickets().length).toBe(8);
  });
});

describe('맞춘 개수와 보너스 번호 여부로 등수 이름을 가져온다.', () => {
  const lottoGame = new LottoGame(1000);

  test.each([
    [6, false, 'first'],
    [5, true, 'second'],
    [5, false, 'third'],
    [4, false, 'fourth'],
    [3, false, 'fifth'],
  ])(
    `%s개를 맞추고 보너스 번호 여부가 %s인 경우 등수 이름인 %s을 반환한다.`,
    (matchedNumberCount, hasBonusNumber, expected) => {
      expect(lottoGame.getLottoRankName(matchedNumberCount, hasBonusNumber)).toBe(expected);
    }
  );

  test.each([
    [0, false],
    [1, true],
    [2, false],
  ])('당첨 기준에 해당하지 않으면 undefined 반환한다.', (matchedNumberCount, hasBonusNumber) => {
    expect(lottoGame.getLottoRankName(matchedNumberCount, hasBonusNumber)).toBe(undefined);
  });
});

describe('당첨된 등수의 개수만큼 총 상금을 구한다.', () => {
  const lottoGame = new LottoGame(1000);

  test('3등이 1장, 5등이 2장 당첨될 경우 151만원을 반환한다.', () => {
    const lottoRanksResult = [0, 0, 0, 1, 0, 2];

    expect(lottoGame.calculateTotalPrize(lottoRanksResult)).toBe(1510000);
  });

  test('아무것도 당첨되지 않으면 0원을 반환한다.', () => {
    const lottoRanksCount = [0, 0, 0, 0, 0, 0];

    expect(lottoGame.calculateTotalPrize(lottoRanksCount)).toEqual(0);
  });
});

describe('로또 게임의 수익률을 계산한다.', () => {
  const lottoGame = new LottoGame(1000);

  test('구매금 1000원으로 10만원의 수익을 냈을 때 수익률은 10000%이다. ', () => {
    const totalPrize = 100000;

    expect(lottoGame.calculateProfitRate(totalPrize)).toEqual(10000.0);
  });

  test('구매금 1000원으로 수익을 내지 못했을 때 수익률은 0%이다. ', () => {
    const totalPrize = 0;

    expect(lottoGame.calculateProfitRate(totalPrize)).toEqual(0.0);
  });
});
