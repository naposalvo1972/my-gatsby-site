import * as React from 'react'
import sprite from "./svg/sprite.svg";

const Footer = () => (
    <footer class="it-footer">
    
  <div class="it-footer-main">
    <div class="container">
      <section>
        <div class="row clearfix">
          <div class="col-sm-12">
            <div class="it-brand-wrapper">
              <a href="#">
                
                <div class="it-brand-text">
                  <h2 class="no_toc">Nome del Comune</h2>
                  <h3 class="no_toc d-none d-md-block">
                    Uno dei tanti Comuni d'Italia
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Amministrazione">Amministrazione</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Giunta e consiglio">Giunta e consiglio</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Aree di competenza">Aree di competenza</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Dipendenti">Dipendenti</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Luoghi">Luoghi</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Associazioni e società partecipate">Associazioni e società partecipate</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Servizi">Servizi</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Pagamenti">Pagamenti</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Sostegno">Sostegno</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Domande e iscrizioni">Domande e iscrizioni</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Segnalazioni">Segnalazioni</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Autorizzazioni e concessioni">Autorizzazioni e concessioni</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Certificati e dichiarazioni">Certificati e dichiarazioni</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Novità">Novità</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Notizie">Notizie</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Eventi">Eventi</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Comunicati stampa">Comunicati stampa</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <h4>
              <a href="#" title="Vai alla pagina: Documenti">Documenti</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Progetti e attività">Progetti e attività</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Delibere, determine e ordinanze">Delibere, determine e ordinanze</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Bandi">Bandi</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Concorsi">Concorsi</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Albo pretorio">Albo pretorio</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="py-4 border-white border-top">
        <div class="row">
          <div class="col-lg-3 col-md-3 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Amministrazione">Amministrazione trasparente</a>
            </h4>
            <p>
              I dati personali pubblicati sono riutilizzabili solo alle
              condizioni previste dalla direttiva comunitaria 2003/98/CE e dal
              d.lgs. 36/2006
            </p>
          </div>
          <div class="col-lg-3 col-md-3 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Contatti">Contatti</a>
            </h4>
            <p>
              <strong>Nome del Comune</strong><br/>
              Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000
            </p>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: Posta Elettronica Certificata">Posta Elettronica Certificata</a>
                </li>
                <li>
                  <a class="list-item" href="#" title="Vai alla pagina: URP - Ufficio Relazioni con il Pubblico">URP - Ufficio Relazioni con il Pubblico</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Newsletter">Newsletter</a>
            </h4>
            <form action="#" class="form-newsletter" method="post">
              <label class="text-white font-weight-semibold active" for="input-newsletter">Iscriviti per riceverla</label>
              <input class="form-control" id="input-newsletter" name="input-newsletter" placeholder="mail@example.com" type="email" />
              <button class="btn btn-primary btn-icon" type="submit">
              <svg class="icon icon-white">
                <use xlinkHref={`${sprite}#it-mail`}/>
              </svg>
                <span>Iscriviti</span>
              </button>
            </form>
          </div>
          <div class="col-lg-3 col-md-3 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Seguici su">Seguici su</a>
            </h4>
            <ul class="list-inline text-left social">
              <li class="list-inline-item">
                <a class="p-2 text-white" href="#" target="_blank">
                  <svg class="icon icon-sm icon-white align-top">
                    <use xlinkHref={`${sprite}#it-designers-italia`}></use>
                  </svg>
                  <span class="sr-only">Designers Italia</span></a>
              </li>
              <li class="list-inline-item">
                <a class="p-2 text-white" href="#" target="_blank">
                 
                  <span class="sr-only">Twitter</span></a>
              </li>
              <li class="list-inline-item">
                <a class="p-2 text-white" href="#" target="_blank">
                  <svg class="icon icon-sm icon-white align-top">
                    <use xlinkHref="./svg/sprite.svg#it-medium"></use>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="it-twitter"><path fill="none" d="M0 0h24v24H0z"></path><path d="M8.08 20a10.93 10.93 0 0011-11v-.5a8 8 0 001.92-2 7.85 7.85 0 01-2.22.61A3.89 3.89 0 0020.48 5a8 8 0 01-2.48.91 3.87 3.87 0 00-6.59 3.52 11 11 0 01-8-4 3.85 3.85 0 001.19 5.16 3.76 3.76 0 01-1.75-.48A3.87 3.87 0 006 13.91a3.73 3.73 0 01-1 .14 4.3 4.3 0 01-.73-.05 3.87 3.87 0 003.61 2.68 7.73 7.73 0 01-4.8 1.66 7 7 0 01-.92-.06A10.9 10.9 0 008.08 20"></path></svg>
                  </svg>
                  <span class="sr-only">Medium</span></a>
              </li>
              <li class="list-inline-item">
                <a class="p-2 text-white" href="#" target="_blank">
                  <svg class="icon icon-sm icon-white align-top">
                    <use xlinkHref="./svg/sprite.svg#it-behance"></use>
                  </svg>
                  <span class="sr-only">Behance</span></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="it-footer-small-prints clearfix">
    <div class="container">
      <h3 class="sr-only">Sezione Link Utili</h3>
      <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
        <li class="list-inline-item">
          <a href="#" title="Note Legali">Media policy</a>
        </li>
        <li class="list-inline-item">
          <a href="#" title="Note Legali">Note legali</a>
        </li>
        <li class="list-inline-item">
          <a href="#" title="Privacy-Cookies">Privacy policy</a>
        </li>
        <li class="list-inline-item">
          <a href="#" title="Mappa del sito">Mappa del sito</a>
        </li>
      </ul>
    </div>
  </div>
</footer>
)


export default Footer