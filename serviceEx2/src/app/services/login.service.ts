import { Injectable } from "@angular/core";
@Injectable({
    providedIn : "root"
})
export class loginService{
    public login_fn(obj:any):any{
        if(obj.uname === "sreenu_tech" && obj.upwd === "sreenu_tech"){
            return {"login":"success"};
        }else{
            return {"login":"fail"};
        }
    }
};