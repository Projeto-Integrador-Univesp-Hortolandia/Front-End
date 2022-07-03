import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { FeedService } from 'src/app/services/feednews/feed.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-content-creator',
  templateUrl: './content-creator.component.html',
  styleUrls: ['./content-creator.component.scss']
})
export class ContentCreatorComponent implements OnInit {

  constructor(
    public feedNews: FeedService,
    public matSnackbar: MatSnackBar,
    public loginService: LoginService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  content = new FormControl('', Validators.required)
  type = new FormControl('', Validators.required)
  fileUpload!: File[];
  isAlert: boolean = false;

  types = [
    { nome: 'Mensagem', type: 'content' },
    { nome: 'Aviso', type: 'warning' },
    { nome: 'Alerta', type: 'alert' }
  ]

  ngOnInit(): void {

    moment.locale('pt-br');

    console.log(moment().toString())

    if (this.data.type === 'alert'){
      this.isAlert = true;
    }

  }

  postFeed(){
    let formData = new FormData()

    if (this.fileUpload){
      formData.append('foto', this.fileUpload[0], this.fileUpload[0].name)
    }

    let body = {
      author: this.loginService.getUserInfo().nome,
      turmaid: 1,
      professorId: this.loginService.getUserInfo().id,
      postagem: this.content.value,
      type: this.isAlert ? this.type.value : 'content',
      hasAlert: this.isAlert,
      imagem: this.fileUpload ? formData : 'none',
      dataPublicacao: moment().format('YYYY-MM-DD[T]HH:mm:ssZ'),
      tag: 0,
    }

    this.feedNews.Post({ url: 'Posts', body: body })
      .subscribe(
        (success: any) => {
          this.matSnackbar.open('Noticia publicada com sucesso', 'Fechar', {duration: 1500})
        }
      )
  }

}