var TG_BOT_TOKEN = '8829750295:AAEdnt-7FPCVuVbgj6tgn7eC2_2LpY5VHCk';
var TG_CHAT_ID = '8471070560';

function sendToTelegram(d) {
    var types = {invest:'📊 Инвестиции',crypto:'₿ Крипто',forex:'📈 Forex',mfo:'🏦 Микрозайм/Банк',credit:'💳 Кредит/Карта',other:'📋 Другое'};
    var amounts = {small:'до 500 000 ₸',medium:'500К — 2М ₸',large:'2М — 10М ₸',huge:'свыше 10М ₸'};
    var times = {today:'🟢 Сегодня',week:'🟡 1-7 дней',month:'🟠 1-4 недели',old:'🔴 Более месяца'};
    var blocks = {no:'❌ Нет',late:'⚠️ Да, но деньги ушли',early:'✅ Да, вовремя'};
    var reports = {none:'❌ Нигде',bank:'📞 Только банк',police:'👮 Полиция',arrfr:'🏛️ АРРФР',lawyer:'👨‍⚖️ Юрист'};
    var evidences = {no:'❌ Нет',partial:'📱 Частично',full:'✅ Всё сохранил'};

    var m = '🔔 <b>НОВАЯ ЗАЯВКА</b>\n';
    m += '━━━━━━━━━━━━━━━━━\n\n';
    m += '👤 <b>' + d.fio + '</b>\n';
    m += '📱 ' + d.phone + '\n\n';
    m += '🚨 <b>Что произошло:</b>\n';
    m += '  • Тип: ' + (types[d.type]||d.type) + '\n';
    m += '  • Сумма: ' + (amounts[d.amount]||d.amount) + '\n';
    m += '  • Когда: ' + (times[d.time]||d.time) + '\n\n';
    m += '📋 <b>Статус:</b>\n';
    m += '  • Карта: ' + (blocks[d.blocked]||d.blocked) + '\n';
    m += '  • Обращения: ' + (reports[d.reported]||d.reported) + '\n';
    m += '  • Доказательства: ' + (evidences[d.evidence]||d.evidence) + '\n\n';
    m += '🕐 ' + new Date().toLocaleString('ru-RU');

    return fetch('https://api.telegram.org/bot' + TG_BOT_TOKEN + '/sendMessage', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({chat_id: TG_CHAT_ID, text: m, parse_mode: 'HTML'})
    });
}
