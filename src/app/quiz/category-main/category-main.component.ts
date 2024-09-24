import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.scss']
})
export class CategoryMainComponent implements OnInit{
  categories: any[] = [];
  searchName:string = ''

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

  navigateToCategoriyQuizz(id:number){
    this.router.navigate(['/quiz', id])
  }

  search(form:NgForm){
    this.categoryService.getBySearch(form.value.searchName).subscribe((categories:any)=>{
      this.categories = categories
    })
  }

  reset(){
    this.searchName = ''
  }
}
