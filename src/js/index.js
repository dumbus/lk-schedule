import '../sass/style.scss';
import { Week } from './week';

const headerAboutBtn = document.querySelector('.header-about');
const headerScheduleBtn = document.querySelector('.header-schedule');

const aboutMain = document.querySelector('.main-about');
const scheduleMain = document.querySelector('.main-schedule');

headerAboutBtn.addEventListener('click', () => {
  aboutMain.classList.remove('hidden');
  scheduleMain.classList.add('hidden');

  headerAboutBtn.classList.add('header-btn-active');
  headerScheduleBtn.classList.remove('header-btn-active');
});

headerScheduleBtn.addEventListener('click', () => {
  aboutMain.classList.add('hidden');
  scheduleMain.classList.remove('hidden');

  headerAboutBtn.classList.remove('header-btn-active');
  headerScheduleBtn.classList.add('header-btn-active');
});

const weeksBtns = document.querySelectorAll('.main-schedule-weeks-btn');
weeksBtns[17].classList.add('main-schedule-weeks-btn-active');
const week = new Week(17);
week.createWeek();
week.renderWeek();

weeksBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const weekNumber = btn.getAttribute('data-week');
    weeksBtns.forEach(button => {
      button.classList.remove('main-schedule-weeks-btn-active');
    });

    btn.classList.add('main-schedule-weeks-btn-active');
    const week = new Week(weekNumber);
    week.createWeek();
    week.renderWeek();
  });
});
