# Task Widget App

This is a simple task widget app that displays tasks and weather information.

## Features

- Displays tasks and weather information
- Responsive design

## Getting Started

To get started, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/arjunindia/task-widget-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```bash
VITE_OWM_API_KEY=your_api_key
```
you can refer the .env.example file.
to get your api key, you can refer this link: [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173/`.

# Building for Production

To build the application for production, follow these steps:

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```bash
VITE_OMW_API_KEY=your_api_key
```
you can refer the .env.example file.
to get your api key, you can refer this link: [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

3. Build the application:

```bash
npm run build
```

4. The built application will be available in the `dist` directory.

# Libraries Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [SWR](https://swr.vercel.app/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Zustand](https://github.com/pmndrs/zustand)
- [@phosphor-icons/react](https://github.com/phosphor-icons/phosphor-react)
