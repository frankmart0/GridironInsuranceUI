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
    // this.loadInsured();
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
    //this.Id = this.insured.Id;

    this.insuredList$ = this.service.getInsuredList();
  }

  // loadInsured(){
  //   /*this.service.GetAllStates().suscribe((data:any)=>{
  //     this.statesList=data;
  //   })) */


  // }

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

    this.service.updateInsured(insured).subscribe(rest=>{
      alert(rest.toString());
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
