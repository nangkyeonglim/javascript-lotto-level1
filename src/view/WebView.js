import { $ } from '../util/querySelector';

const purchasedLottoTemplate = (lotto) => {
  return `
  <li>
    <span class="lotto-emoji">🎟️</span> <span class="lotto-numbers">${lotto.join(', ')}</span>
  </li>
  `;
};

const WebView = {
  printLottoTicketCount(ticketCount) {
    $('#purchased-lotto-count').innerHTML = ticketCount;
  },

  printLottoTickets(lottoTickets) {
    while ($('#purchased-lotto-container').firstChild) {
      $('#purchased-lotto-container').removeChild($('#purchased-lotto-container').firstChild);
    }

    lottoTickets.forEach((lottoTicket) =>
      $('#purchased-lotto-container').insertAdjacentHTML(
        'beforeend',
        purchasedLottoTemplate(lottoTicket)
      )
    );
  },
};

export default WebView;
