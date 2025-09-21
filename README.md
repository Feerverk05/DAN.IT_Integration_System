# News Service - CI/CD Setup

Проект з CI/CD pipeline та автоматичним деплоєм на безкоштовні хостинги.

## ✅ Реалізовано:

- **GitHub Actions CI/CD** - автоматична збірка та деплой
- **TypeScript** - компіляція в JavaScript
- **ESLint** - перевірка стилів коду
- **Express API** - веб-сервер з ендпоінтами
- **Автоматичний деплой** - на Cyclic.sh та Netlify

## 🚀 Швидкий старт:

```bash
# Встановити залежності
npm install

# Зібрати проект
npm run build

# Запустити локально
npm start
```

## 🌐 Деплой:

### Cyclic.sh (Рекомендовано):
1. Створіть акаунт на [cyclic.sh](https://www.cyclic.sh)
2. Підключіть GitHub репозиторій
3. Додайте змінні середовища для бази даних

### Netlify:
1. Створіть акаунт на [netlify.com](https://www.netlify.com)
2. Підключіть GitHub репозиторій
3. Налаштуйте змінні середовища

### База даних:
- Використовуйте [ElephantSQL](https://www.elephantsql.com) (безкоштовно)

## 📡 API Ендпоінти:

- `GET /` - інформація про сервіс
- `GET /health` - перевірка здоров'я
- `GET /api/posts` - список новин
- `GET /api/users` - список користувачів