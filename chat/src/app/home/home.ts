import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from './services/home-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly _homeService = inject(HomeService);
  usuarios: any[] = [];

  ngOnInit(): void {
    this._homeService.getUsuarios().subscribe((data) => {
      console.log('USUÁRIOS:', data);
      this.usuarios = data;
    });
  }
}
