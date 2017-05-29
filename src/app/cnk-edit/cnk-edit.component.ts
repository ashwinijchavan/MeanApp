import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnkService } from '../cnk.service';

@Component({
  selector: 'app-cnk-edit',
  templateUrl: './cnk-edit.component.html',
  styleUrls: ['./cnk-edit.component.css']
})
export class CnkEditComponent implements OnInit {

 cnk = {};

  constructor(private cnkService: CnkService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCnk(this.route.snapshot.params['id']);
  }

  getCnk(id) {
    this.cnkService.showCnk(id).then((res) => {
      this.cnk = res;
      console.log(this.cnk);
    }, (err) => {
      console.log(err);
    });
  }

  updateCnk(id) {
    this.cnkService.updateCnk(id, this.cnk).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/cnks']);
    }, (err) => {
      console.log(err);
    });
  }

}
