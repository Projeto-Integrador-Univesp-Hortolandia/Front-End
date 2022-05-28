import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropFile]'
})
export class DropFileDirective {

  @HostBinding('class.drop-area-over')
  fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<any>();
  @Output() FileOver = new EventEmitter<boolean>()

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    if(!this.fileOver){
      this.fileOver = true
      console.log('a')
      this.FileOver.emit(true)
    }
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.FileOver.emit(false)
  }

  @HostListener('drop', ['$event']) public ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.FileOver.emit(false)
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
