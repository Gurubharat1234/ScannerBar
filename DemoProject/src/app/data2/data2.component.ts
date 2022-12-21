import { Component, OnInit } from '@angular/core';
import { BharatService } from '../bharat.service';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component implements OnInit {

  constructor(private det:BharatService) {
    this.det.getDa().subscribe((res)=>{
      // console.log(res);
      this.Details=res
      console.log(this.Details);
      
  });
   }
  Details:any
  ngOnInit(): void {
    
}

}
