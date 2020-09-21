export class EmailRequest {
  Name: string;
  Email: string;
  Text: string;

  constructor(name:string, email:string, text:string){
    this.Name = name;
    this.Email = email;
    this.Text = text;
  }
}

