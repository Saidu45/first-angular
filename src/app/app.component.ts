import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discover Sierra Leone';
  currentYear = new Date().getFullYear();

  facts = [
    "Located in West Africa",
    "Capital: Freetown",
    "Population: ~8 million",
    "Official language: English",
    "Independence: April 27, 1961",
    "Famous for white sand beaches and diamonds"
  ];

  landmarks = [
    { name: "Tacugama Chimpanzee Sanctuary", description: "Home to rescued chimps" },
    { name: "Bunce Island", description: "Historic slave trade site" },
    { name: "Outamba-Kilimi National Park", description: "Diverse wildlife sanctuary" }
  ];
}
