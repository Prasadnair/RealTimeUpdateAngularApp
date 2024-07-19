import { Component, OnInit } from '@angular/core';
import { DealStatusService } from '../deal-status.service';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.sass']
})
export class DealDetailsComponent implements OnInit {
  deals = [
    { id: '1', name: 'Deal 1', status: 'Pending' },
    { id: '2', name: 'Deal 2', status: 'Completed' }
  ];

  constructor(private dealStatusService: DealStatusService) {}

  ngOnInit() {
    this.dealStatusService.statusUpdate$.subscribe(update => {
      if (update) {
        const deal = this.deals.find(d => d.id === update.dealId);
        if (deal) {
          deal.status = update.status;
        }
      }
    });
  }
}
