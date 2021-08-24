import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: 'course-info.compoment.html'
})

export class CourseInfoComponent implements OnInit {

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void{
        // é necessario o subscribe por conta do metodo HTTP
        this.courseService.retriveById(+!this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            // Next serve para igualar o componente ao retorno que o http esta trazendo
            next: course => this.course = course,
            error: err => console.log('Error: ', err)
        })
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error: ', err)
        })
    }
}