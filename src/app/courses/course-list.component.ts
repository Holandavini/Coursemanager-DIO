import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Course } from "./course";


@Component({
    // Caracteristicas do componente
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

// OnInit para inicializar algo no momento que inciar a classe
export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular: Forms",
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: "XPS-312",
                duration:120,
                rating: 4.5,
                releaseDate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: "Angular: HTTP",
                imageUrl: '/assets/images/http.png',
                price: 39.99,
                code: "XPS-313",
                duration:60,
                rating: 4,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }
}