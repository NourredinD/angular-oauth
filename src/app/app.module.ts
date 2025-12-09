import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OAuthModule.forRoot(), // OAuth module initialization
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}