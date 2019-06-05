import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Review} from '../models/review';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class ReviewService {
  reviewCollection: AngularFirestoreCollection<Review>;
  constructor(private db: AngularFirestore) {
    this.reviewCollection = this.db.collection('reviews');
  }
  getReview(data: any): Observable<any[]> {
    return this.db.collection('reviews', ref => ref.limit(5)).valueChanges();
  }
  getMoreReviews(data: any, limit: number): Observable<any[]> {
    return this.db.collection('reviews', ref => ref.limit(limit)).valueChanges();
  }
  addReview(review: Review) {
    return this.reviewCollection.add(review);
  }
  getAllUserReviews(userId: string): Observable<any[]> {
    return this.db.collection('reviews', ref => ref.where('userId', '==', userId))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Review;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
      );
  }
}
