import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  advantagesList : String[];
  disAdvantagesList : String[];

  constructor() {
    this.advantagesList = [
      'TypeScript - możliwa kompilacja kodu w trakcie, statyczne typowanie, wsparcie dla IDE,',
      'kompatybilność aplikacji zależna od dostawcy przeglądarki,',
      'Single Page Application (SPA),',
      'niewielkie wymagania technologiczne do uruchomienia aplikacji (nodeJS),',
      'Angular CLI - jedna komenda do utworzenia działającego projektu',
      'powiązania dwustronne (two-way-binding)',
      'dostępność oraz redukcja kodu, czyli Ahead-of-Time (AOT)',
      'wbudowane dyrektywy oraz możliwość pisania własnych',
      'struktura aplikacji typu MVC,',
      'możliwosć używania niezależnych modułów angularów,',
      'wstrzykiwanie zależności (Dependency Injection)'];

    this.disAdvantagesList = [
      'ładowanie całości podczas odpalenia aplikacji,',
      'zależność od backendu (REST kontroler),',
      'złożony framework do nauczenia,',
      'debugowanie kodu aplikacji,',
      'asynchronicznie wykonywane funkcje aplikacji,',
      'zbyt wiele $scope, $watch powoduje błędy na stronie',
      'słabe wsparcie dla SEO',
      'dość wolne w przypadku wyświetlania dużych ilości danych'
    ]
  }

  ngOnInit() {
  }

}
