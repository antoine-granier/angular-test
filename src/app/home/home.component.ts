import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playerName = '';

  constructor(private router: Router, private authService: AuthService, private quizzService:QuizService) { }

  ngOnInit(): void {
    //Nous verrons plus tard comment gérer cela avec des observables
    this.authService.isUserConnected();
    this.playerName = this.authService.user?.username || '';
  }

  get isPlayerNameFill() {
    return this.playerName.length < 1;
  }

  navigateToQuiz() {
    this.quizzService.playerName = this.playerName;
    this.router.navigate(['/categories']);
  }
}
