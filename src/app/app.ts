import { Component } from '@angular/core';
import { HeaderComponent } from './core/layout/header/header';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="min-h-screen bg-[#fafafa] font-sans relative">
      <app-header />
      <main class="pt-32 pb-32 max-w-7xl mx-auto">
        
      </main>
    </div>
  `
})
export class AppComponent {}