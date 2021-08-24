import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ICandidate } from '../shared/interfaces';
import { ActivatedRoute } from '@angular/router';

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

/*export class HomeComponent implements OnInit {
	details: ICandidate[] = [];
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get(id).subscribe((data: ICandidate[])=>{  
			console.log(data);  
			this.details = data;
		})
	}
}*/

export class HomeComponent implements OnInit {
  title = 'LevaPatil Matrimony - Home';
  details: ICandidate[] = [];

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.apiService.get(this.route.snapshot.params.id).subscribe((data: ICandidate[])=>{  
        console.log(data);  
        this.details = data;
      })
  }

  getDetailsById(id: any) {
    this.apiService.get(id)
      .subscribe((data: ICandidate[]) => {
        this.details = data;
      })
  }
}