import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ICandidate } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/*export class HomeComponent implements OnInit {
  details: ICandidate[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.get()
          .subscribe((data: ICandidate[]) => {
          console.log(data);
          this.details = data;
      })
  }
}*/

export class HomeComponent implements OnInit {
	details: ICandidate[] = [];
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get().subscribe((data: ICandidate[])=>{  
			console.log(data);  
			this.details = data;
		})
	}
}
