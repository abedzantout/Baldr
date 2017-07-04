/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html'
})

export class SideNavComponent{
  private accordionClasses: any;

  constructor(){
    this.accordionClasses = [
      {name: 'collapseOne',classes: {'collapse': true, 'show': true} },
      {name: 'collapseTwo',classes: {'collapse': true, 'show': false} },
      {name: 'collapseThree',classes: {'collapse': true, 'show': false} }
    ]
  }

  openPanel(panel: string){

    this.accordionClasses.forEach((item) => {
      if(item.name == panel && item.classes.show == false){
        item.classes.show = true;
      }
      else{
        item.classes.show = false;
      }
    })

  }
}
