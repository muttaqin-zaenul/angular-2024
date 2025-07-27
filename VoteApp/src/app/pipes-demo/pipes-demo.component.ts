import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  dataString = 'Hello, Angular Pipes!';
  dataNumber = 1234.56789;
  toDay = new Date();
  dataArray = ['Angular', 'React', 'Vue', 'Svelte'];
  kelas = [
    { nama: 'John', kelas: 'XII RPL 1'},
    { nama: 'Jane', kelas: 'XII RPL 2'},
    { nama: 'Doe', kelas: 'XII RPL 3'},
    { nama: 'Smith', kelas: 'XII RPL 4'},
    { nama: 'Alice', kelas: 'XII RPL 5'}
  ];
  lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  tanggalLahir = new Date(2000, 0, 1); // 1 Januari 2000
  title = 'Pipes Demo';

  @Input() searchSiswa = '';
}
