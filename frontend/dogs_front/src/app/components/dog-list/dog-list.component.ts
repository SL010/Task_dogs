import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DogListComponent implements OnInit {
  dogs: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDogs().subscribe(data => {
      this.dogs = data;
    });
  }
  // createDog() {
  //   const newDog = {
  //     name: 'Новая собака', // Placeholder name
  //     breed: 'Порода', // Placeholder breed
  //     age: 0, // Placeholder age
  //     owner: 'Хозяин',
  //     description: 'Описание новой собаки' // Placeholder description
  //   };

  //   this.apiService.createDog(newDog).subscribe(response => {
  //     console.log('Собака создана:', response);
  //     this.dogs.push(response); 
  //   });
  // }
  newDog = {
    name: '',
    age: null,
    owner: '',
    description: ''
  };

  createDog() {
    // Validate input fields
    // if (!this.newDog.name || !this.newDog.age || !this.newDog.owner) {
    //   console.error('All fields are required');
    //   return;
    // }

    // Call the API to save the new dog
    this.apiService.createDog(this.newDog).subscribe(response => {
      console.log('Собака создана:', response);
      this.dogs.push(response); // Add the new dog to the list
      this.resetForm(); // Reset form fields after submission
    }, error => {
      console.error('Ошибка при создании собаки:', error);
    });
  }

  resetForm() {
    // Reset the form fields after submission
    this.newDog = {
      name: '',
      age: null,
      owner: '',
      description: ''
    };
  }
}