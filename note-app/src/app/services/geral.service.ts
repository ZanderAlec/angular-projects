import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(private router: Router) { }

  goToHome(){
    this.router.navigate(['/']);
  }
}
