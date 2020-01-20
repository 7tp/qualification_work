# NewsAnalyzer - сервис для анализа происходящих в мире событий

Данный проект - квалификационная работа фронтенд-разработчика. Задача проекта — установить, насколько популярны в мире новости на определённую тему.

  Сайт выполняет два действия:
  * находит все статьи по запросу за последнюю неделю и отрисовывает карточки с новостями в количестве 100 шт.;
  * подсчитывает статистику: сколько новостей вышло за неделю и показывает количество упоминаний в виде диаграммы в каждый из последних семи дней.

Трехстраничный сайт выполнен с использованием HTML, CSS, Java Script и Webpack. Принцип вёрстки основан на методологии БЭМ.
Страницы сайта:
1. index.html, в котором новости подтягиваются c сервиса https://newsapi.org/ асинхронным запросом к API через строку поиска и выводятся в виде карточек-ссылок.
2. about.html содержит информацию о проекте и слайдер с историями коммитов из GitHub, подключенный через npm, [Flickity](https://flickity.metafizzy.co/license.html) ![Лицензия](https://www.gnu.org/graphics/gplv3-or-later-sm.png "GNU Logo")
3. analyst.html - страница с аналитикой.


## Инструкция к запуску проекта

Открыть проект можно по ссылке https://7tp.github.io/qualification_work/
Или запустить у себя код, скопировав репозиторий и установив [node.js](https://nodejs.org/en/download/) и все пакеты, которые описаны в файле packege.json под "devDependencies" и "dependencies". Сборка происходит командой `npm run build`. После сборки трехстраничный сайт можно будет открыть локально практически любым браузером.


## Автор

Винокуров Руслан

e-mail: work@monty.ml


Версия: 0.0.1
