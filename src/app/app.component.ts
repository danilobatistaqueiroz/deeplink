import { Component, Inject } from '@angular/core';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private platform:Platform, private deeplinks: Deeplinks) {
    platform.ready().then(()=>{
      this.deeplinks.route({   
      }).subscribe( (match:any) => {     
        alert(JSON.stringify(match));
        console.log('Successfully matched route', JSON.stringify(match));
      }, (nomatch:any) => {
        alert(JSON.stringify(JSON.stringify(nomatch)));
        console.error('Got a deeplink that didn\'t match', JSON.stringify(nomatch));
      });
    });
  }
}
