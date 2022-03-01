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
      isNew: true
    }
    this.modalTitle = "Add Insured";
    this.ActivateAddEditInsuredComp=true;
  }

  modalEdit(ins:any){
    this.insured = ins;
    this.modalTitle = "Edit Insured";
    this.ActivateAddEditInsuredComp= true;
  }

  delete(ins:any){
    if (confirm(`Are you sure you want to delete insured ${ins.id}`)) {
      this.service.deleteInsured(ins.id).subscribe(rest => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = "none";
          }
        },4000);
        this.insuredList$ = this.service.getInsuredList();
      })
    }
  }

  modalClose(){
    this.ActivateAddEditInsuredComp=false;
    this.insuredList$ = this.service.getInsuredList();
  }

}
