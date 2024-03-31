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
  counter = 0;
  currentTimeLeft = 29;

  @Input() frenchWord: string = "pomme";
  private correctAnswer: string = "apple";

  constructor(private getWords: VocabularyService) { }

  ngOnInit(): void {
    this.getWords.getVocabulary().subscribe(data => {
      for (const d of data) {
        this.words.push(d);
      }
      this.pickNewWords();
      this.generateWordToGuess();
      this.updateTime();
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
    this.correctAnswer = this.currentOptions[pick].english;
  }

  newTry(): void {
    this.pickNewWords();
    this.generateWordToGuess();
  }

  getGivenAnswer(answer: string): void {
    if (answer == this.correctAnswer) {
      console.log("Correct!");
      this.counter++;
    } else {
      console.log("Wrong!");
      this.counter = 0;
    }
    this.newTry();
  }

  async updateTime(): Promise<void> {
      const endTime = 29;
    
      for (let count = 0; count < endTime; count++) {
        this.currentTimeLeft--;
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (this.currentTimeLeft == 0) {
          document.getElementById("popup-area")!.style.display = "block";
          document.getElementById("flashcard-area")!.style.display = "none";
          document.getElementById("footer-area")!.style.opacity = "0.5";
          document.getElementById("title-area")!.style.opacity = "0.5";
        }
      }
    }

  onButtonRetryClicked(buttonType: string): void {
    if (buttonType == "retry")
    document.getElementById("popup-area")!.style.display = "none";
    document.getElementById("flashcard-area")!.style.display = "grid";
    document.getElementById("footer-area")!.style.opacity = "1";
    document.getElementById("title-area")!.style.opacity = "1";
    this.currentTimeLeft = 29;
    this.counter = 0;
    this.updateTime();
    this.newTry();
  } 
}
