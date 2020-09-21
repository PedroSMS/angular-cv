export class Project {
  Id: string;
  Name: string;
  Url: string;
  Description: string;
  Stack: [];

  constructor(id: string, name: string, url:string, description:string, stack:[]){
    this.Id = id;
    this.Name = name;
    this.Url = url;
    this.Description = description;
    this.Stack = stack;
  }
}
