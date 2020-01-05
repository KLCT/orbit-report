export class Satellite {
    name: string[];
    type: string[];
    launchDate: string[];
    orbitType: string[];
    operational: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = ['Sirius 1', 'Vanguard 1', 'SNAP 10-A', 'Hubble Space Telescope', 'Envisat', 'Thermal Blanket', 'Morelos III', 'IIR-M', 'ISS'];
        this.type = ['Communication', 'Probe', 'Space Station', 'Telescope', 'Space Debris', 'Positioning'];
        this.launchDate = ['2007-11-17', '1958-03-17', '1965-11-01', '1990-05-24', '2002-03-01', 'N/A', '2012-12-19', '2007-08-17', '1998-11-20'];
        this.orbitType = ['LOW', 'HIGH'];
        this.operational = true;
    }
}
