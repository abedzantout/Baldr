/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector:'nga-number-input',
  template: `
    <ng-content></ng-content>
          <input type="number" [(ngModel)]="value">
    <div class="buttons-container">
      <span (click)='increaseValue()'><i class="icon ion-android-add"></i></span>
      <span (click)='decreaseValue()'><i class="icon ion-android-remove"></i></span>
    </div>

  `,
  styleUrls: ['./number-input.component.scss']
})

export class NgaNumberInputComponent{

  static readonly STATUS_DISABLED = 'disabled';

  status: string;
  value: number;
  weight: number;
  minimum: number;
  maximum: number;

  constructor(){
    this.status = 'enabled';
    this.value = 0;
    this.weight = 1;
    this.minimum = 0;
    this.maximum = 100;
  }

  increaseValue(){
    let temp = this.value + this.weight;
    if(temp > this.maximum){
      temp = this.maximum;
    }
    this.value = temp;
  }

  decreaseValue(){
    let temp = this.value - this.weight;
    if(temp < this.minimum){
      temp = this.minimum;
    }
    this.value = temp;
  }


  @HostBinding( 'class.enabled' )
  private get enabled() {
    return this.status !== NgaNumberInputComponent.STATUS_DISABLED;
  }

  @HostBinding( 'class.disabled' )
  private get disabled() {
    return this.status === NgaNumberInputComponent.STATUS_DISABLED;
  }

  @Input( 'status' )
  private set setStatus( val: string ) {
    this.status = val;
  }
  @Input( 'value' )
  private set setValue( val: number ) {
    this.value = val;
  }
  @Input( 'weight' )
  private set setWeight( val: number ) {
    this.weight = val;
  }
  @Input( 'min' )
  private set setMin( val: number ) {
    this.minimum = val;
  }
  @Input( 'max' )
  private set setMax( val: number ) {
    this.maximum = val;
  }
}
