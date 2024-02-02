import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StepformComponent } from './stepform/stepform.component';
import { StepComponent } from './step/step.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StepformComponent,
        StepComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
