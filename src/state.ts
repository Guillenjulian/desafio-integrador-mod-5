type jugada = "piedra" | "papel" | "tijera";
const state = {
  data: {
    currentGame: {
      cpuPlay: "",
      userPlay: "",
    },
    playHistory: {
      player: 0,
      cpu: 0,
      result: "",
    },
  },
  listeners: [],

  suscribe(callback: () => any) {
    this.listeners.push(callback);
  },
  init() {
    const localData: any = localStorage.getItem("Saved-play");
    this.setState(JSON.parse(localData) || this.data);
  },
  setState(newState: any) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }

    localStorage.setItem("Saved-play", JSON.stringify(this.data));
  },
  getState() {
    return this.data;
  },
  aleatoryPlayPc() {
    const moves = ["piedra", "papel", "tijera"];

    const aleatory = Math.floor(Math.random() * 3);
    return moves[aleatory];
  },

  setMove(move: jugada) {
    const currentState = this.getState();

    const gamePc = this.aleatoryPlayPc();

    currentState.currentGame.cpuPlay = gamePc;
    currentState.currentGame.userPlay = move;
    state.setState(currentState);
    this.whoWin(move, gamePc);
  },
  whoWin(userPlay: jugada, cpuPlay: jugada) {
    const jugadaGanada = [
      userPlay == "piedra" && cpuPlay == "tijera",
      userPlay == "papel" && cpuPlay == "piedra",
      userPlay == "tijera" && cpuPlay == "papel",
    ];
    if (jugadaGanada.includes(true)) {
      return this.pushHistory("Ganador");
    }
    const jugadaPerdida = [
      userPlay == "piedra" && cpuPlay == "papel",
      userPlay == "papel" && cpuPlay == "tijera",
      userPlay == "tijera" && cpuPlay == "piedra",
    ];
    if (jugadaPerdida.includes(true)) {
      return this.pushHistory("Perdedor");
    }
    const jugadaEmpatada = [
      userPlay == "piedra" && cpuPlay == "piedra",
      userPlay == "papel" && cpuPlay == "papel",
      userPlay == "tijera" && cpuPlay == "tijera",
    ];
    if (jugadaEmpatada.includes(true)) {
      return this.pushHistory("Empates");
    }
  },
  pushHistory(
    jugada: "Ganador" | "Perdedor" | "Empates",
    playerScore: number,
    cpuScore: number
  ) {
    const currentState = this.getState();
    playerScore = currentState.playHistory.player;
    cpuScore = currentState.playHistory.cpu;

    if (jugada == "Ganador") {
      this.setState({
        ...currentState,
        playHistory: {
          player: playerScore + 1,
          cpu: cpuScore,
          result: "Ganaste",
        },
      });
    }
    if (jugada == "Perdedor") {
      this.setState({
        ...currentState,
        playHistory: {
          player: playerScore,
          cpu: cpuScore + 1,
          result: "Perdiste",
        },
      });
    }
    if (jugada == "Empates") {
      this.setState({
        ...currentState,
        playHistory: {
          player: playerScore,
          cpu: cpuScore,
          result: "Empate",
        },
      });
    }
  },
};

export { state };
