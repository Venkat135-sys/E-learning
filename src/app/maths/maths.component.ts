import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';
import { Content } from '../models/content.model';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {

  searchTerm:string;


  math:Content[]=[]

  constructor(private ms:MathService) { }

  ngOnInit(): void {

    this.math=this.ms.getMathData();
  }

}
