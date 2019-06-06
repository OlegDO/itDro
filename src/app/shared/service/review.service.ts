import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Review} from '../models/review';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class ReviewService {
  reviewCollection: AngularFirestoreCollection<Review>;
  reviewDoc: AngularFirestoreDocument<Review>;
  items: any;
  constructor(private db: AngularFirestore) {
    this.reviewCollection = this.db.collection<Review>('review');
    this.items = this.db.collection('review', ref => ref)
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
  getReview(): Observable<any[]> {
    return this.items;
  }
  getMoreReviews(data: any, limit: number): Observable<any[]> {
    return this.db.collection('review', ref => ref.limit(limit)).valueChanges();
  }
  addReview(review: Review) {
    return this.reviewCollection.add(review);
  }
  removeReview(review: Review) {
    this.reviewDoc = this.db.doc(`review/${review.id}`);
    console.log(this.reviewDoc)
    return this.reviewDoc.delete();
  }
}
