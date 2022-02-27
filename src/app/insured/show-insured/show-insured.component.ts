import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuredApiService } from 'src/app/insured-api.service';

@Component({
  selector: 'app-show-insured',
  templateUrl: './show-insured.component.html',
  styleUrls: ['./show-insured.component.css']
})
export class ShowInsuredComponent implements OnInit {

  insuredList$!: Observable<any[]>;

  constructor(private service:InsuredApiService) { }

  ngOnInit(): void {
    this.insuredList$ = this.service.getInsuredList();
  };

  modalTitle:string = "";
  insured:any;
  ActivateAddEditInsuredComp:boolean= false;

  modalAdd(){
    this.insured={
      id: 0,
      firstName:null,
      lastName:null,
      effectiveDate:null,
      street:null,
      city:null,
      state:null,
      zipCode:null,
      insuredValueAmount:null,
      isNew: true
    }
    this.modalTitle = "Add Insured";
    this.ActivateAddEditInsuredComp=true;
  }

  modalClose(){
    this.ActivateAddEditInsuredComp=false;
    this.insuredList$ = this.service.getInsuredList();
  }

}
