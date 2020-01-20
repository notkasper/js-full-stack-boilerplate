import { observable, action } from "mobx";

class Store {
  @observable counter = 0;

  @action incrementCounter = () => (this.counter += 1);
}

const store = new Store();

export default store;
