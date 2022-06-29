import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.theknot.com/tk-media/images/8d7f9239-ddb5-47e7-8c81-eb39283c8262~rs_768.h';
  image2 = 'https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}