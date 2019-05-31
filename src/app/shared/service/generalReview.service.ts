import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class generalReviewService {
  generalReviewCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.generalReviewCollection = this.db.collection('generalReview');
  }

  postGeneralReview(data: any) {
    return this.generalReviewCollection.add(data);
  }

  getGeneralReview(data: any) {
    return this.db.collection('generalReview', (ref) => ref).valueChanges();
  }

  removeReview(data: any) {
    return this.db.doc('generalReview').delete();
  }
}
