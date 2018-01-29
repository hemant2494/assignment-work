import { Component, OnInit } from '@angular/core';
import {IExamPack} from './exam';
import {ExamService} from './examService';
import {HttpModule , Response} from '@angular/http';

@Component({
  selector: 'app-exam-pack-listing',
  templateUrl: './exam-pack-listing.component.html',
  styleUrls: ['./exam-pack-listing.component.css'],
  providers:[ExamService]
})
export class ExamPackListingComponent implements OnInit {

  imodel:IExamPack[];
  constructor(private _modeldata: ExamService) { }
  
    ngOnInit():void {
      
      
          this._modeldata.getModel()
          .subscribe(iEmpData1=>{
              this.imodel=iEmpData1;
          })
        }
      
      }
  
    


