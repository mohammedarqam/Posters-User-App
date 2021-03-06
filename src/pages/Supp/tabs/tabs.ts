import { Component } from '@angular/core';
import { HomePage } from '../../MainTabs/home/home';
import { ExplorePage } from '../../MainTabs/explore/explore';
import { NavigatePage } from '../../MainTabs/navigate/navigate';
import { ProfilePage } from '../../MainTabs/profile/profile';
import { CartPage } from '../../MainTabs/cart/cart';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = NavigatePage;
  tab4Root = CartPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
