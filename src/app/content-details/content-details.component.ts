import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content.model';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent {

  

  constructor() { }

  @Input() contentObj:Content

  

}
