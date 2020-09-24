import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmailRequest } from 'src/app/models/email-request';
import { AlertifyService } from './alertify.service';
import { EmailService } from './email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactMeForm: FormGroup;
  constructor(private fb: FormBuilder, private alertify: AlertifyService, private emailServices: EmailService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.createContactMeForm();
  }

  createContactMeForm(){
    this.contactMeForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
  }

  //#region Getters
  get name(){
    return this.contactMeForm.get('name') as FormControl;
  }

  get email(){
    return this.contactMeForm.get('email') as FormControl;
  }

  get message(){
    return this.contactMeForm.get('message') as FormControl;
  }
  //#endregion

  onSend(){
    if(this.contactMeForm.valid){
      this.spinner.show();

      try{
        this.emailServices.send(new EmailRequest(this.contactMeForm.value.name, this.contactMeForm.value.email, this.contactMeForm.value.message )).subscribe(
          response => {
            if(response === null)
            {
              this.spinner.hide();
              this.alertify.error("Your message could not be sent... Try again later :(");
            }
            else if(response === 'Email sent!')
            {
              this.contactMeForm.reset();
              this.spinner.hide();
              this.alertify.success("Your message has been sent :)");
            }
            else
            {
              this.spinner.hide();
              this.alertify.error("Your message could not be sent... Try again later :(");
            }
          }
        );
      }catch(err){
        this.spinner.hide();
        this.alertify.error("Your message could not be sent... Try again later :(");
      }

    }else{
      this.alertify.error("Please fill all fields before sending");
    }
  }
}
