[English](https://github.com/0xSingularityLab/bubblewand/blob/main/README.md) | [中文教程](https://github.com/0xSingularityLab/bubblewand/blob/main/README_ZH.md)

============================================

## Create Your Decentralized Web3 Dice Game in 30 Seconds for Free

Many people want to create their own Web3 blockchain casino but are often stopped by the difficulty of coding. 

Now, with the Bubble Wand Launcher developed by Singularity Lab, you can easily create your own blockchain dice game in just 30 seconds. The game supports seamless switching between English and Chinese, and includes player functions such as betting, auto-betting, and sitting as the house (allowing players to become shareholders). It also includes admin features like setting transaction fees (for the game creator), global maintenance switches, deposit switches, betting switches, transferring admin rights, admin withdrawals, and deleting shareholders.

The dice game contract has undergone strict security audits, ensuring it is a fully fair on-chain dice game.

### Game Creation Tutorial
============================================
### Step 1
Visit the Bubble Wand Launcher website at https://bubblewand.xyz or https://pods.icu. On the site, you can click "Go to Game Demo (Base network)" to explore the demo of our dice game on the Base chain and get a feel for the gameplay, as shown in Figure 1.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4juYEdf_bwg1ZCSnvib3kg.jpeg)

### Step 2
Choose your dice game's betting type. Currently, you can bet with ETH, BNB, or POL native tokens, and also with USDT. Simply select the type of dice game you want to create. For this demonstration, we will create an ETH dice game, as shown in Figure 2.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZbrtlEBqJ8EbWzZ-jOi9Lg.png)

### Step 3
Enter the deployment interface. First, choose the network on which you want to deploy the game. Currently, we support Base Network, BNBChain (BSC), and Polygon networks. More networks will be available for deployment in the future. For this tutorial, we will choose the Base Network. Next, choose your game type. There are two types:

1. Create a Decentralized Game (No Admin): In this type, the game admin is set to 0x0000000000000000000000000000000000000000. The game created under this option is fully decentralized, and there are no admin privileges for managing deposits, setting fees, etc. The game creation fee is free forever.

2. I Want to Be the Game Admin: This option will set your wallet address as the game admin, granting you full control over the dice game. A small creation fee is charged for this type.

Once the game type is selected, you can set parameters such as minimum bet amount (minimum 0.001), minimum withdrawal amount (minimum 0.01), maximum number of shareholders, maximum deposit amount (house pool cap), and the admin's transaction fee. You can also leave everything as default, as shown in Figure 3.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fjjaLN24YozlQWTcyEi6Qw.png)

It's recommended to set the transaction fee to 0 initially and start charging fees once your game has gained some traction, since fees can be adjusted after the game is live.

### Step 4
After setting everything up, click the "Start Deployment" button. The website will prompt your wallet for a fee confirmation. After confirming in the wallet, wait 30 seconds, and your dice game will be successfully created, as shown in Figure 4.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mPAT_LjZfhSnRT3gnTDnPQ.png)

### Step 5
Now, simply upload your dice game code to Netlify for hosting. First, save your game contract address and download the generated game zip file to your local machine, as shown in Figure 5.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-fGYZbThNCObI7EWI1jjbA.png)

Visit https://www.netlify.com and click "Sign up" to register your account. If you have a Gmail account, you can sign up using "Sign up with Gmail" for password-less login. Otherwise, click "Sign up with email" to register with your email. The registration process is simple: just enter your email and password, and remember to verify your email after registration. As shown in Figures 6, 7, and 8.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Kx6ov9D7Qnhsd3-m24Q0Ug.png)

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XFc9ugf9OIE7kxd-D91y-A.jpeg)

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OsG9l193RSsizsqEWCQbpg.png)

### Step 6
Unzip the game zip file. Inside, you'll find two folders: "stable" and "general." These folders correspond to two different game versions:
1. General version: This version requires no code modification and can be used immediately. However, the user experience is slightly affected as users need to enter the game contract address before starting the game. You can experience it by visiting https://dicegame.bet/general/index.html or https://dicegame.bet/general/index_usdt.html. If you don't want to modify any code, simply upload the files from the "general" folder to Netlify, as shown in Figure 9.

![](https://miro.medium.com/v2/resize:fit:576/format:webp/1*SdC3kn0wXaq2QjBGql3PiQ.png)

2. Stable version: This version only requires a simple modification. Players can start the game by visiting your site, which provides a much better user experience. To modify: Open the contractABI.js file (for the USDT version, the file name is contractABI_usdt.js) with Notepad, replace "Your Contract Address" with your game contract address, and save the file. As shown in Figures 10 and 11.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4O6YC8o3T2KmwAvrcLqEWg.png)

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UJvozkZXtTJvDX_RyoC99A.png)

### Step 7
Visit https://netlify.com and log in. Then go to https://app.netlify.com/drop, click "Browse to upload," and select the stable or general folder to upload, as shown in Figure 12.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*rBtcGul-xv-WmuQZp2BHQw.png)

Once the upload is complete, go back to your Netlify personal page, click "Sites," and you will find your deployed game site there, as shown in Figure 13.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YznuwVvWJhS1Ca7-Q2rL5A.jpeg)

Click on your site, then click "Site configuration" to see the domain assigned by Netlify, as shown in Figure 14.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QbfM_6hf3I6OMp124rXyBg.png)

Tips 1: If the upload to Netlify gets stuck and the game does not deploy, you can stop the deployment from your personal control panel and re-upload the files.

Tips 2: Netlify will generate a subdomain. To bind a top-level domain, please refer to our follow-up articles. If you have any questions, feel free to contact us on Telegram @slabdao.

============================================

Now, you can share your dice game URL with your friends and start the fun gambling game!

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-tJlQVQZRRW2ZkvHZ-7JGQ.png)
