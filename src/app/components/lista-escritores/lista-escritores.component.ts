import {Component, OnInit} from '@angular/core';
import {EscritoresService} from 'src/app/services/escritores.service';
import {Escritor} from "../../models/escritor.model";

@Component({
	selector: 'app-lista-escritores',
	templateUrl: './lista-escritores.component.html',
	styleUrls: ['./lista-escritores.component.css'],
	host: {'class': 'columns-12'}
})
export class ListaEscritoresComponent implements OnInit {

	escritores = new Array<Escritor>();

	constructor(private escritoresService: EscritoresService) {
	}

	async ngOnInit() {
		// this.escritores = this.escritoresService.getAll();

		// this.escritoresService.getAllPromise()
		// 	.then(result => this.escritores = result);

		this.escritores = await this.escritoresService.getAllPromise();
	}

	async selecionarPais(event: any) {
		if(event.target.value)
			this.escritores = await this.escritoresService.getByCountry(event.target.value);
		else
			this.escritores = await this.escritoresService.getAllPromise();
	}

}
