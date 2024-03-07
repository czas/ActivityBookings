import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  author = {
    name: 'Carlos',
    url: 'https://github.com/czas',
  };

  year = '';

  constructor() {
    this.year = this.getYear().toLocaleString();
    this.author = { ...this.author, name: 'Carlos Zas' };
  }

  getYear() {
    return new Date().getFullYear();
  }

  onAcceptCookiesClick() {}
}
