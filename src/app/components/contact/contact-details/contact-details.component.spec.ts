import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GET_CONTACT } from '../../../shared/store/actions/contact.actions';
import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let component: ContactDetailsComponent;
  let store: MockStore;
  const initialState = {};
  let mockActivatedRoute: ActivatedRoute;
  let mockRouter: Router;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        params: { id: '1' }
      }
    } as any;

    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    } as any;

    await TestBed.configureTestingModule({
      declarations: [ContactDetailsComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GET_CONTACT action on ngOnInit', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(GET_CONTACT({ id: component.contactId }));
  });
});
