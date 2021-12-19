import * as React from 'react'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

  <section id="head-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-1 order-lg-2">
          <img src="https://picsum.photos/800/600" title="img title" alt="imagealt" class="img-fluid" />
        </div>
        <div class="col-lg-5 order-lg-1">
          <div class="card">
            <div class="card-body pb-5">
              <div class="category-top">
                <svg class="icon">
                  <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-calendar"></use>
                </svg>
                <a class="category" href="#">Notizie</a>
                <span class="data">18 mag 2018</span>
              </div>
              <h1 class="h4 card-title">Parte l'estate con oltre 300 eventi in centro e nei quartieri, tutti gli eventi previsti</h1>
              <p class="card-text">Inaugurazione lunedì 2 luglio con il concerto gratuito in piazza XX Settembre degli Sweet Soul Revue. Sul palco 20 musicisti da tutto il mondo.</p>
              <div class="chip chip-simple chip-primary">
                <a href="#" class="chip-label">Estate in città</a>
              </div>
              <a class="read-more pb-3" href="/design-comuni-prototipi/esempi/bootstrap-italia/template-novita.html">
                <span class="text">Tutte le novità</span>
                <svg class="icon">
                  <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg##it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="calendario">
    <div class="section section-muted pb-5 pt-0">
      <div class="container">
        <div class="row">
          <div class="card-wrapper card-overlapping card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
            <div class="card card-teaser card-teaser-image card-flex no-after rounded shadow">
              <div class="card-image-wrapper with-read-more pb-5">
                <div class="card-body p-4">
                  <div class="category-top">
                    <svg class="icon">
                      <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-pa"></use>
                    </svg>
                    <a class="category" href="#">Giunta e consiglio</a>
                  </div>
                  <p class="card-title font-weight-semibold">Mario Rossi</p>
                  <p class="card-text">Sindaco della città</p>
                </div>
                <div class="card-image card-image-rounded pb-5">
                  <img src="https://picsum.photos/150/200" alt="Immagine di esempio"/>
                </div>
              </div>

              <a class="read-more pl-4" href="/design-comuni-prototipi/esempi/bootstrap-italia/template-amministrazione.html">
                <span class="text">Tutta l'amministrazione</span>
                <svg class="icon">
                  <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
            <div class="card card-teaser no-after rounded shadow">
              <div class="card-body pb-5">
                <div class="category-top">
                  <svg class="icon">
                    <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-pa"></use>
                  </svg>
                  <a class="category" href="#">Pagamenti</a>
                </div>
                <p class="card-title font-weight-semibold">TARI - Tassa dei rifiuti</p>
                <p class="card-text">La TARI è in scadenza, controlla il tuo pagamento nella tua area personale.</p>
              </div>
              <a class="read-more" href="#">
                <span class="text">Tutti i servizi</span>
                <svg class="icon">
                  <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
            <div class="card card-teaser no-after rounded shadow">
              <div class="card-body pb-5">
                <div class="category-top">
                  <svg class="icon">
                    <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-pa"></use>
                  </svg>
                  <a class="category" href="#">Bandi</a>
                </div>
                <p class="card-title font-weight-semibold">Come partecipare ad un bando</p>
                <p class="card-text">Tutte le informazioni e i documenti necessari per partecipare.</p>
              </div>
              <a class="read-more" href="/design-comuni-prototipi/esempi/bootstrap-italia/template-documenti.html">
                <span class="text">Tutti i documenti</span>
                <svg class="icon">
                  <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="row row-title pt-5 pb-3">
          <h2>Calendario</h2>
          <div>
            <button type="button" class="mt-1 btn btn-secondary btn-sm">Tutto</button>
            <button type="button" class="mt-1 btn btn-outline-secondary btn-sm btn-icon">
              <svg class="icon">
                <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-pa"></use>
              </svg>
              <span>Consigli comunali</span>
            </button>
            <button type="button" class="mt-1 btn btn-outline-secondary btn-sm btn-icon">
              <svg class="icon">
                <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-calendar"></use>
              </svg>
              <span>Eventi</span>
            </button>
            <button type="button" class="mt-1 btn btn-outline-secondary btn-sm btn-icon">
              <svg class="icon">
                <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-settings"></use>
              </svg>
              Scadenze
            </button>
          </div>
        </div>

        <div class="row row-calendar">
          <div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-calendar-wrapper">
            <div class="it-header-block">
              <div class="it-header-block-title">
                <h4 class="mb-0 text-center">Settembre 2019</h4>
              </div>
            </div>
            <div class="it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag">
              
              
              
              
              
              
              
              
              
            <div class="owl-stage-outer"><div class="owl-stage"><div class="owl-item" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">15<span>lun</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">16<span>mar</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">17<span>mer</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">18<span>giov</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item active" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h3 class="card-title mb-0">19<span>ven</span></h3>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item active" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">20<span>sab</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item active" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">21<span>dom</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item active" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">22<span>lun</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div><div class="owl-item" ><div class="it-single-slide-wrapper">
                <div class="card-wrapper">
                  <div class="card card-bg">
                    <div class="card-body">
                      <h5 class="card-title">23<span>mar</span></h5>
                      <p class="card-text"><a href="#">Saldo TASI</a></p>
                      <p class="card-text"><a href="#">Concerto gratuito piazza XX Settembre</a></p>
                      <p class="card-text"><a href="#">Convocazione Consiglio Comunale - Prima seduta</a></p>
                      <p class="card-text"><a href="#">Seconda rata TARI</a></p>
                    </div>
                  </div>
                </div>
              </div></div></div></div><div class="owl-nav disabled"><button class="owl-prev"></button><button class="owl-next"></button></div><div class="owl-dots"><button role="button" class="owl-dot" aria-labelledby="owl-dot-0"><span></span></button><button role="button" class="owl-dot active" aria-labelledby="owl-dot-1"><span></span></button><button role="button" class="owl-dot" aria-labelledby="owl-dot-2"><span></span></button></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="evidenza">
    <div class="section section-background-header py-5">
      <div class="container">
        <div class="row">
          <h2 class="text-white">Argomenti in evidenza</h2>
        </div>
        <div class="py-4">
          <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
            <div class="card card-teaser no-after rounded shadow">
                <div class="card-body pb-5">
                  <div class="category-top">
                    <svg class="icon">
                      <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-info-circle"></use>
                    </svg>
                  </div>
                  <h3 class="card-title">Cantieri in città</h3>
                  <p class="card-text">Informazioni sui principali cantieri stradali aperti o in programmazione un città che comportano modifiche alla circolazione stradale.</p>
                  <p class="card-text">Visita il sito:</p>
                  <a href="#">
                    <div class="card card-teaser card-bg-primary no-after mt-0">
                      <div class="avatar size-lg mr-3">
                        <img src="https://picsum.photos/200/200" alt="Immagine" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Mobilità in Comune</h5>
                        <p class="card-text text-sans-serif">Il sito del turismo del Comune e della Città Metropolitana.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a class="read-more" href="#">
                  <span class="text">Esplora argomento</span>
                  <svg class="icon">
                    <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
            </div>
            <div class="card card-teaser no-after rounded shadow">
                <div class="card-body pb-5">
                  <div class="category-top">
                    <svg class="icon">
                      <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-clock"></use>
                    </svg>
                  </div>
                  <h3 class="card-title">Estate in città</h3>
                  <p class="card-text">Un ricco programma di appuntamenti: eventi culturali, ricreativi, concerti, mostre, cinema, ed altro ancora in diversi luoghi della città.</p>
                  <div class="link-list-wrapper mt-4">
                    <ul class="link-list">
                      <li>
                        <a class="list-item active icon-left" href="#">
                          <svg class="icon icon-primary"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-calendar"></use></svg>
                          <span>Eventi questo weekend</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item icon-left" href="#">
                          <svg class="icon icon-primary"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-calendar"></use></svg>
                          <span>Cosa fare questa settimana</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item icon-left" href="#">
                          <svg class="icon icon-primary"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-calendar"></use></svg>
                          <span>Agosto metropolitano</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item icon-left" href="#">
                          <svg class="icon icon-primary"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-calendar"></use></svg>
                          <span>Orari estivi metro e bus in vigore dal 9 giugno</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a class="read-more" href="#">
                  <span class="text">Esplora argomento</span>
                  <svg class="icon">
                    <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
            </div>
            <div class="card card-teaser no-after rounded shadow">
              <div class="card-body pb-5">
                <div class="category-top">
                  <svg class="icon">
                    <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-camera"></use>
                  </svg>
                </div>
                <h3 class="card-title">Sport</h3>
                <p class="card-text">Tutto quello che c'è da sapere sulle strutture sportive comunali a disposizione del pubblico e delle Associazioni, le iniziative a sostegno dello sport e gli eventi che coinvolgono la città.</p>
                <div class="link-list-wrapper mt-4">
                  <ul class="link-list">
                    <li>
                      <a class="list-item active icon-left" href="#">
                        <svg class="icon icon-primary"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-pa"></use></svg>
                        <span>Tutte le strutture turistiche della città</span>
                      </a>
                    </li>
                    <li>
                      <a class="list-item icon-left" href="#">
                        <svg class="icon icon-primary"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-calendar"></use></svg>
                        <span>Da lunedì 3 settembre chiudono le vasche della piscina comunale</span>
                      </a>
                    </li>
                    <li>
                      <a class="list-item icon-left" href="#">
                        <svg class="icon icon-primary"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-settings"></use></svg>
                        <span>Concessione contributi ad enti, associazioni, società sportive</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a class="read-more" href="#">
                  <span class="text">Esplora argomento</span>
                  <svg class="icon">
                    <use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
            <div class="row d-lg-inline-flex">
              <div class="col-lg-3">
                <h6 class="text-uppercase text-center">Altri argomenti</h6>
              </div>
              <div class="col-lg-9">
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Agevolazioni per la casa</a>
                </div>
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Ambiente</a>
                </div>
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Assistenza sociale</a>
                </div>
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Costruire e ristrutturare</a>
                </div>
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Famiglia</a>
                </div>
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Immigrazione</a>
                </div>
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Investire</a>
                </div>
                <div class="chip chip-simple chip-primary">
                  <a href="#" class="chip-label">Lavori pubblici</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col text-center">
                <a href="#" class="btn btn-primary mt-5">Vedi tutti</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <h3>Siti tematici</h3>
        </div>
        <div class="py-4">
          <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
            <div class="card card-teaser card-bg-primary rounded">
              <div class="avatar size-lg mr-3">
                <img src="https://picsum.photos/200/200" alt="Immagine"/>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Mobilità in Comune
                </h5>
                <p class="card-text text-sans-serif">
                  Il sito del turismo del Comune e della Città Metropolitana
                </p>
              </div>
            </div>
            <div class="card card-teaser card-bg-warning rounded">
              <div class="avatar size-lg mr-3">
                <img src="https://picsum.photos/200/200" alt="Immagine"/>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Turismo
                </h5>
                <p class="card-text text-sans-serif">
                  Il sito che offre informazioni sulle attività turistiche attive in città
                </p>
              </div>
            </div>
            <div class="card card-teaser card-bg-dark rounded">
              <div class="avatar size-lg mr-3">
                <img src="https://picsum.photos/200/200" alt="Immagine"/>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Musei Civici
                </h5>
                <p class="card-text text-sans-serif">
                  Tutte le informazioni sui musei e gli eventi culturali della città
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="novita">
    <div class="section section-background-header" >
      <div class="container">
        <div class="row">
          <div class="col col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <form>
              <div class="form-group mb-1">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <button type="submit" class="border-0 px-0">
                        <svg class="icon icon-sm"><use xlinkHref="/design-comuni-prototipi/assets/bootstrap-italia/dist/svg/sprite.svg#it-search"></use></svg>
                      </button>
                    </div>
                  </div>
                  <input type="text" class="form-control" id="exampleInputText" />
                  <label for="exampleInputText" >Cerca servizi, informazioni, persone</label>
                </div>
              </div>
            </form>
            <a href="#" class="btn btn-primary btn-sm mt-3">Uffici comunali</a>
            <a href="#" class="btn btn-primary btn-sm mt-3">Servizi demografici</a>
            <a href="#" class="btn btn-primary btn-sm mt-3">SUAP</a>
            <a href="#" class="btn btn-primary btn-sm mt-3">Sostegno alle famiglie</a>
            <a href="#" class="btn btn-primary btn-sm mt-3">Segnalazioni</a>
            <a href="#" class="btn btn-primary btn-sm mt-3">Dove lo butto?</a>
          </div>
        </div>
      </div>
    </div>
  </section>

    </Layout>
  )
}

export default IndexPage