import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFilesComponent implements OnInit {

  constructor(
    public matSnackBar: MatSnackBar
  ) { }

  isOver: boolean = false

  	/**
	 * @IdInput : Adiciona um ID para o Input File caso tenha mais de um em uma página ou seja usado em um NfFor;
	 * @fileSize : Valor em Mb para o arquivo;
	 * @fileQuer : Quantidade de arquivos que podem ser adicionados;
	 * @fileType : Array de string com os tipos de arquivos;
	 * @returnFile : Retorna o arquivo enviado;
	 */

	@Input() filesLoaded = [] as File[];
	@Input() filesURL = [] as string[];
	@Input() idInput: number = 1;
	@Input() disabled: boolean = false;
	@Input() fileSize: number = 1;
	@Input() fileQuery: number = 1;
	@Input() fileType: string[] = [
		'png',
		'pdf',
		'png',
		'apng',
		'jpg',
		'gif',
		'jpeg',
		'webp'
	];
	@Output() returnFile = new EventEmitter<File[]>();
  
  ngOnInit(): void {
  }

  picaPreta(algo: any){
    console.log(algo)
  }

  loadFileDrop(event: any){

    let file = event[0]

		if (file) {
			this.processFile(file);
		} else {
			this.matSnackBar.open('Não foi encontrado nenhum arquivo', 'Fechar', {
				duration: 1500
			});
		}
  }

  loadFile(event: Event) {

		let file = (event.target as HTMLInputElement).files?.item(0);

		if (file) {
			this.processFile(file);
		} else {
			this.matSnackBar.open('Não foi encontrado nenhum arquivo', 'Fechar', {
				duration: 1500
			});
		}
	}

  processFile(file: File){
		if (file.size > this.fileSize * 1024 ** 2) {
			this.matSnackBar.open(
				`⛔ O arquivo não pode ter mais do que ${this.fileSize} MiB de tamanho`,
				'OK',
				{ duration: 1500 }
			);
			return;
		}
		if (!new RegExp('.(' + this.fileType.join('|') + ')$').test(file.name)) {
			this.matSnackBar.open(
				`⛔ O arquivo deve estar nos sequintes formatos:\n[ ${this.fileType.join(
					', '
				)} ]`,
				'Fechar'
			);
			return;
		}

		if (this.fileQuery > 1) {
			this.filesLoaded.push(file);
		} else {
			this.filesLoaded[0] = file;
		}

		this.returnFile.emit(this.filesLoaded);
  }

  removeFile() {
			this.filesLoaded.splice(0, 1);
	}

	removeURL(file: string) {
		let index = this.filesURL.indexOf(file);

		if (index >= 0) {
			this.filesURL.splice(index, 1);
		}
	}

}
