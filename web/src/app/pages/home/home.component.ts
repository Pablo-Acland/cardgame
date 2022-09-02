import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard} from '@angular/cdk/clipboard'

//TODO: componente home para redireccion y enrutado
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private clip: Clipboard) { }

  ngOnInit(): void {
  }

  btnNewGame(){
    this.router.navigate(['new']);
  }
  btnGameList(){
    this.router.navigate(['list']);
  }
  invitar(){
    this.clip.copy("hola")
  }
}
