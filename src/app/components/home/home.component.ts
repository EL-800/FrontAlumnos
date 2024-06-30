import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nodes : TreeNode[] = [

  ]
  
}
