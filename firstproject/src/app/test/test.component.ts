import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
  Inline template</div>
  <h2>{{"Hello"+parentData}}</h2>
  <h2>Welcome{{name}}</h2>
  <h2>Welcome{{2+2}}</h2>
  <h2>{{"welcome"+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <input type="text" value ="Nidhi"/>
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Nidhi"/>
  <input [(ngModel)]="name1" type="text">{{name1}}
  <div *ngIf="displayName;then thenBlock;else elseBlock;"></div>
  <ng-template #thenBlock>
  <h2>Codevolution</h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2>Hidden field</h2>
  </ng-template>
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picked red color</div>
  <div *ngSwitchCase="'blue'">You picked blue color</div>
  <div *ngSwitchCase="'green'">You picked green color</div>
  <div *ngSwitchDefault>Pick Again</div>
  </div>
  <div *ngFor="let color of colors;even as i">
  <h2>{{i}}{{color}}</h2>
  </div>
  `,
  styles: [`div{
    color:red;
  }`]
})
export class TestComponent implements OnInit {
  @Input()public parentData;

  public colors=["red","blue","green","yellow"];
  public displayName="true";
  public name1="";
  public name="codevolution";
  public myId="testId";
  public isDisabled=true;

  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello"+this.name ;
  }

}
