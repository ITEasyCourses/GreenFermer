import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleViewComponent {
  @Input() menu = false;
  @Input() grid = true;

  public clickMenu(): void {
    if (this.menu) {
      this.transfer();
    }
  }

  public clickGrid(): void {
    if (this.grid) {
      this.transfer();
    }
  }

  public transfer(): void {
    this.menu = !this.menu;
    this.grid = !this.grid;
  }
}
