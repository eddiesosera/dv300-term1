import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() idPos: string | number = 0;
  @Input() width = 'max-content';
  @Input() label = 'Option';
  @Input() options = [
    {
      id: 0,
      label: 'Option 1',
      action: () => { alert(''); this.label = 'Option 1' }
    },
    {
      id: 1,
      label: 'Option 2',
      action: () => { alert(''); this.label = 'Option 2' }
    }
  ]
  isOpen = false;

  toggleDropdown(): void {
    if (this.isOpen === false) {
      this.isOpen = true;
    } else if (this.isOpen === true) {
      this.isOpen = false;
    }
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!event.target) return;
    const target = event.target as HTMLElement;
    if (!target.closest(`#dropdown${this.idPos}`)) {
      this.closeDropdown();
    }
  }
}
