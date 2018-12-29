import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs';
//import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

import { User } from './user';
import { ReviewResult } from './user';

@Injectable()
export class UserService {
    public user: User;
    public res: ReviewResult;


    constructor(private http: Http ) {
        this.user = new User({firstname: "Udo", lastname: "Unbekannt"});
        console.log("Constructor UserService:", this.user);
        if( this.user.reload ) {
            this.loadUser(this.user.getUserToken());
        }
    }

    public loadUser(token: string) {
        this.http
            .get("/api/0.0.1/user/get", {params:{UserToken: token}}).pipe(
            map((response: Response) => response.json()))
            
            .subscribe(this.user);
        
            console.log("Global user Object:", this.user);
            return this.user;
                //return list;
//        console.log("New User", this.users$); 
    }

    public create(user: User) {
        this.http.put("/api/0.0.1/user/create", User)
            .forEach((response: Response) => {
                console.log(response);
                // this.loadUser();
            })
    }
    public getUserCount(): any {
        console.log("getUserCount: ", this.user);
        
        return this.user;
    }
    public getCurrentUser() : User {
        return this.user;
    }
    public isAuthenticated() {
        return this.isAuthenticated;
    }
    
    public getResult(rid: string) : ReviewResult {
        ////////////////////////
        // old result
        // this review not done
        // never done a review
        ////////////////////////
        this.res = new ReviewResult;
        
        if(this.user.masteries!=undefined) {
            var n: number = -1;
            do { 
               n++;
            } while(n<this.user.masteries.length && rid!=this.user.masteries[n]['_id']);
//            console.log("getResult:", n, this.user.masteries.length);
            if(n>=this.user.masteries.length) {
                console.log("getResult: not done this review yet", n, rid);
            } else {
                console.log("getResult:", rid, n, this.user.masteries[n]['_id']);
            }
        } else {
            console.log("getResult: first review ever");
        }
        return this.res;
    }
}