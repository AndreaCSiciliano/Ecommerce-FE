import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'checkout', component: CheckoutComponent,
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: 'account', component: AccountComponent },
  { path: 'orders', component: OrdersComponent,
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: 'thanks', component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
