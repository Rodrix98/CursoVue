import { createStore } from 'vuex';

import requestModule from './modules/requests/index.js';
import coachesModules from './modules/coaches/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        coaches: coachesModules,
        requests: requestModule,
        auth: authModule
    },
});

export default store;