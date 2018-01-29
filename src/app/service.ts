import{Http , Response ,RequestOptions ,Headers} from '@angular/http';
import{Observable} from 'rxjs';
import{Model} from './ExamPack';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import{Injectable} from '@angular/core'
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MyService 
{
    private myUrl = "http://localhost:2207/save";
    private fetchUrl = "http://localhost:2207/fetch";
    constructor(private _http : Http)
    {
    
    }

    saveData(m:Model):Observable<Model>
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.myUrl , JSON.stringify(m) , options).map(this.extractData)
                .catch(this.handleErrorObservable);
    } 
    
    private extractData(res: Response) {
        return res.text() ? res.json() : {}; 
        }

        private handleErrorObservable (error: Response | any) {
            console.error(error.message || error);
            return Observable.throw(error.message || error);
            }


    //get Data from database
    get():Observable<Model[]>
    {
        return this._http.get(this.fetchUrl).map((response :Response) => <Model[]> response.json());
    }
}