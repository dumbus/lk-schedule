import data from '../data.json';

export class Week {
  constructor(number) {
    this.weekData = data[number]["table"];
    this.number = number;
  }

  createWeek() {
    // console.log(this.weekData)

    this.week = document.createElement('div');
    this.week.classList.add('week');

    this.title = document.createElement('div');
    this.title.classList.add('week-title');
    this.title.textContent = `Расписание за неделю ${this.number + 1} (с ${this.weekData[1]} по ${this.weekData[2]}`;
    this.week.append(this.title);
    this.day = document.createElement('div');
    this.day.classList.add('day');

    // create days of week
    this.weekData[3].forEach(day => {
      this.day = document.createElement('div');
      this.day.classList.add('day');

      // create day title
      this.dayTitle = document.createElement('div');
      this.dayTitle.classList.add('day-title');
      this.dayTitleWeekday = document.createElement('div');
      this.dayTitleWeekday.classList.add('day-title-weekday');
      this.dayTitleWeekday.textContent = day[0];
      this.dayTitleDate = document.createElement('div');
      this.dayTitleDate.classList.add('day-title-date');
      this.dayTitleDate.textContent = day[1];
      this.dayTitle.append(this.dayTitleWeekday);
      this.dayTitle.append(this.dayTitleDate);
      this.day.append(this.dayTitle);

      // create lessons of day
      day[2].forEach(lesson => {
        this.lesson = document.createElement('div');
        this.lesson.classList.add('day-lesson');

        this.lessonTime = document.createElement('div');
        this.lessonTime.classList.add('day-lesson-time');
        this.lessonTime.classList.add('day-lesson-item');
        this.lessonTime.textContent = lesson[0];

        this.lessonTitle = document.createElement('div');
        this.lessonTitle.classList.add('day-lesson-title');
        this.lessonTitle.classList.add('day-lesson-item');
        this.lessonTitleName = document.createElement('div');
        this.lessonTitleName.classList.add('day-lesson-title-name');
        this.lessonTitleName.textContent = lesson[1];
        this.lessonTitleType = document.createElement('div');
        this.lessonTitleType.classList.add('day-lesson-title-type');
        this.lessonTitleType.textContent = lesson[2];
        this.lessonTitle.append(this.lessonTitleName);
        this.lessonTitle.append(this.lessonTitleType);

        this.lessonPlace = document.createElement('div');
        this.lessonPlace.classList.add('day-lesson-place');
        this.lessonPlace.classList.add('day-lesson-item');
        this.lessonPlace.textContent = lesson[3];

        this.lessonTeacher = document.createElement('div');
        this.lessonTeacher.classList.add('day-lesson-teacher');
        this.lessonTeacher.classList.add('day-lesson-item');
        this.lessonTeacher.textContent = lesson[4];

        this.lesson.append(this.lessonTime);
        this.lesson.append(this.lessonTitle);
        this.lesson.append(this.lessonPlace);
        this.lesson.append(this.lessonTeacher);

        this.day.append(this.lesson);
      });

      this.week.append(this.day);
    })
  }

  renderWeek() {
    const weekContainer = document.querySelector('.week-container');

    weekContainer.innerHTML = '';
    weekContainer.append(this.week);
  }
}