export const enum SharedLocales {
  AppTitle = 'Поиск оборудования? Быстро и просто ⚡',
  AppDescription = 'Приложение для удобного поиска информации об оборудовании для систем безопасности. Найдём, проверим и предложим альтернативу, если модель устарела.',

  ErrorPageTitle = 'Ой! Что-то пошло не так',
  ErrorPageDescription = 'Кажется, наш сервер столкнулся с проблемой. Подождите немного или обновите страницу, чтобы попробовать снова.',
  ErrorPageButton = 'попробовать еще',

  NotFoundPageTitle = 'Похоже, вы заблудились',
  NotFoundPageDescription = 'Вы открыли неизведанные земли... но здесь ничего нет. Пора вернуться домой.',
  NotFoundPageButton = 'Вернуться',

  RequestNetworkErrorTitle = 'Проблемы с подключением',
  RequestNetworkErrorDescription = 'Кажется, связь прервалась. Проверьте подключение к сети и попробуйте ещё раз.',
  RequestNetworkErrorButton = 'Повторить попытку',

  RequestUnknownErrorTitle = 'Неизвестная ошибка',
  RequestUnknownErrorDescription = 'Мы пока не знаем, что пошло не так. Попробуйте обновить страницу — это может решить проблему.',
  RequestUnknownErrorButton = 'Обновить страницу',

  RequestInvalidDataErrorTitle = 'Контракт нарушен',
  RequestInvalidDataErrorDescription = 'Данные не соответствуют требованиям. Описание требований к данным и таблица с ошибками валидации помогут понять в чем проблема.',
  RequestInvalidDataButton = 'Обновить',

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
  WithComma = 'Через запятую',

  WithoutMistakes = 'Ошибок нет',
  WithMistakes = 'Ошибок:',
  MistakesTitle = 'Ошибки критичны для исправления',
  MistakesDescription = 'Ошибки влияют на точность и корректность данных при поиске. Все указанные ошибки необходимо исправить, чтобы обеспечить достоверность информации.',

  WithWarnings = 'Рекомендаций:',
  WithoutWarnings = 'Рекомендаций нет',
  WarningsTitle = 'Рекомендации второстепенны для исправления',
  WarningsDescription = 'Список оборудования с небольшими отклонениями от правил. Эти данные не влияют на работу поиска, но их исправление улучшит опыт пользователей, предоставляя более полную информацию.',

  Model = 'Модель',
  Relevance = 'Актуальность',
  Brand = 'Бренд',
  Replacement = 'Замена',
  CellLink = 'Ссылка на ячейку',
  ToCell = 'Перейти',

  WrongPassword = 'Неверный пароль',

  EquipmentCount = 'Количество оборудования в каталоге поиска:',

  ValidationErrorsTitle = 'Таблица с ошибками валидации поможет разобраться',
  ValidationErrorsColumn = 'Столбец с ошибкой',
  ValidationErrorsDescription = 'Описание ошибки'
}
