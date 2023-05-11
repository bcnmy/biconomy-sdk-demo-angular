import { Component } from '@angular/core';
import SocialLogin from '@biconomy/web3-auth';
import { ethers } from 'ethers';
// import "./style.css"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bsdk-demo-ng';
  async connectWallet() {
    // create an instance of SocialLogin
    const socialLogin = new SocialLogin();
    // init social login SDK, all params are optional
    await socialLogin.init();

    // pops up the UI widget
    socialLogin.showWallet();
    if (!socialLogin?.provider) return;
    // create a provider from the social login provider that
    // will be used by the smart account package of the Biconomy SDK
    const provider = new ethers.providers.Web3Provider(socialLogin.provider);
    // get a list of accounts available with the provider
    const accounts = await provider.listAccounts();
    console.log('EOA address', accounts);
    // socialLogin.hideWallet();
  }
}
