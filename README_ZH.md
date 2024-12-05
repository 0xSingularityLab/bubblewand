## 30秒即可免费创建你的去中心化Web3区块链骰子赌博游戏

很多人都想创建属于自己的Web3区块链赌场，但又苦于不擅长编写代码而止步。

现在，由奇点实验室打造的泡泡棒发射台可以让你在30秒内轻松创建你自己的区块链骰子游戏，游戏支持中英文无缝切换，骰子游戏包含 投注、玩家可任意调整胜率、自动投注、坐庄(让玩家成为股东)等玩家功能，还包含设置手续费(给游戏创建者)、全站维护开关、存款开关、投注开关、转让管理员、管理员提现、删除股东等管理员功能。

骰子游戏的合约经过严格的安全审计，是完全公平的链上骰子游戏。

详细教程可移步：https://medium.com/@singularitylab/30%E7%A7%92%E5%85%8D%E8%B4%B9%E5%88%9B%E5%BB%BA%E4%BD%A0%E7%9A%84%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96web3%E5%8C%BA%E5%9D%97%E9%93%BE%E9%AA%B0%E5%AD%90%E6%B8%B8%E6%88%8F-e9dcd128b961

### 部署游戏教程
============================================

### 第一步

访问泡泡棒发射台网站https://bubblewand.xyz 或者https://pods.icu，在网站中你可以点击“游戏演示站(基于Base网络)”访问我们Base链上的骰子游戏演示站先了解玩法。如图1所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*y8Px3Gv09hqf1qz3dXpJ0Q.png)

### 第二步

选择你的骰子游戏的下注类型，目前支持 ETH/BNB/POL 3种原生代币下注和使用USDT下注，你按照需求选择想创建的骰子游戏类型即可。这里我们以创建ETH骰子游戏作为演示，如图2所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*n_-oL0aN1MUhEaAExX_59g.png)

### 第三步

进入到部署界面，首先要选择你想部署在哪个网络，目前支持Base网络、BNBChain网络(BSC)、Polygon网络，后面会开放更多网络供使用者部署，这里我们选择Base网络；接下要选择你的游戏类型，游戏类型分两种：

1. 创建去中心化游戏（无管理员）：这个类型下游戏管理员是0x0000000000000000000000000000000000000000，这个选项所创建的游戏是完全去中心化的，并且游戏创建费用永久免费。但你不会拥有管理游戏存款、管理手续费等一切管理员权限。

2. 我要做游戏管理员：这个选项所创建的游戏将会把你的钱包地址设置为管理员，你将拥有管理骰子游戏的所有权限，选择这个游戏类型将收取少量创建费用。

选择完游戏类型后，我们可以设置完 最小投注金额(最低0.001)、最小提现金额(最低0.01)、最大股东数、最大存款金额（庄家资金池上限）、管理员收取的手续费，当然你也可以直接全部保持默认，如图3所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ChrZgQ7OJuogK_S6DDul3w.png)

这里建议初期暂时设置手续费为0，等你的游戏运营到一定规模后再开始收取手续费，因为手续费在游戏创建后是可以随意调整的。

### 第四步

然后点击“开始部署”按钮，网页会与钱包进行费用确认，在钱包点击确定后等待30秒，你的骰子游戏就创建成功了。如图4所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*x_Va5Wu0mDLQ-qXqgJ-fyg.jpeg)

### 第五步

现在只要把你的骰子游戏代码上传到Netlify托管网站就可以上线了。先保存好你的游戏合约地址，下载生成好的游戏压缩包代码到本地，如图5所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Etx31--o18KKvn4lT7txag.png)

访问https://www.netlify.com 点击“Sign up”注册你的账号，如果你有gmail邮箱可以直接点击“Sign up with Gmail”进行无密码登陆，如果你想用自己的邮箱就点击“Sign up with email”。注册流程很简单，填写邮箱和密码即可完成注册(记得注册完后登陆你的邮箱点击一下邮箱验证链接)。如图6、7、8所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Kx6ov9D7Qnhsd3-m24Q0Ug.png)
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XFc9ugf9OIE7kxd-D91y-A.jpeg)
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OsG9l193RSsizsqEWCQbpg.png)

### 第六步

解开游戏压缩包，里面有stable和general两个文件夹，两个文件夹对应两个不同的游戏版本：

1.general是通用版，不需要改任何代码就直接可以用，但是唯一影响用户体验的就是需要在玩游戏前输入游戏的合约地址才能开始游戏，你可以访问https://dicegame.bet/general/index.html或者https://dicegame.bet/general/index_usdt.html 了解和体验一下。所以如果你完全不想修改代码，可以直接上传general里的文件到Netlify即可。如图9所示。

![](https://miro.medium.com/v2/resize:fit:576/format:webp/1*SdC3kn0wXaq2QjBGql3PiQ.png)

2.stable版本需要简单修改1处内容即可使用，这个版本玩家只需要访问你的网站即可开始游戏，用户体验好很多。修改方式：用记事本打开contractABI.js这个文件（USDT版的文件名为contractABI_usdt.js），把内容里的“Your Contract Address”内容替换为你的游戏合约地址然后保存文件即可。如图10、11所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4O6YC8o3T2KmwAvrcLqEWg.png)
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UJvozkZXtTJvDX_RyoC99A.png)

### 第七步

访问https://netlify.com并登陆，然后访问https://app.netlify.com/drop，点击“browse to upload“选择stable或者general文件夹上传，如图12所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*rBtcGul-xv-WmuQZp2BHQw.png)

等待上传完毕后，回到你netlify的个人页面，点击“Sites”，里面就有你部署好的游戏网站了，如图13所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YznuwVvWJhS1Ca7-Q2rL5A.jpeg)

点击你部署的网站，再点击里面的“Site configuration”就可以看到Netlify给你分配的域名了。如图14所示。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QbfM_6hf3I6OMp124rXyBg.png)

Tips1：如果在netlify上传文件后一直卡着不动，等了好久也没部署成功，这时候可以去个人的控制面板把部署停掉，然后重新再上传就好了。

Tips2：netlify只会生成一个二级域名，如何绑定1级域名可以关注我们后续的文章。当然，你有任何问题都可以通过Telegram咨询我们@slabdao。

============================================

现在，你可以把你的骰子游戏网址发给你的朋友们开始愉快的赌博游戏了。游戏界面如图15。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_ju4BytTN773SgPYOf2BBQ.png)
