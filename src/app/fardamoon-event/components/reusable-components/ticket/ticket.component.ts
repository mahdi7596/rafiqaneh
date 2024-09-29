import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TicketDto } from '../../models/TicketDto';
import { saveAs } from 'file-saver';
import { barcode } from 'pure-svg-code';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('ticketCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input('ticket') ticket!: TicketDto;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.drawTicket();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['ticket']) {
      console.log('ticket changed', changes);
      let canvas = this.canvasRef?.nativeElement;
      let context = canvas?.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.drawTicket();
      }
    }
  }

  drawTicket() {
    let canvas = this.canvasRef.nativeElement;
    let context = canvas.getContext('2d')!;
    if (!context) {
      console.error('Drawing context not exist');
      return;
    }
    // context.clearRect(0, 0, canvas.width, canvas.height);

    //context.beginPath();
    let bgImage = new Image();
    bgImage.crossOrigin = 'anonymous';
    bgImage.onload = () => {
      canvas.height = bgImage.height;
      canvas.width = bgImage.width;
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.drawImage(bgImage, 0, 0);

      this.renderTexts(context);
      this.renderBarcode(context, canvas);
    };
    bgImage.src = 'assets/fardamoon/images/ticket.jpeg';
  }

  renderTexts(context: CanvasRenderingContext2D) {
    if (!this.ticket.firstName || !this.ticket.lastName) return;

    context.font = `bolder 18px iranSans`;
    context.textAlign = 'center';
    context.fillStyle = '#000';

    let name = this.ticket.firstName + ' ' + this.ticket.lastName;
    context.fillText(name, 900, 85, 300);
    context.fillText(this.ticket.birthDate, 900, 145, 300);
    context.fillText(this.ticket.score.toString(), 900, 202, 300);
    context.fillText(this.ticket.completedCount.toString(), 850, 262, 300);

    context.fillText(this.ticket.createdAt, 120, 237, 300);
    context.fillText('سراسر ایران', 120, 295, 300);
    context.fillText('سرزمین فردامون', 120, 353, 300);
    context.fillText(this.ticket.ticketNumber, 120, 412, 300);
  }

  renderBarcode(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    if (!this.ticket.ticketNumber) return;
    var svgString = barcode(this.ticket.ticketNumber, 'codabar');
    var data = svgString;
    var DOMURL = window.URL || window.webkitURL || window;
    var img = new Image();
    var svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    var url = DOMURL.createObjectURL(svg);
    img.onload = () => {
      context.drawImage(img, 800, 300, 230, 30);
      context.save();
      let c = [10, 0];
      context.translate(750, 50);
      context.rotate((90 * Math.PI) / 180);
      context.drawImage(img, 0, 0, 300, 50);
      context.restore();
      DOMURL.revokeObjectURL(url);
    };
    img.src = url;
  }

  download() {
    let canvas = this.canvasRef.nativeElement;
    canvas.toBlob(function (blob: any) {
      saveAs(blob, 'ticket.jpg');
    });
  }
}
