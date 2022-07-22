import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Pastor Doug, Hey everyone! Don’t forget to wear your new Shirts tomorrow!', cols: 2, rows: 2, color: 'white'},
    {text: 'Lucas Q.Volunteers Needed! Please consider volunteering to help with a club this summer. You can email me for more information about getting involved', cols: 2, rows: 2, color: 'white'},
    {text: 'Hannah B. 5-Day Club Invitations are printed and in the office. Stop by and grab a stack!', cols: 2, rows: 2, color: 'white'},
    {text: 'Pastor Doug Please keep Lisa M. in your prayers as she is going into surgery this morning to have the cancer removed from her neck. She will be in recovery for several weeks and her family will need support through this time so be sure to let them know you are thinking of them and consider signing up to provide a meal for them.', cols: 2, rows: 2, color: 'white'},
    {text: 'Pastor Doug Please keep Lisa M. in your prayers as she is going into surgery this morning to have the cancer removed from her neck. She will be in recovery for several weeks and her family will need support through this time so be sure to let them know you are thinking of them and consider signing up to provide a meal for them.', cols: 2, rows: 2, color: 'white'},
    {text: 'Pastor Doug Please keep Lisa M. in your prayers as she is going into surgery this morning to have the cancer removed from her neck. She will be in recovery for several weeks and her family will need support through this time so be sure to let them know you are thinking of them and consider signing up to provide a meal for them.', cols: 2, rows: 2, color: 'white'},
    {text: 'Pastor Doug Please keep Lisa M. in your prayers as she is going into surgery this morning to have the cancer removed from her neck. She will be in recovery for several weeks and her family will need support through this time so be sure to let them know you are thinking of them and consider signing up to provide a meal for them.', cols: 2, rows: 2, color: 'white'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
