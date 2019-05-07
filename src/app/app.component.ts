import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'itDro';
  itemsCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = this.db.collection('test');
  }


  ngOnInit(): void {
    this.itemsCollection.valueChanges().subscribe(data => console.log(data));
  }

}
