import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  private vocabularyUrl = 'assets/vocabulary.json';

  constructor(private http: HttpClient) { }

  getVocabulary(): Observable<Word[]> {
    return this.http.get<Word[]>(this.vocabularyUrl);
  }
}