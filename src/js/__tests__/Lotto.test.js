import { LOTTO_SETTING } from '../constants/setting';
import Lotto from '../models/Lotto';

describe('로또 번호 입력 테스트', () => {
  it('로또 번호는 중복된 숫자들을 가질 수 없다.', () => {
    const duplicatedNumber = 1;
    const lotto = new Lotto();

    lotto.pushNumberIntoPickedNumber(duplicatedNumber);
    lotto.pushNumberIntoPickedNumber(duplicatedNumber);

    expect(lotto.pickedNumber).toHaveLength(1);
  });

  it('로또 번호는 숫자 6개를 초과할 수 없다.', () => {
    const testNumber = [1, 2, 3, 4, 5, 6, 7];
    const lotto = new Lotto();

    testNumber.forEach((v) => lotto.pushNumberIntoPickedNumber(v));
    expect(lotto.pickedNumber).toContain(1, 2, 3, 4, 5, 6);
  });
});

describe('로또 번호 생성 후 유효성 테스트', () => {
  it('로또 번호를 자동으로 생성할 시 숫자 6개를 가져야 한다.', () => {
    const lotto = new Lotto();
    lotto.generateNumberList();

    expect(lotto.pickedNumber.length).toBe(6);
  });

  it('로또 번호를 자동으로 생성할 시 1 ~ 45 사이의 숫자만 생성되어야 한다.', () => {
    const lotto = new Lotto();
    lotto.generateNumberList();

    lotto.pickedNumber.forEach((number) => {
      expect(typeof number).toEqual('number');
      expect(number).toBeGreaterThanOrEqual(LOTTO_SETTING.MIN_RANDOM_NUMBER);
      expect(number).toBeLessThanOrEqual(LOTTO_SETTING.MAX_RANDOM_NUMBER);
    });
  });
});