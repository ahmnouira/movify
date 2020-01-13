import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


  query: string;


  submit(event: any): void {
    event.preventDefault();
    this.router.navigate(['/movies'], {
      queryParams: {
        q: this.query
      }
    });
  }

  ngOnInit() {

  }


}
