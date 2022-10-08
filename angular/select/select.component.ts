import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
})

export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() labelContent: string;
  @Input() getObjectValue = false;
  @Input() errorTip: string;
  @Input() placeHolder: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() data: any[];
  @Input() valueField = 'value';
  @Input() labelField = 'label';
  @Input() openSearchModal = true;
  @Input() name = 'select';
  @Input() span = 16;
  @Input() labelHorizontal = true;
  @Input() hideLabel = false;
  @Input() nzMode = 'default';
  @Output() onClickOpenSearch = new EventEmitter();
  @Output() onSearch = new EventEmitter<string>();
  @Output() onSelectChange = new EventEmitter<any>();
  @Input() isOpenCreateModal = false;
  @Input() staticLabelField = true;

  value: any;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  handleSearch(value) {
    this.onSearch.emit(value);
  }

  handleOpenSearch() {
    this.onClickOpenSearch.emit();
  }

  handleSelectChange() {
    if (Array.isArray(this.data) && this.data.length > 0) {
      if (this.getObjectValue) {
        const result = Array.isArray(this.value) ?
          this.value.map(x => this.data.find(y => y[this.valueField] == x)) :
          this.data.find(x => x[this.valueField] == this.value);
        this.onSelectChange.emit(result);
      } else {
        this.onSelectChange.emit(this.value);
      }
    }
  }
}
