var ORGS=[
// Госорганы Казахстана
{n:'АРРФР',full:'Агентство РК по регулированию и развитию финансового рынка',cat:'gov',when:'Организация работает без лицензии',site:'ardfm.gov.kz'},
{n:'НБ РК',full:'Национальный банк Республики Казахстан',cat:'gov',when:'Банк отказывает в чарджбэке',site:'nationalbank.kz'},
{n:'КГД',full:'Комитет государственных доходов',cat:'gov',when:'Мошенники присылают «налоговые акты»',site:'kgd.gov.kz'},
{n:'МВД РК',full:'Министерство внутренних дел',cat:'gov',when:'При мошенничестве — тел: 102',site:'mvd.gov.kz'},
{n:'Прокуратура',full:'Генеральная прокуратура РК',cat:'gov',when:'Полиция бездействует',site:'prosecutor.kz'},
{n:'Киберпреступность',full:'Центр противодействия киберпреступности',cat:'gov',when:'Интернет-мошенничество',site:'cia.gov.kz'},
// Банки
{n:'Halyk Bank',full:'Крупнейший банк Казахстана · Тел: 595',cat:'bank',when:'Чарджбэк через Halyk',site:'halykbank.kz'},
{n:'Kaspi Bank',full:'Банк Kaspi · Тел: 5050',cat:'bank',when:'Чарджбэк через Kaspi',site:'kaspi.kz'},
{n:'ForteBank',full:'Банк Форте · Тел: *6800',cat:'bank',when:'Чарджбэк через Forte',site:'fortebank.kz'},
{n:'Банк ЦентрКредит',full:'Банк ЦентрКредит · Тел: 727 244 10 44',cat:'bank',when:'Чарджбэк через BCC',site:'ccbank.kz'},
{n:'Евразийский банк',full:'Евразийский банк · Тел: 505',cat:'bank',when:'Чарджбэк через Евразийский',site:'eubank.kz'},
{n:'Сбербанк Казахстан',full:'Сбербанк · Тел: 8-800-100-0006',cat:'bank',when:'Чарджбэк через Сбербанк',site:'sberbank.kz'},
{n:'Народный Банк',full:'Народный Банк Казахстана',cat:'bank',when:'Чарджбэк через Народный',site:'nurbank.kz'},
{n:'Банк ВТБ',full:'Банк ВТБ Казахстан',cat:'bank',when:'Чарджбэк через ВТБ',site:'vtb.kz'},
{n:'Jýsan Bank',full:'Жусан Банк · Тел: 2233',cat:'bank',when:'Чарджбэк через Jýsan',site:'jysanbank.kz'},
{n:'Freedom Bank',full:'Фридом Банк · Тел: 5520',cat:'bank',when:'Чарджбэк через Freedom',site:'freedombank.kz'},
// Международные регуляторы
{n:'FCA',full:'Управление финансового поведения (UK)',cat:'intl',when:'Мошенники используют бренд FCA',site:'fca.org.uk'},
{n:'SEC',full:'Комиссия по ценным бумагам (USA)',cat:'intl',when:'Мошенники используют бренд SEC',site:'sec.gov'},
{n:'BaFin',full:'Финансовый надзор Германии',cat:'intl',when:'Мошенники зарегистрированы в Германии',site:'bafin.de'},
{n:'MAS',full:'Денежный орган Сингапура',cat:'intl',when:'Мошенники из Сингапура',site:'mas.gov.sg'},
{n:'ASIC',full:'Комиссия по ценным бумагам Австралии',cat:'intl',when:'Мошенники из Австралии',site:'asic.gov.au'},
{n:'Интерпол',full:'Международная полиция',cat:'intl',when:'Крупные суммы, трансграничное мошенничество',site:'interpol.int'}
];
var ORG_CATS=[
    {id:'gov',name:'Государственные органы',icon:'🏛️'},
    {id:'bank',name:'Банки Казахстана',icon:'🏦'},
    {id:'intl',name:'Международные регуляторы',icon:'🌍'}
];
