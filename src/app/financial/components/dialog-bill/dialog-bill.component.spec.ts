/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogBillComponent } from './dialog-bill.component';

describe('DialogBillComponent', () => {
  function setup() {
    const dialogRef = jasmine.createSpyObj('dialog', ['open', 'afterClosed']);
    const formBuilder = jasmine.createSpyObj('formBuilder', ['group'])
    const billsService = jasmine.createSpyObj('billsService', ['postBill', 'updateBill'])

    const data = {
      action: 'include'
    }
    const component = new DialogBillComponent(
      dialogRef,
      data,
      formBuilder,
      billsService
    )
    return {
      component,
      dialogRef,
      data,
      formBuilder,
      billsService
    }
  }
});
