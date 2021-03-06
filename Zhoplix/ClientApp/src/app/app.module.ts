import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material';
import { TokenInterceptor } from './services/authentication/token.interceptor';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { JwtModule } from "@auth0/angular-jwt";


import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ROUTES } from './services/route-services/routes';
import { AuthGuardService } from './services/route-services/auth-guard/auth-guard.service';
import { RoleGuardService } from './services/route-services/role-guard/role-guard.service';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { CreateComponent } from './components/admin/create/create/create.component';
import { TitleComponent } from './components/admin/create/title/title.component';
import { ConfirmEmailComponent } from './components/authentication/confirmEmail/confirmEmail.component';
import { PlayerComponent } from './components/player/player/player.component';
import { SeasonComponent } from './components/admin/create/season/season.component';
import { ArrayFilterPipe } from './pipes/filter-by/filter-by.pipe';
import { LimitToPipe } from './pipes/limit-to/limit-to.pipe';
import { SelectDropDownComponent } from './components/dropdown/select-dropdown.component';
import { ProfileSettingsComponent } from './components/user-profile/profile-settings/profile-settings.component';
import { EpisodeComponent } from './components/admin/create/episode/episode.component';
import { LoginHelpComponent } from './components/authentication/login-help/login-help.component';
import { ResetPasswordComponent } from './components/user-profile/reset-password/reset-password.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegistrationComponent,
    CreateComponent,
    ConfirmEmailComponent,
    TitleComponent,
    PlayerComponent,
    SeasonComponent,
    EpisodeComponent,
    SelectDropDownComponent,
    LimitToPipe,
    ProfileSettingsComponent,
    LoginHelpComponent,
    ResetPasswordComponent,
    ArrayFilterPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    WavesModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    JwtModule.forRoot(  {
      config: {
      whitelistedDomains: ["*"]
      }
    }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CookieService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuardService,
    RoleGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
