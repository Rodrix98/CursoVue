let timer;

export default {
    async signup(context, payload) {
        
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });

    },
    async login(context, payload) {
        
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });

    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');


        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            userId: null,
        })
    },
    async auth(context, payload) {
        
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD205lb3Da4zqIFQOdaNlB_a0X0T1SDfPA'

        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD205lb3Da4zqIFQOdaNlB_a0X0T1SDfPA';
        }

        const response = await fetch(url , {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to Authenticate');
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function() {
            context.dispatch('autoLogOut')
        }, expiresIn);


        // el nombre de las propertys de responseData aca abajo se sacan de la configuracion de Firebase.
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: expirationDate

        })

    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if(expiresIn < 0) {
            return;
        }

        setTimeout(function() {
            context.dispatch('autoLogOut');
        }, expiresIn);


        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }
    },
    autoLogOut(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout')
    }
}