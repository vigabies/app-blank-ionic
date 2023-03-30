import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.page.html',
  styleUrls: ['./screen3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Screen3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
