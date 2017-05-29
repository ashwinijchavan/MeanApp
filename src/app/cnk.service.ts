import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
  
@Injectable()
export class CnkService {

  constructor(private http: Http) { }

  getAllCnks() {
    return new Promise((resolve, reject) => {
      this.http.get('/cnk')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showCnk(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/cnk/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveCnk(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/cnk', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateCnk(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/cnk/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteCnk(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/cnk/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}