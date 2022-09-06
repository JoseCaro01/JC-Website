import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show:boolean = false;


  constructor() { }

  ngOnInit(): void {
    window.addEventListener("resize",() => {
      if(window.innerWidth>1080) this.show=false;
    })
  }

  showMenu():void {
    this.show = !this.show;
  }

  scrollButtonNavigation(site:string) :void {
    if(site=="about") window.scrollBy({top:window.innerHeight})
    else if(site=="contact") window.scrollBy({top:window.innerHeight+window.innerHeight})
    else window.scrollBy({top:0}) 
  }

}
