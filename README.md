

# \[React static page\]


Front End application oriented to ...

## Technologies used

- [![reactlogo](https://api.iconify.design/logos:react.svg)](https://reactjs.org/) single page application
-[![vitelogo]()](https://vitejs.dev/)

### screenshot

![image](https://github.com/Solaisiva00/React-static-page/assets/165774432/712fb770-3fb8-460e-910c-7aff20523a3a)


## Setup

1. Clone the repository and install the dependencies
```bash
npm install
```
2. Start the frontend application locally
```bash
npm run dev
```





## CSS preprocessor

This project implements [tailwind](https://tailwindcss.com/) via `CLI`.




```css
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
Add the paths to all of your template files in your `tailwind.config.js` file.

```javascript
   /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file.
```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

## Deployment

In your terminal, initialize the local directory as a Git repository, commit all the changes, and push it to remote by running the following command in the project root:
```
git init
git add .
git commit -m "initial commit"
git remote add origin (repository remote git url here)
git push -u origin master
```
With this, your project will be pushed to GitHub.

In your project’s `package.json`, add a homepage field, like this:

```
"homepage": "https://myusername.github.io/my-app"
```
myusername is your GitHub username and my-app is your repository’s name.

Next, install `gh-pages` in your project:

```
npm install --save gh-pages
```
In your package.json, add the following scripts:
```json
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d dist",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```

with `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/YOUR_REPO_NAME/",
  plugins: [react()],
})

})


```
`predeploy` and `deploy` are the only additions to the scripts. predeploy will automatically run before deploy and make sure the latest build of the application is deployed.

Run the command `npm run deploy` to deploy the application. This command will create a new branch named gh-pages in your project’s GitHub repository. You may need to set a source, which you can do under the GitHub Pages option in your repository’s settings. Set it to `gh-pages` branch:

![image](https://github.com/Solaisiva00/React-static-page/assets/165774432/469dea65-b034-4f5f-a0ea-bf872303e86b)




This app was tailwind based on the template provided by [`vite`](https://vitejs.dev/)
