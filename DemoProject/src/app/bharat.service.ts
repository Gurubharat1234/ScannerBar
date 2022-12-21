
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BharatService {

  constructor(private http:HttpClient) { }
  getDa(){
    return this.http.get<any>("http://localhost:3000/Data");
  }
  PostDet(represent:any){
    return this.http.post<any>("http://localhost:3000/Data",represent)
  }
RemoveDet(id:any){
  return this.http.delete<any>(`http://localhost:3000/Data/${id}`);
}
UpdateDet(id:any, value:any){
  return this.http.put<any>(`http://localhost:3000/Data/${id}`,value)
}
}
