import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/location/location.html'
})
export class LocationPage{
    item: any;
    
    constructor(private nav: NavController, private params: NavParams){
        this.item = params.get('item');
        
        console.log(this.item);
    }
}