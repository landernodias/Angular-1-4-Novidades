import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { getRouteParams } from '../helpers/get-route-params';

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
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  public id = getRouteParams('id');

  ngOnInit(): void {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    console.log(this.id);
    console.log(this.activatedRoute.snapshot.params['id']);// forma antiga de pegar parametro usando contrutor
  }
}
