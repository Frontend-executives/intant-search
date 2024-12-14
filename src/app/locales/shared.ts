export const enum SharedLocales {
  AppTitle = 'Поиск оборудования? Быстро и просто!',
  AppDescription = 'Приложение для удобного поиска информации об оборудовании для систем безопасности. Найдём, проверим и предложим альтернативу, если модель устарела.',

  ErrorPageTitle = 'Упс! Сервер споткнулся.',
  ErrorPageDescription = 'Похоже, наш сервер решил передохнуть. Дайте ему минутку или попробуйте обновить страницу.',
  ErrorPageButton = 'Попробовать снова',

  NotFoundPageTitle = 'Похоже, вы заблудились!',
  NotFoundPageDescription = 'Вы открыли неизведанные земли... но здесь ничего нет. Пора вернуться на главную.',
  NotFoundPageButton = 'Вернуться на главную',

  RequestNetworkErrorTitle = 'Кажется, интернет взял отпуск!',
  RequestNetworkErrorDescription = 'Но он точно вернётся. Проверьте подключение, а мы пока подождём.',
  RequestNetworkErrorButton = 'Попробовать ещё раз',

  RequestUnknownErrorTitle = 'Что-то пошло не так, но мы не знаем, что именно!',
  RequestUnknownErrorDescription = 'Сервер явно в замешательстве. Возможно, ему нужно немного времени. Попробуйте обновить страницу позже.',
  RequestUnknownErrorButton = 'Попробовать обновить',

  RequestInvalidDataErrorTitle = 'Контракт нарушен!',
  RequestInvalidDataErrorDescription = 'Данные не соответствуют правилам. Мы нашли несколько проблем:',
  RequestInvalidDataButton = 'Обновить',

  RequestInvalidData1 = '1. Все поля должны быть в формате "Текст". Без исключений!',
  RequestInvalidData2 = '2. Поле "model" обязательно. Как же без него?!',
  RequestInvalidData3 = '3. Поле "relevance" — только "yes" или "no". Никаких "может быть".',
  RequestInvalidData4 = '4. Поля "replacement" и "brand" могут быть пустыми, если данных нет. Но только в этом случае!',

  LoadingTitle = 'Загружаем данные...',
  LoadingDescription = 'Секундочку, скачиваем на ваш компьютер всё, что нужно. И даже то, что не нужно',

  OnlyDesktopTitle = 'Кажется, наш сайт не дружит с маленькими экранами',
  OnlyDesktopDescription = 'Но на большом экране всё супер — приходите!'
}
