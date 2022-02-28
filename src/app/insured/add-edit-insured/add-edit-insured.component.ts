import { Component, Input, OnInit } from '@angular/core';
import { InsuredApiService } from 'src/app/insured-api.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-insured',
  templateUrl: './add-edit-insured.component.html',
  styleUrls: ['./add-edit-insured.component.css']
})
export class AddEditInsuredComponent implements OnInit {

  insuredList$!: Observable<any[]>;

  insuredForm!: FormGroup;

  constructor(private service:InsuredApiService) { }

  @Input() insured:any;

  activateAddInsured:boolean=false;
  activateUpdateInsured:boolean=false;


  /* statesList:any[]*/


  ngOnInit(): void {
    this.insuredForm = new FormGroup({
      firstName:  new FormControl(this.insured?.firstName),
      lastName: new FormControl(this.insured?.lastName ?? ''),
      effectiveDate:  new FormControl(this.insured?.effectiveDate ?? ''),
      street: new FormControl(this.insured?.address?.street ?? ''),
      city: new FormControl(this.insured?.address?.city ?? ''),
      zipCode: new FormControl(this.insured?.address?.zipCode ?? ''),
      state: new FormControl(this.insured?.address?.state ?? ''),
      insuredValueAmount: new FormControl(this.insured?.rate?.insuredValueAmount ?? '')
    })

    this.insuredList$ = this.service.getInsuredList();
  }

  addInsured() {
    // create data
    const insured = this.loadDataFromForm();

    this.service.addInsured(insured).subscribe(rest=>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }
      },4000);
    });
  }

  updateInsured(){
    const insured = this.loadDataFromForm();

    var id:number = insured.id;
    this.service.updateInsured(id, insured).subscribe(rest=>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none";
        }
      },4000);
    });
  }

  private loadDataFromForm() {
    const data = this.insuredForm.value;
    var insured = {
      id: this.insured?.id,
      firstName: data.firstName,
      lastName: data.lastName,
      effectiveDate: data.effectiveDate,
      street: data.street,
      city: data.city,
      zipCode: data.zipCode,
      state: data.state,
      insuredValueAmount: data.insuredValueAmount
    };

    return insured;
  }

}
