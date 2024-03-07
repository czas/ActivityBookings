import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  author = {
    name: 'Carlos Zas',
    url: 'https://github.com/czas',
  };

  year = '';

  constructor() {
    console.log('construir footer');
    this.year = this.getYear().toLocaleString();
  }

  getYear() {
    console.log('calculando año');
    return new Date().getFullYear();
  }

  onAcceptCookiesClick() {
    console.log('cookies accepted');
  }
}
