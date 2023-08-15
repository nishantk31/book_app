import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name: string = 'Clean Code';
  author: string = 'Robert C Martin';
  src: string =
    'https://m.media-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'

  name1: string = 'Pragmatic Programmer';
  author1: string = 'David Thomase';
  src1: string =
    'https://m.media-amazon.com/images/I/41YUPjAS3rL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'

  isDisabled: boolean = false
  input_text: any = null

  handelClick() {
    this.isDisabled = true
  }

  // handelChange(event: any){
  //    this.input_text = event.target.value
  //}



}
