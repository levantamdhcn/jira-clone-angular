import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html'
})
export class ResizerComponent implements OnInit {
  @Input() expand: boolean = false;

  getIcon() {
    return this.expand ? 'chevron-left' : 'chevron-right';
  }

  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      console.log(e);
      this.expand = e.matches;
    });
  }

  ngOnInit(): void {}
}
