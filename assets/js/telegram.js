// Telegram Bot Integration
// Отправка заявок в Telegram при заполнении формы

var TG_BOT_TOKEN = 'ВСТАВЬТЕ_ВАШ_ТОКЕН_БОТА';
var TG_CHAT_ID = 'ВСТАВЬТЕ_ВАШ_CHAT_ID';

function sendToTelegram(data) {
    var typeNames = {
        invest: '📊 Инвестиции',
        crypto: '₿ Крипто',
        forex: '📈 Forex/опционы',
        mfo: '🏦 Микрозайм/банк',
        other: '📋 Другое'
    };
    var timeNames = {
        '24h': 'менее 24 часов',
        week: '1-7 дней',
        month: '1-4 недели',
        old: 'более месяца'
    };
    var blockNames = {
        no: '❌ Нет',
        late: '⚠️ Да, поздно',
        early: '✅ Да, вовремя',
        partial: '🔄 Частично'
    };
    var reportNames = {
        none: 'Нигде',
        bank: 'В банк',
        police: 'В полицию',
        arrfr: 'В АРРФР',
        all: 'Во все инстанции'
    };
    var evidenceNames = {
        no: '❌ Нет',
        partial: '⚠️ Частично',
        full: '✅ Сохранил всё',
        ready: '✅ Готов предоставить'
    };

    var msg = '🔔 <b>НОВАЯ ЗАЯВКА</b>\n\n';
    msg += '👤 <b>ФИО:</b> ' + data.fio + '\n';
    msg += '📱 <b>Телефон:</b> ' + data.phone + '\n';
    if (data.phone2) msg += '📱 <b>Запасной:</b> ' + data.phone2 + '\n';
    if (data.messenger) msg += '💬 <b>Мессенджер:</b> ' + data.messenger + '\n';
    msg += '\n';
    msg += '🚨 <b>Тип:</b> ' + (typeNames[data.fraudType] || data.fraudType) + '\n';
    if (data.platform) msg += '🏢 <b>Платформа:</b> ' + data.platform + '\n';
    msg += '💰 <b>Сумма:</b> ' + data.amount + ' ₸\n';
    msg += '⏰ <b>Платёж:</b> ' + (timeNames[data.timeFrame] || data.timeFrame) + '\n';
    msg += '🔒 <b>Карта:</b> ' + (blockNames[data.blocked] || data.blocked) + '\n';
    msg += '📋 <b>Обращения:</b> ' + (reportNames[data.reported] || data.reported) + '\n';
    msg += '📎 <b>Доказательства:</b> ' + (evidenceNames[data.evidence] || data.evidence) + '\n';
    if (data.details) msg += '\n📝 <b>Детали:</b>\n' + data.details + '\n';
    msg += '\n🕐 <b>Дата:</b> ' + new Date().toLocaleString('ru-RU');

    var url = 'https://api.telegram.org/bot' + TG_BOT_TOKEN + '/sendMessage';
    var body = {
        chat_id: TG_CHAT_ID,
        text: msg,
        parse_mode: 'HTML'
    };

    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}
