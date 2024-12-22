# Работа с App Router

Для соответствия принципам FSD, следует обращаться с папкой app NextJS так же, как рекомендуется для устранения конфликта с папкой pages NextJS.

Подход заключается в перемещении папки app NextJS в корневую папку проекта и импорте страниц FSD в папку app NextJS. Это сохраняет структуру проекта FSD внутри папки src. Также стоит добавить в корневую папку проекта папку pages, потому что App Router совместим с Pages Router.

https://feature-sliced.design/ru/docs/guides/tech/with-nextjs