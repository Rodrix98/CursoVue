import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
    namespaced: true, //counter
    state() {
        return {
            counter: 0,

        }
    },
    getters: counterGetters,
    mutations: counterMutations,
    actions: counterActions,
}

