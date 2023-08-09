import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactFormComponent } from './create-contact-form.component';

describe('CreateItemFormComponent', () => {
  let component: CreateContactFormComponent;
  let fixture: ComponentFixture<CreateContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
