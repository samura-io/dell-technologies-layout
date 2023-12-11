export default class Hamburger {
    constructor(headerSelector) {
        this._headerSelector = headerSelector;
        this._body = document.querySelector('.root');
        this._cacheSelectors();
    }

    _cacheSelectors() {
        this._headerElement = document.querySelector(this._headerSelector);
        this._button = this._headerElement.querySelector('.header__btn_type_burger');
        this._nav = this._headerElement.querySelector('.header__nav');
        this._shadow = this._headerElement.querySelector('.header__shadow');
        this._links = this._headerElement.querySelectorAll('.header__link');
    }

    _toggle() {
        this._body.classList.toggle('scroll-hidden');
        this._nav.classList.toggle('header__nav_open');
        this._shadow.classList.toggle('header__shadow_active');
        this._button.classList.toggle('header__btn_open');
    };

    _close() {
        this._body.classList.remove('scroll-hidden');
        this._nav.classList.remove('header__nav_open');
        this._shadow.classList.remove('header__shadow_active');
        this._button.classList.remove('header__btn_open');
    };

    setEventListeners() {
        this._button.addEventListener('click', ()=>{this._toggle()});
        this._shadow.addEventListener('click', ()=>{this._toggle()});
        this._links.forEach((i)=>{
            i.addEventListener('click', ()=>{this._close()});
        })
    };
};