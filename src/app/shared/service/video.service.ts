import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {VideoReview} from '../models/videoReview';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videoReviewCollection: AngularFirestoreCollection<VideoReview>;
  videoDoc: AngularFirestoreDocument<VideoReview>;
  items: any;
  constructor(private db: AngularFirestore) {
    this.videoReviewCollection = this.db.collection<VideoReview>('videoReview');
  }
  getVideoReview(): Observable<any[]> {
    this.items = this.db.collection('videoReview', ref => ref)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as VideoReview;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
      );
    return this.items;
  }
  getMoreVideoReviews(data: any, limit: number): Observable<any[]> {
    return this.db.collection('videoReview', ref => ref.limit(limit)).valueChanges();
  }
  addVideoReview(videoReview: VideoReview) {
    return this.videoReviewCollection.add(videoReview);
  }
  removeVideoReview(videoReview: VideoReview) {
    // @ts-ignore
    this.videoDoc = this.db.doc(`videoReview/${videoReview.id}`);
    return this.videoDoc.delete();
  }
}
