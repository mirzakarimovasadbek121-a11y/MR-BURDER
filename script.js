(function(){
'use strict';
var $=function(s){return document.querySelector(s)};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var load=function(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
var save=function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
var U='https://images.unsplash.com/';
var P=[
{id:1,n:'Cheeseburger',c:'burgers',p:32000,r:4.8,e:'🍔',d:'Beef patty, cheddar, pickles.',i:'photo-1568901346375-23c9450c58cd'},
{id:2,n:'Double Burger',c:'burgers',p:45000,r:4.9,e:'🍔',d:'Two juicy patties, double cheese.',i:'photo-1550547660-d9450f859349'},
{id:3,n:'Chicken Burger',c:'burgers',p:30000,r:4.6,e:'🍔',d:'Crispy chicken, lettuce, sauce.',i:'photo-1571091718767-18b5b1457add'},
{id:4,n:'Classic Burger',c:'burgers',p:28000,r:4.5,e:'🍔',d:'The original house recipe.',i:'photo-1561758033-d89a9ad46330'},
{id:5,n:'French Fries',c:'sides',p:15000,r:4.7,e:'🍟',d:'Golden crispy potato fries.',i:'photo-1573080496219-bb080dd4f877'},
{id:6,n:'Nuggets',c:'sides',p:22000,r:4.6,e:'🍗',d:'Nine tender chicken nuggets.',i:'photo-1562967914-608f82629710'},
{id:7,n:'Hot Dog',c:'snacks',p:20000,r:4.4,e:'🌭',d:'Grilled sausage, mustard, onion.',i:'photo-1612392062631-94dd858cba88'},
{id:8,n:'Pizza',c:'snacks',p:55000,r:4.8,e:'🍕',d:'Cheesy pepperoni pizza.',i:'photo-1513104890138-7c749659a591'},
{id:9,n:'Chicken Wings',c:'sides',p:35000,r:4.7,e:'🍗',d:'Spicy BBQ wings, six pieces.',i:'photo-1567620832903-9fc6debc209f'},
{id:10,n:'Sandwich',c:'snacks',p:25000,r:4.3,e:'🥪',d:'Fresh club sandwich.',i:'photo-1528735602780-2552fd46c7af'},
{id:11,n:'Cola',c:'drinks',p:9000,r:4.5,e:'🥤',d:'Ice cold cola, 0.5L.',i:'photo-1622483767028-3f66f32aef97'},
{id:12,n:'Milkshake',c:'drinks',p:24000,r:4.8,e:'🥛',d:'Creamy vanilla milkshake.',i:'photo-1572490122747-3968b75cc699'}];
var FB="data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#e11d2e'/><text x='50%' y='55%' font-size='90' text-anchor='middle'>🍔</text></svg>");
var img=function(p,w){return U+p.i+'?w='+w+'&q=80&auto=format&fit=crop'};
var T={
uz:{home:'Bosh sahifa',menu:'Menyu',about:'Biz haqimizda',popular:'Mashhur',contact:'Aloqa',cart:'Savat',login:'Kirish',register:'Ro‘yxatdan o‘tish',heroTitle:'Eng mazali burgerlar',heroText:'Yangi, issiq va tez yetkazib beramiz.',order:'Buyurtma berish',explore:'Menyuni ko‘rish',add:'Savatga',total:'Jami',empty:'Savat bo‘sh',checkout:'Rasmiylashtirish',search:'Qidirish...',all:'Hammasi',burgers:'Burgerlar',sides:'Garnirlar',snacks:'Snacklar',drinks:'Ichimliklar',aboutP:'2015-yildan beri mazali taomlar tayyorlaymiz.',why1:'Yangi masalliq',why2:'Tez yetkazish',why3:'Hamyonbop narx',offer:'Maxsus taklif',reviews:'Mijozlar fikrlari',subscribe:'Obuna bo‘lish',added:'Savatga qo‘shildi',thanks:'Buyurtma qabul qilindi!',ok:'OK',nofound:'Hech narsa topilmadi'},
en:{home:'Home',menu:'Menu',about:'About',popular:'Popular',contact:'Contact',cart:'Cart',login:'Login',register:'Register',heroTitle:'The Tastiest Burgers',heroText:'Fresh, hot and delivered fast.',order:'Order Now',explore:'Explore Menu',add:'Add to Cart',total:'Total',empty:'Your cart is empty',checkout:'Checkout',search:'Search...',all:'All',burgers:'Burgers',sides:'Sides',snacks:'Snacks',drinks:'Drinks',aboutP:'Serving delicious food since 2015.',why1:'Fresh ingredients',why2:'Fast delivery',why3:'Affordable prices',offer:'Special Offer',reviews:'Customer Reviews',subscribe:'Subscribe',added:'Added to cart',thanks:'Order received!',ok:'OK',nofound:'Nothing found'},
ru:{home:'Главная',menu:'Меню',about:'О нас',popular:'Популярное',contact:'Контакты',cart:'Корзина',login:'Войти',register:'Регистрация',heroTitle:'Самые вкусные бургеры',heroText:'Свежо, горячо и быстро.',order:'Заказать',explore:'Смотреть меню',add:'В корзину',total:'Итого',empty:'Корзина пуста',checkout:'Оформить',search:'Поиск...',all:'Все',burgers:'Бургеры',sides:'Гарниры',snacks:'Закуски',drinks:'Напитки',aboutP:'Готовим вкусную еду с 2015 года.',why1:'Свежие продукты',why2:'Быстрая доставка',why3:'Доступные цены',offer:'Спецпредложение',reviews:'Отзывы клиентов',subscribe:'Подписаться',added:'Добавлено в корзину',thanks:'Заказ принят!',ok:'OK',nofound:'Ничего не найдено'},
tr:{home:'Ana Sayfa',menu:'Menü',about:'Hakkımızda',popular:'Popüler',contact:'İletişim',cart:'Sepet',login:'Giriş',register:'Kayıt Ol',heroTitle:'En Lezzetli Burgerler',heroText:'Taze, sıcak ve hızlı teslimat.',order:'Sipariş Ver',explore:'Menüyü Keşfet',add:'Sepete Ekle',total:'Toplam',empty:'Sepetiniz boş',checkout:'Ödeme',search:'Ara...',all:'Tümü',burgers:'Burgerler',sides:'Yanlar',snacks:'Atıştırmalık',drinks:'İçecekler',aboutP:'2015\'ten beri lezzetli yemekler.',why1:'Taze malzeme',why2:'Hızlı teslimat',why3:'Uygun fiyat',offer:'Özel Teklif',reviews:'Müşteri Yorumları',subscribe:'Abone Ol',added:'Sepete eklendi',thanks:'Sipariş alındı!',ok:'Tamam',nofound:'Sonuç yok'},
ar:{home:'الرئيسية',menu:'القائمة',about:'من نحن',popular:'الأكثر شعبية',contact:'اتصل بنا',cart:'السلة',login:'دخول',register:'تسجيل',heroTitle:'ألذ البرغر',heroText:'طازج وساخن وتوصيل سريع.',order:'اطلب الآن',explore:'استكشف القائمة',add:'أضف للسلة',total:'المجموع',empty:'السلة فارغة',checkout:'إتمام الشراء',search:'بحث...',all:'الكل',burgers:'برغر',sides:'جانبية',snacks:'وجبات خفيفة',drinks:'مشروبات',aboutP:'نقدم طعامًا لذيذًا منذ 2015.',why1:'مكونات طازجة',why2:'توصيل سريع',why3:'أسعار مناسبة',offer:'عرض خاص',reviews:'آراء العملاء',subscribe:'اشترك',added:'أضيف إلى السلة',thanks:'تم استلام الطلب!',ok:'حسنًا',nofound:'لا نتائج'},
de:{home:'Start',menu:'Speisekarte',about:'Über uns',popular:'Beliebt',contact:'Kontakt',cart:'Warenkorb',login:'Anmelden',register:'Registrieren',heroTitle:'Die leckersten Burger',heroText:'Frisch, heiß und schnell geliefert.',order:'Jetzt bestellen',explore:'Menü ansehen',add:'In den Warenkorb',total:'Gesamt',empty:'Warenkorb ist leer',checkout:'Zur Kasse',search:'Suchen...',all:'Alle',burgers:'Burger',sides:'Beilagen',snacks:'Snacks',drinks:'Getränke',aboutP:'Leckeres Essen seit 2015.',why1:'Frische Zutaten',why2:'Schnelle Lieferung',why3:'Faire Preise',offer:'Sonderangebot',reviews:'Kundenbewertungen',subscribe:'Abonnieren',added:'Zum Warenkorb hinzugefügt',thanks:'Bestellung erhalten!',ok:'OK',nofound:'Nichts gefunden'},
fr:{home:'Accueil',menu:'Menu',about:'À propos',popular:'Populaire',contact:'Contact',cart:'Panier',login:'Connexion',register:'Inscription',heroTitle:'Les meilleurs burgers',heroText:'Frais, chaud et livré vite.',order:'Commander',explore:'Voir le menu',add:'Ajouter',total:'Total',empty:'Votre panier est vide',checkout:'Payer',search:'Rechercher...',all:'Tout',burgers:'Burgers',sides:'Accompagnements',snacks:'Snacks',drinks:'Boissons',aboutP:'De bons plats depuis 2015.',why1:'Produits frais',why2:'Livraison rapide',why3:'Prix abordables',offer:'Offre spéciale',reviews:'Avis clients',subscribe:'S\'abonner',added:'Ajouté au panier',thanks:'Commande reçue !',ok:'OK',nofound:'Aucun résultat'},
es:{home:'Inicio',menu:'Menú',about:'Nosotros',popular:'Popular',contact:'Contacto',cart:'Carrito',login:'Entrar',register:'Registro',heroTitle:'Las hamburguesas más ricas',heroText:'Frescas, calientes y rápidas.',order:'Pedir ahora',explore:'Ver menú',add:'Añadir',total:'Total',empty:'Tu carrito está vacío',checkout:'Pagar',search:'Buscar...',all:'Todo',burgers:'Hamburguesas',sides:'Acompañamientos',snacks:'Snacks',drinks:'Bebidas',aboutP:'Comida deliciosa desde 2015.',why1:'Ingredientes frescos',why2:'Entrega rápida',why3:'Precios bajos',offer:'Oferta especial',reviews:'Opiniones',subscribe:'Suscribirse',added:'Añadido al carrito',thanks:'¡Pedido recibido!',ok:'OK',nofound:'Sin resultados'}
};
var lang=load('bh_lang','uz'),theme=load('bh_theme','light'),cart=load('bh_cart',[]),cat='all',authMode='login';
var t=function(k){return (T[lang]&&T[lang][k])||T.en[k]||k};
var fmt=function(n){return n.toLocaleString('en-US').replace(/,/g,' ')};
var toastT;
function toast(m){var e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){e.classList.remove('show')},2200)}

/* Language */
function applyLang(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  $$('[data-i18n]').forEach(function(e){e.textContent=t(e.dataset.i18n)});
  $$('[data-i18n-ph]').forEach(function(e){e.placeholder=t(e.dataset.i18nPh)});
  $('#lang').value=lang;
  renderCats();renderProducts();renderPopular();renderCart();updateAuthUI();
}
$('#lang').addEventListener('change',function(e){lang=e.target.value;save('bh_lang',lang);applyLang()});

/* Theme */
function applyTheme(){document.documentElement.setAttribute('data-theme',theme);$('#theme').textContent=theme==='dark'?'☀️':'🌙'}
$('#theme').addEventListener('click',function(){theme=theme==='dark'?'light':'dark';save('bh_theme',theme);applyTheme()});

/* Navbar */
$('#burger').addEventListener('click',function(){$('#links').classList.toggle('open')});
$$('#links a').forEach(function(a){a.addEventListener('click',function(){$('#links').classList.remove('open')})});
window.addEventListener('scroll',function(){
  $('#nav').classList.toggle('scrolled',window.scrollY>50);
  $('#toTop').classList.toggle('show',window.scrollY>400);
});
$('#toTop').addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

/* Products */
function card(p){
  return '<div class="card pcard"><div class="pimg"><img loading="lazy" src="'+img(p,500)+'" alt="'+p.n+'" onerror="this.onerror=null;this.src=\''+FB+'\'"></div><div class="pbody"><h3>'+p.n+'</h3><p>'+p.d+'</p><div>⭐ '+p.r+'</div><div class="pfoot"><span class="price">'+fmt(p.p)+' UZS</span><button class="btn small" data-add="'+p.id+'">'+t('add')+'</button></div></div></div>';
}
function renderCats(){
  var c=['all','burgers','sides','snacks','drinks'];
  $('#cats').innerHTML=c.map(function(k){return '<button data-cat="'+k+'" class="'+(k===cat?'on':'')+'">'+t(k)+'</button>'}).join('');
}
function renderProducts(){
  var q=$('#search').value.trim().toLowerCase();
  var list=P.filter(function(p){return (cat==='all'||p.c===cat)&&(p.n.toLowerCase().indexOf(q)>-1||p.d.toLowerCase().indexOf(q)>-1)});
  $('#products').innerHTML=list.length?list.map(card).join(''):'<p class="center" style="grid-column:1/-1">'+t('nofound')+'</p>';
}
function renderPopular(){$('#popGrid').innerHTML=P.filter(function(p){return p.r>=4.8}).slice(0,3).map(card).join('')}
$('#cats').addEventListener('click',function(e){var b=e.target.closest('[data-cat]');if(!b)return;cat=b.dataset.cat;renderCats();renderProducts()});
$('#search').addEventListener('input',renderProducts);
document.addEventListener('click',function(e){var b=e.target.closest('[data-add]');if(b)addToCart(+b.dataset.add)});

/* Cart */
function saveCart(){save('bh_cart',cart)}
function addToCart(id){
  var it=cart.filter(function(c){return c.id===id})[0];
  if(it)it.q++;else cart.push({id:id,q:1});
  saveCart();renderCart();toast(t('added'));
}
function renderCart(){
  var total=0,count=0;
  var html=cart.map(function(c){
    var p=P.filter(function(x){return x.id===c.id})[0];if(!p)return '';
    total+=p.p*c.q;count+=c.q;
    return '<div class="item"><img src="'+img(p,120)+'" alt="" onerror="this.onerror=null;this.src=\''+FB+'\'"><div><b>'+p.n+'</b><br>'+fmt(p.p*c.q)+' UZS</div><div class="qty"><button data-dec="'+p.id+'">−</button><span>'+c.q+'</span><button data-inc="'+p.id+'">+</button></div><button class="del" data-rm="'+p.id+'">🗑️</button></div>';
  }).join('');
  $('#cartItems').innerHTML=html||'<p class="center" style="padding:40px 0">'+t('empty')+'</p>';
  $('#cartTotal').textContent=fmt(total);$('#cartCount').textContent=count;
}
$('#cartItems').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  var id=+(b.dataset.inc||b.dataset.dec||b.dataset.rm);
  var it=cart.filter(function(c){return c.id===id})[0];if(!it)return;
  if(b.dataset.inc)it.q++;
  if(b.dataset.dec)it.q--;
  if(b.dataset.rm||it.q<=0)cart=cart.filter(function(c){return c.id!==id});
  saveCart();renderCart();
});
$('#cartBtn').addEventListener('click',function(){$('#drawer').classList.add('open')});
$('#closeCart').addEventListener('click',function(){$('#drawer').classList.remove('open')});
$('#checkout').addEventListener('click',function(){
  if(!cart.length){toast(t('empty'));return}
  cart=[];saveCart();renderCart();$('#drawer').classList.remove('open');toast(t('thanks'));
});

/* Auth */
function setMode(m){
  authMode=m;var reg=m==='register';
  $('#regFields').style.display=reg?'flex':'none';
  $('#pass2').style.display=reg?'block':'none';
  $('#authTitle').textContent=t(m);
  $('#switchAuth').textContent=t(reg?'login':'register');
  $('#authSubmit').textContent=t('ok');$('#authErr').textContent='';
}
function updateAuthUI(){
  var u=load('bh_session',null);
  $('#authBtn').textContent=u?u.fname+' ✕':t('login');
}
function openModal(){setMode('login');$('#modal').classList.add('open')}
$('#authBtn').addEventListener('click',function(){
  if(load('bh_session',null)){try{localStorage.removeItem('bh_session')}catch(e){}updateAuthUI();toast('👋')}
  else openModal();
});
$('#closeModal').addEventListener('click',function(){$('#modal').classList.remove('open')});
$('#modal').addEventListener('click',function(e){if(e.target.id==='modal')$('#modal').classList.remove('open')});
$('#switchAuth').addEventListener('click',function(e){e.preventDefault();setMode(authMode==='login'?'register':'login')});
$('#authForm').addEventListener('submit',function(e){
  e.preventDefault();
  var err=$('#authErr'),email=$('#email').value.trim().toLowerCase(),pass=$('#pass').value,users=load('bh_users',[]);
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err.textContent='Email noto‘g‘ri / Invalid email';return}
  if(pass.length<6){err.textContent='Parol kamida 6 belgi / Min 6 characters';return}
  if(authMode==='register'){
    var f=$('#fname').value.trim(),l=$('#lname').value.trim(),ph=$('#phone').value.trim();
    if(f.length<2||l.length<2){err.textContent='Ism va familiya kiriting / Enter name';return}
    if(!/^\+?\d{9,14}$/.test(ph)){err.textContent='Telefon noto‘g‘ri / Invalid phone';return}
    if(pass!==$('#pass2').value){err.textContent='Parollar mos emas / Passwords differ';return}
    if(users.some(function(u){return u.email===email})){err.textContent='Email band / Email exists';return}
    users.push({fname:f,lname:l,phone:ph,email:email,pass:pass});save('bh_users',users);
    toast('✅ '+t('register')+' OK');setMode('login');
  }else{
    var u=users.filter(function(x){return x.email===email&&x.pass===pass})[0];
    if(!u){err.textContent='Email yoki parol xato / Wrong credentials';return}
    save('bh_session',u);updateAuthUI();$('#modal').classList.remove('open');toast('✅ '+u.fname);
  }
  $('#authForm').reset();
});

/* Newsletter */
$('#news').addEventListener('submit',function(e){
  e.preventDefault();var v=$('#newsEmail').value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){toast('Email ✗');return}
  toast('✅ '+t('subscribe'));$('#news').reset();
});

/* Carousel */
var slides=[{i:'photo-1568901346375-23c9450c58cd',n:'Cheeseburger'},{i:'photo-1550547660-d9450f859349',n:'Double Burger'},{i:'photo-1573080496219-bb080dd4f877',n:'French Fries'},{i:'photo-1513104890138-7c749659a591',n:'Pizza'},{i:'photo-1572490122747-3968b75cc699',n:'Milkshake'}];
var cur=0,timer,track=$('#track');
track.innerHTML=slides.map(function(s){return '<div class="slide"><img src="'+U+s.i+'?w=1100&q=80&auto=format&fit=crop" alt="'+s.n+'" draggable="false" onerror="this.onerror=null;this.src=\''+FB+'\'"><span>'+s.n+'</span></div>'}).join('');
$('#dots').innerHTML=slides.map(function(_,i){return '<button data-i="'+i+'" aria-label="Slide '+(i+1)+'"></button>'}).join('');
function go(i){cur=(i+slides.length)%slides.length;track.style.transform='translateX('+(-cur*100)+'%)';$$('#dots button').forEach(function(d,k){d.classList.toggle('on',k===cur)})}
function auto(){clearInterval(timer);timer=setInterval(function(){go(cur+1)},4000)}
$('#next').addEventListener('click',function(){go(cur+1);auto()});
$('#prev').addEventListener('click',function(){go(cur-1);auto()});
$('#dots').addEventListener('click',function(e){var b=e.target.closest('button');if(b){go(+b.dataset.i);auto()}});
var sx=null,car=$('#carousel');
car.addEventListener('pointerdown',function(e){sx=e.clientX});
window.addEventListener('pointerup',function(e){
  if(sx===null)return;var d=e.clientX-sx;sx=null;
  if(Math.abs(d)>50){go(d<0?cur+1:cur-1);auto()}
});
car.addEventListener('mouseenter',function(){clearInterval(timer)});
car.addEventListener('mouseleave',auto);

/* Init */
applyTheme();applyLang();go(0);auto();
})();
