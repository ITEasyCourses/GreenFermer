import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleViewComponent {
  @Output() isMenuMode: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isMenuToggle = true;
  public isGridToggle = false;

  public clickMenu(): void {
    if (!this.isMenuToggle) {
      this.transfer();
    }
  }

  public clickGrid(): void {
    if (!this.isGridToggle) {
      this.transfer();
    }
  }

  public transfer(): void {
    this.isGridToggle = !this.isGridToggle;
    this.isMenuToggle = !this.isMenuToggle;
    this.isMenuMode.emit(this.isMenuToggle);
  }
}
