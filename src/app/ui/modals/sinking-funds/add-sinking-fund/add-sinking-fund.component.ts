import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-sinking-fund',
  imports: [],
  templateUrl: './add-sinking-fund.component.html',
  styleUrl: './add-sinking-fund.component.scss',
})
export class AddSinkingFundComponent {
  @ViewChild('myDialog') dialogRef!: ElementRef<HTMLDialogElement>;

  private dialog!: HTMLDialogElement;

  ngAfterViewInit() {
    this.dialog = this.dialogRef.nativeElement;
    console.log(this.dialog.open);
  }

  // openDialog() {
  //   if (!this.dialogRef.nativeElement.open) {
  //     this.dialogRef.nativeElement.showModal();
  //   }
  // }

  closeDialog() {
    console.log(this.dialog.open);
    this.dialog.close();
  }

  onDialogClose() {
    console.log('Dialog was closed');
  }
}
