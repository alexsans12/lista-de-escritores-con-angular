import {Injectable} from '@angular/core';
import {ESCRITORES} from '../db/escritores.db';
import {Escritor} from "../models/escritor.model";

@Injectable({
	providedIn: 'root'
})
export class EscritoresService {

	constructor() {
	}

	getAll(): Escritor[] {
		return ESCRITORES;
	}

	getAllPromise(): Promise<Escritor[]> {
		return new Promise((resolve, reject) => {
			resolve(ESCRITORES);
		});
	}

	getByCountry(country: string): Promise<Escritor[]> {
		return new Promise((resolve, reject) => {
			resolve(ESCRITORES.filter(e => e.pais === country));
		});
	}

	getById(id: number): Promise<Escritor> {
		return new Promise((resolve, reject) => {
			const escritor = ESCRITORES.find(e => e.id === id);
			if(escritor)
				resolve(escritor);
		});
	}
}
