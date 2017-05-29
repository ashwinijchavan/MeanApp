import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CnkService } from '../cnk.service';

@Component({
  selector: 'app-cnk-create',
  templateUrl: './cnk-create.component.html',
  styleUrls: ['./cnk-create.component.css']
})
export class CnkCreateComponent implements OnInit {

cnk = {};

  constructor(private cnkService: CnkService, private router: Router) { }

  ngOnInit() {
  }

  saveCnk() {
    this.cnkService.saveCnk(this.cnk).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/cnk-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
