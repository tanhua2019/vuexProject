export default {
  addNum({commit,state}, id) {
    commit('ANSWER',id);
    if(state.topic<state.itemDetail.length) {
      commit('ADD',1)
    }
  },
  initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	}
}
