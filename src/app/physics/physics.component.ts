import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content.model';
import { PhyService } from '../phy.service';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.css']
})
export class PhysicsComponent implements OnInit {

  phy:Content[]=[]

  constructor(private ph:PhyService) { }

  ngOnInit(): void {


    this.phy = this.ph.getPhysicsData();
  }

}
