//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    word: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    scrollTop: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    responseData: {
        "段子": [
            {
                "url": "https://www.zhihu.com/question/26593198/answer/33497376",
                "content": "叫你们反对转基因，结果连个抗病抗倒伏的小麦都弄不出来的→_→",
                "title": "《星际穿越》告诉了我们什么？"
            },
            {
                "url": "https://www.zhihu.com/question/22497010/answer/21801357",
                "content": "郭德纲：“都是同行给衬托的。”",
                "title": "《爱情公寓》为什么会火？"
            },
            {
                "url": "https://www.zhihu.com/question/20796756/answer/28663584",
                "content": "背面让人放肆，但正面就是克制…",
                "title": "「背影杀手」是什么意思，褒义还是贬义？"
            },
            {
                "url": "https://www.zhihu.com/question/21074549/answer/17092502",
                "content": "想起一个笑话。<br>我问一个铁路当差的哥们，说中国高铁国产化率达到85%这真的假的？<br>他说，真的，我们按重量计算的。",
                "title": "「这社会 95% 以上的事情都是高中生知识水平就能解决，最关键是跟人的沟通相处能力」这话对吗？"
            },
            {
                "url": "https://www.zhihu.com/question/21223705/answer/17647760",
                "content": "因为全世界第一颗原子弹是45年才爆炸的。",
                "title": "1944 年，美军为什么没在柏林上空扔下原子弹？"
            },
            {
                "url": "https://www.zhihu.com/question/24451611/answer/27886773",
                "content": "苏亚雷斯空腹坚持比赛",
                "title": "2014 年世界杯最感动你的瞬间是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/19787814/answer/25433127",
                "content": "有可能是博士刚毕业。。。。",
                "title": "35 岁了还不结婚的男人是什么心态？和他们谈恋爱靠不靠谱？"
            },
            {
                "url": "https://www.zhihu.com/question/20541947/answer/17194846",
                "content": "《计算机网络》第一章就说了：不要低估一辆载满磁带飞奔的货车的带宽。",
                "title": "500GB 的数据库怎么发送给客户？"
            },
            {
                "url": "https://www.zhihu.com/question/25145861/answer/30202727",
                "content": "小时候我总觉得过两年我就能和大我两岁的哥哥一样大了。",
                "title": "iPhone 处理器的性能按照现在每年翻一倍的节奏，是不是很快就能赶上甚至超过台式电脑的处理器？"
            },
            {
                "url": "https://www.zhihu.com/question/25145861/answer/30202727",
                "content": "小时候我总觉得过两年我就能和大我两岁的哥哥一样大了。",
                "title": "iPhone 处理器的性能按照现在每年翻一倍的节奏，是不是很快就能赶上甚至超过台式电脑的处理器？"
            },
            {
                "url": "https://www.zhihu.com/question/25153900/answer/30206460",
                "content": "我们好歹还是人，产品和设计已经是狗了……",
                "title": "IT 工程师被叫「码农」时是否会不舒服？"
            },
            {
                "url": "https://www.zhihu.com/question/30931790/answer/49992401",
                "content": "问问你老师是不是出门不捡钱就算丢",
                "title": "一个人八块钱买了一只鸡九元卖掉，然后又花十元买了一只鸡十一元卖掉，最后他赚了还是亏了几元？"
            },
            {
                "url": "https://www.zhihu.com/question/35891567/answer/65024523",
                "content": "别闹了，快把篮球还给别人。",
                "title": "一个女生被五个人追是一种什么样的体验？"
            },
            {
                "url": "https://www.zhihu.com/question/41899403/answer/92895518",
                "content": "你考数学的时候，题目只问“小明要多久才能到学校”，你会不会发毛？",
                "title": "一个爸爸每月要赚多少钱，才能撑起一个家？"
            },
            {
                "url": "https://www.zhihu.com/question/29240203/answer/43681043",
                "content": "国之利器，本不可以示人，诸位一窥门径，何其幸哉。",
                "title": "上厕所忘了拉拉链，出来被女同事看到并且笑了，如何优雅的圆场？"
            },
            {
                "url": "https://www.zhihu.com/question/26513128/answer/33811859",
                "content": "知乎五大党派：“什么体验”党，“如何评价”党，“怎么看待”党，“如何优雅”党，“什么心态”党。",
                "title": "上知乎的人可以怎样分类？"
            },
            {
                "url": "https://www.zhihu.com/question/22221973/answer/26374664",
                "content": "整个高中老子替那个重名的傻逼挨了十多次打",
                "title": "与和自己完全同名的人相处是一种怎样的感觉？"
            },
            {
                "url": "https://www.zhihu.com/question/21905681/answer/55479508",
                "content": "压岁钱的存折，模拟考的合格。<br><br>追求者的暗恋，前男友的思念。<br><br>戒某宝的剁手，p s 掉的肥肉。<br><br>屌丝的诚意之作，早恋的青春之堕。<br><br>老板口中的未来，姨姑操心的现在。",
                "title": "世界上最没用的东西是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/34957134/answer/61129083",
                "content": "按照保密法，绝密&gt;机密&gt;秘密，我觉得对于一个曾经第一时间看到解密绝密文件的人来说，我应该有资格回答这个问题。那年我高三，高考试卷。",
                "title": "世界上有哪些在当时为最高机密但现已被公开的重大历史事件？"
            },
            {
                "url": "https://www.zhihu.com/question/23474904/answer/25122270",
                "content": "世界又不认识你，它是无意的。",
                "title": "世界是善意的吗？"
            },
            {
                "url": "https://www.zhihu.com/question/38389474/answer/84590571",
                "content": "“帝国主义者侵略我们，奴役我们，他们要把我们的地瓜分掉！”…“等等，他们为什么要分我们的地瓜？”",
                "title": "中国人到底有多能吃？"
            },
            {
                "url": "https://www.zhihu.com/question/26585073/answer/33315913",
                "content": "这么多回答居然没有一个引用老罗语录。这真是这个国家的悲哀。看来罗老师普及情怀的路任重而道远啊。<br><br>“我从没用过诺基亚的任何一款机，这牌子如日中天的时候，在我眼里也是一坨如日中天的屎。” ——罗永浩",
                "title": "为什么会有人执着于去黑一个像锤子手机这样自己根本没用过的产品？"
            },
            {
                "url": "https://www.zhihu.com/question/22167297/answer/20503859",
                "content": "你想说我怎么就碰不到这种好事，是吗？",
                "title": "为什么在现实生活中，很少有见过约炮的女生？"
            },
            {
                "url": "https://www.zhihu.com/question/24890697/answer/34265139",
                "content": "当一个人说要炸了某地火车站时，警察叔叔会出动；<br>当一个人说要炸了整个地球时，人们会投来同情的目光（",
                "title": "为什么大家说沉迷韩剧的妹纸不切实际，却不说沉迷二次元的汉纸不切实际？"
            },
            {
                "url": "https://www.zhihu.com/question/20320900/answer/29227778",
                "content": "<p>化妆品腌入味了→_→<\/p>",
                "title": "为什么女生有「体香」？"
            },
            {
                "url": "https://www.zhihu.com/question/33981992/answer/57671011",
                "content": "为什么霍格沃兹的校长是邓不利多，而不是邓不利少或邓不利刚刚好？",
                "title": "为什么形容一个事物小时称迷你，而不是迷我或者迷他？"
            },
            {
                "url": "https://www.zhihu.com/question/27900396/answer/39407938",
                "content": "汽水厂帮你都帮到这个份上了，你自己都不把握机会也是注孤生。。。",
                "title": "为什么很多力气小的人拧不开瓶盖，饮料厂商不去优化瓶盖？"
            },
            {
                "url": "https://www.zhihu.com/question/24292550/answer/27313340",
                "content": "这是你朋友尝试对人生三大终极问题其二的解答：<br>“我从哪里来”<br>“要到哪里去”<br><br>如果是实名火车票的话，那连<br>“我是谁”<br>也解决了。",
                "title": "为什么微信朋友圈微博总有人晒自己的飞机火车票？"
            },
            {
                "url": "https://www.zhihu.com/question/27802698/answer/38157349",
                "content": "就是何以笙箫自带的生疏感和古文感呗，你换成“为啥唢呐哑”试试",
                "title": "为什么我认为「何以笙箫默」这五个字作为电视剧名，优美浪漫、很有意境，使人很有感觉、心生向往？"
            },
            {
                "url": "https://www.zhihu.com/question/19582937/answer/12298523",
                "content": "我不是很sure，也许有些term不好translate，或者要show off自己的外语level，再不然maybe是刚从国外return，还没有used to全用中文。",
                "title": "为什么有很多人喜欢在中文里面夹杂英文？"
            },
            {
                "url": "https://www.zhihu.com/question/21030336/answer/16943618",
                "content": "女的会一巴掌扇过来然后说“你TM敢咒我爸掉河里！？”",
                "title": "为什么没怎么见过男人问自己的老婆「我和你爸同时掉进水里……」的问题？"
            },
            {
                "url": "https://www.zhihu.com/question/26848428/answer/34303562",
                "content": "连房都没有，还智能家居。。。",
                "title": "为什么现在（2014年11月）智能家居火不起来？"
            },
            {
                "url": "https://www.zhihu.com/question/19556747/answer/12278979",
                "content": "你试试陪男人逛一天，不是商场，而是他喜欢逛的电子市场、玩具城之类。<br><br>第一你会发现他非常能逛，一点也不比你差。<br><br>第二你会发现你的耐心保持不了很长时间。",
                "title": "为什么男人不喜欢逛街？"
            },
            {
                "url": "https://www.zhihu.com/question/25070297/answer/29999712",
                "content": "1978年，我出生了，中国为庆祝我出生而改革开放。2008年，我结婚了，中国为庆祝此事还举办了奥运会。",
                "title": "为什么自从快播消失之后，2014年七月开始，越来越多的针对少女的刑事案件频繁发生？"
            },
            {
                "url": "https://www.zhihu.com/question/27856853/answer/38371447",
                "content": "天寒地冻的，哪有时间和你磨叽。",
                "title": "为什么越靠北方地区的人性格越直接、彪悍？"
            },
            {
                "url": "https://www.zhihu.com/question/23714708/answer/34323280",
                "content": "如果一个网站打不开或者打开很慢要等半年  你会一直等到打开为止？？",
                "title": "为什么追我的男生最多只能坚持追半年？"
            },
            {
                "url": "https://www.zhihu.com/question/22624255/answer/34190749",
                "content": "因为我实在看不下去了……",
                "title": "为什么那么多人愿意无偿分享知识？"
            },
            {
                "url": "https://www.zhihu.com/question/19747825/answer/20085563",
                "content": "“这个时代更多人选择单身的原因大抵是大家都在等那个自己配不上的人一时糊涂。”",
                "title": "为什么部分剩男、剩女因找不到合适的对象所以不结婚？为什么他们不找单身对象？"
            },
            {
                "url": "https://www.zhihu.com/question/20071359/answer/39484644",
                "content": "上次有个和尚在杭州吭哧吭哧抓了两条蛇妖，看被你们骂成啥样了……",
                "title": "为什么驱魔捉鬼都是道士做的事情，而和尚不参与呢？"
            },
            {
                "url": "https://www.zhihu.com/question/25520867/answer/30986992",
                "content": "你上了工科学校？<br>抖个机灵这么多朋友捧场看来大家都对工科怨念很深啊。",
                "title": "为什么高中没人说我长得漂亮，大学却有很多？"
            },
            {
                "url": "https://www.zhihu.com/question/26608207/answer/33388113",
                "content": "打完都成中华民族内战了",
                "title": "为何「中国历史上曾长期是世界上最强大的国家之一，但没有留下殖民和侵犯他国的记录」？"
            },
            {
                "url": "https://www.zhihu.com/question/21444710/answer/18248095",
                "content": "用二郎腿。",
                "title": "二郎神流眼泪的时候，要用哪只手拂去天眼上的泪痕？"
            },
            {
                "url": "https://www.zhihu.com/question/19807523/answer/13023700",
                "content": "和女朋友讲道理",
                "title": "什么事情让你崩溃过？"
            },
            {
                "url": "https://www.zhihu.com/question/30120524/answer/46899110",
                "content": "售票处",
                "title": "什么宿舍名字能镇住对门的「金銮殿」？"
            },
            {
                "url": "https://www.zhihu.com/question/22137353/answer/42396866",
                "content": "没上公交车前:挤挤啊，挤挤大家都上去了。<br>上了公交车后:别他么往上挤了，等下一辆呗。",
                "title": "什么是「双重标准」？"
            },
            {
                "url": "https://www.zhihu.com/question/28763764/answer/42052460",
                "content": "不搞暧昧不收花，果断撇清关系防止男方浪费时间难道不是业界良心吗？",
                "title": "今天买了花送女神，不到一分钟就被扔到垃圾桶，然后我被全面拉黑，为什么？"
            },
            {
                "url": "https://www.zhihu.com/question/31701029/answer/114048701",
                "content": "“学长，我喜欢你很久了，有机会吗？”<br>“会!”",
                "title": "会有机化学是种怎样的体验？"
            },
            {
                "url": "https://www.zhihu.com/question/22065717/answer/27176661",
                "content": "不小心被阿里巴巴收购了……<br><br>评论区已被萌哭",
                "title": "你为什么加入阿里巴巴？"
            },
            {
                "url": "https://www.zhihu.com/question/24097289/answer/75044003",
                "content": "间歇性凌云壮志，持续性混吃等死。",
                "title": "你会如何用一句话来描述自己？"
            },
            {
                "url": "https://www.zhihu.com/question/46711189/answer/116552675",
                "content": "世间情动，不过盛夏白瓷梅子汤，碎冰碰壁当啷响。",
                "title": "你听到过或写下过最漂亮的一句话是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/26928568/answer/34701201",
                "content": "三十五年，楚伐随。随曰:“我无罪。”楚曰:“我蛮夷也。”                     ——《史记·楚世家》",
                "title": "你听过哪些感到「他说得好有道理，我竟然无言以对」的话？"
            },
            {
                "url": "https://www.zhihu.com/question/28297599/answer/40250065",
                "content": "昨晚我在酒吧，一美女朝我这边走来，问这里有人坐吗？我礼貌地回答『没有』，并且脑袋不断思考等会要和她聊什么话题。然后美女把那张椅子拿走了。",
                "title": "你听过或写过最棒的故事是哪一个？"
            },
            {
                "url": "https://www.zhihu.com/question/26039019/answer/31954564",
                "content": "难道不是这个？<br><br>( *・ω・)✄╰ひ╯",
                "title": "你在网上聊天时看到过哪些特别逗或者贱的聊天表情呢？"
            },
            {
                "url": "https://www.zhihu.com/question/34600604/answer/60258973",
                "content": "家有一老如有一鸨",
                "title": "你妈觉得你嫁不出去是种什么样的体验？"
            },
            {
                "url": "https://www.zhihu.com/question/20767176/answer/46419476",
                "content": "坐摩托车，师傅最前面，我中间，女朋友后面。<br><br>行驶过程中，女朋友的胸不停蹭我，不知不觉起了反应。<br><br>一会儿，师傅回过头，眼神复杂地看着我，幽幽开口:“哥们，几个意思啊”",
                "title": "你最尴尬的一次经历是怎样的？"
            },
            {
                "url": "https://www.zhihu.com/question/36866242/answer/71240299",
                "content": "“在自我价值没有实现的时候，所有的陪伴都是拖累。”<br>“在你没有变成你想成为的人的时候，你所遇到的永远不是对的人。”",
                "title": "你最穷的时候，是不是也不想谈恋爱结婚？"
            },
            {
                "url": "https://www.zhihu.com/question/31443786/answer/52273664",
                "content": "有一回去面试，面试官问了一大摞问题，最后问了句，你的初衷是什么？<br><br><b>“灵溪八中？”<\/b>   我说",
                "title": "你有过哪些神补刀？"
            },
            {
                "url": "https://www.zhihu.com/question/28868745/answer/123137360",
                "content": "你以为孙悟空定住了七仙女真的什么都没有做？葫芦娃刚好七个，合在一起还能变成石头",
                "title": "你看过最好的黑色幽默故事是哪个？"
            },
            {
                "url": "https://www.zhihu.com/question/26885129/answer/34414635",
                "content": "志愿军入朝前<br>志愿军：“全副美械什么样我们知道。”<br>美军：“中国军队什么样我们知道。”<br>交战后<br>中、美：“操！”",
                "title": "你知道的由误会酿成的最大损失是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/24811739/answer/47383108",
                "content": "我上班就是为了钱，他非得和我谈理想，可我的理想是不上班…",
                "title": "你第一次跳槽是什么原因？后悔吗？"
            },
            {
                "url": "https://www.zhihu.com/question/37904962/answer/76243704",
                "content": "<blockquote>老妈：“唉！你看看人家的孩子都会打酱油了！”<br><br>我：“有啥好担心的，你孩子不也会打酱油了么。”<\/blockquote><br>转载",
                "title": "你见过哪些令你瞠目结舌的神逻辑？"
            },
            {
                "url": "https://www.zhihu.com/question/48840695/answer/327255508",
                "content": "<p>我的智障宝宝系列<\/p><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic3.zhimg.com/v2-ed31f5448113d5af5ceedf5db7e98092.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950875728506503168\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950875728506503168\"><\/video><br><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic1.zhimg.com/v2-c209411bdaad0d6d7211870668bf6d11.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950875807694946304\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950875807694946304\"><\/video><br><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic1.zhimg.com/v2-fd37ff49d4281970681398009e416e2a.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950875842545496064\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950875842545496064\"><\/video><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic4.zhimg.com/v2-5b86c6a9e13443433368b65da233390d.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950875982291226624\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950875982291226624\"><\/video><br><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic1.zhimg.com/v2-05772accdc5724530044d0069d9ccb4f.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950840994984415232\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950840994984415232\"><\/video><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic7.zhimg.com/v2-cc09549e98549c49bb11168584437609.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950841525521829888\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950841525521829888\"><\/video><br><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic7.zhimg.com/v2-a5c4238a4364e56a06a619f77cdc6ab5.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950841710335500288\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950841710335500288\"><\/video><br><br><br><video id=\"\" data-swfurl=\"\" poster=\"https://pic2.zhimg.com/v2-fe78b770808f04af39ef9d26e074ecb9.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950876574107521024\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950876574107521024\"><\/video><br><br><br><br>颜值界扛把子系列<br><video id=\"\" data-swfurl=\"\" poster=\"https://pic3.zhimg.com/v2-8c5f734e03d53d8c5b00f6d21449fc87.jpg\" data-sourceurl=\"https://www.zhihu.com/video/950878036355166208\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"950878036355166208\"><\/video><br><br><br><br><br><br><br><br><video id=\"\" data-swfurl=\"\" poster=\"file:///data/data/com.zhihu.android/cache/1519544389628.jpeg\" data-sourceurl=\"https://www.zhihu.com/video/951118784317124608\" data-name=\"\" data-video-id=\"\" data-video-playable=\"\" data-lens-id=\"951118784317124608\"><\/video><br><br><br><br><br><br><br>—————————————————————————<br>很多人要视频啊……<br>我把视频都放在qq空间上了，账号2901333674，自取。",
                "title": "你见过最可爱的孩子是什么样子的？"
            },
            {
                "url": "https://www.zhihu.com/question/25907342/answer/31670420",
                "content": "居然觉得自己还有机会 T^T",
                "title": "你见过的情商最低的行为是怎样的？"
            },
            {
                "url": "https://www.zhihu.com/question/28900328/answer/42527518",
                "content": "南村群童欺我老无力……<br><br><br>好吧，这尼玛都能上日报，为了不让大家白来，蘑菇叔友情提示：<b>评论有惊喜<\/b>！ <a data-hash=\"9db8260da53e11296d193cca4b89371a\" href=\"/people/wan-wan-15\" class=\"member_mention\">@丸丸<\/a>你要涨粉了，快以炮相谢吧！",
                "title": "你觉得最绝望的古诗词是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/30787344/answer/50476273",
                "content": "“四个2带俩王!”",
                "title": "你说过或听过最霸气的一句话是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/46626284/answer/240189121",
                "content": "我一个同事，痛风住院打吊针。<br>一边呻吟着一边跟我说：今晚先停一下啤酒，只吃螃蟹。看看到底是啤酒的问题还是螃蟹的问题……",
                "title": "你身边有哪些神人？"
            },
            {
                "url": "https://www.zhihu.com/question/20636030/answer/15703528",
                "content": "说一个收到过的“特别”的生日礼物<br>20岁生日那年，那个时候的男友是搞IT的，费尽心机去中关村找到一个已经淘汰了的奔腾三CPU，以此庆祝我“奔三”",
                "title": "你送过或收到过什么特别的礼物？"
            },
            {
                "url": "https://www.zhihu.com/question/39854849/answer/83755508",
                "content": "鲁迅，原名（周），（树）人。<br><br>好像没有什么不对…<br><br><br><br><br><br><br><br><br><br><br><br>-------------<br>答案应该是（周树人），（浙江绍兴）",
                "title": "你遇到的最搞笑的试卷答案是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/20967951/answer/16829507",
                "content": "过儿，你告诉姑姑你怎样做到左拥右抱？？",
                "title": "假如杨过要纳妾，小龙女会同意吗？为什么？"
            },
            {
                "url": "https://www.zhihu.com/question/20010380/answer/34544805",
                "content": "<p>我不会讲那么多大道理，我只知道在浴缸泡澡的时候不用把脚剁下来搁一边。<\/p><br><p>所以，我想袜子和衣服一起洗肯定没问题。<\/p>",
                "title": "内裤和袜子放到洗衣机里一起洗，有问题吗？"
            },
            {
                "url": "https://www.zhihu.com/question/23325512/answer/58332540",
                "content": "屌丝粪青的思维是这样的：<br>如果美女嫁了富豪，这女的就是贪图钱财。<br>如果美女嫁了官员，这女的就是爱慕权力。<br>如果美女嫁了学者，这女的就是沽名钓誉。<br>如果美女嫁了自己之外的屌丝，这女的真特么瞎了眼了。",
                "title": "刘强东和章泽天在一起你怎么看？"
            },
            {
                "url": "https://www.zhihu.com/question/31027235/answer/51217986",
                "content": "贵校化院最有名的三行遗书:<br>师兄你看<br>这个烧瓶<br>在冒泡……",
                "title": "化学实验里令你恐惧的有哪些？"
            },
            {
                "url": "https://www.zhihu.com/question/28364865/answer/40754250",
                "content": "有一句话是对的<br>“你在凌晨四点半绝对无法在图书馆找到一个座位”<br>因为进不去",
                "title": "北大的同学凌晨四点半真的在看书吗？"
            },
            {
                "url": "https://www.zhihu.com/question/20003900/answer/22363957",
                "content": "何书桓：八年抗战要开始了。。。",
                "title": "历史上有哪些疑似穿越者？理由是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/38816472/answer/78231574",
                "content": "千万别删。不删还能怪照片，删了就只能怪自己了。",
                "title": "去云南旅游，照了一张东巴教信奉的神像，回来各种倒霉，是否应该删除照片，又不那么愿意认命，求解？"
            },
            {
                "url": "https://www.zhihu.com/question/25017896/answer/29819596",
                "content": "男人渣不要紧，女孩子蠢就行了",
                "title": "发现男友认识我之前私生活很混乱该接受吗？"
            },
            {
                "url": "https://www.zhihu.com/question/20157984/answer/29241670",
                "content": "古筝就是叮叮咚咚，古琴除了叮叮咚咚，还有diang diang，还有嘚楞楞，还有pia！还有扑拢通，还有崆隆隆隆，还有嘀哩嘀哩达拉达拉-达拉达拉嘀哩嘀哩，不一而足~~~",
                "title": "古筝和古琴是什么区别？"
            },
            {
                "url": "https://www.zhihu.com/question/20538038/answer/15415506",
                "content": "对我的财务健康造成了一定损害。",
                "title": "同龄人中不少人结婚生子了，对你有什么影响吗？"
            },
            {
                "url": "https://www.zhihu.com/question/31626935/answer/52748100",
                "content": "你没邀请我回答这个问题，是不是暗恋我又不好意思？",
                "title": "听说男性的想象力丰富得超乎女性的想象，怎么样能让我理解男性的想象力程度？"
            },
            {
                "url": "https://www.zhihu.com/question/24462259/answer/28045774",
                "content": "拿一个杯子狠狠摔到地上，看看能不能镇住她，要是镇住了，完事，要是没镇住，顺势往那玻璃渣子上一跪，完事。",
                "title": "吵架时女朋友不让你和她说话，也不让你碰她时，怎么做比较好？"
            },
            {
                "url": "https://www.zhihu.com/question/50902484/answer/124526758",
                "content": "告诉你们一个残忍的秘密  其实你们长得就是他们照片里的样子 ",
                "title": "和不会拍照的人旅游是种怎样的体验？"
            },
            {
                "url": "https://www.zhihu.com/question/26289857/answer/32473197",
                "content": "总觉得性别反了。",
                "title": "和不成熟男人谈恋爱是什么感觉？"
            },
            {
                "url": "https://www.zhihu.com/question/24419194/answer/27795863",
                "content": "当你晕倒的时候，几个大汉过来把你台上救护车，嘴里喊着：“1、2、3起。”",
                "title": "哪一个瞬间真的让你下定决心减肥了？"
            },
            {
                "url": "https://www.zhihu.com/question/22184923/answer/20587194",
                "content": "楞次定律吧——离开一个人和接近一个人同样阻力重重",
                "title": "哪些定律让你印象深刻并认为有指导意义？"
            },
            {
                "url": "https://www.zhihu.com/question/55817232/answer/149225305",
                "content": "合租 ",
                "title": "哪些时候让你感受到了社会对男性的歧视？"
            },
            {
                "url": "https://www.zhihu.com/question/29412557/answer/44668173",
                "content": "卖生男秘方，不准全额退钱。",
                "title": "哪些盈利模式令你拍案叫绝？"
            },
            {
                "url": "https://www.zhihu.com/question/20869340/answer/16511640",
                "content": "小学二年级的我得知暑假作业是抄书50篇，而不是50遍的时候",
                "title": "哪些真相你知道的时候眼泪都要掉下来？"
            },
            {
                "url": "https://www.zhihu.com/question/29591013/answer/284690251",
                "content": "翻书 马冬梅<br>合书 马什么梅<br>翻书 马冬梅<br>合书 马东什么<br>翻书 马冬梅<br>合书 什么冬梅<br>翻书 马冬梅 <br>合书 马冬梅 马冬梅 马冬梅 记住了<br>考试 孙红雷",
                "title": "哪些笑话能让你笑上一辈子？"
            },
            {
                "url": "https://www.zhihu.com/question/24262487/answer/27221506",
                "content": "这个网站都是病友，你问错地方了。",
                "title": "啥都想知道，算不算是一种心理疾病？"
            },
            {
                "url": "https://www.zhihu.com/question/24190102/answer/26966209",
                "content": "回忆是目前人类穿梭时空的唯一方法。",
                "title": "回忆有什么价值？"
            },
            {
                "url": "https://www.zhihu.com/question/27436012/answer/36909215",
                "content": "连一挑五都不会，有什么资格当科密！！！",
                "title": "在一个六人宿舍，我是科密，其他都是科黑，将如何平衡自己的心理？"
            },
            {
                "url": "https://www.zhihu.com/question/20949168/answer/29631057",
                "content": "好好的一个人，怎么送到医院就死了！",
                "title": "在你熟知的行业或领域，有哪些常见的谣言，真相又是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/28861239/answer/42377976",
                "content": "上午发愿修炼，中午就给炖了……",
                "title": "在古代神话中，为什么柳树槐树这种植物可以成精，甚至还有没生命的琵琶，而萝卜白菜水果蔬菜就不能成精呢？"
            },
            {
                "url": "https://www.zhihu.com/question/19750728/answer/12848310",
                "content": "之前老有人提「140字」，现在又说「5行」……<br>我只想说，在乎尺寸的人，往往是经验不足，或者没遇到活儿好的人。",
                "title": "在知乎你有耐心看完 5 行字以上的回答吗？"
            },
            {
                "url": "https://www.zhihu.com/question/23776540/answer/25630427",
                "content": "“世界出错了，竟然不按我的设定运行，必须出手修改这个bug。”<br><br>就酱。",
                "title": "在网上言辞极不友善的人，思维是什么样的？"
            },
            {
                "url": "https://www.zhihu.com/question/23649239/answer/34093857",
                "content": "虚竹道：“小……小姑娘……”<br>那女童喝道：“什么小姑娘，大姑娘？我是你姥姥！”",
                "title": "在金庸小说中，你听过最霸气的台词是哪一句？"
            },
            {
                "url": "https://www.zhihu.com/question/30133196/answer/46983512",
                "content": "然而上期直播她戴的是百达翡丽没有被你们注意到",
                "title": "央视女主播戴 Apple Watch 出镜合理吗？"
            },
            {
                "url": "https://www.zhihu.com/question/21854980/answer/19529203",
                "content": "她的蓝颜们也和你有一样的苦恼。。。。。。。",
                "title": "女朋友不肯对所谓的“蓝颜”们公开恋情，这科学吗？"
            },
            {
                "url": "https://www.zhihu.com/question/31808773/answer/54036492",
                "content": "女生生气了，然后男生要哄女生。<br>男生生气了，女人哄了两下不成也生气了，然后男生哄女生。",
                "title": "女朋友生气之后男生不哄是什么心理？"
            },
            {
                "url": "https://www.zhihu.com/question/21882868/answer/19708739",
                "content": "给他发：我家里今天晚上没人。<br>然后，等他来敲门，就真的没人",
                "title": "女生怎么「高端地」调戏喜欢过的男生？"
            },
            {
                "url": "https://www.zhihu.com/question/21882868/answer/19710600",
                "content": "某天：<br>我：女神你快给我发好人卡吧，我受不了了！！<br><br>女神：那你先表白。<br><br>我：我喜欢你，我们在一起好不好？<br><br>女神：好。<br><br>我：………",
                "title": "女生怎么「高端地」调戏喜欢过的男生？"
            },
            {
                "url": "https://www.zhihu.com/question/24401341/answer/27672432",
                "content": "黑用脑子；<br>喷用口水；<br>批评用心。",
                "title": "如何区分「黑」「喷」与「批评」？"
            },
            {
                "url": "https://www.zhihu.com/question/28775167/answer/42138215",
                "content": "老师，那以后我们每节课只上一分钟好不好？全班40个人，加起来就有40分钟了呢。",
                "title": "如何反驳「因为你迟到，全班 40 个人每人耽误一分钟，加起来就是一节课」？"
            },
            {
                "url": "https://www.zhihu.com/question/27519393/answer/45586522",
                "content": "学好数学以后，你买菜都不用看价钱了。",
                "title": "如何反驳「我现在学的高中数学对未来根本没用」之类的话？"
            },
            {
                "url": "https://www.zhihu.com/question/22538208/answer/21716041",
                "content": "影厅座位有17排，每排32个座位，天花板上共有48盏灯，荧幕的左下角有个黑点总是出现，频率大概是1分20秒一次。",
                "title": "如何吐槽一部电影很烂？"
            },
            {
                "url": "https://www.zhihu.com/question/24150975/answer/27264505",
                "content": "“你有100亿个脑细胞，却尽想些没营养的问题”。",
                "title": "如何回应「人的眼睛有 5.76 亿像素，却终究看不懂人心」？"
            },
            {
                "url": "https://www.zhihu.com/question/47909787/answer/108263012",
                "content": "“我的表达能力，够不到你认知的门槛。”",
                "title": "如何委婉地表达「以你的智商，我很难和你解释」？"
            },
            {
                "url": "https://www.zhihu.com/question/26501619/answer/33030772",
                "content": "你不就是个精子加个卵子。",
                "title": "如何应对「披萨不就是个大饼铺点肉」、「寿司不就是放块鱼在米饭上」这种言论？"
            },
            {
                "url": "https://www.zhihu.com/question/24155513/answer/27130095",
                "content": "豪车给人以安全感：最多也就劫色了。<br>换辆面包车你上也是需要勇气的。",
                "title": "如何看待「半夜在酒吧附近驾豪车搭讪女生搭讪 7 人成功 5 人」的实验结果？"
            },
            {
                "url": "https://www.zhihu.com/question/30241444/answer/47326919",
                "content": "朋友圈发祝福的时候记得把自己妈妈从黑名单里拉出来",
                "title": "如何看待母亲节在朋友圈秀孝心这一现象？"
            },
            {
                "url": "https://www.zhihu.com/question/30467935/answer/48257730",
                "content": "Fire in the hole……",
                "title": "如何看待电视剧《一起打鬼子》里「银妹」的戏？"
            },
            {
                "url": "https://www.zhihu.com/question/29751876/answer/45522371",
                "content": "建议换成黑人女同性恋，一步到位。",
                "title": "如何看待美国女权组织建议 20 美元纸钞头像换成杰出女性？"
            },
            {
                "url": "https://www.zhihu.com/question/42054802/answer/93418627",
                "content": "快高考了，老人求盖伦大神放过自己孙子",
                "title": "如何看待老人跪拜LOL盖伦塑像事件？"
            },
            {
                "url": "https://www.zhihu.com/question/20572382/answer/25272719",
                "content": "任何企业，在无法让员工按时下班的时候要员工按时上班，都是耍流氓",
                "title": "如何看李彦宏对员工上班迟到的态度？"
            },
            {
                "url": "https://www.zhihu.com/question/40696420/answer/90001668",
                "content": "<b>我有一壶酒，足以慰风尘；<br><br>风尘总笑我，何处寻良人？<\/b><br><br><b>酒酣君莫笑，把盏话今生：<\/b><br><br><b>仗义多为屠狗辈，负心总是读书人；<\/b><br><br><b>取次花丛懒回顾，最难消受美人恩。<\/b><br><br><b>君莫问，杯莫停，<br><\/b><br><b>良人擦肩不忍负，孑然欢场度余生。<\/b>",
                "title": "如何续写「我有一壶酒，足以慰风尘」？"
            },
            {
                "url": "https://www.zhihu.com/question/24187843/answer/26976158",
                "content": "你就正常表现",
                "title": "如何让相亲的女方反感自己？"
            },
            {
                "url": "https://www.zhihu.com/question/28547939/answer/41311041",
                "content": "什么？娶妹妹进门这种事央视这样宣传真的好吗？<br><br>@德国骨科",
                "title": "如何评价《婆婆就是妈》这首歌的价值取向？"
            },
            {
                "url": "https://www.zhihu.com/question/23935875/answer/34437648",
                "content": "如果你真的做个社会调查，说不定会得出相反的结论——嫁得好太难了，还他妈的不如老娘自己拼容易些。",
                "title": "如何评价「女孩子只要嫁得好就很好，那么拼干嘛」的说法？"
            },
            {
                "url": "https://www.zhihu.com/question/25836165/answer/31546377",
                "content": "这么多年还把手机当成装逼利器一点长进都没有…",
                "title": "如何评价「过去我用 iPhone 1 的时候，他们拿着 Nokia 笑话我；现在我用 T1，他们又拿着 iPhone 6 笑话我」？"
            },
            {
                "url": "https://www.zhihu.com/question/20911134/answer/21299307",
                "content": "<p>你不觉得我国国徽在扁平化上已经领先对手两百年吗？<\/p>",
                "title": "如何评价中国国徽的设计？"
            },
            {
                "url": "https://www.zhihu.com/question/51542230/answer/126374785",
                "content": "我妈说了，这事要是赔了，得有不少老太太上赶着过去给老虎当吃食来给儿子换套房。。。",
                "title": "如何评价八达岭动物园老虎伤人后续：伤者向动物园索赔 200 余万？"
            },
            {
                "url": "https://www.zhihu.com/question/22606686/answer/26850366",
                "content": "借用别人说的一句话：<br>胸小话少表情屌。<br><br>--------<br>仅为调侃，并无贬义",
                "title": "如何评价桂纶镁的演技？"
            },
            {
                "url": "https://www.zhihu.com/question/26810583/answer/34131120",
                "content": "才几百块啊，可能是比较穷的人吧。",
                "title": "如何评价花几百块钱在 App Store 上买 App 的人？"
            },
            {
                "url": "https://www.zhihu.com/question/24776756/answer/28931141",
                "content": "懒。",
                "title": "如何评价许多男性逛街时打扮得邋里邋遢的这种行为？"
            },
            {
                "url": "https://www.zhihu.com/question/39409073/answer/81189698",
                "content": "警察同志，那辆三轮摩托上天了，你们管不管",
                "title": "如何评价这款军用飞行器？"
            },
            {
                "url": "https://www.zhihu.com/question/30328482/answer/47653772",
                "content": "在百度和阿里的共同努力下，腾讯的企业愿景实现了<br><br><a href=\"http://www.baidu.com/link?url=SErTJmLny82Fj94o3vG446Lc8siPq73Z6jDJxbycuOMnp42EyyGaWKqEnup5FWcGChIXuNHZzFIElED9X5TZba\" data-editable=\"true\" data-title=\"腾讯:要做最受尊敬的互联网企业\" class=\"\">腾讯:要做最受尊敬的互联网企业<\/a>",
                "title": "如何评价阿里 HR 对离职员工谈话造假，然后内部 IT 系统开发绩效被打低分？"
            },
            {
                "url": "https://www.zhihu.com/question/33110011/answer/56499373",
                "content": "房屋中介",
                "title": "如何起一个中二的日本名字？"
            },
            {
                "url": "https://www.zhihu.com/question/37295025/answer/72099069",
                "content": "就是说界碑也一起倒过去了嗦？",
                "title": "如果珠穆拉玛峰倒塌了，砸在了邻国，而倒塌的山体中存在大量的金矿和稀有资源，那么这些资源属于哪一个国家？"
            },
            {
                "url": "https://www.zhihu.com/question/40733507/answer/90675468",
                "content": "“1+1等于几？张小明，你来回答！”<br>“谢邀！这要从我3年前的一次经历讲起……”",
                "title": "如果知乎承包中小学，会培养出怎么样的学生？"
            },
            {
                "url": "https://www.zhihu.com/question/20301287/answer/24062851",
                "content": "让父母穿“耐克”。<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><b>另外说一句，中间没图片（哈哈哈哈）<\/b><br><br><a data-hash=\"96a5f764e63ab074d067643365001b6d\" href=\"//www.zhihu.com/people/96a5f764e63ab074d067643365001b6d\" class=\"member_mention\" data-tip=\"p$b$96a5f764e63ab074d067643365001b6d\">@郭松<\/a><br><i>你留那么大的空白，我以为是我网速问题，导致图片没刷出来好么！！！！！！！！！！！！！！！<br><br>我刷新了好几次！！！<\/i>",
                "title": "如果算命的说子女克父母，该怎样化解？"
            },
            {
                "url": "https://www.zhihu.com/question/27815492/answer/38201252",
                "content": "第一天家长签字<br><br>第二天孩子被罚站",
                "title": "字写得丑是怎样一种体验？"
            },
            {
                "url": "https://www.zhihu.com/question/21441165/answer/18239378",
                "content": "被搭讪的时光也就那么十年，忍忍就过去了，相信我，会很快！",
                "title": "对于被男生搭讪有种莫名的排斥，怎么克服？"
            },
            {
                "url": "https://www.zhihu.com/question/26464197/answer/33059003",
                "content": "年轻人啊，Naive！<br>怎么会有“给你五百万让你离开”这种桥段呢？<br>真实故事永远是“给我五百万否则你就离开”……",
                "title": "对方父母给你五百万让你离开他们的子女，这种情况下怎么应对？"
            },
            {
                "url": "https://www.zhihu.com/question/26464197/answer/32949341",
                "content": "不要回答！不要回答！不要回答！！！<br><br>这钱你是不可能拿到的！！！！！<br><br>一回答就说明你不是真爱，他们已经偷偷录音，马上就拿去给孩子听。<br><br>哪怕你说「要不我们先签个协议吧」都没用。这话已经可以满足他们的录音需求了。",
                "title": "对方父母给你五百万让你离开他们的子女，这种情况下怎么应对？"
            },
            {
                "url": "https://www.zhihu.com/question/32196630/answer/55516076",
                "content": "“你已添加某某为好友，你们可以开始沉默了”……",
                "title": "当你加了女神或者男神的联系方式后，会有什么变化？怎么做的？"
            },
            {
                "url": "https://www.zhihu.com/question/23424073/answer/24536889",
                "content": "卧槽，你看他在动     ",
                "title": "当你老了或者死了，你最希望得到后世什么样的评价？"
            },
            {
                "url": "https://www.zhihu.com/question/30536602/answer/51452317",
                "content": "小明今天花1小时学习，每天再花多1%的时间，一年后他每天就能花37.8小时学习了！",
                "title": "很多文章中用1.01的365次方= 37.8 0.99的365次方 = 0.03来计算每天多做一点和少做一点的差别，合理吗？"
            },
            {
                "url": "https://www.zhihu.com/question/36194401/answer/66507658",
                "content": "生命探测器",
                "title": "微信红包名字写什么比较有趣？"
            },
            {
                "url": "https://www.zhihu.com/question/29001754/answer/97778658",
                "content": "别把破罐子破摔说得这么好听",
                "title": "心无挂碍的人生是种怎样的体验?"
            },
            {
                "url": "https://www.zhihu.com/question/24043808/answer/29848432",
                "content": "富氧水即智商过滤试剂，其实很多保健品都具有同样的功效，起智商过滤作用。",
                "title": "怎么看娃哈哈的「富氧水」，喝水补氧是什么机理，还是只是噱头？"
            },
            {
                "url": "https://www.zhihu.com/question/24897719/answer/29371760",
                "content": "不毒来毒往，就独来独往。",
                "title": "怎么看待今年突然爆出这么多娱乐圈明星吸毒？"
            },
            {
                "url": "https://www.zhihu.com/question/37262276/answer/133402315",
                "content": "尼安德特人也是这么想的，但智人负责点赞。",
                "title": "怎样反驳「男人就应该身体强壮，有强壮的肌肉」？"
            },
            {
                "url": "https://www.zhihu.com/question/19665572/answer/12574963",
                "content": "成年人应该相聚在一起，制造儿童。<br>儿童节不就是庆祝这个的吗？",
                "title": "成年人可以以什么样的形式欢度儿童节？"
            },
            {
                "url": "https://www.zhihu.com/question/20206008/answer/38640313",
                "content": "“朋友之上恋人未满…”<br>“说人话”<br>“喔，备胎”",
                "title": "我怎么让我男朋友接受我和男闺蜜关系很好？"
            },
            {
                "url": "https://www.zhihu.com/question/36159927/answer/66203485",
                "content": "复仇的时候到了<br>“你看别人家的爸爸，天天出去上班。看看你，就知道玩游戏。”",
                "title": "我是否应该劝阻沉迷游戏《血源诅咒》的 50 多岁的父亲？"
            },
            {
                "url": "https://www.zhihu.com/question/31690143/answer/52958062",
                "content": "题主，说话的时候要严谨。<br>像你这种情况，你是不能说“我的蛋蛋有三个”的。<br><br><b>你应该说，“我的蛋蛋蛋有三个”。<\/b>",
                "title": "我的蛋蛋有三个，是不是大家都是这样的？"
            },
            {
                "url": "https://www.zhihu.com/question/21463411/answer/18305478",
                "content": "没用的，我试过了关了窗雷一样在打",
                "title": "打雷的时候关窗户有用吗？"
            },
            {
                "url": "https://www.zhihu.com/question/30422933/answer/48046691",
                "content": "师父！前方就是大雷音寺了！",
                "title": "护照上盖满戳是怎样的体验？"
            },
            {
                "url": "https://www.zhihu.com/question/39982316/answer/84253451",
                "content": "喂了狗也就算了，可是狗却说它更喜欢吃屎。",
                "title": "拿一颗真心喂狗是一种怎样的体验?"
            },
            {
                "url": "https://www.zhihu.com/question/27601600/answer/37311782",
                "content": "<p>一屠晚归，担中肉尽，止有剩骨。途中两狼，缀行甚远。<\/p><p>屠惧，投以骨……<\/p><br><p>……………………………………………<\/p><p>你们不要这样……<\/p><p>答主之变诈几何哉？止增笑耳……<\/p>",
                "title": "捡到钱还给失主，失主不理我狂奔而逃，请问这是怎么回事？"
            },
            {
                "url": "https://www.zhihu.com/question/39341680/answer/82434741",
                "content": "想买个手铐 铐牢 自己，再特么瞎买东西就剁手！",
                "title": "新年你想买点什么犒劳自己？"
            },
            {
                "url": "https://www.zhihu.com/question/20012254/answer/46956643",
                "content": "<blockquote>葡萄酒都是老太太光脚踩出来的，<br>瓜子仁都是老太太嗑出来的，<br>无骨凤爪都是老太太啃出来的，<br>柿饼子都是放老太太后背上晒出来的，<br><br>老太太背上晒着柿子脚下踩着葡萄一手嗑瓜子一手啃风爪~<\/blockquote>",
                "title": "无骨鸡爪是老太太用嘴取骨的吗？"
            },
            {
                "url": "https://www.zhihu.com/question/37145702/answer/70660421",
                "content": " “字幕组”这个词传到日本，日本人以为在中国看动漫的都是黑社会。",
                "title": "日本网民一般对中国有哪些比较普遍的误解？"
            },
            {
                "url": "https://www.zhihu.com/question/21108564/answer/26088113",
                "content": "你可以关灯前喊一句：“有鬼吗，请给我关一下灯好吗？谢谢，明天我给你烧纸。”如果灯关了，那也没多大事记得第二天给他烧纸就行。",
                "title": "晚上怕鬼怎么办？"
            },
            {
                "url": "https://www.zhihu.com/question/20675918/answer/25225584",
                "content": "可以亲手带大",
                "title": "有些男生喜欢贫乳女生的原因有哪些？"
            },
            {
                "url": "https://www.zhihu.com/question/44323871/answer/302577271",
                "content": "小孩小孩你别馋<br>过了腊八就是年<br>腊八粥喝几天<br>哩哩啦啦二十三<br>二十三，上班班<br>二十四，上班班<br>二十五，上班班<br>二十六，上班班<br>二十七，上班班<br>二十八，上班班<br>……<br>……<br>……",
                "title": "有什么笑话可以让你笑得窒息？"
            },
            {
                "url": "https://www.zhihu.com/question/23902022/answer/26023622",
                "content": "哎呀，这位小伙子，人不可貌相啊，，，",
                "title": "有什么赞扬让你比较尴尬？"
            },
            {
                "url": "https://www.zhihu.com/question/28683246/answer/41794466",
                "content": "笑林广记里面有一篇     农人去寺庙买粪     一但粪和尚要4文    农人说人家都是2文    和尚说这些都是师傅们舂实了泄的     泡开来一旦顶两但      <br>想了好久才恍然大悟",
                "title": "有哪个作品的细节你一开始没看懂，后来恍然大悟？"
            },
            {
                "url": "https://www.zhihu.com/question/39004511/answer/86700334",
                "content": "高压电",
                "title": "有哪些「年轻人千万不能碰」的东西？"
            },
            {
                "url": "https://www.zhihu.com/question/37538286/answer/72555153",
                "content": "来日可严整队伍，大展旌旗。老夫自出，只用一席话，管教诸葛亮拱手而降，蜀兵不战自退。",
                "title": "有哪些「无知者无畏」的例子？"
            },
            {
                "url": "https://www.zhihu.com/question/29125576/answer/43796338",
                "content": "差点在爸爸妈妈面前说出【真是日了狗了】还好我机智的改口【真是日L…落西山红霞飞】噢……",
                "title": "有哪些令人拍案叫绝的临场反应？"
            },
            {
                "url": "https://www.zhihu.com/question/25040334/answer/29890933",
                "content": "在澳洲华人街吃到过“阴道”口味的月饼。感觉味道介于蘑菇和紫菜之间。一直以为是假的，直到有了女朋友。",
                "title": "有哪些口味奇特的月饼？"
            },
            {
                "url": "https://www.zhihu.com/question/35847320/answer/66973065",
                "content": "FB上一美国妹子发帖：<br><br>原来中国比美国早12小时！为什么911的时候他们不提醒我们！这些可恶的中国人！<br><br>华人回复：日本比你们早13个小时，他们是你们的盟国，我们以为日本人提醒过了。",
                "title": "有哪些只有具备一定的地理知识者才能听懂的地理领域笑话？"
            },
            {
                "url": "https://www.zhihu.com/question/21083505/answer/27100834",
                "content": "短信拦截软件！ 拦截后告诉你它拦截了一条短信。 我相信99%的人会再去点进去看一下被拦截的短信！",
                "title": "有哪些垃圾手机软件？"
            },
            {
                "url": "https://www.zhihu.com/question/24943693/answer/29533470",
                "content": "锤子和镰刀",
                "title": "有哪些平平无奇两样东西结合在一起之后大放异彩的例子？"
            },
            {
                "url": "https://www.zhihu.com/question/64273158/answer/293693228",
                "content": "有个俄罗斯的小伙子去买一种弹性很好的绳子去做蹦极绳，就是那种从高楼边缘往下蹦的极限运动。店家好心多送了两米，那小伙子就住进了重症监护室",
                "title": "有哪些店家看似善良却让你哭笑不得的举动？"
            },
            {
                "url": "https://www.zhihu.com/question/36426051/answer/67807343",
                "content": "把觉得不靠谱的需求放到最后做。<br><br>很可能到时候需求就变了。",
                "title": "有哪些新手程序员不知道的小技巧？"
            },
            {
                "url": "https://www.zhihu.com/question/22546476/answer/21730531",
                "content": "《西游记》——所有的妖怪都要吃熟的",
                "title": "有哪些电影告诉了我们「不作死就不会死」这个道理？"
            },
            {
                "url": "https://www.zhihu.com/question/28943259/answer/43553681",
                "content": "“你现在在哪里？”这句问话",
                "title": "有哪些看上去早就存在的事物实际发明时间很晚？"
            },
            {
                "url": "https://www.zhihu.com/question/28651797/answer/41616891",
                "content": "滚滚长江都是水，浪莎淘尽英雄。",
                "title": "有哪些稍一改动，马上意境大变的诗词？"
            },
            {
                "url": "https://www.zhihu.com/question/20997165/answer/16925251",
                "content": "If you think you can, you can. <br>如果你认为你是个罐头，你就是个罐头。",
                "title": "有哪些简短却刻骨铭心的英语文学句子？"
            },
            {
                "url": "https://www.zhihu.com/question/21016066/answer/16902109",
                "content": "转个王家卫式的台词方式就是一个事件+一个绕口的时间+一个无聊事件。<br>发生车祸之后的三天零五小时八分钟，我又去吃了甜筒，不过这次，我没要香芋味。",
                "title": "有哪些简短文艺的话？"
            },
            {
                "url": "https://www.zhihu.com/question/26193971/answer/32363703",
                "content": "情不知所起，一往而深，再而衰，三而竭。",
                "title": "有哪些诗词连起来特别押韵，虽然八竿子打不着？"
            },
            {
                "url": "https://www.zhihu.com/question/25067327/answer/30061900",
                "content": "一直不知道怎么回应别人说“都是托您的福”，直到有个妹子答我“哪有，都是雅您的思”",
                "title": "有哪些话让你觉得妙到毫巅？"
            },
            {
                "url": "https://www.zhihu.com/question/34296677/answer/58485570",
                "content": "天堂有路你不走，学海无涯苦作舟",
                "title": "有没有两句不同古诗文里的句子连起来却毫无违和感？"
            },
            {
                "url": "https://www.zhihu.com/question/20977602/answer/17242303",
                "content": "我觉得在网吧有线鼠标就不会被取代",
                "title": "有线鼠标会被无线鼠标取代吗？"
            },
            {
                "url": "https://www.zhihu.com/question/30120044/answer/49354929",
                "content": "我从来没想过有一天我会被我家的路由器虐哭。。",
                "title": "清华北大的跨校情侣是一种怎样的体验？"
            },
            {
                "url": "https://www.zhihu.com/question/23613999/answer/26251584",
                "content": "此为出厂设置<br><br>born to be pepperoud     <br>           天生傲椒",
                "title": "湖南、贵州、四川、重庆、江西等地的人，小时候是如何学会吃辣的？"
            },
            {
                "url": "https://www.zhihu.com/question/39994678/answer/84721610",
                "content": "有时候挺佩服我朝人民的逻辑的。一壶清水烧两遍就不能喝了，加点料煮一万遍却成了百年老汤……",
                "title": "烧过的开水再烧一次还可以喝吗?"
            },
            {
                "url": "https://www.zhihu.com/question/19652518/answer/12551384",
                "content": "会，一次我给它吃了周黑鸭，结果他一动不动的背对着我，我拉过来一看，它流泪了。",
                "title": "猫会流泪吗？"
            },
            {
                "url": "https://www.zhihu.com/question/24402381/answer/27778920",
                "content": "古代的昏君其实都挺不容易的...",
                "title": "玩三国杀你最大的感悟是什么？"
            },
            {
                "url": "https://www.zhihu.com/question/22559530/answer/21788642",
                "content": "前两天在沈阳北站坐火车，上车前排队，队伍很长，我排在最后。这时候，有两个工作人员大喊，在对面窗口进站，然后，我们扭头就排第一了。",
                "title": "生活中遇到过哪些剧情特别反转的小事？"
            },
            {
                "url": "https://www.zhihu.com/question/28453087/answer/40914204",
                "content": "把 iPhone 的电充满",
                "title": "用 iPad 的充电器给 iPhone 充电有什么后果？"
            },
            {
                "url": "https://www.zhihu.com/question/25019898/answer/29907684",
                "content": "穷一直以来是我保持良好品德和高尚人格的经济基础",
                "title": "男人会因为什么拒绝嫖妓？"
            },
            {
                "url": "https://www.zhihu.com/question/23345789/answer/24307455",
                "content": "你（N）忙（M）吧（B）。",
                "title": "男人能轻易看穿女人的哪些谎言和行为？"
            },
            {
                "url": "https://www.zhihu.com/question/20807235/answer/16257446",
                "content": "婚前：给你煮了汤，快喝了，等会早点睡。<br>婚后：叫你整天不运动，抱着个电脑，比我还差。<br>有孩子后： 带口罩，去隔壁睡。",
                "title": "男孩给女孩发短信「我感冒了」，该如何回答？"
            },
            {
                "url": "https://www.zhihu.com/question/24066034/answer/26564197",
                "content": "半夜上厕所怒答：<br>因为他和他前女友分手的原因很可能是<br><br><br><br>“你为什么不能成熟一点？”",
                "title": "男朋友和他的女同事及我的女性朋友聊天都很幽默，但是和我一起的时候老是一本正经，话不是很多，为什么啊?"
            },
            {
                "url": "https://www.zhihu.com/question/24374304/answer/27578970",
                "content": "分吧，既然知道你姨妈疼，如果他爱你，就不会让你来姨妈。",
                "title": "痛经想让男朋友陪我，他说他妈做好饭等他回家吃饭所以不来，该分手吗？"
            },
            {
                "url": "https://www.zhihu.com/question/20927303/answer/16630305",
                "content": "这样的。",
                "title": "知乎上怎么样的回答会让你“赞同”+“没有帮助”？"
            },
            {
                "url": "https://www.zhihu.com/question/20395948/answer/32682775",
                "content": "今天下午辩论赛，站起来直接一句\"实名反对对方二辩的观点\"，把对方搞得哑口无言。。。<br><br>———————<br>竟然上了日报。",
                "title": "知乎给你带来了哪些「副作用」？"
            },
            {
                "url": "https://www.zhihu.com/question/34313079/answer/58509934",
                "content": "作为你的赞助商，要求你出席一些广告活动，拿了赞助的你，是没有办法不去的。",
                "title": "考上大学不想请大学酒，但爸妈一定要请怎么办？"
            },
            {
                "url": "https://www.zhihu.com/question/38702684/answer/77691933",
                "content": "不，他们通常会觉得自己很萌。",
                "title": "蠢的人能意识到自己蠢吗？"
            },
            {
                "url": "https://www.zhihu.com/question/26343637/answer/32600877",
                "content": "《超体》的结局揭露了一个残酷的现实：女神，最终还是要存在硬盘里的。",
                "title": "超体Lucy最后变成了什么啊？"
            },
            {
                "url": "https://www.zhihu.com/question/37236353/answer/80766802",
                "content": "<blockquote>汉献帝：曹丞相，几十年来你东征西讨，保住大汉万里江山。朕无以为报，赐你当太监吧……<\/blockquote><br>话说人家要是一口答应带药，你确信敢和他住一个帐篷？还是你就是想和他住一个帐篷？",
                "title": "跟要混帐篷的异性（题主为女性）驴友露营，需不需要带安眠药以保证安全？或者说还有哪些方法能保证安全？"
            },
            {
                "url": "https://www.zhihu.com/question/28239188/answer/65484071",
                "content": "有一次陪我老婆去买手机，我去交钱的时候，店员跟老婆说你儿子懂得挺多的。<br><br>前些日子带儿子去坐摩天轮，被收票的拦下：这个项目必须有成年人陪伴。<br><br>p.s. 答案发表前已经过领导批准。",
                "title": "身高或样貌显年幼的人，经历过哪些趣事？"
            },
            {
                "url": "https://www.zhihu.com/question/24813021/answer/29186828",
                "content": "男同学辩论\"在中国大陆卖淫是否应该合法\"担任正方一辩阐述完之后，被对方的女辩手嘲笑一句\"没想到你是这样的男人!\"",
                "title": "辩论中一句话把对方打趴下的逻辑是怎样的？"
            },
            {
                "url": "https://www.zhihu.com/question/24330721/answer/27965970",
                "content": "别说人了，你就是买一条狗一只鸟，不也挑来挑去，不仅看外形，颜色，还要看精神状态。",
                "title": "这是一个看脸的世界吗？"
            },
            {
                "url": "https://www.zhihu.com/question/26621877/answer/33582663",
                "content": "abandon的水平",
                "title": "通过了大学英语四级考试的人英语大约是什么水平？"
            },
            {
                "url": "https://www.zhihu.com/question/37528104/answer/72367318",
                "content": "范伟：2000<br>赵本山：成交",
                "title": "遇上刚开局的庞氏骗局是不是应该立刻投钱？"
            },
            {
                "url": "https://www.zhihu.com/question/38965228/answer/79465611",
                "content": "如果按照百分制来打分的话，郭敬明的导演能力只能给零分，而邓超是郭敬明的十倍。",
                "title": "邓超和郭敬明谁的导演能力强？"
            },
            {
                "url": "https://www.zhihu.com/question/20813614/answer/20770597",
                "content": "<p>紫衫龙王当年在灵蛇岛对金毛狮王说：“谢三哥，我这辈子没说过谢字。。。。。。”<\/p>",
                "title": "金庸小说里有哪些不易发现却很打动人的小细节？"
            },
            {
                "url": "https://www.zhihu.com/question/24937466/answer/29625046",
                "content": "对于蒋介石来说，娶一个漂亮、有气质的贵夫人，好处大大的。<br>对于武大郎来说，娶一个漂亮老婆，是致命的危险。",
                "title": "长远看，妻子漂亮很重要吗？"
            },
            {
                "url": "https://www.zhihu.com/question/38874400/answer/78711018",
                "content": "在160斤到180斤这个重量级的地位里目前还没有对手。<br>但是上了180斤有韩红，瘦到140斤有张学友，地位还是岌岌可危的。<br>相信这也是陈奕迅保持着身材的原因。",
                "title": "陈奕迅目前在华语歌坛的地位？"
            }
        ],
        "情感":[
            {
                "title":"女生抵挡不了男生哪些小动作或行为？",
                "content":"小动作不知道，动作大点儿的譬如一记勾拳一般女生应该抵挡不了",
                "url":"https://www.zhihu.com/question26657483/answer/33625847"
            },
            {
                "title":"如何让相亲的女方反感自己？",
                "content":"你就正常表现",
                "url":"https://www.zhihu.com/question/24187843/answer/26976158"
            },
            {
                "title":"什么样的感觉让你自己觉得爱上了一个人？",
                "content":"明明是她偷走了我的心，但是每次目光相接的时候总是会逃开，好像我才是那个小偷。",
                "url":"https://www.zhihu.com/question/20999123/answer/19062022"
            },
            {
                "title":"请用四个字概括你喜欢的人？",
                "content":"不喜欢我",
                "url":"https://www.zhihu.com/question/22316778/answer/20974713"
            },
            {
                "title":"怎么会有男生追女孩追到一半不追了的?",
                "content":"你特么倒是给个进度条啊…",
                "url":"https://www.zhihu.com/question/22527236/answer/53672006"
            }
        ],
        "生活":[
            {
                "title":"你有什么相见恨晚的知识想推荐给年轻人？",
                "content":"做你害怕做的事情。然后你会发现，不过如此",
                "url":"https://www.zhihu.com/question/22238159/answer/20759708"
            },
            {
                "title":"怎样才能做到不在乎别人骂？",
                "content":"你要相信，比你优秀的人是不会鸟你的。",
                "url":"https://www.zhihu.com/question/20357839/answer/17047135"
            },
            {
                "title":"什么样的朋友是真正的好朋友？",
                "content":"彼此都不用拼命在对方面前表现得很厉害的样子。",
                "url":"https://www.zhihu.com/question/21149829/answer/19017758"
            },
            {
                "title":"是什么原因令你删除社交平台上的好友？",
                "content":"删微商，不为别的，只是想让他们体会到创业的艰辛。",
                "url":"https://www.zhihu.com/question/22217530/answer/92496273"
            },
            {
                "title":"如何评价「世界大学学术排名（ARWU）」 发布的 2018 年「中国最好大学排名」？？",
                "content":"在读生最在乎排名这个事儿，毕业没多久的次在乎，在社会上立足了的基本看不见它。在读生为什么最在乎这个呢？一是闲的，作业太少、学习压力太小、精力过剩；二是不了解社会，容易被看似高大上的东西和套路洗脑。 ",
                "url":"https://www.zhihu.com/question/267777147"
            },
            {
                "title":"如何评价《舌尖上的中国》第三季？",
                "content":"分集吐槽）1三万六千锤都锤在了制作组脑袋上了吧 好好拍点吃的不行吗2以后厨师们再发明什么新菜必须在配料表里放上猪油，防止过了一百来年就变xx菜了。3：拉倒吧你还想让我看第三集4：享誉全国的美食节目正式改名为《唇间上的中药》5：超级工程真好看6：拌馅要顺时针，难不成这个馅还是手性的？（其实同一个方向没错，但是只能顺时针不能逆时针就完全扯淡，你从上面看是顺时针，我从盆底下看还是逆时针呢，mdzz）",
                "url":"https://www.zhihu.com/question/63393032"
            },
            {
                "title":"《舌尖上的中国》第三季真的扑街了吗？",
                "content":"我愣是忍住看完了最后一集才来蹭这个凉透的热点。《舌尖上的中国》第三季毫无疑问是扑街了。扑街的原因在于“一个不爱吃的导演愣是被拉来拍美食纪录片”，好巧不巧，这纪录片还是个国民级万众期待的IP。",
                "url":"https://www.zhihu.com/question/267535689/answer/331075827"
            }
        ],
    "八卦":
    [{
        "title": "周鸿祎和方舟子吵架谁会赢？",
        "content": "方舟子会在微博上说自己赢了，周鸿祎会在所有人电脑上说自己赢了。",
        "url": "https://www.zhihu.com/question/20331963/answer/14787351"
    },
        {
            "title": "MC天佑的男粉丝和咪蒙的女粉丝相遇会产生什么样的火花？",
            "content": "健身教练和理发师相遇，谁会先办卡？",
            "url": "https://www.zhihu.com/question/59734267/answer/225530794"
        },
        {
            "title": "如何看待男朋友电脑存有上千部 A 片？",
            "content": "一个厨子，收藏了很多菜谱，只是为了让你吃的更可口。",
            "url": "https://www.zhihu.com/question/25424899/answer/30781776"
        },
        {
            "title": "手淫时为什么会有负罪感？",
            "content": "因为杀亿万苍生",
            "url": "https://www.zhihu.com/question/28316076/answer/40328064"
        },
        {
            "title": "高晓松是一个什么样的人？",
            "content": "一个没有脖子的人...",
            "url": "https://www.zhihu.com/question/20142784/answer/38956983"
        },
        {
            "title": "如何看待斗鱼『直播造娃娃』事件？",
            "content": "迅雷：我们可以下种子。<br>快播：我们可以边看边下！<br>虎牙：我们有把奶放大功能！<br>斗鱼：我们直播造人！<br>虎牙、迅雷、快播：是在下输了<br>草榴：你们这些渣渣<br>乐视：呵呵，有事干了",
            "url": "https://www.zhihu.com/question/39344106/answer/80993338"
        },
        {
            "title": "什么是「政治正确」？",
            "content": "政治正确就是，说话办事的时候照顾傻逼的情绪。",
            "url": "https://www.zhihu.com/question/20587294/answer/122151579"
        },
        {
            "title": "如何评价马云以及他的电影《功守道》？",
            "content": "当职业选手遇到的人民币玩家，你会发现，你多年修为积淀下来的行云流水的操作，终于为你赢得了一个被马爸爸一脚踹飞的机会……",
            "url": "https://www.zhihu.com/question/67326637/answer/258611639"
        },
        {
            "title": "如果马云宣布双十一当天成交额最高的一个 ID 全额免单会怎样？",
            "content": "马化腾双十一那天在淘宝上默默下了一笔1000亿Q币大单……",
            "url": "https://www.zhihu.com/question/67308987/answer/251595564"
        },
        {
            "title": "为什么男程序员很难找女朋友这个问题得不到严肃重视？",
            "content": "只有穷光蛋打光棍才是真正的社会问题。其他单身群体不过是在无病呻吟罢了。",
            "url": "https://www.zhihu.com/question/38048598/answer/74703327"
        },
        {
            "title": "作为男生是怎么控制性欲的？",
            "content": "主要靠穷，偶尔靠丑",
            "url": "https://www.zhihu.com/question/37178500/answer/70799536"
        },
        {
            "title": "为什么说房地产与互联网的结合是大趋势？",
            "content": "想去淘宝开店卖房直说，硬要说是和互联网结合，我谈恋爱的时候聊天用微信这是不是就是用互联网的思维谈恋爱呢？",
            "url": "https://www.zhihu.com/question/26591393/answer/69695204"
        },
        {
            "title":"女人靠上床上位有什么弊端？",
            "content":"单纯靠上床就上位的，其实是极少的。上床只是最后一哆嗦，主要功夫在床下。",
            "url":"https://www.zhihu.com/question/22774821/answer/330762970"
        },
        {
            "title":"如何在床上科学地鉴别『渣男』？",
            "content":"前戏从来不做，进入从来不商量。你咬他行，但他不会为你咬。射精完毕，他就把你当空气。明知你不喜欢，还要硬上弓。只许他自慰，不准你探索。",
            "url":"https://zhuanlan.zhihu.com/p/32416260"
        }
    ],
        "游戏":[
            {
                "title":"绝地求生实测视频",
                "content":"",
                "url":"https://zhuanlan.zhihu.com/p/33945310"
            },
            {
                "title":"绝地求生的视频剪辑",
                "content":"",
                "url":"https://zhuanlan.zhihu.com/p/29795332"
            },
            {
                "title":"《王者荣耀》有哪些值得一看的教学视频？",
                "content":"b站搜索 布鸽TV 就是斗鱼的张大仙。b站搜索 超玩会游戏电竞视频中心 里面的《零度带你飞》系列。b站搜索 hellomedia 里面的《破冰英雄》系列。都是很用心的教学 祝顺利上分",
                "url":"https://zhuanlan.zhihu.com/p/29795332"
            },
            {
                "title":"为什么在 DOTA 里，屠夫的选择率非常高？",
                "content":"先看GPM，屠夫是热门榜前10中，平均每局GPM最低的，仅有351.81。再看XPM，屠夫依然在前10中排名垫底，平均每局仅447.61。最后场均正补更是少的可怕，仅13.49。屠夫一般较少露线，也不是偏刷的英雄，绝大部分时间都会处在游走和跟团的状态，加上游走成功率其实非常考验个人和队友的实力，所以综合来看，虽然不乏屠夫大神打翻全场、经济经验全领先的情况，但相当多的时候，屠夫的经济和经验都是较差的。然而，“穷”和“没等级”并不会抹消屠夫玩家们的热情与执着。玩法的独特性，以及并不过高的上手难度，使得相当一部分玩家比起“刷刷刷”，更喜欢“钩钩钩”+“烧烧烧”+“咬咬咬”，参战率也往往碾压全场。这意味着屠夫玩家在游戏过程中的参与度与体验，客观来说是要优于相当一部分需要刷才有价值的英雄的。由此得出结论2：屠夫较为友好的上手难度，以及极为偏打架的英雄定位，在很多玩家的心中远比赖线和刷钱的游戏体验要好。",
                "url":"https://www.zhihu.com/question/264990454/answer/330642809"
            }
        ],
        "娱乐":[
            {
                "title":"2017年国产烂剧排行榜",
                "content":"在新的一年即将到来之际，接受了一年国产剧荼毒的卤蛋君，现推出2017年上星烂剧排行榜（网剧暂不参评），各个进入榜单的电视剧没有最烂只有更烂，排名不分先后（因为太难排序）。大家看看自己中招了几部。《孤芳不自赏》豆瓣评分：3.1、《那片星空那片海》豆瓣评分3.6、大话西游之爱你一万年 豆瓣评分：3.6、《上古情歌》豆瓣评分：3.3、《思美人》豆瓣评分：3.3、《美味奇缘》豆瓣评分：3.2、《花谢花飞花满天》豆瓣评分：3.3。",
                "url":"https://zhuanlan.zhihu.com/p/32442608"
            },
            {
                "title":"怎么看待薛之谦在网易云音乐上热度排名超越周杰伦？",
                "content":"能在周杰伦出专辑的这个月依然热度赶超周杰伦，那恐怕只有一个原因——就是起码在网易云，起码在6月12日，薛之谦的人气活跃度高过了周杰伦，就这点事情。薛之谦人气真TM高，虽然除了远古上学时期听过他的《认真的雪》。其他诸如《丑八怪》之类的很火的歌我也没有去听过（或者街上听过也不知道，华语只听周杰伦( •̀∀•́ )）但是看网易音乐榜单，前几名都是他名字，只能说人气真TM高。如果有些杰迷对这件事有什么心理不爽的话，那估计这不爽有够受的，往前面翻，当年许嵩把周杰伦在QQ音乐的常年第一压下去一年多，陈奕迅也压了一段时期，现在有薛之谦，以后还有王建国，李大柱。私认为，其他歌手不敢说，杰迷对这些东西起码要有个荣辱不惊的态度。十几年来，啥样的来势汹汹没见过，终究不过流水的榜单，铁打的周杰伦。除了才华压制，没有任何东西是可以让周杰伦三个字在榜单上黯然失色的，炒作不行，颜值不行，会讲段子，自然也不行。“谁叫我是周杰伦”",
                "url":"https://www.zhihu.com/question/47364711/answer/105673864"
            },
            {
                "title":"王思聪在现实生活中是怎样的？",
                "content":"我觉得这个人有意无意的为民族做了极大的贡献——————不要笑……",
                "url":"https://www.zhihu.com/question/51956694"
            }
        ]
    },
    words:[
      {
        title: '你好',
        content: '讲个段子',
        url: '',
        sender:'ai'
        }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    if (this.data.word == '')
      return;
    var newWord = { 
      title: this.data.word,
      sender: 'user' 
      };
    this.data.words.push(newWord);
    var responseWord = this.getResponseWord(this.data.word);
    this.data.words.push(responseWord);

    this.setData({
      word: '',
      words:this.data.words,
      scrollTop: this.data.scrollTop + 500,
    })
  },
  getResponseWord: function(word) {
    var responseList = this.data.responseData[word];
    if (responseList == undefined) {
      responseList = this.data.responseData['段子'];
    }
    var responseItem = responseList[Math.floor(Math.random() * responseList.length)];
    return {
      content: responseItem.content,
      title:responseItem.title,
      url:responseItem.url,
      sender:'ai'
    }

  },
  userInput: function (e) {
    this.setData({
      word: e.detail.value
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  parse: function(item) {
    console.log(item);
    return item.title + '</br>' + item.content;
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
