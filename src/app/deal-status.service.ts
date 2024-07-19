import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealStatusService {
  private hubConnection: signalR.HubConnection;
  private statusUpdateSource = new BehaviorSubject<{ dealId: string, status: string }>({ dealId: '', status: '' });
  statusUpdate$ = this.statusUpdateSource.asObservable();

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7008/dealStatusHub') // Update with your SignalR hub URL
      .build();

    this.hubConnection.on('ReceiveStatusUpdate', (dealId, status) => {
      this.statusUpdateSource.next({ dealId, status });
    });

    this.hubConnection.start().catch(err => console.error('Error while starting connection: ' + err));
  }
}
