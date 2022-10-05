import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'green-fermer';

  public city!: string;

  ngOnInit(): void {

  }

  catch(value: any) {
    this.city = value
    console.log(this.city);
  }
}
