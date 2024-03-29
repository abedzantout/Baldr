/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule( {
  exports: [
    CommonModule,
    // TODO: probably we don't need FormsModule in SharedModule
    FormsModule,
    RouterModule,
  ],
} )
export class NgaSharedModule {
}
