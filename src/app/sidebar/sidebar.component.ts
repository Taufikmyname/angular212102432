import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() moduleName: string = '';

  constructor(private router: Router) {}

  signOut(): void {
    sessionStorage.clear();

    console.log('Session data berhasil dihapus');

    this.router.navigate(['/login']);
  }
}
