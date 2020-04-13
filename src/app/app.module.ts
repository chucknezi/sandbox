import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { PlaylistComponent } from './artist/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
