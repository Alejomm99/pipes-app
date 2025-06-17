import { Injectable, signal } from '@angular/core';

export type AvalieableLocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvalieableLocale>('fr');

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('locale') as AvalieableLocale) ?? 'es'
    );
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvalieableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
