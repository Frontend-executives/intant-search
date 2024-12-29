export const enum SharedLocales {
  AppTitle = 'Поиск оборудования? Быстро и просто ⚡',
  AppDescription = 'Приложение для удобного поиска информации об оборудовании для систем безопасности. Найдём, проверим и предложим альтернативу, если модель устарела.',

  ErrorPageTitle = 'Упс! Сервер споткнулся 🤕',
  ErrorPageDescription = 'Похоже, наш сервер решил передохнуть. Дайте ему минутку или попробуйте обновить страницу.',
  ErrorPageButton = 'Попробовать снова 🔄',

  NotFoundPageTitle = 'Похоже, вы заблудились 🗺️',
  NotFoundPageDescription = 'Вы открыли неизведанные земли... но здесь ничего нет. Пора вернуться домой.',
  NotFoundPageButton = 'Вернуться 🏠',

  RequestNetworkErrorTitle = 'Проблемы с подключением 📡',
  RequestNetworkErrorDescription = 'Кажется, связь прервалась. Проверьте подключение к сети и попробуйте ещё раз.',
  RequestNetworkErrorButton = 'Повторить попытку 🔄',

  RequestUnknownErrorTitle = 'Неизвестная ошибка 🤔',
  RequestUnknownErrorDescription = 'Мы пока не знаем, что пошло не так. Попробуйте обновить страницу — это может решить проблему.',
  RequestUnknownErrorButton = 'Обновить страницу 🔄',

  RequestInvalidDataErrorTitle = 'Контракт нарушен 📜❌',
  RequestInvalidDataErrorDescription = 'Данные не соответствуют требованиям. Вот несколько пунктов, которые стоит проверить:',
  RequestInvalidDataButton = 'Обновить 🔄',

  RequestInvalidData1 = '1. Убедитесь, что все заполненные поля имеют текстовый формат в Google Таблице.',
  RequestInvalidData2 = '2. Поле "model" обязательно для заполнения и не может быть пустым.',
  RequestInvalidData3 = '3. Поле "relevance" принимает только значения "yes" или "no".',
  RequestInvalidData4 = '4. Поле "brand" должно содержать одно из значений: "hilook", "hiwatch", "hikvision".',
  RequestInvalidData5 = '5. Поля "hilook", "hiwatch" и "hikvision" должны содержать название бренда (может быть пустым).',
  RequestInvalidData6 = '6. Поле "replacement" должно содержать текстовое значение (может быть пустым).',

  LoadingTitle = 'Загружаем данные... ',
  LoadingDescription = 'Минуточку, скачиваем на ваш компьютер всё, что нужно. И даже то, что не нужно',

  OnlyDesktopTitle = 'Маленький экран — не наш формат!',
  OnlyDesktopDescription = 'Весь пейзаж не влезает на маленькие экраны. А вот на большом всё будет как надо!',

  SearchPage = 'Поиск',
  SignIn = 'Войти',
  SignOut = 'Выйти',
  Contract = 'Контракт',
  Duplicates = 'Дубликаты',
  UnverifiedReplacements = 'Неподтвержденные замены',
  ObsoletesWithoutReplacement = 'Без замены',
  RelevantsWithReplacement = 'Актуальные с заменой',
  SelfReplacement = 'Заменены сами на себя',
  WithoutBrand = 'Без бренда',
  WithComma = 'Через запятую',
  WithoutMistakes = 'Ошибок нет',
  WithMistakes = 'Ошибок:',
  WithWarnings = 'Предупреждений:',
  WithoutWarnings = 'Предупреждений нет',

  Model = 'Модель',
  Relevance = 'Актуальность',
  Brand = 'Бренд',
  Replacement = 'Замена',
  CellLink = 'Ссылка на ячейку',
  ToCell = 'Перейти',

  WrongPassword = 'Неверный пароль'
}
