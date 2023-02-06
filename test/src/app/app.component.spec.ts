import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test app is running!');
  });
  
  interface ClaseA {
    foo: string;
    bar: string;
    lorem :string;
  } 
  
  const exampleClaseA: ClaseA = { 
    foo: "foo",
    bar: "bar",
    lorem :"lorem"
  
  };

  interface ClaseB {
    foo: string;
    bar: string;
  } 
  
  const exampleClaseB: ClaseB = { 
    foo: "foo",
    bar: "bar",
  
  };
    
  interface ClaseC {
    color: string;
    bar: string;
  } 
  
  const exampleClaseC: ClaseC = { 
    color: "Blue",
    bar: "bar",
  
  };

});
