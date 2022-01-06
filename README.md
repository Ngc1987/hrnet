[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![GitHub](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/) [![Typescript](https://img.shields.io/badge/TYPESCRIPT-3466f0?style=for-the-badge&logo=typescript&logoColor=1c1275)](https://www.typescriptlang.org/) [![GitHub](https://img.shields.io/badge/JSX-4F4FD4?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/docs/introducing-jsx.html) [![GitHub](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/) 


# HrNet by Wealth Health
<p align="center">
 💸💰 HrNet is an app provided by Wealth Health, to manage the employees of the enterprise 💰💸
</p>

![Mockup of the home page](https://i.imgur.com/IQ3tNUK.png)

<p align="center">
<a href="https://hrnetapp.netlify.app">🌍 Live démo
</a>
</p>


## 1. Documentation

The documentation can be viewed by following the link: [documentation](https://hrnetdoc.netlify.app/)

## 2. Author
Thomas Semeria

## 3. Languages
- Typescript
- JSX
- SCSS

## 4.Technologies
- [React](https://reactjs.org/)
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [React Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/)
- [Sass](https://sass-lang.com/)

## 5. Project
This project is the 14th project for the React front-end developer [formation](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react#main_content) of OpenClassRooms.

We need to rebuild the old jquery version of the HrNet app, in React app. For the design no constraint, but just make something simple and modern.
Also there is four plugins (DatePicker, select menu, the employees table, and a modale who is displayed when you succesly register a new employee) who are unfunctionnal, and we need to make there on react components, and choose one to build a new one on Npm package.

So i make the modale on Npm package, you can find it here: [TsModale](https://www.npmjs.com/package/tsmodale), just install it, put the props you need, and enjoy this beautiful modale 🪄

For the datePicker, i choose this one [react-modern-calendar-datepicker](https://kiarash-z.github.io/react-modern-calendar-datepicker/) who is very nice and customizable.

For the table i use [Ag Grid](https://www.ag-grid.com/), not very easy to use at first, but with some work you can do a lot of cool things.

And for the select menu, i use [React Select](https://react-select.com/home), a nice and customizable select menu.
 All of these components meet the technical constraints, who are to be responsive, efficients and fast.

Also i use react-redux-toolkit to manage the state of the registered employees.
You can see here a model of the employees table.

![Mockup of the employees page](https://i.imgur.com/nKb2MjO.png)


## 5 Installation

First fork this [repo](https://github.com/Ngc1987/hrnet).
```bash
# Install the dependencies
npm install

# And launch the app
npm start
```	

That's it, you can now manage your employees on the application !!