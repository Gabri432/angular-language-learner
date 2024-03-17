import { Component, Input } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { VocabularyService } from 'src/app/services/getWords.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private words: Word[] = [];
  currentOptions: Word[] = [{"english": "", "french": ""}, {"english": "", "french": ""}];

  @Input() frenchWord: string = "pomme";

  constructor(private getWords: VocabularyService) { }

  ngOnInit(): void {
    this.getWords.getVocabulary().subscribe(data => {
      for (const d of data) {
        this.words.push(d);
      }
      this.pickNewWords();
      this.generateWordToGuess();
    });
  }

  selectRandomWord(): Word {
    const pick = Math.floor(Math.random() * this.words.length);
    return this.words[pick];
  }

  pickNewWords(): void {
    this.currentOptions[0] = this.selectRandomWord();
    const secondOp = this.selectRandomWord();
    if (this.currentOptions[0].english != secondOp.english) {
      this.currentOptions[1] = secondOp;
    } else {
      this.pickNewWords();
    }
  }

  generateWordToGuess(): void {
    const pick = Math.floor(Math.random() * this.currentOptions.length);
    this.frenchWord = this.currentOptions[pick].french;
  }

  newTry(): void {
    this.pickNewWords();
    this.generateWordToGuess();
  }
}
