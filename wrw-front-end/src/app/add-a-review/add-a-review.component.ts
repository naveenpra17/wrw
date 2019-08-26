import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-a-review',
  templateUrl: './add-a-review.component.html'
  ,
  styleUrls: ['./add-a-review.component.css']
})
export class AddAReviewComponent implements OnInit {

  public description = '';
  public text1 = ' ';
  constructor() { }

  ngOnInit() {
  }

}
