import{Component ,OnInit } from '@angular/core';
import{Model} from './ExamPack';
import{MyService} from './service';
import{Observable} from 'rxjs';
import {Http , Response} from '@angular/Http';
import 'rxjs/add/operator/map';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyService]
})
export class AppComponent implements OnInit {
  title = 'app';

  examdata:Model[];

  ngOnInit() {
    this.s.get().subscribe(t=>this.examdata=t);
  }
  constructor(private s:MyService)
  {
    
  }
  //saving data
  addDetail()
  {
    this.s.saveData(this.m).subscribe(yt=>console.log(yt));
  }


  m:Model;
  obj:Model[] = [];

 myData(test)
 {
   var sub:any[] = [];
   var id:any="";
   var ntest=test.value;
   var check = document.getElementsByName('chk[]');
   for(var i = 0 ; i<check.length; i++)
    {
      if((check[i]  as HTMLInputElement).checked)
        {
          sub.push((check[i] as HTMLInputElement).value);
        }
    }
   this.obj.push(new Model(this.class , test.value , sub,id));
   this.m=new Model(this.class , ntest , "math",id);
   console.log(this.m);
   this.addDetail();
   alert("Data Added"+test.value);
   localStorage.setItem("Exam Data",JSON.stringify(this.obj));
 }
 i:any=0;
 class;
 mydata2()
 {
    
 }

  getClass(s)
  {
    this.class = s;
  }

  //get Data
  mypack;
  shw = false;
  fetchData()
  {
    this.shw = true;
    var data = localStorage.getItem('Exam Data');
    this.mypack = JSON.parse(data);
  }

  getData()
  {

  }

}