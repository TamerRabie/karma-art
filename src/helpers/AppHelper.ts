import {Injectable} from "@angular/core";
import {AbstractControl, FormGroup, Validators} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class AppHelper {
  static validationType = {
    required: Validators.required,
    email: Validators.email,
    minLength: Validators.minLength(6),
    maxLength: Validators.maxLength(6),
    integerNumbers: Validators.pattern('[0-9]*'),
    floatNumbers: Validators.pattern('^[0-9]+(\\.[0-9]{1})?$')
  };

  static preventBack(): void {
    window.location.hash = 'Secure-Session';
    window.location.hash = 'Secure-Session'; // because Google Chrome don't insert first hash into history ...
    window.onhashchange = () => {
      window.location.hash = 'Secure-Session';
    };
  }

  static validateFormGroup(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      formGroup.get(key)?.markAsTouched();
      formGroup.get(key)?.markAsDirty();
    });
  }

  static clearController(c: AbstractControl): void {
    c.patchValue('');
    c.clearValidators();
    c.updateValueAndValidity();
  }

  static disableController(c: AbstractControl): void {
    this.clearController(c);
    c.disable();
  }

  static enableController(c: AbstractControl): void {
    c.enable();
    c.updateValueAndValidity();
  }


  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  stopPropagation(e: any): void {
    e.stopPropagation();
  }
}
