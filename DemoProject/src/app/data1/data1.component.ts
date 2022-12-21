import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BharatService } from '../bharat.service';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component implements OnInit {
  form!: NgForm;
id:any;
Username:any;
value:any;
represent:any;

  constructor(private det:BharatService, 
    private http:HttpClient) { }
  

  
  ngOnInit() {



      

  }
  onSubmit(form:NgForm){
      console.log(form);
      console.log(form.value);  
    this.det.PostDet(form.value).subscribe((res)=>{
console.log(res);

    })
  }
  Ondelete(){
    this.det.RemoveDet(this.id).subscribe((res)=>{
      console.log(res);
      
    })
    
  }
Onpdate(){
var data={
  id:this.id,
  Username:this.Username
}
  
  this.det.UpdateDet(this.id, data).subscribe((res)=>{
console.log(res)



  })
}
}
