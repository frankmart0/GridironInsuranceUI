import { Component, Input, OnInit } from '@angular/core';
import { InsuredApiService } from 'src/app/insured-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-insured',
  templateUrl: './add-edit-insured.component.html',
  styleUrls: ['./add-edit-insured.component.css']
})
export class AddEditInsuredComponent implements OnInit {
  
  insuredList$!: Observable<any[]>;  
  

  constructor(private service:InsuredApiService) { }

  @Input() insured:any;
  Id:number=0;
  firstName:string="";
  lastName:string="";
  effectiveDate:string="";
  street:string="";
  city:string="";
  zipCode:string="";
  state:string="";
  insuredValueAmount!:number;

   activateAddInsured:boolean=false;
  activateUpdateInsured:boolean=false;

  
  /* statesList:any[]*/


  ngOnInit(): void {
    // this.loadInsured();
    this.Id = this.insured.Id;
    this.firstName = this.insured.firstName;
    this.lastName = this.insured.lastName;
    this.effectiveDate = this.insured.effectiveDate;
    this.street = this.insured.street;
    this.city = this.insured.city;
    this.zipCode = this.insured.zipCode;
    this.state = this.insured.state;
    this.insuredValueAmount = this.insured.insuredValueAmount;
    this.insuredList$ = this.service.getInsuredList();
  }

  // loadInsured(){
  //   /*this.service.GetAllStates().suscribe((data:any)=>{
  //     this.statesList=data;
  //   })) */

   
  // }

  addInsured(){
    // create data 
    var insured ={
      Id: this.Id,
      firstName:this.firstName,
      lastName: this.lastName,
      effectiveDate:this.effectiveDate,
      street: this.street,
      city:this.city,
      zipCode:this.zipCode,
      state: this.state,
      insuredValueAmount:this.insuredValueAmount
    };

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
    var data ={
      Id:this.insured.Id,
      firstName:this.insured.firstName,
      lastName: this.insured.lastName,
      effectiveDate:this.insured.effectiveDate,
      street: this.insured.street,
      city:this.insured.city,
      zipCode:this.insured.zipCode,
      state: this.insured.state,
      insuredValueAmount:this.insured.insuredValueAmount
    };
    this.service.updateInsured(this.Id, data).subscribe(rest=>{
      alert(rest.toString());
    });
  }

}
