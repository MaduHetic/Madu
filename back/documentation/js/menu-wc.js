'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">madu-back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' : 'data-target="#xs-controllers-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' :
                                            'id="xs-controllers-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' : 'data-target="#xs-injectables-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' :
                                        'id="xs-injectables-links-module-AppModule-e8f7a09a3a54daadb36de32d983f6be9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' : 'data-target="#xs-injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' :
                                        'id="xs-injectables-links-module-AuthModule-f074069c4994547a77cea02e16237439"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChallengeModule.html" data-type="entity-link">ChallengeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' : 'data-target="#xs-controllers-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' :
                                            'id="xs-controllers-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' }>
                                            <li class="link">
                                                <a href="controllers/ChallengeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChallengeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' : 'data-target="#xs-injectables-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' :
                                        'id="xs-injectables-links-module-ChallengeModule-0c0d92a4acd674a51b7aaa57cb4fd2d0"' }>
                                        <li class="link">
                                            <a href="injectables/ChallengeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChallengeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyModule.html" data-type="entity-link">CompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' : 'data-target="#xs-controllers-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' :
                                            'id="xs-controllers-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' }>
                                            <li class="link">
                                                <a href="controllers/CompanyController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompanyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' : 'data-target="#xs-injectables-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' :
                                        'id="xs-injectables-links-module-CompanyModule-52f96ffa1f2067c3aa27f7d26cddae62"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GreenScoreModule.html" data-type="entity-link">GreenScoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' : 'data-target="#xs-controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' :
                                            'id="xs-controllers-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                            <li class="link">
                                                <a href="controllers/GreenScoreController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GreenScoreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' : 'data-target="#xs-injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' :
                                        'id="xs-injectables-links-module-GreenScoreModule-6e189e7f56d528285f225a8d69c1e41a"' }>
                                        <li class="link">
                                            <a href="injectables/GreenScoreService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GreenScoreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImgPoiModule.html" data-type="entity-link">ImgPoiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ImgPoiModule-d1747672b37eb1fc5296e6cd08c508a3"' : 'data-target="#xs-injectables-links-module-ImgPoiModule-d1747672b37eb1fc5296e6cd08c508a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ImgPoiModule-d1747672b37eb1fc5296e6cd08c508a3"' :
                                        'id="xs-injectables-links-module-ImgPoiModule-d1747672b37eb1fc5296e6cd08c508a3"' }>
                                        <li class="link">
                                            <a href="injectables/ImgPoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ImgPoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinTagPoiModule.html" data-type="entity-link">JoinTagPoiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' : 'data-target="#xs-injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' :
                                        'id="xs-injectables-links-module-JoinTagPoiModule-c5ee729666a844c647835e7df8bd5c38"' }>
                                        <li class="link">
                                            <a href="injectables/JoinTagPoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JoinTagPoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinUserChallengeModule.html" data-type="entity-link">JoinUserChallengeModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JoinUserChallengeModule-b31373fb3c645de2fff22d6feb70407b"' : 'data-target="#xs-injectables-links-module-JoinUserChallengeModule-b31373fb3c645de2fff22d6feb70407b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JoinUserChallengeModule-b31373fb3c645de2fff22d6feb70407b"' :
                                        'id="xs-injectables-links-module-JoinUserChallengeModule-b31373fb3c645de2fff22d6feb70407b"' }>
                                        <li class="link">
                                            <a href="injectables/JoinUserChallengeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JoinUserChallengeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinUserPoiModule.html" data-type="entity-link">JoinUserPoiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JoinUserPoiModule-1107fee10b5ae6a58c3f3d40cb02fbfa"' : 'data-target="#xs-injectables-links-module-JoinUserPoiModule-1107fee10b5ae6a58c3f3d40cb02fbfa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JoinUserPoiModule-1107fee10b5ae6a58c3f3d40cb02fbfa"' :
                                        'id="xs-injectables-links-module-JoinUserPoiModule-1107fee10b5ae6a58c3f3d40cb02fbfa"' }>
                                        <li class="link">
                                            <a href="injectables/JoinUserPoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JoinUserPoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinUserQuizzModule.html" data-type="entity-link">JoinUserQuizzModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JoinUserQuizzModule-7a59ece66eb361032f20ea1ceb7c2d61"' : 'data-target="#xs-injectables-links-module-JoinUserQuizzModule-7a59ece66eb361032f20ea1ceb7c2d61"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JoinUserQuizzModule-7a59ece66eb361032f20ea1ceb7c2d61"' :
                                        'id="xs-injectables-links-module-JoinUserQuizzModule-7a59ece66eb361032f20ea1ceb7c2d61"' }>
                                        <li class="link">
                                            <a href="injectables/JoinUserQuizzService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JoinUserQuizzService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinUserThemeQuizzModule.html" data-type="entity-link">JoinUserThemeQuizzModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JoinUserThemeQuizzModule-fc7e656ca63c66248f82eaef3d6f44a4"' : 'data-target="#xs-injectables-links-module-JoinUserThemeQuizzModule-fc7e656ca63c66248f82eaef3d6f44a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JoinUserThemeQuizzModule-fc7e656ca63c66248f82eaef3d6f44a4"' :
                                        'id="xs-injectables-links-module-JoinUserThemeQuizzModule-fc7e656ca63c66248f82eaef3d6f44a4"' }>
                                        <li class="link">
                                            <a href="injectables/JoinUserThemeQuizzService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JoinUserThemeQuizzService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KnowItModule.html" data-type="entity-link">KnowItModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' : 'data-target="#xs-controllers-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' :
                                            'id="xs-controllers-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' }>
                                            <li class="link">
                                                <a href="controllers/KnowItController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KnowItController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' : 'data-target="#xs-injectables-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' :
                                        'id="xs-injectables-links-module-KnowItModule-349d993f20fe3c77442a73d562c176d7"' }>
                                        <li class="link">
                                            <a href="injectables/KnowItService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>KnowItService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PercentTypeGreenScoreAndPoiModule.html" data-type="entity-link">PercentTypeGreenScoreAndPoiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' : 'data-target="#xs-controllers-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' :
                                            'id="xs-controllers-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' }>
                                            <li class="link">
                                                <a href="controllers/PercentTypeGreenScoreAndPoiController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PercentTypeGreenScoreAndPoiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' : 'data-target="#xs-injectables-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' :
                                        'id="xs-injectables-links-module-PercentTypeGreenScoreAndPoiModule-a508e9b9cedf8bf01c70a85a3c98cd6f"' }>
                                        <li class="link">
                                            <a href="injectables/PercentTypeGreenScoreAndPoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PercentTypeGreenScoreAndPoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PoiModule.html" data-type="entity-link">PoiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' : 'data-target="#xs-controllers-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' :
                                            'id="xs-controllers-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' }>
                                            <li class="link">
                                                <a href="controllers/PoiController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PoiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' : 'data-target="#xs-injectables-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' :
                                        'id="xs-injectables-links-module-PoiModule-e4874ec457f13023cc58e2367524bf03"' }>
                                        <li class="link">
                                            <a href="injectables/PoiGeoCalcService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PoiGeoCalcService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PoiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PoiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionQuizzModule.html" data-type="entity-link">QuestionQuizzModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' : 'data-target="#xs-controllers-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' :
                                            'id="xs-controllers-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' }>
                                            <li class="link">
                                                <a href="controllers/QuestionQuizzController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestionQuizzController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' : 'data-target="#xs-injectables-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' :
                                        'id="xs-injectables-links-module-QuestionQuizzModule-431944fb4bcf38c53c3fa66769b3fbc6"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionQuizzService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>QuestionQuizzService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuizzModule.html" data-type="entity-link">QuizzModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' : 'data-target="#xs-controllers-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' :
                                            'id="xs-controllers-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' }>
                                            <li class="link">
                                                <a href="controllers/QuizzController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuizzController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' : 'data-target="#xs-injectables-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' :
                                        'id="xs-injectables-links-module-QuizzModule-c7403bea819216d5691e2521920906f3"' }>
                                        <li class="link">
                                            <a href="injectables/QuizzService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>QuizzService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link">RoleModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' : 'data-target="#xs-injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' :
                                        'id="xs-injectables-links-module-RoleModule-8c6062e36637a014aedb4736b4655e55"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatsModule.html" data-type="entity-link">StatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' : 'data-target="#xs-controllers-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' :
                                            'id="xs-controllers-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' }>
                                            <li class="link">
                                                <a href="controllers/StatsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' : 'data-target="#xs-injectables-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' :
                                        'id="xs-injectables-links-module-StatsModule-702ef27a58d2710d9b09c0556f45909c"' }>
                                        <li class="link">
                                            <a href="injectables/StatsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link">TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' : 'data-target="#xs-controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' :
                                            'id="xs-controllers-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' : 'data-target="#xs-injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' :
                                        'id="xs-injectables-links-module-TagsModule-ef87291d961e9af84f8d4dc4d364c586"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThemeQuizzModule.html" data-type="entity-link">ThemeQuizzModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' : 'data-target="#xs-controllers-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' :
                                            'id="xs-controllers-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' }>
                                            <li class="link">
                                                <a href="controllers/ThemeQuizzController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemeQuizzController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' : 'data-target="#xs-injectables-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' :
                                        'id="xs-injectables-links-module-ThemeQuizzModule-32c68b2c56334bcdb56aa3e527be4cb1"' }>
                                        <li class="link">
                                            <a href="injectables/ThemeQuizzService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThemeQuizzService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TypeGreenScoreModule.html" data-type="entity-link">TypeGreenScoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' : 'data-target="#xs-controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' :
                                            'id="xs-controllers-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                            <li class="link">
                                                <a href="controllers/TypeGreenScoreController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeGreenScoreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' : 'data-target="#xs-injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' :
                                        'id="xs-injectables-links-module-TypeGreenScoreModule-27417a521816336b67641f1998d886d3"' }>
                                        <li class="link">
                                            <a href="injectables/TypeGreenScoreService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TypeGreenScoreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TypeModule.html" data-type="entity-link">TypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' : 'data-target="#xs-controllers-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' :
                                            'id="xs-controllers-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' }>
                                            <li class="link">
                                                <a href="controllers/TypeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' : 'data-target="#xs-injectables-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' :
                                        'id="xs-injectables-links-module-TypeModule-157d0d88f3e22abe9c0a087a998bb9da"' }>
                                        <li class="link">
                                            <a href="injectables/TypeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserAppModule.html" data-type="entity-link">UserAppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' : 'data-target="#xs-injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' :
                                        'id="xs-injectables-links-module-UserAppModule-df4cfd45c1d5138b0f823b32df5e165a"' }>
                                        <li class="link">
                                            <a href="injectables/UserAppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserAppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' : 'data-target="#xs-controllers-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' :
                                            'id="xs-controllers-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' : 'data-target="#xs-injectables-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' :
                                        'id="xs-injectables-links-module-UserModule-dabcf9a040c43a150d6b03429746f06c"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessToken.html" data-type="entity-link">AccessToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppUserDto.html" data-type="entity-link">AppUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Challenge.html" data-type="entity-link">Challenge</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChallengeDto.html" data-type="entity-link">ChallengeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link">Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImgPoi.html" data-type="entity-link">ImgPoi</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImgPoiDto.html" data-type="entity-link">ImgPoiDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinTagPoiEntity.html" data-type="entity-link">JoinTagPoiEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinUserChallenge.html" data-type="entity-link">JoinUserChallenge</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinUserChallengeDto.html" data-type="entity-link">JoinUserChallengeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinUserPoi.html" data-type="entity-link">JoinUserPoi</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinUserPoiDto.html" data-type="entity-link">JoinUserPoiDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinUserQuzz.html" data-type="entity-link">JoinUserQuzz</a>
                            </li>
                            <li class="link">
                                <a href="classes/JoinUserThemeQuizz.html" data-type="entity-link">JoinUserThemeQuizz</a>
                            </li>
                            <li class="link">
                                <a href="classes/KnowIt.html" data-type="entity-link">KnowIt</a>
                            </li>
                            <li class="link">
                                <a href="classes/KnowItDto.html" data-type="entity-link">KnowItDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link">LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PercentAndIdTag.html" data-type="entity-link">PercentAndIdTag</a>
                            </li>
                            <li class="link">
                                <a href="classes/PercentTypeGreenScoreAndPoi.html" data-type="entity-link">PercentTypeGreenScoreAndPoi</a>
                            </li>
                            <li class="link">
                                <a href="classes/PercentTypeGreenScoreAndPoiDto.html" data-type="entity-link">PercentTypeGreenScoreAndPoiDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Poi.html" data-type="entity-link">Poi</a>
                            </li>
                            <li class="link">
                                <a href="classes/PoiAndTags.html" data-type="entity-link">PoiAndTags</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuestionQuizz.html" data-type="entity-link">QuestionQuizz</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuestionQuizzDto.html" data-type="entity-link">QuestionQuizzDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quizz.html" data-type="entity-link">Quizz</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuizzAndQuestionDto.html" data-type="entity-link">QuizzAndQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuizzDto.html" data-type="entity-link">QuizzDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link">Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubmitDto.html" data-type="entity-link">SubmitDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tag.html" data-type="entity-link">Tag</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagsDto.html" data-type="entity-link">TagsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestStrategy.html" data-type="entity-link">TestStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThemeAndQuizzDto.html" data-type="entity-link">ThemeAndQuizzDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThemeQuizz.html" data-type="entity-link">ThemeQuizz</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThemeQuizzDto.html" data-type="entity-link">ThemeQuizzDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Type.html" data-type="entity-link">Type</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeDto.html" data-type="entity-link">TypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeGreenScore.html" data-type="entity-link">TypeGreenScore</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeGreenScoreDto.html" data-type="entity-link">TypeGreenScoreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link">UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationDto.html" data-type="entity-link">ValidationDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CompanyDto.html" data-type="entity-link">CompanyDto</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityTypeInterceptor.html" data-type="entity-link">EntityTypeInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PercentTypeGreenScoreAndPoiTransformationPipe.html" data-type="entity-link">PercentTypeGreenScoreAndPoiTransformationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoiDto.html" data-type="entity-link">PoiDto</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoiTransformationPipe.html" data-type="entity-link">PoiTransformationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link">RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccessTokenInterfaces.html" data-type="entity-link">AccessTokenInterfaces</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompanyInterface.html" data-type="entity-link">CompanyInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JoinUserPoiInterface.html" data-type="entity-link">JoinUserPoiInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KnowItInterface.html" data-type="entity-link">KnowItInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PercentTypeGreenScoreAndPoiInterface.html" data-type="entity-link">PercentTypeGreenScoreAndPoiInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PoiInterface.html" data-type="entity-link">PoiInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TagsInterface.html" data-type="entity-link">TagsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeGreenScoreInterface.html" data-type="entity-link">TypeGreenScoreInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeInterface.html" data-type="entity-link">TypeInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInterface.html" data-type="entity-link">UserInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});