const state = {
  data: {
    score: {
      plyer: 0,
      computer: 0,
    },
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  subscribe(cb: (any) => { any }) {
    this.listeners.push(cb);
  },
};
export { state };
