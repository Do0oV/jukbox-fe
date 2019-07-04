import { throttle } from 'helpful-decorators';

export default class CareTaker {

  constructor (private store?: any) {
    if (store) this.persist(store);
  }

  public loadState(): any {
    const persistentState = this.retrieve();
    return persistentState
      ? JSON.parse(persistentState)
      : undefined;
  }

  private retrieve(): string | null {
    return localStorage.getItem('state');
  }

  public persist(store: any): void {
    this.store = store;
    this.store.subscribe(this.save);
  }

  @throttle(500) private save(): void {
    if (this.store) localStorage.setItem('state', JSON.stringify(this.store.getState()));
  }
}

// class Originator = Redux store

// class Memento = Redux state
