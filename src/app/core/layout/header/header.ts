import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFolder, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly icon: IconDefinition;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.html'
})
export class HeaderComponent {
  public readonly activeRouteId: WritableSignal<string> = signal('home');

  public readonly navigationItems: ReadonlyArray<NavigationItem> = [
    { id: 'home', label: 'Início', icon: faHome },
    { id: 'about', label: 'Sobre Mim', icon: faUser },
    { id: 'projects', label: 'Projetos', icon: faFolder },
    { id: 'contact', label: 'Contato', icon: faEnvelope },
  ];

  public setActiveRoute(routeId: string): void {
    this.activeRouteId.set(routeId);
  }
}