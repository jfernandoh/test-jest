import { obtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 robots', () => {
        const res = obtenerRobots();

        // expect(res.length).toBe(3);
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir MeganMan y Ultron', () => {
        const res = obtenerRobots();

        expect(res).toContain('MeganMan');
        expect(res).toContain('Ultron');
    });

});

