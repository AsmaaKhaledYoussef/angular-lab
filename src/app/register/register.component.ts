import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 register: FormGroup;
  passType = "password";
  isMatch = false;
  constructor(private builder: FormBuilder) {
    this.register = this.builder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      uname: ['', [Validators.required, Validators.pattern(/^\S/)]],
      password: ['', [Validators.required, Validators.minLength(8) , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/)]],
      passwordConfirm : ["",[ Validators.required ]]
    },
    );

  }

 matchpass() {

  const password = this.register.get('password')!.value;
  const confirmPassword = this.register.get('passwordConfirm')!.value;
  console.log(password,confirmPassword)
  if (password != confirmPassword)
    this.isMatch = false;
  else
    this.isMatch = true
 }
}
