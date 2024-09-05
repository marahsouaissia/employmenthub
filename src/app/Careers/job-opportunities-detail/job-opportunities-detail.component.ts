import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router

interface Job {
  id: number;
  title: string;
  location: string;
  date: string;
  type: string;
  type_contrat: string;
  postedDate: Date;
  description: string;
  qualifications: {
    experience: string;
    technologies: string[];
  };
  skills: string[];
  category: string;
}

@Component({
  selector: 'app-job-opportunities-detail',
  templateUrl: './job-opportunities-detail.component.html',
  styleUrls: ['./job-opportunities-detail.component.scss']
})
export class JobOpportunitiesDetailComponent implements OnInit {
  jobId: number | null = null;
  job: Job | undefined;

  jobs: Job[] = [
    {
      id: 1,
      title: 'Développeur Full Stack',
      location: 'à distance, sur site Sousse',
      date: '23 Juillet 2024',
      type: 'Full Time',
      type_contrat: 'CDI',
      postedDate: new Date('2024-07-22T14:00:00'),
      description: 'À la recherche des profils Développeurs Full Stack pour des postes basés à Sousse.',
      qualifications: {
        experience: '2 ans d’expérience minimum exigés pour ce poste',
        technologies: [
          'JavaScript et un (ou plusieurs) framework Js: Angular, Next.Js',
          'HTML, CSS',
          'Java, Python, PHP, Go, C#, Ruby',
          'Symfony ou Laravel pour PHP'
        ]
      },
      skills: [
        'Autonomie, capacité à aller chercher l\'information',
        'Faire passer le succès collectif avant la réussite individuelle'
      ],
      category: 'sur site'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {} // Inject Router here

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.jobId = +id;
      this.job = this.jobs.find(job => job.id === this.jobId);
    }
  }

  calculateTimeSincePosted(postedDate: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - postedDate.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return `Publié il y a ${diffInHours} heures`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `Publié il y a ${diffInDays} jours`;
    }
  }

  saveJob(): void {
    // Logique pour sauvegarder l'offre d'emploi (stockage local, envoi au serveur, etc.)
    console.log('Job saved:', this.job);
  }

  navigateToJobOpportunities(): void {
    this.router.navigate(['/job_opportunities']);
  }
}
