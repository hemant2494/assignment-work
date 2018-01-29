import {Injectable} from '@angular/core';
import {Http , Response} from  '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IExamPack}  from './exam';

@Injectable()
export class ExamService{
    private _modelUrl="http://localhost:8080/list";

    constructor(private _http:Http){

    }

    getModel():Observable<IExamPack[]>{
        return this._http.get(this._modelUrl)
        .map((response:Response) =><IExamPack[]>response.json())
        .do(data =>console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error());
    }
}
