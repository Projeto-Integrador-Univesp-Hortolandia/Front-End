import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedService } from 'src/app/services/register/feed.service';

@Component({
  selector: 'app-content-creator',
  templateUrl: './content-creator.component.html',
  styleUrls: ['./content-creator.component.scss']
})
export class ContentCreatorComponent implements OnInit {

  constructor(
    public feedNews: FeedService,
    public matSnackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  content = new FormControl('', Validators.required)
  type = new FormControl('', Validators.required)
  fileUpload!: File[];
  isAlert: boolean = false;

  types = [
    { nome: 'Mensagem', type: 'content' },
    { nome: 'Sucesso', type: 'success' },
    { nome: 'Aviso', type: 'warning' },
    { nome: 'Alerta', type: 'alert' }
  ]

  ngOnInit(): void {

    if (this.data.type === 'alert'){
      this.isAlert = true;
    }

  }

  postFeed(){
    let body = {
      date: new Date(),
      author: 'Usuario Teste',
      content: this.content.value,
      hasAlert: this.isAlert,
      hasImage: this.fileUpload ? true : false,
      hasContent: true,
      type: this.isAlert ? this.type.value : '',
      media: this.fileUpload ? this.fileUpload[0].name : ''
    }

    console.log( this.fileUpload)

    this.feedNews.Post({ url: 'Home', body: body })
      .subscribe(
        (success: any) => {
          this.matSnackbar.open('Noticia publicada com sucesso', 'Fechar', {duration: 1500})
        }
      )
  }

}
