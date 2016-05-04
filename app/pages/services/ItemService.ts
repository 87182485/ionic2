import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

//import {  }
@Injectable()
export class ItemService{
    private _productUrl = 'items.json';
    
    constructor(private _http: Http){ }
    
    getItems() : Observable<any>{
        return this._http.get(this._productUrl)
        .map((response: Response) => <any[]> response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
}