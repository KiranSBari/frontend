import { Component, OnInit } from '@angular/core';
import { PolicysericeService } from '../policyserice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-policyinserting',
  templateUrl: './policyinserting.component.html',
  styleUrls: ['./policyinserting.component.css']
})
export class PolicyinsertingComponent implements OnInit {


  //Policy declared
  Policy = {
    policyID: '',
    name: '',
    description: '',
    category: ''
  }
 constructor(private api: PolicysericeService) { }

    insertPolicy(form: any): void {
    console.log(this.Policy.policyID);
    console.log(this.Policy.name);
    console.log(this.Policy.description);
    console.log(this.Policy.category);
    console.log(" I am call for priting data");
    this.api.insert(this.Policy).subscribe(
      (user) => {
        console.log(user.affectedRows+" value in user.affectedRows");
      if(user.affectedRows==1)
     {
        Swal.fire({
          title: "Policy Inserting",
          text: " New Policy Inserted Successfully",
          icon: "success",

        })
      }
      else{
        Swal.fire({
          title: "Policy Inserting",
          text: " New Policy Not Inserted Successfully",
          icon: "warning",
        })
      }
      }
    );
  }


  ngOnInit(): void {
  }

}

