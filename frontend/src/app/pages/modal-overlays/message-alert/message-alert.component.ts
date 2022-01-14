import { Component, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { SocketService } from '../../../services/socket.service';


@Component({
  selector: 'ngx-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.scss']
})
export class MessageAlertComponent implements OnInit {

  message: any;

	constructor(
		private socketService: SocketService,
	//	private modalService: BsModalService
	) { }

	ngOnInit(): void {
		// this.socketService.fetchMessage();
		// this.socketService.OnFetchMessage().subscribe((data: any) => this.message = data);
    //alert(message)
	}

	handleModal(message?: any) {
    alert(message)
		//this.modalService.show(FormComponent, { initialState: { movie } });
	}

	handleDelete(message: any) {
		//this.socketService.deleteMovie(movie.id);
	}



}

