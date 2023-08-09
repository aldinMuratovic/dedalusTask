import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateContactFormComponent } from './create-contact-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

describe('CreateContactFormComponent', () => {
  let fixture: ComponentFixture<CreateContactFormComponent>;
  let component: CreateContactFormComponent;
  let formBuilder: FormBuilder;
  let cdr: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateContactFormComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder, ChangeDetectorRef],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactFormComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    cdr = TestBed.inject(ChangeDetectorRef);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the contactForm with correct form controls', () => {
    expect(component.contactForm).toBeInstanceOf(FormGroup);
    expect(component.contactForm.get('firstName')).toBeTruthy();
    expect(component.contactForm.get('lastName')).toBeTruthy();
    expect(component.contactForm.get('phone')).toBeTruthy();
    expect(component.contactForm.get('email')).toBeTruthy();
    expect(component.contactForm.get('address')).toBeTruthy();
  });

});
