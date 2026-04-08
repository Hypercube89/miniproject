# SearchLearn React App

This is the production web app for the project.

## Features Migrated From Legacy Pages

- Main SearchLearn homepage (from mainpage.html) is now React home route
- Learning module home and engine-specific learning pages
- Engine "How it works" pages
- Assessment topic selector and engine-wise scored quizzes
- Feedback and contact page
- Login and register screens

## Industry Standard App Structure

src/
  components/
  data/
  pages/
    home/
    learning/
    assessment/
    feedback/
  router/
  styles/
  utils/
  App.jsx
  main.jsx

public/
  images/

## Run Locally

1. npm install
2. npm run dev

## Build

npm run build

## Deploy To GitHub Pages

1. npm run deploy
2. In repository Settings -> Pages:
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: /(root)

This app uses HashRouter and Vite base ./ so all routes work on GitHub Pages.
