import { Component, OnInit } from '@angular/core';
import { CheService } from '../che.service';
import { Content } from '../models/content.model';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css']
})
export class ChemistryComponent implements OnInit {

  searchHere:string;

  chemistry:Content[]=[]

  constructor(private chem:CheService) { }

  ngOnInit(): void {
    this.chemistry=this.chem.getChemistrydata();
  }

}
