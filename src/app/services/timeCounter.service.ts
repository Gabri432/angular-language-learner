import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
    async countForMinute(updateCallback: (count: number) => void): Promise<void> {
        const endTime = 60;
      
        for (let count = 0; count <= endTime; count++) {
          updateCallback(endTime - count);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}