import './src/styles/style.css'
import { Burger, FormValidator, Swiper} from './src/components/index';

// Валидатор
export const validationConfig = {
  formSelector: '.feedback__form',
  inputSelector: '.feedback__input',
  submitButtonSelector: '.button__element_submit',
  inactiveButtonClass: 'button__element_dis',
  inputErrorClass: 'feedback__input_error_active',
  errorClass: 'feedback__error_active'
};
const formForValidation = document.querySelector('.feedback__form');
const formValidator = new FormValidator(validationConfig, formForValidation);
formValidator.resetValidation();
formValidator.enableValidation();


// Свайпер
const swiper = new Swiper;
swiper.runSwiper();
const customButtonNext = document.querySelector('.swiper-custom-button-next');
const buttonNext = document.querySelector('.swiper-button-next');
customButtonNext.addEventListener('click', ()=>{
  buttonNext.click();
})

// Бургер меню
const burger = new Burger('.header');
burger.setEventListeners();