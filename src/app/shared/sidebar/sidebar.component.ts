import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  logoutForm!: FormGroup;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {

    Swal.fire({
      title: 'Cerrando sesion, por favor aguarde!',
      timer: 1000,

      didOpen: () => {
        Swal.showLoading()

      },

    });
    this.authService.logout().then(() => {

      this.router.navigate(['/login']);
    })

  }
}
