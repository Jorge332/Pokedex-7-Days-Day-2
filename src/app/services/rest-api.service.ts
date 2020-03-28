import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Pokemon, MyResponse } from "../interfaces";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestApiService {
  baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<MyResponse> {
    return this.http
      .get<MyResponse>(this.baseUrl)
      .pipe(
        catchError(
          this.handleError<MyResponse>("Get Pokemons", null as MyResponse)
        )
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console
      return of(result as T);
    };
  }
}
