# Ozon-tech-task
Тестовое задание по реализации блока Progress
## Задача
Разработать прототип блока Progress для использования в мобильных web-приложениях. 
Основное предназначение блока отображать процесс выполнения процессов и их прогресс
выполнения.

[Деплой решения](https://weismur.github.io/Ozon-tech-task/)
## Использование
Чтобы использовать компонент, надо подключить скрипт:
```HTML
<script src="progressBarComponent.js" defer></script>
```
Далее можно использовать веб-компонент как html-элемент:
```HTML
<progress-bar-component progress-value="0" is-animated="true" is-hidden="false"></progress-bar-component>
```
Веб-компонент имеет следующие параметры:
- `progress-value` -> параметр, который регулирует размер дуги прогресс-бара. Принимает значения в диапазоне `[0..100]` 
- `is-animated` -> параметр, отвечающий за состояние анимации прогресс-бара. Принимает значения `true/false`
- `is-hidden` -> параметр, отвечающий за видимость прогресс-бара. Принимает значения `true/false`
