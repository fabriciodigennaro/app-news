import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() paramSelected = new EventEmitter<any>()

  categorySelected = 'general';
  countrySelected = 'ar';

  categories: any[] = [
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
    { value: 'entertainment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'technology', nombre: 'Tecnología'},
  ];

  countries: any[] = [
    { value: 'ar', nombre: 'Argentina'},
    { value: 'br', nombre: 'Brasil'},
    { value: 'fr', nombre: 'Francia'},
    { value: 'hu', nombre: 'Hungria'},
    { value: 'mx', nombre: 'Mexico'},
    { value: 'gb', nombre: 'Reino Unido'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  searchNews() {
   const PARAMETERS = {
     category: this.categorySelected,
     country: this.countrySelected
   }

   this.paramSelected.emit(PARAMETERS)
  }

}
