import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
  
    HeaderComponent,
    FooterComponent,
    FlashcardComponent,
    PopupComponent
  ],
  exports: [HeaderComponent, FooterComponent, FlashcardComponent, PopupComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }