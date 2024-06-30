import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-spinner-loading',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './spinner-loading.component.html',
  styleUrl: './spinner-loading.component.css'
})
export class SpinnerLoadingComponent {
}
