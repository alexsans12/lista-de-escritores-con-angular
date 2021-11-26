import {Component, OnInit} from '@angular/core';
import {EscritoresService} from "../../services/escritores.service";
import {ActivatedRoute} from "@angular/router";
import { Escritor } from 'src/app/models/escritor.model';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styleUrls: ['./detalle.component.css'],
	host: { 'class': 'columns-12' }
})
export class DetalleComponent implements OnInit {

	id: number = 0;
	persona: Escritor = new Escritor();

	constructor(private ativatedRoute: ActivatedRoute,private escritoresService: EscritoresService) {
	}

	async ngOnInit() {
		this.ativatedRoute.params.subscribe(rest => this.id = parseInt(rest['id']) );
		this.persona = await this.escritoresService.getById(this.id);
	}

}
