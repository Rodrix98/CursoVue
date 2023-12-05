
function obtenerValorAleatorio(min, max){
    // Elige un numero aleatorio entre 12 y 5 y tambien lo redondea
    // a un numero sin decimales
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data(){
        return {

            vidaJugador: 100,
            vidaMonster: 100,
            rondaActual: 0,
            ganador: null,
            acciones: []
        }
    },
    computed: {
        estilosBarraMonster() {
            if (this.vidaMonster < 0) {
                return{ width: '0%' }
            }
            return {width: this.vidaMonster + '%'};
        },
        estilosBarraJugador() {
            if (this.vidaJugador < 0) {
                return{ width: '0%' }
            }
            return {width: this.vidaJugador + '%'};
        },
        cooldownAtaqueEspecial() {
            return this.rondaActual % 3 !== 0
        }
    },
    watch: {
        vidaJugador(value){
            if (value <= 0 && this.vidaMonster <= 0) {
                //Empate
                this.ganador = 'draw'
            } else if (value <= 0) {
                // jugador pierde
                this.ganador = 'monster'
            }
        },
        vidaMonster(value){
            if (value <= 0 && this.vidaJugador <= 0) {
                //draw
                this.ganador = 'draw'
            } else if (value <= 0 ) {
                // player wins
                this.ganador = 'player'
            }
        }
    },
    methods: {
        startGame(){
            this.vidaJugador = 100;
            this.vidaMonster = 100;
            this.ganador = null;
            this.rondaActual = 0;
            this.acciones = []
        },
        ataqueMonster(){
            this.rondaActual++;
            const valorAtaque = obtenerValorAleatorio(5, 12) 
            this.vidaMonster -= valorAtaque;
            this.registroAcciones('Jugador', 'Ataque', valorAtaque)
            this.ataqueJugador();
        },
        ataqueJugador(){
            const valorAtaque = obtenerValorAleatorio(8, 15) 
            this.vidaJugador -= valorAtaque;
            this.registroAcciones('Monstruo', 'Ataque', valorAtaque)
        },
        ataqueEspecial(){
            this.rondaActual++
            const valorAtaque = obtenerValorAleatorio(10, 25)
            this.vidaMonster -= valorAtaque;
            this.registroAcciones('Jugador', 'Ataque especial', valorAtaque)
            this.ataqueJugador();
        },
        curarJugador(){
            this.rondaActual++;
            const valorCuracion = obtenerValorAleatorio(8, 20)
            if (this.vidaJugador + valorCuracion > 100) {
                this.vidaJugador = 100
            } else {
                this.vidaJugador += valorCuracion;
            }

            this.registroAcciones('Jugador', 'Curacion', valorCuracion)
            this.ataqueJugador();
        },
        rendirse(){
            this.ganador = 'monster';
        },
        registroAcciones(who, what, value){
            this.acciones.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
        
    }
}).mount('#game')
