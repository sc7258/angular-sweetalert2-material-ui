import { Component } from '@angular/core';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular 6';

  onClick() {
    Swal.fire('', 'That thing is still around?');
  }
}
