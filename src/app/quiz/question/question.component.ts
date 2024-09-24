import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = [];

  constructor(private quizService: QuizService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['categoryId'];
      this.quizService.getQuizContent(id)
      this.quizContent = this.quizService.quizContent
    });
  }
}
