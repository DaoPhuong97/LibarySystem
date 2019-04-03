import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { User } from '../models/users.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    validUsername: String = "phuongdao";
    validPassword: String = "sam";
    //xem cach dat ten theo kieu camelCase nay nhe!
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                // ba chay cai code mau chua?, code mau down ve loi nhuwng ma ong keu lay code tren do
                //code nay hoi phuc tap qua nen bh co chay duoc thi ba cung khong hieu duoc dau P
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}