import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() planets: Array<string>;
  @Input('search') searchTerm: string;
  @Input('trigChange') trigChange: any;
  @Output() searchChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onValueChanged() {
    this.searchChange.emit(this.searchTerm);
  }

  onOptionChanged(e) {
    this.searchTerm = e.option.value;
    this.searchChange.emit(this.searchTerm);
    this.trigChange();
  }

}
