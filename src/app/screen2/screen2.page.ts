import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.page.html',
  styleUrls: ['./screen2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Screen2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
