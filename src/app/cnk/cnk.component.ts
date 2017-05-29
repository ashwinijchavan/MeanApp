import { Component, OnInit } from '@angular/core';
import { CnkService } from '../cnk.service';


@Component({
  selector: 'app-cnk',
  templateUrl: './cnk.component.html',
  styleUrls: ['./cnk.component.css']
})
export class CnkComponent implements OnInit {

cnks: any;

  constructor(private cnkService: CnkService) { }

  ngOnInit() {
    this.getCnkList();
  }

  getCnkList() {
    this.cnkService.getAllCnks().then((res) => {
      this.cnks = res;
    }, (err) => {
      console.log(err);
    });
  }

}
