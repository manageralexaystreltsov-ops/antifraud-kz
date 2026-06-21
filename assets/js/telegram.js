// Telegram Bot Integration
var TG_BOT_TOKEN = '8829750295:AAEdnt-7FPCVuVbgj6tgn7eC2_2LpY5VHCk';
var TG_CHAT_ID = '8471070560';

function sendToTelegram(data) {
    var typeNames = {
        invest: '📊 Инвестиции',
        crypto: '₿ Крипто/Биржа',
        forex: '📈 Forex/Опционы',
        mfo: '🏦 Микрозайм/Банк',
        credit: '💳 Кредит/Карта',
        other: '📋 Другое'
    };
    var amountNames = {
        small: 'до 500 000 ₸',
        medium: '500 000 — 2 000 000 ₸',
        large: '2 000 000 — 10 000 000 ₸',
        huge: 'свыше 10 000 000 ₸'
    };
    var timeNames = {
        today: '🟢 Сегодня',
        week: '🟡 1-7 дней',
        month: '🟠 1-4 недели',
        old: '🔴 Более месяца'
    };
    var blockNames = {
        no: '❌ Нет',
        late: '⚠️ Да, но деньги ушли',
        early: '✅ Да, вовремя'
    };
    var reportNames = {
        none: '❌ Нигде',
        bank: '📞 Только банк',
        police: '👮 Полиция',
        arrfr: '🏛️ АРРФР',
        lawyer: '👨‍⚖️ Юрист'
    };
    var evidenceNames = {
        no: '❌ Нет',
        partial: '📱 Частично',
        full: '✅ Всё сохранил'
    };

    var msg = '🔔 <b>НОВАЯ ЗАЯВКА</b>\n';
    msg += '━━━━━━━━━━━━━━━━━\n\n';
    msg += '👤 <b>' + data.fio + '</b>\n';
    msg += '📱 ' + data.phone + '\n';
    if (data.phone2) msg += '📱 Доп: ' + data.phone2 + '\n';
    if (data.messenger) msg += '💬 ' + data.messenger + '\n';
    msg += '\n';
    msg += '🚨 <b>Что произошло:</b>\n';
    msg += '  • Тип: ' + (typeNames[data.fraudType] || data.fraudType) + '\n';
    if (data.platform) msg += '  • Платформа: ' + data.platform + '\n';
    msg += '  • Сумма: ' + (amountNames[data.amount] || data.amount) + '\n';
    msg += '  • Когда: ' + (timeNames[data.timeFrame] || data.timeFrame) + '\n';
    msg += '\n';
    msg += '📋 <b>Статус:</b>\n';
    msg += '  • Карта: ' + (blockNames[data.blocked] || data.blocked) + '\n';
    msg += '  • Обращения: ' + (reportNames[data.reported] || data.reported) + '\n';
    msg += '  • Доказательства: ' + (evidenceNames[data.evidence] || evidenceNames[data.evidence]) + '\n';
    msg += '\n';
    msg += '🕐 ' + new Date().toLocaleString('ru-RU');

    return fetch('https://api.telegram.org/bot' + TG_BOT_TOKEN + '/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text: msg, parse_mode: 'HTML' })
    });
}
