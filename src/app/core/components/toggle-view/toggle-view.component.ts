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

  public switch(): void {
    this.isMenuToggle = !this.isMenuToggle;
    this.isMenuMode.emit(this.isMenuToggle);
  }
}
