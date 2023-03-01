import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from './security/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { ButtonComponent } from './components/button/button.component';
import { PaymentMethodPipe } from './pipes/payment-method.pipe';
import { BagComponent } from './components/bag/bag.component';
import { CardComponent } from './components/card/card.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { QuantityControllerComponent } from './components/quantity-controller/quantity-controller.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ChipComponent } from './components/chip/chip.component';
import { LogoComponent } from './components/logo/logo.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { LoggedInGuard } from './security/logged-in-guard';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    OrderStatusComponent,
    ButtonComponent,
    PaymentMethodPipe,
    BagComponent,
    CardComponent,
    CartButtonComponent,
    EmptyStateComponent,
    SidebarComponent,
    OrderSummaryComponent,
    QuantityControllerComponent,
    SearchBarComponent,
    ChipComponent,
    LogoComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent,
    DetailsComponent,
    HomeComponent,
    LoginComponent,
    NewAccountComponent,
    OrderDetailComponent,
    OrdersComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
