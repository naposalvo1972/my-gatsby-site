import * as React from 'react'
import sprite from "./svg/sprite.svg"

import { Link } from "gatsby"

const Header = () => (
    <header class="it-header-wrapper it-header-sticky">
    <div class="it-header-slim-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="it-header-slim-wrapper-content">
              <a class="d-lg-block navbar-brand" href="#">Nome della Regione</a>
              <div class="header-slim-right-zone">
                <div class="nav-item dropdown">
                  <a aria-expanded="false" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                    <span>ITA</span>
                    <svg class="icon icon-white d-none d-lg-block">
                        <use xlinkHref={`${sprite}#it-expand`}/>                
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="row">
                      <div class="col-12">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <a class="list-item" href="#"><span>ITA</span></a>
                            </li>
                            <li>
                              <a class="list-item" href="#"><span>ENG</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="btn btn-primary btn-icon btn-full" href="#" title="Accedi all'area personale">
                                  <span class="rounded-icon">
                    <svg class="icon icon-primary">
                      <use xlinkHref={`${sprite}#it-user`}/>
                    </svg>
                  </span>
                  <span class="d-none d-lg-block">Accedi all'area personale</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="it-nav-wrapper">
      <div class="it-header-center-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="it-header-center-content-wrapper">
                <div class="it-brand-wrapper">
                  <a href="/design-comuni-prototipi/esempi/bootstrap-italia/template-homepage.html">
                    <svg class="icon">
                      <use xlinkHref={`${sprite}#it-pa`}/>  
                    </svg>
                    <div class="it-brand-text">
                      <h2 class="no_toc">Nome del Comune di prova</h2>
                      <h3 class="no_toc d-none d-md-block">
                        Uno dei tanti Comuni d'Italia
                      </h3>
                    </div>
                  </a>
                </div>
                <div class="it-right-zone">
                  <div class="it-socials d-none d-md-flex">
                    <span>Seguici su</span>
                    <ul>
                      <li>
                        <a aria-label="Facebook" href="#" target="_blank">
                          <svg class="icon">
                            <use xlinkHref={`${sprite}#it-facebook`}/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a aria-label="Twitter" href="#" target="_blank">
                          <svg class="icon">
                            <use xlinkHref={`${sprite}#it-twitter`}/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="it-search-wrapper">
                    <span class="d-none d-md-block">Cerca</span>
                    <a aria-label="Cerca" class="search-link rounded-icon" href="#">
                      <svg class="icon">

                        <use xlinkHref={`${sprite}#it-search`}/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="it-header-navbar-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="navbar navbar-expand-lg has-megamenu">
                <button aria-controls="nav10" aria-expanded="false" aria-label="Toggle navigation" class="custom-navbar-toggler" data-target="#nav10" type="button">
                  <svg class="icon">
                     <use xlinkHref={`${sprite}#it-burger"`}/>
                  </svg>
                </button>
                <div class="navbar-collapsable" id="nav10">
                  <div class="overlay"></div>
                  <div class="close-div sr-only">
                    <button class="btn close-menu" type="button">
                      <span class="it-close"></span>close
                    </button>
                  </div>
                  <div class="menu-wrapper">
                    <ul class="navbar-nav">
                      <li class="nav-item ">
                        <a class="nav-link " href="/design-comuni-prototipi/esempi/bootstrap-italia/template-amministrazione.html">
                          <span>Amministrazione</span>
                          
                        </a>
                      </li>
                      
                      <li class="nav-item ">
                         <Link class="nav-link" activeClassName="nav-link active" to="/about">AboutPage</Link>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link " href="/design-comuni-prototipi/esempi/bootstrap-italia/template-novita.html">
                          <span>Novità</span>
                          
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link " href="/design-comuni-prototipi/esempi/bootstrap-italia/template-servizi.html">
                          <span>Servizi</span>
                          
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link " href="/design-comuni-prototipi/esempi/bootstrap-italia/template-documenti.html">
                          <span>Documenti e Dati</span>
                          
                        </a>
                      </li>
                    </ul>
                    <ul class="navbar-nav navbar-secondary">
                      <li class="nav-item ">
                        <a class="nav-link " href="/design-comuni-prototipi/esempi/bootstrap-italia/template-argomenti-argomento.html">
                          Argomento 1</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/design-comuni-prototipi/esempi/bootstrap-italia/template-argomenti-argomento.html">
                          Argomento 2</a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link " href="/design-comuni-prototipi/esempi/bootstrap-italia/template-argomenti.html">
                          <span class="font-weight-bold">Tutti gli argomenti...</span>
                          
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

)

export default Header