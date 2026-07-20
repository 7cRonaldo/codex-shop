import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "山下饭堂｜时令中餐小馆",
  description: "用当季食材，做一桌有烟火气的现代中餐。",
};

const dishes = [
  { name: "炭烤桂花脆皮鸡", note: "桂花蜜 · 青柠 · 时蔬", price: "¥88", tone: "amber" },
  { name: "春笋腌笃鲜", note: "本地春笋 · 咸肉 · 百叶结", price: "¥58", tone: "green" },
  { name: "山胡椒酸汤鱼", note: "鲜活鲈鱼 · 木姜子 · 番茄", price: "¥128", tone: "red" },
];

const menu = [
  ["椒麻手撕茄", "藤椒油 / 烟熏茄子", "32"],
  ["酒酿小排", "米酒 / 乌梅 / 糖渍番茄", "68"],
  ["菌菇煲仔饭", "三种山菌 / 锅巴 / 腌菜", "52"],
  ["杏仁豆腐", "茉莉花 / 青梅 / 桂花", "28"],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="山下饭堂首页"><span>山下</span><small>饭堂</small></a>
        <nav aria-label="主要导航">
          <a href="#story">我们的故事</a><a href="#menu">菜单</a><a href="#visit">到店</a>
        </nav>
        <a className="book-btn" href="#reserve">预订餐桌 <span>↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> 杭州 · 时令中餐小馆</p>
          <h1>人间烟火，<br/><em>一席好味。</em></h1>
          <p className="intro">顺时而食，认真做饭。我们从山野与田间寻找新鲜食材，用熟悉的中式味道，款待每一次相聚。</p>
          <div className="hero-actions">
            <a className="primary" href="#menu">看看今日菜单 <span>→</span></a>
            <a className="text-link" href="#story">认识山下饭堂</a>
          </div>
          <div className="open-note"><b>今日营业</b><span>午市 11:30—14:00</span><span>晚市 17:30—22:00</span></div>
        </div>
        <div className="hero-art" aria-label="山下饭堂招牌菜：炭火烤鸡与时蔬">
          <div className="stamp">每日<br/>新鲜</div>
          <div className="sun"></div><div className="plate"><div className="leaf l1"></div><div className="leaf l2"></div><div className="food f1"></div><div className="food f2"></div><div className="food f3"></div><div className="sauce"></div></div>
          <p>炭火 · 山野 · 时令</p>
        </div>
      </section>

      <section className="marquee" aria-hidden="true"><div>时令而食 · 山野入味 · 认真做饭 · 好好吃饭 · 时令而食 · 山野入味 · 认真做饭 · 好好吃饭 ·</div></section>

      <section className="story shell" id="story">
        <div><p className="section-no">01 / 我们的故事</p><h2>从一方水土，<br/>到一张餐桌。</h2></div>
        <div className="story-copy"><p>我们相信，好味道不必复杂。它来自清晨送到的蔬菜、耐心熬煮的高汤，也来自厨师对火候恰到好处的判断。</p><p>菜单随四季更替，但不变的是对食材的尊重和对每位客人的真诚。愿你在山下，吃一顿轻松、温暖的饭。</p><a href="#visit">了解我们的食材来源 →</a></div>
      </section>

      <section className="featured shell" id="menu">
        <div className="section-head"><div><p className="section-no">02 / 今日推荐</p><h2>这一季，<em>正当食。</em></h2></div><p>菜单会随市场和节气微调，<br/>每次来，都有一点新鲜。</p></div>
        <div className="dish-grid">{dishes.map((dish, i) => <article className="dish-card" key={dish.name}>
          <div className={`dish-visual ${dish.tone}`}><span>0{i+1}</span><div className="mini-plate"><i></i><b></b></div></div>
          <div className="dish-info"><div><h3>{dish.name}</h3><p>{dish.note}</p></div><strong>{dish.price}</strong></div>
        </article>)}</div>
      </section>

      <section className="menu-section shell">
        <div className="menu-title"><p className="section-no">更多菜单</p><h2>小菜 · 热菜 · 主食 · 甜</h2></div>
        <div className="menu-list">{menu.map(([name,note,price]) => <div className="menu-row" key={name}><div><h3>{name}</h3><p>{note}</p></div><span>¥{price}</span></div>)}</div>
      </section>

      <section className="reserve" id="reserve">
        <div className="shell reserve-inner"><div><p className="section-no light">03 / 预订餐桌</p><h2>留一张桌，<br/>等你来吃饭。</h2><p>6 人以上聚餐或特殊需求，欢迎致电与我们联系。</p></div><form className="reserve-form"><label>用餐日期<input type="date" aria-label="用餐日期" /></label><label>用餐人数<select aria-label="用餐人数" defaultValue="2"><option value="2">2 位</option><option value="3">3 位</option><option value="4">4 位</option><option value="5">5 位</option><option value="6">6 位</option></select></label><label>联系电话<input type="tel" placeholder="请输入手机号" aria-label="联系电话" /></label><button type="button">查询可订时间 <span>→</span></button></form></div>
      </section>

      <footer className="footer shell" id="visit"><div className="brand footer-brand"><span>山下</span><small>饭堂</small></div><div><b>地址</b><p>杭州市上城区南山路 88 号<br/>柳浪闻莺东门旁</p></div><div><b>营业时间</b><p>周二至周日 11:30—22:00<br/>周一店休</p></div><div><b>联系</b><p>0571-8899 6677<br/>hello@shanxia.cn</p></div><p className="copyright">© 2026 山下饭堂</p></footer>
    </main>
  );
}
