import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  trainer: Trainer | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID desde la URL 
    console.log('ID del entrenador:', id);
    if (id) {
      this.trainerService.getTrainerDetail(id).subscribe({
        next: (data) => {
          this.trainer = data; // Asigna los datos del entrenador
        },
        error: (err) => {
          console.error('Error al cargar los detalles del entrenador:', err);
          this.errorMessage = 'No se pudieron cargar los detalles del entrenador.';
        },
      });
    }
  }
}
