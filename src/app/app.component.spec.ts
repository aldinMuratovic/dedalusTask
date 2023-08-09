import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CreateContactFormComponent } from './components/create-item-form/create-contact-form.component';
import { SHOW_MODAL, CLOSE_MODAL, TOGGLE_LOADER_FALSE } from './shared/store/actions/shared.actions';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { ActivatedRouteStub } from "./shared/ActivatedRouteStub";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: Store;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CreateContactFormComponent, NavbarComponent],
      imports: [
        StoreModule.forRoot({}), // You can configure your store here
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [ { provide: ActivatedRoute, useValue: activatedRoute },]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch SHOW_MODAL action when openCreateModal is called', () => {
    spyOn(store, 'dispatch');
    component.openCreateModal();
    expect(store.dispatch).toHaveBeenCalledWith(SHOW_MODAL());
  });

  it('should dispatch CLOSE_MODAL action when onCloseModal is called', () => {
    spyOn(store, 'dispatch');
    component.onCloseModal();
    expect(store.dispatch).toHaveBeenCalledWith(CLOSE_MODAL());
  });

  it('should dispatch TOGGLE_LOADER_FALSE action after a delay in ngOnInit', fakeAsync(() => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    tick(1000);
    expect(store.dispatch).toHaveBeenCalledWith(TOGGLE_LOADER_FALSE());
  }));

});
