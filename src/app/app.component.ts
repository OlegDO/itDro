import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // itemsCollection: AngularFirestoreCollection<any>;
  //
  // constructor(private db: AngularFirestore) {
  //   this.itemsCollection = this.db.collection('test');
  // }


  ngOnInit() {

    // this.itemsCollection.valueChanges().subscribe(data => console.log(data));
  }

}
