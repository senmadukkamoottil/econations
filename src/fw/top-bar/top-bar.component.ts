import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService, IconFiles } from '../services/framework-config.service';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  socialIcons = this.config.getSocialIcons();
  socialIconsCount = this.config.getSocialIconsCount();

  constructor(private config: FrameworkConfigService) { }

  ngOnInit() {
  }

}
