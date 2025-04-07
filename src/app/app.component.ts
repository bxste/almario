import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-root',
  imports: [FormsModule],  // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected the typo from styleUrl to styleUrls
})
export class AppComponent {
  title = 'my-port';

  // Function to send email using EmailJS
  sendEmail(form: any) {
    console.log('Form data before sending:', form.value);  // Log form data to check values
  
    emailjs.sendForm('service_s1rgjbc', 'template_c4mzcwb', form.target, 'ZO9FhWibA-g90_qAk')
      .then((response) => {
        console.log('Email sent successfully:', response);  // Log success response
        alert('Message sent!');
        form.reset();  // Reset the form after submission
      })
      .catch((error) => {
        console.error('Error sending email:', error);  // Log error if sending fails
        alert('Failed to send: ' + JSON.stringify(error));
      });
  }
  
}
