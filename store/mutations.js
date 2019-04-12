const ADD = 'ADD'
const ANSWER = 'ANSWER'
const TIME = 'TIME'

export default {
  [ADD](state, num) {
    state.topic += num;
  },
  [ANSWER](state, id) {
    state.answerid.push(id);
  },
  [TIME](state) {
    state.timer = setInterval(() => {
      state.time++
    }, 1000);
  }
}
