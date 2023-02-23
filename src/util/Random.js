const Random = {
  getNumberInRange(start, end) {
    return Math.floor(Math.random() * (end + 1 - start)) + start;
  },
};

export default Random;
