import Vue from 'vue'

class LowBStore {
  constructor (options) {
    this.state = options.state
    this.mutations = options.mutations
    this.actions = options.actions
    // 借用vue本身的数据响应式机制
    this.vm = new Vue({
      data: {
        state: this.state
      }
    })
  }
  commit (type, payload) {
    const mutation = this.mutations[type]
    mutation(this.state, payload)
  }
  dispatch (type, payload) {
    const action = this.actions[type]
    const ctx = {
      commit: this.commit,
      state: this.state,
      dispatch: this.dispatch
    }
    return action(ctx, payload)
  }
}

export default new LowBStore({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
