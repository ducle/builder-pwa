import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2/database-deprecated';

@Injectable()
export class CardService {
  private dbPath = 'Cards';
  card: FirebaseObjectObservable<any> = null;
  cards: FirebaseListObservable<any[]> = null;
  constructor(private db: AngularFireDatabase) {}

  getCard(key): FirebaseObjectObservable<any> {
    this.card = this.db.object(`${this.dbPath}/${key}`);
    return this.card;
  }
  getCards(): FirebaseListObservable<any[]> {
    this.cards = this.db.list(this.dbPath);
    return this.cards;
  }
}
