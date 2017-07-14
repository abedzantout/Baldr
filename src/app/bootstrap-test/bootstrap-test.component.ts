/**
 * @license
 * Copyright Protected MonopolyKings. All Rights Reserved.
 * Distribution or making any copies of this software or documentation is prohibited.
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'nga-bootstrap-test',
  styles: [
      ``,
  ],
  template: `
      <nga-layout>
          <nga-layout-column>
              <h2>Buttons</h2>
              <div>
                  <button class="btn btn-primary">Primary</button>
                  <button class="btn btn-secondary">Secondary</button>
                  <button class="btn btn-info">Info</button>
                  <button class="btn btn-danger">Danger</button>
                  <button class="btn btn-success">Success</button>
                  <button class="btn btn-warning">Warning</button>
              </div>

              <h2>Tables</h2>
              <table class="table table-striped">
                  <thead>
                      <tr>
                          <td>id</td>
                          <td>name</td>
                          <td>email</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>some</td>
                          <td>John Doe</td>
                          <td>test@test.com</td>
                      </tr>
                      <tr>
                          <td>some</td>
                          <td>John Doe</td>
                          <td>test@test.com</td>
                      </tr>
                      <tr>
                          <td>some</td>
                          <td>John Doe</td>
                          <td>test@test.com</td>
                      </tr>
                      <tr>
                          <td>some</td>
                          <td>John Doe</td>
                          <td>test@test.com</td>
                      </tr>
                  </tbody>
              </table>
              
              <h2>DropDown</h2>
              <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<form class="form-inline">
  <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
  <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
    <input type="checkbox" class="custom-control-input">
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">Remember my preference</span>
  </label>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>


          </nga-layout-column>
      </nga-layout>
  `,
} )
export class NgaBootstrapTestComponent {

}
