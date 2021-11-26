import {Component, OnInit} from '@angular/core';
import {LibrosService} from 'src/app/services/libros.service';
import {ActivatedRoute} from "@angular/router";
import {Libro} from "../../models/libro.model";

@Component({
	selector: 'app-lista-libros',
	templateUrl: './lista-libros.component.html',
	styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

	libros = new Array<Libro>();

	constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService) {
	}

	ngOnInit(): void {
		this.activatedRoute.parent?.params.subscribe(async params =>
			this.libros = await this.librosService.getByWriterID(parseInt(params['id']))
		);
	}

}
