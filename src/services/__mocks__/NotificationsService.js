let count = 0;

export default {
  __setCount(count) {
    count = count;
  },
  async GetNotifications() {
    console.warn('GOOD JOB! USING MOCK SERVICE!');
    return { count };
  }
}