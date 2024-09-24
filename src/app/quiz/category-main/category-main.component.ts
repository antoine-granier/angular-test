import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.scss']
})
export class CategoryMainComponent implements OnInit{
  categories: any[] = [];


  constructor(
    private categoryService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories:any)=>{
      this.categories = categories
    })
    
  }
}
