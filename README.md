Добрый день! Меня зовут Макс, мне 31 год, имею высшее образование ТГАСУ ПГС, на данный момент работаю конструктором и обучаюсь frontend разработке. Ранее был на собеседовании в вашей компании, но на тот момент уже был принят кандидат работающий с MOBX. Хочу попасть во frontend разработку и работать в вашей компании.
Спрогнозировать примерное время на поставленные задачи на данный момент затруднительно, по этому просто сделаю план и ниже буду описывать то, что сделал и сколько времени на это ушло.

План действий:

1. Верстка стартовых страниц
2. Реализация запроса всех сотрудников
3. Добавление сортировки сотрудников по отделам
4. Реализация функционала кнопки "фильтр"
5. Добавление функционала поискового поля
6. Реализация экрана "детали"

Примерно как-то так, погнали!

1. Сделал главную страницу, с переключением вкладок, пока с заглушками без подключения к серваку. Использовал TypeScript, redux, react-redux. С redux-ом намудрил, на хуках было бы проще. В целом ушло на этот этап много времени, т.к. давно не занимался и поднимал старые уроки смотрел видосы, короче вспоминал что и как. Примерно часов 10...
   Дальше планирую сделать подключение к серваку, страницу загрузки.

2. Сделал подключение к серверу, подключил Redux-thunk, не понимаю почему у меня при фильтрации меняется весь state, а не его копия...по итогу фильтр срабатывает только один раз, дальше он просто не находит совпадений...
   заняло не много времени за исключением поиска того, почему меняется сам state...что то я тут не догоняю.
   все гениальное просто...лег спать и понял как надо сделать, чтобы заработал фильтр и был запрос при каждом изменении фильтра.
   Дальше буду делать заглушку при загрузке списка, добавлю кнопку фильтра в строку поиска и иконку самого поиска.

3. Добавил страницу загрузки, страницу ошибки сервера, ошибку поиска, доделал строку поиска, кнопка сортировки пока не активна, но поиск работает. ушло около 3ех часов.

4. Добавил индивидуальную страницу(экран детали), вызов по клику на номер. Доделал кнопку сортировки, работает пока только сортировка по алфавиту.
5. Провозился сегодня с сортировкой по датам...не понимаю как нормально сортировать по датам без учета года. Получилось показать только тех, у кого др еще будет, у кого прошел не показывает.
   //--------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
