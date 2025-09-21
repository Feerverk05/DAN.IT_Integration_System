# News Service - CI/CD Setup

Цей проект налаштований з повним CI/CD pipeline за допомогою GitHub Actions.

## ✅ Що реалізовано за завданням:

### 1. GitHub Actions CI/CD
- **Файл**: `.github/workflows/ci-cd.yml`
- **Тригери**: Push та Pull Request в основну гілку
- **Етапи**:
  - ✅ Інсталювання NPM пакетів
  - ✅ Білд з TypeScript у JavaScript
  - ✅ Перевірка стилів (ESLint)

### 2. TypeScript конфігурація
- **Файл**: `tsconfig.json`
- **Білд скрипт**: `npm run build`
- **Вихід**: папка `dist/` з скомпільованими JS файлами

### 3. ESLint
- **Файл**: `.eslintrc.js`
- **Скрипти**: `npm run lint`, `npm run lint:fix`
- **Підтримка**: TypeScript та JavaScript

### 4. Continuous Deployment (CD)
- **Railway.app**: Основна платформа для деплою
- **Heroku**: Альтернативна платформа (відключена за замовчуванням)
- **Автоматичний деплой**: При push в основну гілку

## Як використовувати:

```bash
# Встановити залежності
npm install

# Зібрати TypeScript в JavaScript
npm run build

# Запустити міграції
npm run migrate

# Засіяти базу даних
npm run seed

# Перевірити стиль коду
npm run lint

# Виправити стиль коду автоматично
npm run lint:fix
```

## GitHub Actions Pipeline

### CI (Continuous Integration):
1. **Checkout code** - отримання коду
2. **Setup Node.js** - налаштування Node.js (18.x, 20.x)
3. **Install dependencies** - встановлення NPM пакетів
4. **Build TypeScript** - компіляція TypeScript в JavaScript
5. **Run ESLint** - перевірка стилів коду

### CD (Continuous Deployment):
1. **Build application** - збірка додатку
2. **Deploy to Railway** - деплой на Railway.app
3. **Deploy to Heroku** - альтернативний деплой (опціонально)

## Налаштування деплою

### Railway.app (Рекомендовано):
1. Створіть акаунт на [railway.app](https://railway.app)
2. Додайте секрети в GitHub:
   - `RAILWAY_TOKEN` - токен API Railway
   - `RAILWAY_SERVICE` - назва сервісу

### Heroku (Альтернатива):
1. Створіть додаток на Heroku
2. Додайте секрети в GitHub:
   - `HEROKU_API_KEY` - API ключ
   - `HEROKU_APP_NAME` - назва додатку
   - `HEROKU_EMAIL` - email акаунту
3. Увімкніть деплой в `.github/workflows/ci-cd.yml`

## Структура проекту:

```
├── src/                    # TypeScript джерельні файли
│   ├── entities/           # Сутності бази даних
│   ├── migrations/         # Міграції
│   ├── migrate.ts          # Скрипт міграцій
│   ├── revert.ts           # Скрипт відкату
│   ├── seed.ts             # Скрипт заповнення
│   └── ormconfig.ts        # Конфігурація TypeORM
├── dist/                   # Скомпільовані JavaScript файли
├── .github/workflows/      # GitHub Actions
├── tsconfig.json           # Конфігурація TypeScript
├── .eslintrc.js            # Конфігурація ESLint
├── Procfile                # Конфігурація для Heroku
└── railway.json            # Конфігурація для Railway
```

## Оригінальні JavaScript файли збережені:
- `migrate.js`, `revert.js`, `seed.js`, `ormconfig.js`
- `src/entities/*.js` - оригінальні сутності
- `src/migrations/*.js` - оригінальні міграції
