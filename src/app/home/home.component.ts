import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  afficherCercleAvecImage(event: MouseEvent) {
    const box = event.currentTarget as HTMLElement;

    // Masquer l'image
    const image = box.querySelector('.box-photo') as HTMLElement;
    if (image) {
      image.style.display = 'none';
    }

    // Création du cercle jaune avec le nombre à l'intérieur
    const cercle = document.createElement('div');
    cercle.className = 'cercle-jaune'; // Ajout de la classe cercle-jaune
    cercle.textContent = '1'; // Vous pouvez changer le nombre ici

    // Style du cercle
    cercle.style.position = 'absolute';
    cercle.style.width = '30px'; // Ajustez la taille du cercle selon vos besoins
    cercle.style.height = '30px';
    cercle.style.borderRadius = '50%';
    cercle.style.backgroundColor = 'yellow';
    cercle.style.color = '#333A94';
    cercle.style.display = 'flex';
    cercle.style.justifyContent = 'center';
    cercle.style.alignItems = 'center';
    //cercle.style.color = 'black'; // Couleur du texte
    cercle.style.fontSize = '20px'; // Taille du texte

    // Positionnement du cercle à l'intérieur de la boîte
    box.style.position = 'relative';
    cercle.style.right = '70px'; // Ajustez l'écart par rapport au bord droit
    cercle.style.top = '30px'; // Ajustez l'écart par rapport au bord supérieur

    // Ajout du cercle à la boîte
    box.appendChild(cercle);

    // Ajouter une animation pour le texte
    setTimeout(() => {
      cercle.style.animation = 'move-number 1s forwards';
    }, 1000);
  }

  cacherCercle(event: MouseEvent) {
    const box = event.currentTarget as HTMLElement;

    // Rendre l'image visible de nouveau
    const image = box.querySelector('.box-photo') as HTMLElement;
    if (image) {
      image.style.display = 'block';
    }

    // Supprimer le cercle jaune
    const cercle = box.querySelector('.cercle-jaune');
    if (cercle) {
      cercle.remove();
    }
  }

  avis = [
    {
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      image: "/assets/images/photo1.png"
    },
    {
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      image: "/assets/images/photo2.png"
    },
    {
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      image: "/assets/images/photo1.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
