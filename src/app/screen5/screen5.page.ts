import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.page.html',
  styleUrls: ['./screen5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Screen5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
