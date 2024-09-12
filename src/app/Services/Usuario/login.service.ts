import { Injectable  , EventEmitter   } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators'; // Importa el operador map
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  
  private baseUrl = environment.apiUrl;
  loginStatusChanged = new EventEmitter<boolean>();
  constructor(private httpClient: HttpClient,  private router: Router) { }

 

registrarUsuario(formData: FormData, ): Observable<any> {
  return this.httpClient.post(`${this.baseUrl}crearUsuario`, formData);
}


listarUsuarios(): Observable<any> {
  const url = `${this.baseUrl}listUsuarios`; 
  return this.httpClient.get<any>(url);
}

}
