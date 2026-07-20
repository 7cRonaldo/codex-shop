<script setup lang="ts">
import { computed, ref } from "vue";
const dishes = [
  { name: "炭烧桂花脆皮鸡", note: "桂花蜜 · 青柠 · 时蔬", price: "¥88", tone: "amber" },
  { name: "春笋腌笃鲜", note: "本地春笋 · 咸肉 · 百叶结", price: "¥58", tone: "green" },
  { name: "山胡椒酸汤鱼", note: "鲜活鲈鱼 · 木姜子 · 番茄", price: "¥128", tone: "red" },
];
const menu = [["椒麻手撕茄","藤椒油 / 烟熏茄子","32"],["酒酿小排","米酒 / 乌梅 / 糖渍番茄","68"],["菌菇煲仔饭","三种山菌 / 锅巴 / 腌菜","52"],["杏仁豆腐","茉莉花 / 青梅 / 桂花","28"]];
const date = ref("");
const guests = ref("2");
const phone = ref("");
const message = ref("");
const today = computed(() => new Date().toISOString().slice(0, 10));
function submitReservation() {
  if (!date.value || !/^1\d{10}$/.test(phone.value)) { message.value = "请填写日期和正确的 11 位手机号。"; return; }
  message.value = `已记录 ${date.value}、${guests.value} 位的预约意向，我们会尽快与您联系。`;
}
</script>

<template>
<main>
  <header class="nav shell"><a class="brand" href="#top" aria-label="山下饭堂首页"><span>山下</span><small>饭堂</small></a><nav aria-label="主要导航"><a href="#story">我们的故事</a><a href="#menu">菜单</a><a href="#visit">到店</a></nav><a class="book-btn" href="#reserve">预订餐桌 <span>→</span></a></header>
  <section id="top" class="hero shell">
    <div class="hero-copy"><p class="eyebrow"><span /> 杭州 · 时令中餐小馆</p><h1>人间烟火，<br><em>一席好味。</em></h1><p class="intro">顺时而食，认真做饭。我们从山野与田间寻找新鲜食材，用熟悉的中式味道，款待每一次相聚。</p><div class="hero-actions"><a class="primary" href="#menu">看看今日菜单 <span>→</span></a><a class="text-link" href="#story">认识山下饭堂</a></div><div class="open-note"><b>今日营业</b><span>午市 11:30—14:00</span><span>晚市 17:30—22:00</span></div></div>
    <div class="hero-art" aria-label="山下饭堂招牌菜：炭火烤鸡与时蔬"><div class="stamp">每日<br>新鲜</div><div class="sun" /><div class="plate"><div class="leaf l1" /><div class="leaf l2" /><div class="food f1" /><div class="food f2" /><div class="food f3" /><div class="sauce" /></div><p>炭火 · 山野 · 时令</p></div>
  </section>
  <section class="marquee" aria-hidden="true"><div>时令而食 · 山野入味 · 认真做饭 · 好好吃饭 · 时令而食 · 山野入味 · 认真做饭 · 好好吃饭 ·</div></section>
  <section id="story" class="story shell"><div><p class="section-no">01 / 我们的故事</p><h2>从一方水土，<br>到一张餐桌。</h2></div><div class="story-copy"><p>我们相信，好味道不必复杂。它来自清晨送到的蔬菜、耐心熬煮的高汤，也来自厨师对火候恰到好处的判断。</p><p>菜单随四季更替，但不变的是对食材的尊重和对每位客人的真诚。愿你在山下，吃一顿轻松、温暖的饭。</p><a href="#visit">了解我们的食材来源 →</a></div></section>
  <section id="menu" class="featured shell"><div class="section-head"><div><p class="section-no">02 / 今日推荐</p><h2>这一季，<em>正当食。</em></h2></div><p>菜单会随市场和节气微调，<br>每次来，都有一点新鲜。</p></div><div class="dish-grid"><article v-for="(dish,index) in dishes" :key="dish.name" class="dish-card"><div class="dish-visual" :class="dish.tone"><span>0{{ index+1 }}</span><div class="mini-plate"><i /><b /></div></div><div class="dish-info"><div><h3>{{ dish.name }}</h3><p>{{ dish.note }}</p></div><strong>{{ dish.price }}</strong></div></article></div></section>
  <section class="menu-section shell"><div class="menu-title"><p class="section-no">更多菜单</p><h2>小菜 · 热菜 · 主食 · 甜</h2></div><div class="menu-list"><div v-for="item in menu" :key="item[0]" class="menu-row"><div><h3>{{ item[0] }}</h3><p>{{ item[1] }}</p></div><span>¥{{ item[2] }}</span></div></div></section>
  <section id="reserve" class="reserve"><div class="shell reserve-inner"><div><p class="section-no light">03 / 预订餐桌</p><h2>留一张桌，<br>等你来吃饭。</h2><p>6 人以上聚餐或特殊需求，欢迎致电与我们联系。</p></div><form class="reserve-form" @submit.prevent="submitReservation"><label>用餐日期<input v-model="date" type="date" :min="today" aria-label="用餐日期"></label><label>用餐人数<select v-model="guests" aria-label="用餐人数"><option v-for="count in 5" :key="count" :value="String(count+1)">{{ count+1 }} 位</option></select></label><label>联系电话<input v-model.trim="phone" type="tel" inputmode="numeric" maxlength="11" placeholder="请输入手机号" aria-label="联系电话"></label><button type="submit">提交预约意向 <span>→</span></button><p v-if="message" class="form-message" role="status">{{ message }}</p></form></div></section>
  <footer id="visit" class="footer shell"><div class="brand footer-brand"><span>山下</span><small>饭堂</small></div><div><b>地址</b><p>杭州市上城区南山路 88 号<br>柳浪闻莺东门旁</p></div><div><b>营业时间</b><p>周二至周日 11:30—22:00<br>周一店休</p></div><div><b>联系</b><p>0571-8899 6677<br>hello@shanxia.cn</p></div><p class="copyright">© 2026 山下饭堂</p></footer>
</main>
</template>
