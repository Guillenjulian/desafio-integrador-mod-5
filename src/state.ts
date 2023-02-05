import { type } from "os";

type jugada ="piedra" | "papel" | "tijera";
const state = {
  data: {
    currentGame:{
      cpuPlay:"",
      userPlay:"",
    },
    playHistory: {
      player: 0,
      cpu: 0,
      result:""
    },

  }
  init(){
    const localData = JSON.parse(localStorage.getItem("Saved-play")) as any;
    if(localData){
      return;
    }
      else{
        this.setState(this.data);
      }
  
    
  },
  setState(newState){
    this.data = newState;
    localStorage.setItem("Saved-play", JSON.stringify(this.data));
  },
  getState(){
    return this.data;
  },
  aleatoryPlayPc(){
    const moves = ["piedra", "papel", "tijera"];
    const aleatory = Math.floor(Math.random() * 3);
    return moves[aleatory];
  },
  
  addPlay(play: jugada){
    const currentState = this.getState();
    const cpuPlay = this.aleatoryPlayPc();
     currentState.current.userPlay = play;
      currentState.current.cpuPlay = cpuPlay;
      this.whoWin(play, cpuPlay);

  },
  whoWin(userPlay: jugada, cpuPlay: jugada){


    const jugadaGanada =[

    userPlay == "piedra" && cpuPlay == "tijera",
    userPlay == "papel" && cpuPlay == "piedra",
    userPlay == "tijera" && cpuPlay == "papel",

    ];
    if(jugadaGanada.includes(true)){
       return this.pushHistory("Ganaste");
    }
    const jugadaPerdida =[
      userPlay == "piedra" && cpuPlay == "papel",
      userPlay == "papel" && cpuPlay == "tijera",
      userPlay == "tijera" && cpuPlay == "piedra",
    ];
    if(jugadaPerdida.includes(true)){
      return this.pushHistory("Perdiste");
    }
    const jugadaEmpatada =[
      userPlay == "piedra" && cpuPlay == "piedra",
      userPlay == "papel" && cpuPlay == "papel",
      userPlay == "tijera" && cpuPlay == "tijera",
    ];
    if(jugadaEmpatada.includes(true)){
      return this.pushHistory("Empate");
    }

  },
  pushHistory(result: string){
    const currentState = this.getState();
    const playerScore = currentState.playHistory.player;
    const cpuScore = currentState.playHistory.cpu;


    if(result == "Ganaste"){
      this.setState({
        ...currentState,
        playHistory:{
          player : playerScore + 1,
          cpu: cpuScore,
          result: "Ganaste"
        }
      });
    }
    if(result == "Perdiste"){
      this.setState({
        ...currentState,
        playHistory:{
          player : playerScore,
          cpu: cpuScore + 1,
          result: "Perdiste"
        }
      });
    }
    if(result == "Empate"){
      this.setState({
        ...currentState,
        playHistory:{
          player : playerScore,
          cpu: cpuScore,
          result: "Empate"
        }
      });

  }

  }
};
export { state };
