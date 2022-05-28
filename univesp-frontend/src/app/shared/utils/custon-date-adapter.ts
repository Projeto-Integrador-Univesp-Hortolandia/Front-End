import { MomentDateAdapter } from '@angular/material-moment-adapter';

export class CustomDateAdapter extends MomentDateAdapter {
	getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): Array<string> {
		switch (style) {
			case 'long':
				return [
					'Domingo',
					'Segunda-feira',
					'Terça-feira',
					'Quarta-feira',
					'Quinta-feira',
					'Sexta-feira',
					'Sábado'
				];
			case 'short':
				return ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
			case 'narrow':
				return ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
		}
	}

	getFirstDayOfWeek(): number {
		return 0;
	}
}
