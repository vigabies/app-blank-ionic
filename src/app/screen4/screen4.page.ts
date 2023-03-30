import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.page.html',
  styleUrls: ['./screen4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Screen4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
