(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-site-wrapper>\r\n<router-outlet></router-outlet>\r\n</app-site-wrapper>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section welcome-block half-height has-dark-background\">\r\n    <div class=\"full-background-image\" style=\"background-image: url(./assets/images/tessalated-background-dark.jpg);\"></div>\r\n    <div class=\"content-container\">\r\n      <h1 class=\"page-title title is-1 has-font-thin\">Quem somos</h1>\r\n    </div>\r\n  </section>\r\n  <section class=\"section page-content\">\r\n    <div class=\"section-content\">\r\n      <img src=\"./assets/images/escritorio-df-consultec-quem-somos.jpg\" style=\"margin-top: -100px;\" alt=\"\">\r\n      <div class=\"spacer is-2\"></div>\r\n      <p>\r\n        A DF Consultec é especializada em prover serviços em TI de alta performance em infra-estrutura de rede, segurança da informação e desenvolvimento de software. Nosso portfólio contempla empresas nos mais diversificados setores.\r\n      </p>\r\n      <p>\r\n        Fundada em Curitiba, em setembro de 2011, atua nos segmentos público e privado e contamos com qualificação técnica e certificação de altíssimo nivel.\r\n      </p>\r\n      <p>\r\n        Com sede administrativa em Curitiba e filial em São Paulo, atuamos em todo o território nacional.\r\n      </p>\r\n    </div> \r\n  \r\n    <div class=\"is-clearfix\"></div>\r\n    <div class=\"timeline is-centered\" style=\"margin-top: 20px\">\r\n      <div class=\"spacer is-2\"></div>\r\n      <header class=\"timeline-header\">\r\n        <span class=\"tag is-medium is-primary\">O inicio</span>\r\n      </header>\r\n      <div class=\"timeline-item\">\r\n        <div class=\"timeline-marker is-primary\"></div>\r\n        <div class=\"timeline-content\">\r\n          <p class=\"heading\">Janeiro, 2016</p>\r\n          <p>Neste mês acontece um grande fato</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"timeline-item\">\r\n        <div class=\"timeline-marker is-warning is-image is-32x32\">\r\n          <img src=\"http://bulma.io/images/placeholders/32x32.png\">\r\n        </div>\r\n        <div class=\"timeline-content\">\r\n          <p class=\"heading\">Fevereiro, 2016</p>\r\n          <p>Neste mês acontece uma grande conquista</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"timeline-item\">\r\n        <div class=\"timeline-marker is-danger is-icon\">\r\n          <i class=\"fa fa-flag\"></i>\r\n        </div>\r\n        <div class=\"timeline-content\">\r\n          <p class=\"heading\">Março, 2017</p>\r\n          <p>Um grande evento realizado!</p>\r\n        </div>\r\n      </div>\r\n      <header class=\"timeline-header\">\r\n        <span class=\"tag is-medium is-primary\">E seguimos com nossas conquistas!</span>\r\n      </header>\r\n    </div>\r\n  \r\n  </section>\r\n  <div class=\"is-clearfix\"></div>\r\n  <div class=\"footer-spacer-2\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog-post/blog-post.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog-post/blog-post.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"post\">\r\n\r\n<div class=\"intro-block\">\r\n<div class=\"full-background-image\">\r\n    <img [src]=\"featuredImage\" alt=\"\">\r\n</div>\r\n<div class=\"blog-post-overlay\"></div>\r\n<div class=\"block-content\">\r\n    <div class=\"block-subtitle\">Blog</div>\r\n    <h1 class=\"block-title\">{{ post.title.rendered }}</h1>\r\n</div>\r\n</div>\r\n\r\n<section class=\"section page-content\">\r\n<div class=\"section-content\">\r\n    <div class=\"blog-content\">\r\n    <article class=\"blog-post-article\">\r\n        <header class=\"blog-post-header\">\r\n            <h3 class=\"subtitle is-4\" [innerHTML]=\"post.excerpt.rendered\"></h3>\r\n            <time datetime=\"2020-01-20 10:00\">{{ post.date | date: 'dd/MM/yyyy hh:mm' }}</time>\r\n            <figure class=\"blog-post-intro-image\">\r\n                <img [src]=\"featuredImage\" alt=\"\">\r\n            </figure>\r\n        </header>\r\n        <div [innerHTML]=\"post.content.rendered\"></div>\r\n    </article>\r\n    <aside class=\"blog-aside\">\r\n        <div class=\"social-share\">\r\n            <div class=\"text-uppercase has-font-bolder\">Compartilhar</div>\r\n            <div class=\"spacer\"></div>\r\n            <ul class=\"social-share-links\">\r\n                <li>\r\n                    <a href=\"#\"><img src=\"./assets/images/icons/twitter-color-icon.png\" alt=\"\"></a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\"><img src=\"./assets/images/icons/facebook-color-icon.png\" alt=\"\"></a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\"><img src=\"./assets/images/icons/linkedin-color-icon.png\" alt=\"\"></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"related-posts\">\r\n            <div class=\"text-uppercase has-font-bolder\">Últimas Postagens</div>\r\n            <div class=\"spacer\"></div>\r\n            <div class=\"blog-post-grid\">\r\n                <app-post-item *ngFor=\"let item of posts; let i=index\" [post]=\"item\"></app-post-item>\r\n            </div>\r\n        </div>\r\n    </aside>\r\n    </div>\r\n</div>\r\n<div class=\"footer-spacer-2\"></div>\r\n</section>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section welcome-block half-height has-dark-background\">\r\n    <div class=\"full-background-image\" style=\"background-image: url(./assets/images/tessalated-background-dark.jpg);\"></div>\r\n    <div class=\"content-container\">\r\n      <h1 class=\"page-title title is-2 has-font-thin\">Blog</h1>\r\n    </div>\r\n  </section>\r\n  <section class=\"section page-content\">\r\n    <div class=\"section-content\">\r\n  \r\n      <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n  \r\n    <div class=\"navbar-menu\">\r\n      <div class=\"navbar-start\">\r\n        <a class=\"navbar-item\">\r\n          Destaques\r\n        </a>\r\n  \r\n        <a class=\"navbar-item\">\r\n          Todos\r\n        </a>\r\n  \r\n        <a class=\"navbar-item\">\r\n          Tecnologia\r\n        </a>\r\n  \r\n        <a class=\"navbar-item\">\r\n          Segurança\r\n        </a>\r\n        \r\n        <a class=\"navbar-item\">\r\n          Infraestrutura\r\n        </a>\r\n  \r\n        <a class=\"navbar-item\">\r\n          Mercado\r\n        </a>\r\n      </div>\r\n  \r\n      <div class=\"navbar-end\">\r\n        <div class=\"navbar-item\">\r\n          <div class=\"buttons\">\r\n            <div class=\"field has-addons\">\r\n              <p class=\"control is-expanded\">\r\n                <input class=\"input\" type=\"text\" placeholder=\"Pesquise aqui\">\r\n              </p>\r\n              <p class=\"control\">\r\n                <a class=\"button\">\r\n                  <span class=\"icon\">\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </span>\r\n                </a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n      <div class=\"spacer is-2\"></div>\r\n      <div class=\"blog-post-grid\">\r\n        <app-post-item *ngFor=\"let item of posts; let i=index\" [post]=\"item\"></app-post-item>\r\n      </div>\r\n      <nav class=\"pagination\" role=\"navigation\" aria-label=\"pagination\">\r\n      <a class=\"pagination-previous\" title=\"This is the first page\" disabled>Anterior</a>\r\n      <a class=\"pagination-next\">Próxima</a>\r\n      <ul class=\"pagination-list\">\r\n        <li>\r\n          <a class=\"pagination-link is-current\" aria-label=\"Page 1\" aria-current=\"page\">1</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    </div>\r\n    <div class=\"footer-spacer-2\"></div>\r\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clients/clients.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clients/clients.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section welcome-block half-height has-dark-background\">\r\n    <div class=\"full-background-image\" style=\"background-image: url(./assets/images/tessalated-background-dark.jpg);\"></div>\r\n    <div class=\"content-container\">\r\n      <h1 class=\"page-title title is-2 has-font-thin\">Construindo uma história de sucesso com nossos clientes</h1>\r\n    </div>\r\n  </section>\r\n  \r\n  <section class=\"section page-content\">\r\n    <div class=\"section-content\"> \r\n    \r\n      <!-- <nav class=\"pagination is-centered\" role=\"navigation\" aria-label=\"pagination\">\r\n      <ul class=\"pagination-list\">\r\n        <li><a class=\"pagination-link\" aria-label=\"Goto page 45\">Clientes</a></li>\r\n        <li><a class=\"pagination-link\" aria-label=\"Page 46\" aria-current=\"page\">Depoimentos</a></li>\r\n        <li><a class=\"pagination-link\" aria-label=\"Goto page 47\">Cases</a></li>\r\n      </ul>\r\n    </nav> -->\r\n  \r\n      <div class=\"client-grid\">\r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/agp-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/antilhas-grupo-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/arcadis-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/bematech-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/braspress-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/gerdau-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/grpcom-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/havas-media-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/ibmec-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/mahle-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/oji-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/ouroverde-cliente.png\" alt=\"\">\r\n          </a>\r\n          \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/ponta-do-felix-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/sertrading-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/sodecia-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/telefonica-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/totvs-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/unifor-cliente.png\" alt=\"\">\r\n          </a>\r\n  \r\n          <a class=\"client-logo-box\" href='#'>\r\n            <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/weg-cliente.png\" alt=\"\">\r\n          </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-spacer-2\"></div>\r\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section welcome-block half-height has-dark-background\">\r\n    <div class=\"full-background-image\" style=\"background-image: url(./assets/images/tessalated-background-dark.jpg);\"></div>\r\n    <div class=\"content-container\">\r\n      <h1 class=\"page-title title is-2 has-font-thin\">Entre em contato conosco</h1>\r\n      <div class=\"spacer is-1\"></div>\r\n      <h3 class=\"subtitle is-5\">\r\n        Quer conhecer maiores detalhes sobre nossas soluções? \r\n        <br>Veja onde você pode nos encontrar!\r\n      </h3>\r\n    </div>\r\n  </section>\r\n  <div class=\"spacer is-2\"></div>\r\n  <section class=\"section page-content\">\r\n    <div class=\"section-content\">\r\n    <p class=\"text-uppercase has-font-bolder\">\r\n        Endereços\r\n    </p>\r\n    <div class=\"spacer\"></div>\r\n    <section class=\"contact-us-address\">\r\n        <div class=\"contact-item\">\r\n          <div class=\"contact-item-icon\">\r\n            <img src=\"./assets/images/icons/location-color-icon.png\" alt=\"\" srcset=\"\">\r\n          </div>\r\n          <div class=\"contact-item-info\">\r\n            <span>Av. Winston Churchill 2346 - 3º andar, Pinheirinho - Curitiba - Paraná</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"contact-item\">\r\n          <div class=\"contact-item-icon\">\r\n            <img src=\"./assets/images/icons/location-color-icon.png\" alt=\"\" srcset=\"\">\r\n          </div>\r\n          <div class=\"contact-item-info\">\r\n            <span>Alameda Terracota, 185 – 11º andar – sala 1132, São Caetano do Sul - São Paulo</span>\r\n          </div>\r\n        </div>\r\n        </section>\r\n  \r\n      <div class=\"spacer\"></div>\r\n      <div class=\"contact-us-content\">\r\n        <div>\r\n          <figure class=\"map-placeholder\">\r\n            <img src=\"./assets/images/map-parana.png\" alt=\"\">\r\n          </figure>\r\n        </div>\r\n        <div class=\"spacer is-2\"></div>\r\n        <p class=\"text-uppercase has-font-bolder\">\r\n          Dados de contato\r\n        </p>\r\n        <section class=\"contact-list-items-grid\">\r\n          <div class=\"contact-item\">\r\n            <div class=\"contact-item-icon\">\r\n              <img src=\"./assets/images/icons/whatsapp-color-icon.png\" alt=\"\" srcset=\"\">\r\n            </div>\r\n            <div class=\"contact-item-info\">\r\n              <span>(11) 98898-9896</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"contact-item\">\r\n            <div class=\"contact-item-icon\">\r\n              <img src=\"./assets/images/icons/phone-color-icon.png\" alt=\"\" srcset=\"\">\r\n            </div>\r\n            <div class=\"contact-item-info\">\r\n              <span>(11) 3538-0005 / 3538-0006</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"contact-item\">\r\n            <div class=\"contact-item-icon\">\r\n              <img src=\"./assets/images/icons/email-color-icon.png\" alt=\"\" srcset=\"\">\r\n            </div>\r\n            <div class=\"contact-item-info\">\r\n              <span>comercial@dfconsultec.com.br</span>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>  \r\n  </section>\r\n  <div class=\"spacer is-2\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"site-header\">\r\n\r\n</header>\r\n\r\n<section class=\"section has-slider section-welcome\">\r\n\r\n    <div id='welcome-carousel' class=\"glide\" data-gap='0'>\r\n        <div class=\"glide__track\" data-glide-el=\"track\">\r\n            <ul class=\"glide__slides\">\r\n                <li class=\"glide__slide\">\r\n                    <div class=\"welcome-slide\">\r\n                        <figure class=\"full-background-image\"\r\n                            style=\"background-image: url('./assets/images/server-room.jpg');\"></figure>\r\n                        <div class=\"welcome-slide-content has-text-centered\">\r\n                            <b class=\"text-uppercase\" style=\"font-size: 25px\">Conheça seus novos aliados</b>\r\n                            <div\r\n                                class=\"title is-1 has-text-white has-font-thin is-marginless is-paddingless text-uppercase\">\r\n                                Tecnologia & Segurança</div>\r\n                            <div class=\"text-uppercase\" style=\"font-size: 25px\">Na medida certa</div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"glide__slide\">\r\n                    <div class=\"welcome-slide\">\r\n                        <figure class=\"full-background-image\"\r\n                            style=\"background-image: url('./assets/images/server-room-2.jpg');\"></figure>\r\n                        <div class=\"welcome-slide-content has-text-centered\">\r\n                            <b class=\"text-uppercase\" style=\"font-size: 25px\">Conheça seus novos aliados</b>\r\n                            <div\r\n                                class=\"title is-1 has-text-white has-font-thin is-marginless is-paddingless text-uppercase\">\r\n                                Tecnologia & Segurança</div>\r\n                            <div class=\"text-uppercase\" style=\"font-size: 25px\">Na medida certa</div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"glide__slide\">\r\n                    <div class=\"welcome-slide\">\r\n                        <figure class=\"full-background-image\"\r\n                            style=\"background-image: url('./assets/images/server-room-3.jpg');\"></figure>\r\n                        <div class=\"welcome-slide-content has-text-centered\">\r\n                            <b class=\"text-uppercase\" style=\"font-size: 25px\">Conheça seus novos aliados</b>\r\n                            <div\r\n                                class=\"title is-1 has-text-white has-font-thin is-marginless is-paddingless text-uppercase\">\r\n                                Tecnologia & Segurança</div>\r\n                            <div class=\"text-uppercase\" style=\"font-size: 25px\">Na medida certa</div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"glide__bullets\" data-glide-el=\"controls[nav]\">\r\n            <button class=\"glide__bullet\" data-glide-dir=\"=0\"></button>\r\n            <button class=\"glide__bullet\" data-glide-dir=\"=1\"></button>\r\n            <button class=\"glide__bullet\" data-glide-dir=\"=2\"></button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section section-services has-wave-top has-wave-bottom\">\r\n    <div class=\"gradient-shadow top\"></div>\r\n    <div class=\"gradient-shadow bottom\"></div>\r\n    <div id=\"particles-background\" class=\"particles-background\"></div>\r\n\r\n    <div class=\"section-content\">\r\n        <div class=\"columns\">\r\n            <!-- service box -->\r\n            <div class=\"column is-full is-half-tablet is-one-third-widescreen\">\r\n                <a class=\"service-card\" href=\"servico.html\">\r\n                    <div class=\"service-card-title\">Consultoria em Tecnologia</div>\r\n                    <p class=\"description\">Podemos aumentar a qualidade e produtividade de sua equipe. Através de uma\r\n                        infraestrutura de TI, gerenciamento de Redes de Dados e treinamento adequado. .</p>\r\n                    <div class=\"service-card-icon\">\r\n                        <img src=\"./assets/images/icons/consultoria-em-tencnologia-icon.svg\" alt=\"Icone de Tecnologia\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <!-- #service box -->\r\n\r\n            <!-- service box -->\r\n            <div class=\"column is-full is-half-tablet is-one-third-widescreen\">\r\n                <a class=\"service-card\" href=\"servico.html\">\r\n                    <div class=\"service-card-title\">Segurança da Informação</div>\r\n                    <p class=\"description\">Temos soluções estruturadas para garantir a integridade dos dados da sua\r\n                        empresa.\r\n                        Garantindo a segurança na virtualização, criptografia de dados, backup, firewall e VPN.</p>\r\n                    <div class=\"service-card-icon\">\r\n                        <img src=\"./assets/images/icons/seguranca-da-informacao-icon.svg\" alt=\"Icone de Tecnologia\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <!-- #service box -->\r\n\r\n            <!-- service box -->\r\n            <div class=\"column is-full is-half-tablet is-one-third-widescreen\">\r\n                <a class=\"service-card\" href=\"servico.html\">\r\n                    <div class=\"service-card-title\">Conectividade</div>\r\n                    <p class=\"description\">Dominamos as principais tecnologias de conectividade, integrando soluções de\r\n                        dados,\r\n                        voz e imagem. Oferecemos soluções seguras como Dell, SonicWall, Cisco, Websense, e entre outros.\r\n                    </p>\r\n                    <div class=\"service-card-icon\">\r\n                        <img src=\"./assets/images/icons/conectividade.svg\" alt=\"Icone de Tecnologia\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <!-- #service box -->\r\n        </div>\r\n        <div class=\"columns\">\r\n            <!-- service box -->\r\n            <div class=\"column is-full is-half-tablet is-one-third-widescreen\">\r\n                <a class=\"service-card\" href=\"servico.html\">\r\n                    <div class=\"service-card-title\">Tecnologias</div>\r\n                    <p class=\"description\">Trabalhos com profissionais certificados e com amplo conhecimento em Linux,\r\n                        Firewall\r\n                        Proxy, DNS, Windows Exchange, Lync, SharePoint, Hyper-V, Sql Server e System Center Office 365.\r\n                    </p>\r\n                    <div class=\"service-card-icon\">\r\n                        <img src=\"./assets/images/icons/tecnologia.svg\" alt=\"Icone de Tecnologia\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <!-- #service box -->\r\n\r\n            <!-- service box -->\r\n            <div class=\"column is-full is-half-tablet is-one-third-widescreen\">\r\n                <a class=\"service-card\" href=\"servico.html\">\r\n                    <div class=\"service-card-title\">Outsourcing</div>\r\n                    <p class=\"description\">Podemos assumir a responsabilidade e trabalhar para todas as demandas do TI\r\n                        da sua\r\n                        empresa, enquanto você mantém o foco em seu negócio.</p>\r\n                    <div class=\"service-card-icon\">\r\n                        <img src=\"./assets/images/icons/outsourcing.svg\" alt=\"Icone de Tecnologia\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <!-- #service box -->\r\n\r\n            <!-- service box -->\r\n            <div class=\"column is-full is-half-tablet is-one-third-widescreen\">\r\n                <a class=\"service-card\" href=\"servico.html\">\r\n                    <div class=\"service-card-title\">Desenvolvimento</div>\r\n                    <p class=\"description\">Desenvolvemos sistemas de acordo com a necessidade do seu negócio. Promovendo\r\n                        aplicações para desktop, sistemas Web e até mesmo dispositivos móveis.</p>\r\n                    <div class=\"service-card-icon\">\r\n                        <img height=\"100%\" width=\"auto\" src=\"./assets/images/icons/desenvolvimento.svg\"\r\n                            alt=\"Icone de Tecnologia\">\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <!-- #service box -->\r\n\r\n        </div>\r\n    </div> <!-- # Section Content -->\r\n</section>\r\n\r\n<section class=\"section section-our-clients\">\r\n    <h3 class=\"has-text-centered title is-3\">\r\n        Conheça alguns de nossos clientes\r\n    </h3>\r\n\r\n    <div class=\"section-content\">\r\n        <div class=\"client-grid\">\r\n            <a class=\"client-logo-box\" href='service.html'>\r\n                <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/mahle-cliente.png\" alt=\"\">\r\n            </a>\r\n\r\n            <a class=\"client-logo-box\">\r\n                <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/oji-cliente.png\" alt=\"\">\r\n            </a>\r\n\r\n            <a class=\"client-logo-box\">\r\n                <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/sodecia-cliente.png\" alt=\"\">\r\n            </a>\r\n\r\n            <a class=\"client-logo-box\">\r\n                <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/totvs-cliente.png\" alt=\"\">\r\n            </a>\r\n\r\n            <a class=\"client-logo-box\">\r\n                <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/unifor-clietne.png\" alt=\"\">\r\n            </a>\r\n\r\n            <a class=\"client-logo-box\">\r\n                <img width=\"100%\" height=\"auto\" src=\"./assets/images/clientes/ups-cliente.png\" alt=\"\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"has-text-centered\">\r\n        <a class=\"button is-link\" href=\"clientes.html\">\r\n            Ver Todos os Clientes\r\n        </a>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section section-testimonials\">\r\n    <h3 class=\"has-text-centered title is-3\">\r\n        Veja o que eles acham sobre nós\r\n    </h3>\r\n\r\n\r\n    <div id='testimonial-carousel' class=\"glide\">\r\n        <div class=\"glide__track\" data-glide-el=\"track\">\r\n            <ul class=\"glide__slides\">\r\n                <li class=\"glide__slide\">\r\n                    <div class=\"testimonial-content\">\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod\r\n                            tincidunt ut laoreet dolore magna aliquam erat volutpat.\r\n                        </p>\r\n                        <div class=\"client-name\">\r\n                            Totvs, André Gonçalves\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"glide__slide\">\r\n                    <div class=\"testimonial-content\">\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod\r\n                            tincidunt ut laoreet dolore magna aliquam erat volutpat.\r\n                        </p>\r\n                        <div class=\"client-name\">\r\n                            USP, Paulo Santos\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"glide__slide\">\r\n                    <div class=\"testimonial-content\">\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod\r\n                            tincidunt ut laoreet dolore magna aliquam erat volutpat.\r\n                        </p>\r\n                        <div class=\"client-name\">\r\n                            Ouroverde, José Silva\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section section-blog\">\r\n    <h3 class=\"has-text-centered title is-3\">\r\n        Acompanhe nosso Blog\r\n    </h3>\r\n\r\n    <div class=\"section-content\">\r\n        <div class=\"latest-blog-posts\">\r\n            <app-post-item *ngFor=\"let item of posts; let i=index\" [post]=\"item\"></app-post-item>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section section-partners\">\r\n    <h3 class=\"has-text-centered title is-3\">\r\n        Parceiros\r\n    </h3>\r\n    <div class=\"section-content\">\r\n        <div class=\"partner-logo-box\">\r\n            <img src=\"./assets/images/parceiros/aruba-parceiro.png\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"partner-logo-box\">\r\n            <img src=\"./assets/images/parceiros/memphis-parceiro.png\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"partner-logo-box\">\r\n            <img src=\"./assets/images/parceiros/microsoft-parceiro.png\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"partner-logo-box\">\r\n            <img src=\"./assets/images/parceiros/silver-peak-parceiro.png\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"partner-logo-box\">\r\n            <img src=\"./assets/images/parceiros/trend-parceiro.png\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"partner-logo-box\">\r\n            <img src=\"./assets/images/parceiros/veeam-parceiro.png\" alt=\"\">\r\n        </div>\r\n    </div>\r\n    <div class=\"footer-spacer\"></div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solutions/solutions.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solutions/solutions.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"intro-block\">\r\n    <div class=\"full-background-image\" style=\"background-image: url(./assets/images/tessalated-background-dark.jpg);\"></div>\r\n    <div class=\"block-content\">\r\n        <div class=\"block-subtitle\">Soluções</div>\r\n\r\n        <h1 class=\"block-title\">Consultoria em Tecnologia</h1>\r\n        <div class=\"service-description-intro\" style=\"margin-top: 60px;\">\r\n            <div class=\"service-description-intro-icon\">\r\n                <img src=\"./assets/images/icons/consultoria-em-tencnologia-icon.svg\" alt=\"Icone de Tecnologia\">                    \r\n            </div>\r\n            <h2 class=\"service-description-intro-info\">\r\n                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>\r\n            </h2>\r\n        </div>\r\n        <ul class=\"service-points\">\r\n            <li>Infraestrutura de TI</li>\r\n            <li>Governança de TI</li>\r\n            <li>Treinamentos</li>\r\n            <li>Gerenciamento de Redes de Dados</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"section page-content has-wave-top has-wave-white\">\r\n    <div class=\"section-content\">\r\n        <article>\r\n        <figure class=\"map-placeholder\">\r\n            <img src=\"./assets/images/services/consultoria-ti.png\" alt=\"\">\r\n        </figure>\r\n        <div class=\"spacer is-2\"></div>\r\n        <p>\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel varius diam, at ultricies diam. Curabitur faucibus, sapien sit amet viverra luctus, ipsum nulla laoreet ex, eu iaculis eros nisl sit amet lectus. Nulla ornare ultricies purus, non porttitor leo pellentesque eu. Aenean luctus mi nec dui convallis, quis facilisis quam hendrerit. Aliquam dictum tincidunt lectus, quis volutpat orci sollicitudin sed. Praesent lectus urna, vulputate in pulvinar maximus, venenatis ac tortor. Curabitur ornare cursus velit, eu ornare justo sagittis vel.\r\n\r\nNunc mollis quam a magna porttitor dictum. Donec ac iaculis libero. Fusce scelerisque vitae lectus quis aliquet. Morbi varius quam sem, eu vehicula ante auctor et. Aenean eleifend odio id libero aliquam pharetra. Mauris in est nibh. Morbi sodales egestas sapien, ultrices congue lacus. Donec lobortis et turpis a faucibus. Mauris nec gravida elit, ac efficitur nisi. Donec vulputate tempor finibus. Ut et enim nibh. Mauris turpis diam, mattis ac ex sagittis, mattis fermentum augue.\r\n\r\nVestibulum metus nunc, accumsan ut convallis eget, ornare sit amet ex. Sed nec est auctor, pellentesque libero a, dignissim orci. Nunc lorem neque, suscipit sed feugiat nec, dignissim sit amet turpis. Donec imperdiet tempor felis, vitae dictum turpis scelerisque quis. Sed in molestie metus. Vivamus non condimentum sem. Nunc arcu nunc, eleifend ac bibendum id, ornare a justo. Curabitur volutpat aliquet leo accumsan blandit. Praesent mattis suscipit ultricies. Duis in lacinia magna.\r\n\r\nPellentesque id leo justo. Sed auctor libero leo, eu commodo leo tincidunt vitae. Etiam sagittis mauris et nunc pellentesque interdum. Praesent a volutpat felis, sit amet rhoncus urna. In congue orci vitae ante cursus sollicitudin. Pellentesque ac orci at augue mollis mattis. Quisque eget velit sit amet quam hendrerit egestas sed non justo. Maecenas porttitor sed elit eget ornare. Aliquam hendrerit rhoncus nunc sit amet auctor.\r\n\r\nVivamus in dignissim lorem. Morbi vitae lacus nec nisi feugiat suscipit. Phasellus et tempor urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices tincidunt est vel venenatis. Vivamus convallis nulla interdum placerat aliquam. Pellentesque neque sapien, varius id dapibus ac, consequat vel dolor. Nullam at lorem dapibus, blandit tellus et, venenatis enim. Quisque imperdiet sollicitudin nulla sed pulvinar. Quisque commodo lectus eu leo ullamcorper sagittis. Proin eget accumsan eros, egestas luctus ligula. Aenean facilisis venenatis magna, in mollis odio fermentum viverra. Nulla vitae ipsum nisi. Nulla dui magna, fringilla quis ornare ac, congue ac diam. Nulla sit amet aliquam lacus.\r\n        </p>\r\n        </article>\r\n    </div>\r\n</section>\r\n<app-contact-form>\r\n    \r\n</app-contact-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/contact-form/contact-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/contact-form/contact-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section service-page-form\">\r\n    <div class=\"section-content\">\r\n        <div class=\"has-text-centered\">\r\n            <div class=\"title is-3 has-font-regular\">Se interessou pelo nosso serviço?<br>Nos contate para maiores informações</div>\r\n        </div>\r\n        <div class=\"spacer is-2\"></div>\r\n        <form>\r\n            <div class=\"field\">\r\n                <div class=\"control\">\r\n                    <input type=\"text\" class=\"input\" placeholder='Nome'>\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n                <div class=\"control\">\r\n                    <input type=\"text\" class=\"input\" placeholder='E-mail'>\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n                <div class=\"control\">\r\n                    <input type=\"text\" class=\"input\" placeholder='Telefone'>\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n                <div class=\"control\">\r\n                    <span class=\"select is-fullwidth\">\r\n                        <select name=\"\" id=\"\" class=\"input\">\r\n                            <option value=\"\">Serviço atual</option>\r\n                        </select>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n                <div class=\"control\">\r\n                    <textarea style='min-height: 200px; min-width: 100%;' name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"input\" placeholder='Mensagem'></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"has-text-centered\">\r\n                <button class=\"button submit-button\">Enviar mensagem</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"footer-spacer-2\"></div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer has-wave-top\">\r\n    <div class=\"footer-content\">\r\n        <div class=\"footer-grid\">\r\n            <div>\r\n                <div class=\"footer-title\">Mapa do site</div>\r\n                <nav class=\"footer-links\">\r\n                    <ul class=\"footer-links-list\">\r\n                        <li class='item'><a class=\"link\" href=\"quem-somos.html\">Quem Somos</a></li>\r\n                        <li class='item'><a class=\"link\" href=\"servico.html\">Serviços</a></li>\r\n                        <li class='item'><a class=\"link\" href=\"clientes.html\">Clientes</a></li>\r\n                        <li class='item'><a class=\"link\" href=\"blog.html\">Blog</a></li>\r\n                        <li class='item'><a class=\"link\" href=\"contato.html\">Contato</a></li>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n            <div>\r\n                <div class=\"footer-title\">Contatos</div>\r\n                <ul class=\"footer-contacts-list\">\r\n                    <li class=\"item\">\r\n                        <span>\r\n                            <img src=\"./assets/images/icons/whatsapp-icon.png\" alt=\"\">\r\n                        </span>\r\n                        <span>(11) 98898-9896</span>                        \r\n                    </li>\r\n                    <li class=\"item\">\r\n                        <span>\r\n                            <img src=\"./assets/images/icons/phone-icon.png\" alt=\"\">\r\n                        </span>\r\n                        <span>(11) 3538-0005 / 3538-0006</span>\r\n                    </li>\r\n                    <li class=\"item\">\r\n                        <span>\r\n                            <img src=\"./assets/images/icons/email-icon.png\" alt=\"\">\r\n                        </span>\r\n                        <span>comercial@dfconsultec.com.br</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div>\r\n                <div class=\"footer-title\">Nossa Localização</div>\r\n                <ul class=\"footer-localization\">\r\n                    <li class=\"item\">\r\n                        <span>\r\n                            <img src=\"./assets/images/icons/location-icon.png\" alt=\"\">\r\n                        </span>\r\n                        <span>Av. Winston Churchill 2346 - 3º andar, Pinheirinho - Curitiba - Paraná</span>\r\n                    </li>\r\n                    <li class=\"item\">\r\n                        <span>\r\n                            <img src=\"./assets/images/icons/location-icon.png\" alt=\"\">\r\n                        </span>\r\n                        <span>Alameda Terracota, 185 – 11º andar – sala 1132, São Caetano do Sul - São Paulo</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <ul class=\"footer-social\">\r\n                <li class=\"item\">\r\n                    <img src=\"./assets/images/icons/facebook-icon.png\" alt=\"\">\r\n                </li>\r\n                <li class=\"item\">\r\n                    <img src=\"./assets/images/icons/twitter-icon.png\" alt=\"\">\r\n                </li>\r\n                <li class=\"item\">\r\n                    <img src=\"./assets/images/icons/instagram-icon.png\" alt=\"\">\r\n                </li>\r\n                <li class=\"item\">\r\n                    <img src=\"./assets/images/icons/linkedin-icon.png\" alt=\"\">\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div>\r\n            <div class=\"has-text-centered\">\r\n                <button class=\"button button-back-to-top\">VOLTAR AO TOPO</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/menu/menu.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/menu/menu.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"main-menu\">\r\n    <div class=\"main-menu-content\">\r\n        <a [routerLink]=\"['/']\" class=\"brand\">\r\n            <img src=\"./assets/images/df-logo-horizontal-branco.png\" alt=\"\">\r\n        </a>\r\n    </div>\r\n    <div class=\"main-menu-content\">\r\n        <div class=\"hamburger-menu-toggle\" [class.is-active]=\"isActive\" (click)=\"toggleMenu($event)\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"expanded-menu\" [class.is-active]=\"isActive\">\r\n    <div class=\"expanded-menu-content\">\r\n        <nav class=\"menu-items\">\r\n            <ul>\r\n                <li>\r\n                    <a class=\"item\" [routerLink]=\"['/']\">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"item\" [routerLink]=\"['/solucoes']\">Soluções</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"item\" [routerLink]=\"['/quem-somos']\">Quem Somos</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"item\" [routerLink]=\"['/clientes']\">Clientes</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"item\" [routerLink]=\"['/blog']\">Blog</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"item\" [routerLink]=\"['/contato']\">Contato</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-item/post-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-item/post-item.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"blog-post.html\" [routerLink]=\"['/blog/' + post.id + '/' + post.slug]\" >\r\n    <header>\r\n    <figure class=\"blog-post-grid-item-image\">\r\n        <img src=\"./assets/images/services/consultoria-ti.png\" alt=\"\">\r\n    </figure>\r\n    </header>\r\n    <section class=\"blog-post-grid-item-body\">\r\n    <h3 class=\"blog-post-grid-item-title\">\r\n        {{ post.title.rendered }}\r\n    </h3>\r\n    <p>\r\n        {{ excerptString() }}\r\n    </p>\r\n    <button class=\"button button-open-post\">Ver mais</button>\r\n    </section>\r\n</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/wrapper/site-wrapper.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/wrapper/site-wrapper.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n<ng-content></ng-content>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./scripts/jquery.particleground.js":
/*!******************************************!*\
  !*** ./scripts/jquery.particleground.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.1.0
 * @description Creates a canvas based particle system background
 *
 * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
 */

;(function(window, document) {
  'use strict';
  var pluginName = 'particleground';

  // http://youmightnotneedjquery.com/#deep_extend
  function extend(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      if (!obj) continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object')
            deepExtend(out[key], obj[key]);
          else
            out[key] = obj[key];
        }
      }
    }
    return out;
  };

  var $ = window.jQuery;

  function Plugin(element, options) {
    var canvasSupport = !!document.createElement('canvas').getContext;
    var canvas;
    var ctx;
    var particles = [];
    var raf;
    var mouseX = 0;
    var mouseY = 0;
    var winW;
    var winH;
    var desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    var orientationSupport = !!window.DeviceOrientationEvent;
    var tiltX = 0;
    var pointerX;
    var pointerY;
    var tiltY = 0;
    var paused = false;

    options = extend({}, window[pluginName].defaults, options);

    /**
     * Init
     */
    function init() {
      if (!canvasSupport) { return; }

      //Create canvas
      canvas = document.createElement('canvas');
      canvas.className = 'pg-canvas';
      canvas.style.display = 'block';
      element.insertBefore(canvas, element.firstChild);
      ctx = canvas.getContext('2d');
      styleCanvas();

      // Create particles
      var numParticles = Math.round((canvas.width * canvas.height) / options.density);
      for (var i = 0; i < numParticles; i++) {
        var p = new Particle();
        p.setStackPos(i);
        particles.push(p);
      };

      window.addEventListener('resize', function() {
        resizeHandler();
      }, false);

      document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
      }, false);

      if (orientationSupport && !desktop) {
        window.addEventListener('deviceorientation', function () {
          // Contrain tilt range to [-30,30]
          tiltY = Math.min(Math.max(-event.beta, -30), 30);
          tiltX = Math.min(Math.max(-event.gamma, -30), 30);
        }, true);
      }

      draw();
      hook('onInit');
    }

    /**
     * Style the canvas
     */
    function styleCanvas() {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
      ctx.fillStyle = options.dotColor;
      ctx.strokeStyle = options.lineColor;
      ctx.lineWidth = options.lineWidth;
    }

    /**
     * Draw particles
     */
    function draw() {
      if (!canvasSupport) { return; }

      winW = window.innerWidth;
      winH = window.innerHeight;

      // Wipe canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions
      for (var i = 0; i < particles.length; i++) {
        particles[i].updatePosition();
      };
      // Draw particles
      for (var i = 0; i < particles.length; i++) {
        particles[i].draw();
      };

      // Call this function next time screen is redrawn
      if (!paused) {
        raf = requestAnimationFrame(draw);
      }
    }

    /**
     * Add/remove particles.
     */
    function resizeHandler() {
      // Resize the canvas
      styleCanvas();

      var elWidth = element.offsetWidth;
      var elHeight = element.offsetHeight;

      // Remove particles that are outside the canvas
      for (var i = particles.length - 1; i >= 0; i--) {
        if (particles[i].position.x > elWidth || particles[i].position.y > elHeight) {
          particles.splice(i, 1);
        }
      };

      // Adjust particle density
      var numParticles = Math.round((canvas.width * canvas.height) / options.density);
      if (numParticles > particles.length) {
        while (numParticles > particles.length) {
          var p = new Particle();
          particles.push(p);
        }
      } else if (numParticles < particles.length) {
        particles.splice(numParticles);
      }

      // Re-index particles
      for (i = particles.length - 1; i >= 0; i--) {
        particles[i].setStackPos(i);
      };
    }

    /**
     * Pause particle system
     */
    function pause() {
      paused = true;
    }

    /**
     * Start particle system
     */
    function start() {
      paused = false;
      draw();
    }

    /**
     * Particle
     */
    function Particle() {
      this.stackPos;
      this.active = true;
      this.layer = Math.ceil(Math.random() * 3);
      this.parallaxOffsetX = 0;
      this.parallaxOffsetY = 0;
      // Initial particle position
      this.position = {
        x: Math.ceil(Math.random() * canvas.width),
        y: Math.ceil(Math.random() * canvas.height)
      }
      // Random particle speed, within min and max values
      this.speed = {}
      switch (options.directionX) {
        case 'left':
          this.speed.x = +(-options.maxSpeedX + (Math.random() * options.maxSpeedX) - options.minSpeedX).toFixed(2);
          break;
        case 'right':
          this.speed.x = +((Math.random() * options.maxSpeedX) + options.minSpeedX).toFixed(2);
          break;
        default:
          this.speed.x = +((-options.maxSpeedX / 2) + (Math.random() * options.maxSpeedX)).toFixed(2);
          this.speed.x += this.speed.x > 0 ? options.minSpeedX : -options.minSpeedX;
          break;
      }
      switch (options.directionY) {
        case 'up':
          this.speed.y = +(-options.maxSpeedY + (Math.random() * options.maxSpeedY) - options.minSpeedY).toFixed(2);
          break;
        case 'down':
          this.speed.y = +((Math.random() * options.maxSpeedY) + options.minSpeedY).toFixed(2);
          break;
        default:
          this.speed.y = +((-options.maxSpeedY / 2) + (Math.random() * options.maxSpeedY)).toFixed(2);
          this.speed.x += this.speed.y > 0 ? options.minSpeedY : -options.minSpeedY;
          break;
      }
    }

    /**
     * Draw particle
     */
    Particle.prototype.draw = function() {
      // Draw circle
      ctx.beginPath();
      ctx.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, options.particleRadius / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      // Draw lines
      ctx.beginPath();
      // Iterate over all particles which are higher in the stack than this one
      for (var i = particles.length - 1; i > this.stackPos; i--) {
        var p2 = particles[i];

        // Pythagorus theorum to get distance between two points
        var a = this.position.x - p2.position.x
        var b = this.position.y - p2.position.y
        var dist = Math.sqrt((a * a) + (b * b)).toFixed(2);

        // If the two particles are in proximity, join them
        if (dist < options.proximity) {
          ctx.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY);
          if (options.curvedLines) {
            ctx.quadraticCurveTo(Math.max(p2.position.x, p2.position.x), Math.min(p2.position.y, p2.position.y), p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
          } else {
            ctx.lineTo(p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
          }
        }
      }
      ctx.stroke();
      ctx.closePath();
    }

    /**
     * update particle position
     */
    Particle.prototype.updatePosition = function() {
      if (options.parallax) {
        if (orientationSupport && !desktop) {
          // Map tiltX range [-30,30] to range [0,winW]
          var ratioX = (winW - 0) / (30 - -30);
          pointerX = (tiltX - -30) * ratioX + 0;
          // Map tiltY range [-30,30] to range [0,winH]
          var ratioY = (winH - 0) / (30 - -30);
          pointerY = (tiltY - -30) * ratioY + 0;
        } else {
          pointerX = mouseX;
          pointerY = mouseY;
        }
        // Calculate parallax offsets
        this.parallaxTargX = (pointerX - (winW / 2)) / (options.parallaxMultiplier * this.layer);
        this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10; // Easing equation
        this.parallaxTargY = (pointerY - (winH / 2)) / (options.parallaxMultiplier * this.layer);
        this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10; // Easing equation
      }

      var elWidth = element.offsetWidth;
      var elHeight = element.offsetHeight;

      switch (options.directionX) {
        case 'left':
          if (this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.position.x = elWidth - this.parallaxOffsetX;
          }
          break;
        case 'right':
          if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth) {
            this.position.x = 0 - this.parallaxOffsetX;
          }
          break;
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth || this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.speed.x = -this.speed.x;
          }
          break;
      }

      switch (options.directionY) {
        case 'up':
          if (this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.position.y = elHeight - this.parallaxOffsetY;
          }
          break;
        case 'down':
          if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight) {
            this.position.y = 0 - this.parallaxOffsetY;
          }
          break;
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight || this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.speed.y = -this.speed.y;
          }
          break;
      }

      // Move particle
      this.position.x += this.speed.x;
      this.position.y += this.speed.y;
    }

    /**
     * Setter: particle stacking position
     */
    Particle.prototype.setStackPos = function(i) {
      this.stackPos = i;
    }

    function option (key, val) {
      if (val) {
        options[key] = val;
      } else {
        return options[key];
      }
    }

    function destroy() {
      console.log('destroy');
      canvas.parentNode.removeChild(canvas);
      hook('onDestroy');
      if ($) {
        $(element).removeData('plugin_' + pluginName);
      }
    }

    function hook(hookName) {
      if (options[hookName] !== undefined) {
        options[hookName].call(element);
      }
    }

    init();

    return {
      option: option,
      destroy: destroy,
      start: start,
      pause: pause
    };
  }

  window[pluginName] = function(elem, options) {
    return new Plugin(elem, options);
  };

  window[pluginName].defaults = {
    minSpeedX: 0.1,
    maxSpeedX: 0.7,
    minSpeedY: 0.1,
    maxSpeedY: 0.7,
    directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
    density: 10000, // How many particles will be generated: one particle every n pixels
    dotColor: '#666666',
    lineColor: '#666666',
    particleRadius: 7, // Dot size
    lineWidth: 1,
    curvedLines: false,
    proximity: 100, // How close two dots need to be before they join
    parallax: true,
    parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
    onInit: function() {},
    onDestroy: function() {}
  };

  // nothing wrong with hooking into jQuery if it's there...
  if ($) {
    $.fn[pluginName] = function(options) {
      if (typeof arguments[0] === 'string') {
        var methodName = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        var returnVal;
        this.each(function() {
          if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
            returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
          }
        });
        if (returnVal !== undefined){
          return returnVal;
        } else {
          return this;
        }
      } else if (typeof options === 'object' || !options) {
        return this.each(function() {
          if (!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
          }
        });
      }
    };
  }

})(window, document);

/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
}());


/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact-us/contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");
/* harmony import */ var _pages_solutions_solutions_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/solutions/solutions.page */ "./src/app/pages/solutions/solutions.page.ts");
/* harmony import */ var _pages_about_us_about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about-us/about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _pages_clients_clients_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/clients/clients.page */ "./src/app/pages/clients/clients.page.ts");
/* harmony import */ var _pages_blog_blog_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/blog/blog.page */ "./src/app/pages/blog/blog.page.ts");
/* harmony import */ var _pages_blog_post_blog_post_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/blog-post/blog-post.page */ "./src/app/pages/blog-post/blog-post.page.ts");










const routes = [
    { path: '', component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'contato', component: _pages_contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_4__["ContactUsPageComponent"] },
    { path: 'quem-somos', component: _pages_about_us_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPageComponent"] },
    { path: 'solucoes', component: _pages_solutions_solutions_page__WEBPACK_IMPORTED_MODULE_5__["SolutionsPageComponent"] },
    { path: 'solucoes/:name', component: _pages_solutions_solutions_page__WEBPACK_IMPORTED_MODULE_5__["SolutionsPageComponent"] },
    { path: 'clientes', component: _pages_clients_clients_page__WEBPACK_IMPORTED_MODULE_7__["ClientsPageComponent"] },
    { path: 'blog', component: _pages_blog_blog_page__WEBPACK_IMPORTED_MODULE_8__["BlogPageComponent"] },
    { path: 'blog/:id/:slug', component: _pages_blog_post_blog_post_page__WEBPACK_IMPORTED_MODULE_9__["BlogPostPageComponent"] }
    // { path: 'path', component: FeatureComponent },
    // { path: '**', component: PageNotFoundComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'df-consultec';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_app_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/app-shared.module */ "./src/app/shared/app-shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact-us/contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");
/* harmony import */ var _pages_solutions_solutions_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/solutions/solutions.page */ "./src/app/pages/solutions/solutions.page.ts");
/* harmony import */ var _pages_about_us_about_us_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about-us/about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _pages_clients_clients_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/clients/clients.page */ "./src/app/pages/clients/clients.page.ts");
/* harmony import */ var _pages_blog_blog_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/blog/blog.page */ "./src/app/pages/blog/blog.page.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _pages_blog_post_blog_post_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/blog-post/blog-post.page */ "./src/app/pages/blog-post/blog-post.page.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _pages_home_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
            _pages_solutions_solutions_page__WEBPACK_IMPORTED_MODULE_9__["SolutionsPageComponent"],
            _pages_about_us_about_us_page__WEBPACK_IMPORTED_MODULE_10__["AboutUsPageComponent"],
            _pages_clients_clients_page__WEBPACK_IMPORTED_MODULE_11__["ClientsPageComponent"],
            _pages_blog_blog_page__WEBPACK_IMPORTED_MODULE_12__["BlogPageComponent"],
            _pages_blog_post_blog_post_page__WEBPACK_IMPORTED_MODULE_14__["BlogPostPageComponent"],
            _pages_contact_us_contact_us_page__WEBPACK_IMPORTED_MODULE_8__["ContactUsPageComponent"],
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _shared_app_shared_module__WEBPACK_IMPORTED_MODULE_4__["AppSharedModule"],
            _app_router_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts.service */ "./src/app/core/posts.service.ts");
/* harmony import */ var _home_slider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-slider.service */ "./src/app/core/home-slider.service.ts");






let CoreModule = class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
        }
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ],
        exports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [
            _posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
            _home_slider_service__WEBPACK_IMPORTED_MODULE_5__["HomeSliderService"]
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
], CoreModule);



/***/ }),

/***/ "./src/app/core/home-slider.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home-slider.service.ts ***!
  \*********************************************/
/*! exports provided: HomeSliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSliderService", function() { return HomeSliderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-base */ "./src/app/core/service-base.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let HomeSliderService = class HomeSliderService extends _service_base__WEBPACK_IMPORTED_MODULE_2__["ServiceBase"] {
    constructor(http) {
        super();
        this.http = http;
    }
    getHomeSliderPosts() {
        return this.http.get(this.getApiUrl('home-carousel-slide/?_embed'));
    }
};
HomeSliderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HomeSliderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HomeSliderService);



/***/ }),

/***/ "./src/app/core/post.model.ts":
/*!************************************!*\
  !*** ./src/app/core/post.model.ts ***!
  \************************************/
/*! exports provided: RenderedModel, EmbeddedModel, PostModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderedModel", function() { return RenderedModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedModel", function() { return EmbeddedModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModel", function() { return PostModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RenderedModel {
    constructor() {
        this.rendered = '';
    }
}
class EmbeddedModel {
}
class PostModel {
    get excerptString() {
        const plainText = this.excerpt.rendered.replace(/<[^>]*>/g, '');
        return plainText;
    }
    featuredImageSrc() {
        return this._embedded['wp:featuredmedia'][0].source_url;
    }
}


/***/ }),

/***/ "./src/app/core/posts.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/posts.service.ts ***!
  \***************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-base */ "./src/app/core/service-base.ts");




let PostsService = class PostsService extends _service_base__WEBPACK_IMPORTED_MODULE_3__["ServiceBase"] {
    constructor(http) {
        super();
        this.http = http;
    }
    getLatestPosts() {
        return this.http.get(this.getApiUrl('posts/?_embed'));
    }
    getPostById(id) {
        return this.http.get(this.getApiUrl('posts/' + id + '?_embed'));
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostsService);



/***/ }),

/***/ "./src/app/core/service-base.ts":
/*!**************************************!*\
  !*** ./src/app/core/service-base.ts ***!
  \**************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


class ServiceBase {
    constructor() {
        this.wordpressUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].wpUrl;
        this.apiUrl = this.wordpressUrl + "wp-json/wp/v2/";
    }
    getApiUrl(add) {
        return this.apiUrl + add;
    }
}


/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageComponent", function() { return AboutUsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsPageComponent = class AboutUsPageComponent {
    constructor() { }
    ngOnInit() { }
};
AboutUsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default
    })
], AboutUsPageComponent);



/***/ }),

/***/ "./src/app/pages/blog-post/blog-post.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/blog-post/blog-post.page.ts ***!
  \***************************************************/
/*! exports provided: BlogPostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostPageComponent", function() { return BlogPostPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/posts.service */ "./src/app/core/posts.service.ts");
/* harmony import */ var src_app_core_post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/post.model */ "./src/app/core/post.model.ts");





let BlogPostPageComponent = class BlogPostPageComponent {
    constructor(route, postService) {
        this.route = route;
        this.postService = postService;
        this.post = new src_app_core_post_model__WEBPACK_IMPORTED_MODULE_4__["PostModel"]();
        this.posts = [];
        route.paramMap.subscribe(params => {
            this.postId = params.get('id');
        });
    }
    loadPost(id) {
        this.postService.getPostById(id).subscribe(post => {
            this.post = post;
            console.log(this.post);
            this.featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
        });
    }
    ngOnInit() {
        this.loadPost(this.postId);
        this.postService.getLatestPosts().subscribe(posts => {
            this.posts = posts;
            this.posts = this.posts.filter(x => x.id != this.postId);
        });
    }
};
BlogPostPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }
];
BlogPostPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog-post-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog-post/blog-post.page.html")).default
    })
], BlogPostPageComponent);



/***/ }),

/***/ "./src/app/pages/blog/blog.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/blog/blog.page.ts ***!
  \*****************************************/
/*! exports provided: BlogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function() { return BlogPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/posts.service */ "./src/app/core/posts.service.ts");



let BlogPageComponent = class BlogPageComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.posts = [];
    }
    ngOnInit() {
        this.postsService.getLatestPosts().subscribe(posts => {
            this.posts = posts.slice(0, 4);
            console.log(posts);
        });
    }
};
BlogPageComponent.ctorParameters = () => [
    { type: src_app_core_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
];
BlogPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.page.html")).default
    })
], BlogPageComponent);



/***/ }),

/***/ "./src/app/pages/clients/clients.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/clients/clients.page.ts ***!
  \***********************************************/
/*! exports provided: ClientsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageComponent", function() { return ClientsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientsPageComponent = class ClientsPageComponent {
    constructor() { }
    ngOnInit() { }
};
ClientsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clients-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clients.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clients/clients.page.html")).default
    })
], ClientsPageComponent);



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageComponent", function() { return ContactUsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsPageComponent = class ContactUsPageComponent {
    constructor() { }
    ngOnInit() { }
};
ContactUsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-us/contact-us.page.html")).default
    })
], ContactUsPageComponent);



/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/posts.service */ "./src/app/core/posts.service.ts");
/* harmony import */ var src_app_core_home_slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/home-slider.service */ "./src/app/core/home-slider.service.ts");
/* harmony import */ var node_modules_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/@glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var scripts_jquery_particleground_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scripts/jquery.particleground.js */ "./scripts/jquery.particleground.js");
/* harmony import */ var scripts_jquery_particleground_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scripts_jquery_particleground_js__WEBPACK_IMPORTED_MODULE_5__);






let HomePageComponent = class HomePageComponent {
    constructor(postsService, homeSliderService) {
        this.postsService = postsService;
        this.homeSliderService = homeSliderService;
        this.posts = [];
    }
    ngOnInit() {
        this.postsService.getLatestPosts().subscribe(posts => {
            this.posts = posts.slice(0, 4);
            console.log(posts);
        });
        this.homeSliderService.getHomeSliderPosts().subscribe((posts) => {
            console.log("Home slider");
            console.log(posts[0]._embedded['wp:featuredmedia'][0].source_url);
        });
        document.querySelectorAll('.glide').forEach((element) => {
            const elementId = element.id;
            const gapOption = element.dataset.gap || null;
            new node_modules_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"]('#' + elementId, {
                autoplay: 3000,
                hoverpause: true,
                rewind: true,
            }).mount();
        });
        if (document.getElementById('particles-background')) {
            particleground(document.getElementById('particles-background'), {
                parallax: false,
                dotColor: 'rgba(255,255,255,0.4)',
                lineColor: 'rgba(255,255,255,0.3)',
            });
        }
    }
};
HomePageComponent.ctorParameters = () => [
    { type: src_app_core_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: src_app_core_home_slider_service__WEBPACK_IMPORTED_MODULE_3__["HomeSliderService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/pages/solutions/solutions.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/solutions/solutions.page.ts ***!
  \***************************************************/
/*! exports provided: SolutionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsPageComponent", function() { return SolutionsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SolutionsPageComponent = class SolutionsPageComponent {
    constructor() { }
    ngOnInit() { }
};
SolutionsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solutions-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./solutions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solutions/solutions.page.html")).default
    })
], SolutionsPageComponent);



/***/ }),

/***/ "./src/app/shared/app-shared.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/app-shared.module.ts ***!
  \*********************************************/
/*! exports provided: AppSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSharedModule", function() { return AppSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _wrapper_site_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapper/site-wrapper.component */ "./src/app/shared/wrapper/site-wrapper.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/shared/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-item/post-item.component */ "./src/app/shared/post-item/post-item.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/shared/contact-form/contact-form.component.ts");









let AppSharedModule = class AppSharedModule {
};
AppSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _wrapper_site_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["SiteWrapperComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_7__["PostItemComponent"],
            _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        exports: [
            _wrapper_site_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["SiteWrapperComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_7__["PostItemComponent"],
            _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"]
        ],
        providers: [],
    })
], AppSharedModule);



/***/ }),

/***/ "./src/app/shared/contact-form/contact-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/contact-form/contact-form.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactFormComponent = class ContactFormComponent {
    constructor() { }
    ngOnInit() { }
};
ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/contact-form/contact-form.component.html")).default
    })
], ContactFormComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(router) {
        this.isActive = false;
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.isActive = false;
            }
        });
    }
    ngOnInit() { }
    toggleMenu(event) {
        const target = event.target;
        this.isActive = !this.isActive;
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/menu/menu.component.html")).default
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/shared/post-item/post-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/post-item/post-item.component.ts ***!
  \*********************************************************/
/*! exports provided: PostItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemComponent", function() { return PostItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostItemComponent = class PostItemComponent {
    constructor() {
        this.excerpt = '';
    }
    ngOnInit() {
        console.log(this.post);
    }
    excerptString() {
        const plainText = this.post.excerpt.rendered.replace(/<[^>]*>/g, '');
        return plainText;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostItemComponent.prototype, "post", void 0);
PostItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-item/post-item.component.html")).default,
        host: {
            class: 'blog-post-grid-item'
        }
    })
], PostItemComponent);



/***/ }),

/***/ "./src/app/shared/wrapper/site-wrapper.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/wrapper/site-wrapper.component.ts ***!
  \**********************************************************/
/*! exports provided: SiteWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteWrapperComponent", function() { return SiteWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SiteWrapperComponent = class SiteWrapperComponent {
    constructor() { }
    ngOnInit() { }
};
SiteWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-site-wrapper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./site-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/wrapper/site-wrapper.component.html")).default
    })
], SiteWrapperComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    wpUrl: 'http://localhost/df-consultec/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\edgar\Desktop\git\df-consultec\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map