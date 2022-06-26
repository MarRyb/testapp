import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-loader-form',
  templateUrl: './data-loader-form.component.html',
  styleUrls: ['./data-loader-form.component.scss']
})
export class DataLoaderFormComponent implements OnInit {
  @Output() dataLoadedHandler: EventEmitter<any> = new EventEmitter();

  public form!: FormGroup;
  private URL_REGEXP = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      url: this.fb.control('', [Validators.required, Validators.pattern(this.URL_REGEXP)])
    })
  }

  onFormSubmitHandler(): void {
    const url = this.form.value.url;
    
    this.http.get(url).subscribe(
      (data) => this.dataLoadedHandler.emit(data)
    )
  }
}
