import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public btninvsvcs : boolean; public iconinvsvcs : number;
  public btngpworkflow : boolean; public icongpworkflow : number;
  public btngpexception : boolean; public icongpexception : number;
  public btnmetricsdata : boolean; public iconmetricsdata : number;
  public btnqcdata : boolean; public iconqcdata : number;

  @ViewChild('btn_refresh', {static: false}) btnRefresh: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.btninvsvcs=true; this.iconinvsvcs=0;
    this.btngpworkflow = true;  this.icongpworkflow = 0;
    this.btngpexception = true;  this.icongpexception = 0;
    this.btnmetricsdata = true; this.iconmetricsdata =0;
    this.btnqcdata = true; this.iconqcdata =0;
  }

  public onRefresh():void{
    this.btninvsvcs=false; this.iconinvsvcs=-1;
    this.btngpworkflow = true;  this.icongpworkflow =1;
    this.btngpexception = true;  this.icongpexception = 1;
    this.btnmetricsdata = true; this.iconmetricsdata =1;
    this.btnqcdata = false; this.iconqcdata = -1;
  }

}
