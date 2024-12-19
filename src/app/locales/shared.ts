export const enum SharedLocales {
  AppTitle = 'Поиск оборудования? Быстро и просто ⚡',
  AppDescription = 'Приложение для удобного поиска информации об оборудовании для систем безопасности. Найдём, проверим и предложим альтернативу, если модель устарела.',

  ErrorPageTitle = 'Упс! Сервер споткнулся 🤕',
  ErrorPageDescription = 'Похоже, наш сервер решил передохнуть. Дайте ему минутку или попробуйте обновить страницу.',
  ErrorPageButton = 'Попробовать снова 🔄',

  NotFoundPageTitle = 'Похоже, вы заблудились 🗺️',
  NotFoundPageDescription = 'Вы открыли неизведанные земли... но здесь ничего нет. Пора вернуться домой.',
  NotFoundPageButton = 'Вернуться 🏠',

  RequestNetworkErrorTitle = 'Потеряли сигнал 📡',
  RequestNetworkErrorDescription = 'Мы его сейчас найдём. Проверьте подключение, чтобы всё заработало.',
  RequestNetworkErrorButton = 'Попробовать ещё 🔄',

  RequestUnknownErrorTitle = 'Что-то пошло не так, но мы не знаем, что именно 🤷‍♀️',
  RequestUnknownErrorDescription = 'Пока непонятно, что пошло не так. Но ещё одна попытка может всё исправить.',
  RequestUnknownErrorButton = 'Попробовать обновить 🔄',

  RequestInvalidDataErrorTitle = 'Контракт нарушен 📜❌',
  RequestInvalidDataErrorDescription = 'Данные не соответствуют правилам. Мы нашли несколько проблем:',
  RequestInvalidDataButton = 'Обновить 🔄',

  RequestInvalidData1 = '1. Все заполненные поля должны быть текстовыми. Проверяйте форматирование ячеек в Google таблице.',
  RequestInvalidData2 = '2. Поле "model" обязательно и не может быть пустым.',
  RequestInvalidData3 = '3. Поле "relevance" принимает только значения yes / no.',
  RequestInvalidData4 = '4. Поле "brand" должно содержать одно из значений: hilook / hiwatch / hikvision.',
  RequestInvalidData5 = '5. Поля "hilook", "hiwatch" и "hikvision" должны содержать текстовые значения, соответствующие бренду.',
  RequestInvalidData6 = '6. Поле "replacement" должно содержать текстовое значение или может быть пустым.',

  LoadingTitle = 'Загружаем данные... ',
  LoadingDescription = 'Минуточку, скачиваем на ваш компьютер всё, что нужно. И даже то, что не нужно',

  OnlyDesktopTitle = 'Маленький экран — не наш формат!',
  OnlyDesktopDescription = 'Весь пейзаж не влезает на маленькие экраны. А вот на большом всё будет как надо!',

  SearchPage = 'Поиск',
  SignIn = 'Войти',
  SignOut = 'Выйти',
  Contract = 'Контракт',
  Duplicates = 'Дубликаты',
  InvalidReplacements = 'Невалидные замены',
  ObsoletesWithoutReplacement = 'Без замены',
  RelevantsWithReplacement = 'Актуальные с заменой',
  SelfReplacement = 'Заменены сами на себя',

  CellLink = 'Ссылка на ячейку',
  ToCell = 'К ячейке',
  EmptyTableTitle = 'Отличная работа! Все чисто!',

  WrongPassword = 'Неверный пароль'
}
