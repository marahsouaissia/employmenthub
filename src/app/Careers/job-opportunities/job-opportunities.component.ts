import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PaginatorModule} from "primeng/paginator";

interface Job {
  id: number;
  title: string;
  location: string;
  date: string;
  type: string;
}
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;

}
@Component({
  selector: 'app-job-opportunities',
  templateUrl: './job-opportunities.component.html',
  styleUrls: ['./job-opportunities.component.scss'],
})
export class JobOpportunitiesComponent implements OnInit {

  jobs: Job[] = [
    { id: 1, title: 'Développeur Full Stack', location: 'à distance, sur site Sousse', date: '23 Juillet 2030', type: 'Full Time' },
    // Ajoutez plus d'offres ici
  ];
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails(jobId: number): void {
    this.router.navigate(['/job', jobId]);
  }

  currentPage: number = 1; // Page actuelle
  totalPages: number = 10; // Total de pages (vous pouvez ajuster ce nombre)

  // Fonction pour passer à la page précédente
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPageData();
    }
  }

  // Fonction pour passer à la page suivante
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPageData();
    }
  }

  // Fonction pour charger les données en fonction de la page
  loadPageData(): void {
    console.log(`Chargement des données pour la page ${this.currentPage}`);
    // Ajouter la logique pour charger les données de la page actuelle
  }
}
