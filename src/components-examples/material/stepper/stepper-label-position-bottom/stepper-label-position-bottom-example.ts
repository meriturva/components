import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper label bottom position
 */
@Component({
  selector: 'stepper-label-position-bottom-example',
  templateUrl: 'stepper-label-position-bottom-example.html',
  styleUrls: ['stepper-label-position-bottom-example.css'],
})
export class StepperLabelPositionBottomExample implements OnInit {
  firstFormGroup: UntypedFormGroup;
  secondFormGroup: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
