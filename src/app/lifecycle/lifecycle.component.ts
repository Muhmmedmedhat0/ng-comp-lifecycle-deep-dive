import { Component, Input, OnInit } from '@angular/core';
import { AfterViewInit, AfterViewChecked } from '@angular/core';
import { OnDestroy, SimpleChanges } from '@angular/core';
import { OnChanges, AfterContentChecked } from '@angular/core';
import { DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  // the standard Js constructor Runs when Angular instantiates the component.
  constructor() {
    console.log('CONSTRUCTOR');
  }
  // Runs once after Angular has initialized all the component's inputs.
  ngOnInit() {
    console.log('ngOnInit');
  }
  // Runs every time the component's inputs have changed.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // Runs every time this component is checked for changes.
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // Runs once after the component's content has been initialized.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // Runs every time this component content has been checked for changes.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // 	Runs once after the component's view has been initialized.
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // Runs every time the component's view has been checked for changes.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // Runs once before the component is destroyed.
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
