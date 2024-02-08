import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchFood queryString should not be null, undefined, or empty', () => {
    let str1 = 'notEmpty';
    let str2 = '';
    let str3 = undefined;
    let str4 = null;
    expect(service.getFood(str1)).toBeTruthy();
    expect(service.getFood(str2)).toBeFalsy();
  })
});
