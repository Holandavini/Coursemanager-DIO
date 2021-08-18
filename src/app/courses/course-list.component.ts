import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";


@Component({
    // Caracteristicas do componente
    // Como vamos usar as rotas, podemos deixar o selector de lado
    //selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

// OnInit para inicializar algo no momento que inciar a classe
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = []

     // Usar o underline para identificar uma variavel que vai pertencer somente ao componente 
    _courses: Course[] = [];
    _filterBy!: string

    // Recebendo a injeção de dependencia do course.service.ts
    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
       this._courses = this.courseService.retriveAll()
       this.filteredCourses = this._courses
    }

    // Para o input do que esta sendo escrito no campo de busca do course-list.component.html
    set filter(value: string) {
        this._filterBy = value

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
    }

    // Para atualizar o input com as informações
    get filter(){
        return this._filterBy
    }
}