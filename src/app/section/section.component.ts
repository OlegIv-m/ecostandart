import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Test } from '../model';

@Component({
  selector: 'eco-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnChanges {
  @Input() section!: Test;
  @Input() url!: string;
  search: string = "";

  ngOnChanges(changes: SimpleChanges) {
    this.url = changes['url'].currentValue;
  }
}
