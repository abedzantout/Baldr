/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import {
  AfterViewInit, Component, ComponentFactoryResolver, ElementRef, HostBinding, Input, OnDestroy, Renderer2, ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

import { convertToBoolProperty } from '../helpers';
import { NgaThemeService } from '../../services/theme.service';
import { NgaSpinnerService } from '../../services/spinner.service';

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset column section.
 */
@Component( {
  selector: 'nga-layout-column',
  template: `
    <ng-content></ng-content>
  `,
} )
export class NgaLayoutColumnComponent {
  
  @HostBinding( 'class.left' ) leftValue: boolean;
  
  @Input()
  set left( val: boolean ) {
    this.leftValue = convertToBoolProperty( val );
  }
}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset header section.
 */
@Component( {
  selector: 'nga-layout-header',
  template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
} )
export class NgaLayoutHeaderComponent {
  
  @HostBinding( 'class.fixed' ) fixedValue: boolean;
  
  @Input()
  set fixed( val: boolean ) {
    this.fixedValue = convertToBoolProperty( val );
  }
  
}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset footer section.
 */
@Component( {
  selector: 'nga-layout-footer',
  template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
} )
export class NgaLayoutFooterComponent {
  
  @HostBinding( 'class.fixed' ) fixedValue: boolean;
  
  @Input()
  set fixed( val: boolean ) {
    this.fixedValue = convertToBoolProperty( val );
  }
  
}

/**
 * A basic content container component
 *
 * While this component can be used alone, it also provides a number
 * of child components for common layout sections, including:
 * - nga-sidebar
 * - nga-layout-column
 * - nga-layout-content
 * - nga-layout-header
 * - nga-layout-footer
 */
@Component( {
  selector: 'nga-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
    <ng-template #layoutTopDynamicArea></ng-template>
    <div class="layout">
      <ng-content select="nga-layout-header"></ng-content>
      <div class="layout-container">
        <ng-content select="nga-sidebar"></ng-content>
        <ng-content select="nga-sidebar[left]"></ng-content>
        <div class="content" [class.center]="centerValue">
          <div class="columns">
            <ng-content select="nga-layout-column"></ng-content>
          </div>
          <ng-content select="nga-layout-footer"></ng-content>
        </div>
        <ng-content select="nga-sidebar[right]"></ng-content>
      </div>
    </div>
  `,
} )
export class NgaLayoutComponent implements OnDestroy, AfterViewInit {
  
  // TODO: can we remove this?
  @HostBinding( 'class.center' ) centerValue: boolean = false;
  
  @Input()
  set center( val: boolean ) {
    this.centerValue = convertToBoolProperty( val );
  }
  
  @ViewChild( 'layoutTopDynamicArea', { read: ViewContainerRef } ) veryTopRef: ViewContainerRef;
  
  protected afterViewInit$ = new BehaviorSubject( null );
  
  protected appendClassSubscription: Subscription;
  protected removeClassSubscription: Subscription;
  protected themeSubscription: Subscription;
  protected appendSubscription: Subscription;
  protected clearSubscription: Subscription;
  
  constructor( protected themeService: NgaThemeService,
               protected spinnerService: NgaSpinnerService,
               protected componentFactoryResolver: ComponentFactoryResolver,
               protected elementRef: ElementRef,
               protected renderer: Renderer2 ) {
    this.themeSubscription = this.themeService.onThemeChange().subscribe( ( theme ) => {
      
      if ( theme.previous ) {
        this.renderer.removeClass( this.elementRef.nativeElement, `nga-theme-${theme.previous}` );
      }
      this.renderer.addClass( this.elementRef.nativeElement, `nga-theme-${theme.name}` );
    } );
    
    this.appendClassSubscription = this.themeService.onAppendLayoutClass().subscribe( ( className ) => {
      this.renderer.addClass( this.elementRef.nativeElement, className );
    } );
    
    this.removeClassSubscription = this.themeService.onRemoveLayoutClass().subscribe( ( className ) => {
      this.renderer.removeClass( this.elementRef.nativeElement, className );
    } );
    
    this.spinnerService.registerLoader( new Promise( ( resolve, reject ) => {
      this.afterViewInit$.subscribe( ( _ ) => resolve() );
    } ) );
    this.spinnerService.load();
  }
  
  ngAfterViewInit(): void {
    this.appendSubscription = this.themeService.onAppendToTop()
                                  .subscribe( ( data: { component: any, listener: Subject<any> } ) => {
                                    const componentFactory = this.componentFactoryResolver.resolveComponentFactory( data.component );
                                    const componentRef     = this.veryTopRef.createComponent( componentFactory );
                                    data.listener.next( componentRef );
                                  } );
    
    this.clearSubscription = this.themeService.onClearLayoutTop()
                                 .subscribe( ( data: { listener: Subject<any> } ) => {
                                   this.veryTopRef.clear();
                                   data.listener.next( true );
                                 } );
    
    this.afterViewInit$.next( true );
  }
  
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.appendClassSubscription.unsubscribe();
    this.removeClassSubscription.unsubscribe();
    this.appendSubscription.unsubscribe();
    this.clearSubscription.unsubscribe();
  }
}
