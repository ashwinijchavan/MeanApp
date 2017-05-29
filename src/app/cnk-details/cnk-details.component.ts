import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router   } from '@angular/router';
import { CnkService } from '../cnk.service';


@Component({  
  selector: 'app-cnk-details',
  templateUrl: './cnk-details.component.html',
  styleUrls: ['./cnk-details.component.css']
})
export class CnkDetailsComponent implements OnInit {

 cnk = {};

  constructor(private route: ActivatedRoute,private router: Router, private cnkService: CnkService) { }

  ngOnInit() {
    this.getCnkDetail(this.route.snapshot.params['id']);
  }

  getCnkDetail(id) {
    this.cnkService.showCnk(id).then((res) => {
      this.cnk = res;
      console.log(this.cnk);
    }, (err) => {
      console.log(err);
    });
  }
deleteCnk(id) {
  this.cnkService.deleteCnk(id).then((result) => {
    this.router.navigate(['/cnks']);
  }, (err) => {
    console.log(err);
  });
}
}
