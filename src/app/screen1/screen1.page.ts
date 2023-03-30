import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.page.html',
  styleUrls: ['./screen1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Screen1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
