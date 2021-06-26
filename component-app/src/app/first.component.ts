import { Component } from "@angular/core";
@Component({
    selector : "sreenu-technologies",
    templateUrl : "./first.component.html"
})
export class firstComponent{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
    constructor(){
        this.sub_one  = "Angular12";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    } 
    public frontEnd():string{
        return this.sub_one;
    } 
    public backend():string{
        return this.sub_two;
    } 
    public dbFun():string{
        return this.sub_three;
    }
};