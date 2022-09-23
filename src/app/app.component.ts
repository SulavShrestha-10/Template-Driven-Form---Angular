import {Component} from '@angular/core';
import {User} from "./user";
import {EnrollmentService} from "./enrollment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  topicHasError = true;
  submitted = false;
  errorMessage: any;
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Sulav', 'email@gmail.com', 1234567890, 'default', '', true);

  constructor(private _enrollmentService: EnrollmentService) {
  }

  validateTopic(value: any) {
    // if (value === 'default') {
    //   this.topicHasError = true;
    // } else {
    //   this.topicHasError = false;
    // }
    this.topicHasError = value === 'default';
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMessage = error.statusText
      )
  }
}
