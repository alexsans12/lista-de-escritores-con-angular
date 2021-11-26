import {Injectable} from '@angular/core';
import {LIBROS} from '../db/libros.db';
import {Libro} from "../models/libro.model";

@Injectable({
	providedIn: 'root'
})
export class LibrosService {

	constructor() {
	}

	getByWriterID(id: number): Promise<Libro[]> {
		return new Promise((resolve, reject) => {
			const libros: Libro[] = LIBROS.filter(libro => libro.escritor === id);
			resolve(libros);
		});
	}
}
