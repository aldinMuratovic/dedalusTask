import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SharedModule } from "./shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { sharedReducer } from "./shared/store/reducers/shared.reducer";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot({
          shared: sharedReducer
        }),
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DedalusTask'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DedalusTask');
  });
});
