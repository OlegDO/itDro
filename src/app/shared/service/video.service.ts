import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  generalReviewCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.generalReviewCollection = this.db.collection('videoReview');
  }

  postVideoReview(data: any) {
    return this.generalReviewCollection.add(data);
  }

  getVideoReview(data: any) {
    return this.db.collection('generalReview', (ref) => ref).valueChanges();
  }

  // removeReview(data: any) {
  //   return this.db.doc('generalReview').delete();
  // }
}
