import { Component, OnInit , Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  componentId: any = '';
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  scrollToComponent(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
  }

  
  
}
