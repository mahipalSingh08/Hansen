import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router) { }

  userForm: any;
  selectedFile: File;
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      imagePath: [''],
    });
  }

  suubmitForm(){
    if(this.userForm.valid && this.selectedFile){
      console.log(this.userForm.value);
      this.userService.addUser(this.userForm.value, this.selectedFile)
        .subscribe((data) => {
          console.log(data);
          this.resetForm();
          this.router.navigate(['/userlist']);
        },err => {
          console.log(err);
          alert("some error");
        })
    } else {
      alert('User form is not valid!!')
    }
  }

  onFileChanged(e: Event){
    console.log(e);
    this.selectedFile = (e.target as HTMLInputElement).files[0];
    console.log(this.selectedFile);
    let type = this.selectedFile.type.toLowerCase();
    if(type == 'image/jpeg' || type == 'image/png' || type == 'image/jpg'){
      this.userForm.patchValue({imagePath: this.selectedFile});
    }else{
      alert("invalid image")
    }
    
    // this.userForm.get('imagePath', updateValueAndValidity())
    console.log(this.userForm.value);
  }
  resetForm() {
    this.userForm.reset();
  }

}
