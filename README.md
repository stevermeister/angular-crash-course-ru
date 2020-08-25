# Конспект

## Инструмент [Angular CLI](https://github.com/angular/angular-cli)

- установка - `npm install -g @angular/cli`
- создание нового проекта - `ng new myapp --minimal`
- сборка и запуск - `ng serve`
- сервер запускается на порту 4200 - http://localhost:4200


## Синтаксис шаблонов

- базовая интерполяция (или по простому подстановка переменных)
  - `{{title}}`
  - `{{1+1}}`
  - Нет доступа к глобальным переменным!
- задание свойств элементов
  - `[class] = "myclass"`
  - `[src] [alt] [href]`
  - `[style.color], [style.width.px]`
- обработка событий
  - `(click)="changeColor()"`
  - `(input)="changeColor($event.target.value)"`
  - `(keydown.enter)    (keydown.shift.enter)`

# Передача данных в компонент

- создаем новый компонент - `ng g c child`
- прописываем декоратор для входящего параметра - `@Input name` 
- передаем параметр - `<app-child [name]="user"></app-child>`



# Полезные ссылки

- этот код - https://github.com/stevermeister/angular-crash-course-ru
- в продолжение базового скринкаста - https://learn.javascript.ru/screencast/angular
- мой твиттер для вопросов и предложений - https://twitter.com/stevermeister