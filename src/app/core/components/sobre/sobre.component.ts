import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  public form = this.formBuilder.group({
    email: ['nelcionedias@gmail.com'],
    password: ['1234']
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }

}
