import { Component, OnInit} from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private studentService:StudentService){}
 students: any = [];
 news:any = [];
 ngOnInit(){
   this.studentService.GetStudentData().subscribe( data => 
   {
    this.students=data.students;
   });
   this.studentService.GetNewsData().subscribe( newsData => 
    {
     this.news=newsData.articles;
    console.log(newsData.articles);
    });

 }
}
