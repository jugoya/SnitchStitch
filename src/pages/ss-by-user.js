/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import '../elements/ss-by-user-chart.js';
import '../elements/ss-sort-by-project.js';


class SSByuser extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      
        .table-card {
        overflow:auto;
      }

        .my-table{
          width: 100%;    
        }
        
        .row{
          background-color: #f6f6f6;
          cursor:pointer;
        }
        .row:nth-of-type(odd){
          background-color: #e9e9e9;
        }
        .row-header{
          background-color: #6f130d;
          color: #ffffff;
        } 

        .my-table th, td{
          text-align: center;
          border-radius: 2px;
          font-size: 0.9em;
        }

        tr td:nth-child(4){
          text-align: left;
          padding-left: 21px;
        }

         .row td{
          line-height: 40px;
        }
        .row-header th{
          line-height: 30px;
        }

        .errors-no{
          width: 100px;
        }

        .last-seen{
          width: 200px;
          text-align:center; 
        }

        .delete{
          width: 100px;
        }

        .users-no{
          width: 150px;
        }

        th.sort-by{
          padding-right: 18px;
          position: relative;
        }
        
        .sort-by:before,
        .sort-by:after {
        border: 4px solid transparent;
        content: "";
        display: block;
        height: 0;
        right: 5px;
        top: 50%;
        position: absolute;
        width: 0;
      }
      .sort-by:before {
        border-bottom-color: #FFFFFF;
        margin-top: -9px;
      }
      .sort-by:after {
        border-top-color: #FFFFFF;
        margin-top: 1px;
      }
      ss-sort-by-project{
        margin-left:30px;
      }
      
        
      </style>
    <div class="wrapper">
        <div class="card">
            <h1>Errors By User</h1>
            <ss-sort-by-project></ss-sort-by-project>
        </div>
        <div class="card table-card">
            <ss-by-user-chart></ss-by-user-chart>
        </div>
    </div>
    `;
  }
 /*  connectedCallback(){
    super.connectedCallback();

    const particularError = this.shadowRoot.querySelector('.row');
    particularError.addEventListener('click', this._clickError.bind(this));
  }

  _clickError(){
    location.href="errorinfo"
  } */
}

window.customElements.define('ss-by-user', SSByuser);
