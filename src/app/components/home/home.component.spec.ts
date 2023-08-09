import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { IContact } from '../../models/IContact';
import { By } from '@angular/platform-browser';
import { ContactListComponent } from "../contact-list/contact-list.component";

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let fixtureList: ComponentFixture<ContactListComponent>;
  let componentList: ContactListComponent;
  let store: MockStore;
  const initialState = {};
  let mockRouter: Router;

  beforeEach(async () => {
    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    } as any;

    await TestBed.configureTestingModule({
      declarations: [HomeComponent, ContactListComponent],
      providers: [
        provideMockStore({initialState}),
        {provide: Router, useValue: mockRouter},
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixtureList = TestBed.createComponent(ContactListComponent);
    componentList = fixtureList.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to contact details when onContactSelected is called', () => {
    const contactId = 1;
    component.onContactSelected(contactId);
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(`contact/${contactId}`);
  });

  it('should render the list of contacts', () => {
    const contacts: IContact[] = [
      {
        id: 1,
        firstName: 'Aldin',
        lastName: 'Muratovic',
        phone: '000000',
        email: 'test@gmail.com',
        address: 'Test 43254',
      }
    ];

    component.contacts$ = of(contacts);
    componentList.contacts = contacts
    fixtureList.detectChanges()
    fixture.detectChanges();
    const contactElements = fixture.debugElement.queryAll(By.css('.container'));

    expect(contactElements.length).toBe(contacts.length);
  });

});
