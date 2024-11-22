import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];
  errorMessage: string = '';

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {

    this.trainerService.getTrainers().subscribe({
      next: (data: Trainer[]) => {
        this.trainers = data; 
      },
      error: (err: any) => {
        console.error('Error al obtener los entrenadores:', err);
        this.errorMessage = 'No se pudieron cargar los entrenadores.';
      },
    });
  }
}
