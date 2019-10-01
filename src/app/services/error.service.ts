import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public alertState: boolean = false
  public alertMessage: string = ""
  /**
   * -1 : alert of type error .
   *  1  : alert of type success.
   */
  public alertType: 1 | -1;

  constructor() { }


  public createError(message:string){
    this.alertType=-1;
    this.showAlert(message);

  }
  public createSuccess(message:string){
    this.alertType=1
    this.showAlert(message)
  }

  private showAlert(message:string){
    this.alertState= true
    this.alertMessage=message
    setTimeout(()=>{
      this.alertState=false
    },5000)
  }
}
