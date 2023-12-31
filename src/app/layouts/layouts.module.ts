import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';



@NgModule({
  declarations: [
  
    HeaderComponent,
    FooterComponent,
    FlashcardComponent
  ],
  exports: [HeaderComponent, FooterComponent, FlashcardComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }