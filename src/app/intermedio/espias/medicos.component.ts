import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
    selector: 'app-medicos',
    template: `
    <p>
      medicos works!
    </p>
  `,
    styles: []
})
export class MedicosComponent implements OnInit {

    public medicos: any[] = [];
    public mensajeError: string;

    constructor(
        private medicoService: MedicosService
    ) { }

    ngOnInit(): void {
        this.medicoService.getMedicos()
            .subscribe(medicos => this.medicos = medicos);
    }

    agregarMedico(): void {
        const medico = { nombre: 'Médico Juan Carlos' };

        this.medicoService.agregarMedico(medico)
            .subscribe(
                medicoDB => this.medicos.push(medicoDB),
                err => this.mensajeError = err
            );
    }

    borrarMedico(id: string): void {
        const confirmar = confirm('Estas seguro que desea borrar este médico');

        if (confirmar) {
            this.medicoService.borrarMedico(id);
        }

    }

}
