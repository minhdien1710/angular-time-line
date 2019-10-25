import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../date-util.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  output = '';

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit() {
  }
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
