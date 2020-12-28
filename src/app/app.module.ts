import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbsenceService } from './absence.service';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './hawk/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    AbsenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
