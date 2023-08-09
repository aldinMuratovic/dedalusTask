import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemModalComponent } from './create-item-modal.component';
import { By } from "@angular/platform-browser";

describe('CreateItemModalComponent', () => {
  let component: CreateItemModalComponent;
  let fixture: ComponentFixture<CreateItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default values for inputs', () => {
    expect(component.modalTitle).toBe('');
    expect(component.closeBtnText).toBe('Close');
    expect(component.submitBtnText).toBe('Submit');
  });

  it('should emit onCloseModal when close button is clicked', () => {
    spyOn(component.onCloseModal, 'emit');
    const closeButton = fixture.debugElement.query(By.css('.btn-secondary'));
    closeButton.triggerEventHandler('click', null);
    expect(component.onCloseModal.emit).toHaveBeenCalled();
  });

  it('should emit onSubmit when submit button is clicked', () => {
    spyOn(component.onSubmit, 'emit');
    const submitButton = fixture.debugElement.query(By.css('.btn-primary'));
    submitButton.triggerEventHandler('click', null);
    expect(component.onSubmit.emit).toHaveBeenCalled();
  });

});
