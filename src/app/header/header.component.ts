import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent
{
  isVisible: boolean = false;

  visibility()
  {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
