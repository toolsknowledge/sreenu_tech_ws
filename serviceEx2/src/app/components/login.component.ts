import { Component } from "@angular/core";
import { loginService } from "../services/login.service";
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})
export class loginComponent{
    public result:any;
    public login_details:any = {"uname":"","upwd":""}
    constructor(private obj:loginService){}
    public login():any{
        this.result = this.obj.login_fn(this.login_details);
    }
}

