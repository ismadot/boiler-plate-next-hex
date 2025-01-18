# Repository Overview

## Project Overview
This project is a modern Next.js application built using a **hexagonal architecture** to ensure modularity, scalability, and separation of concerns. It is designed with TypeScript, Redux (with sagas for side effects), and TailwindCSS for styling. The app supports server-side rendering (SSR) and is prepared to easily integrate with external APIs and services like Google Maps.

## Architecture
The project follows a **hexagonal architecture**, which organizes the code into clear layers:

### 1. **Adapters Layer**
This layer handles communication between the core logic and external systems like APIs, databases, or user interfaces.
- **Redux**: Contains state management logic, including slices and sagas.
  - `exampleSlice.ts`: Defines reducers and actions.
  - `exampleSaga.ts`: Handles side effects, such as API calls.
- **API**: Provides services for external data fetching.
  - `index.ts`: Contains API service logic.

### 2. **Application Layer**
This layer is responsible for user interactions and hooks that bridge the adapters and components.
- **Pages**: Defines the routes and the components rendered for each route.
- **Hooks**: Provides custom hooks for shared logic between components.

### 3. **Core Layer**
The core contains the business logic and domain models. Although this repository doesn’t currently implement complex domain logic, it can be extended to include them.

## Folder Structure

```plaintext
├── src
│   ├── adapters        # Communication with APIs and Redux logic
│   ├── app             # Core application components and hooks
│   ├── components      # Reusable UI components
│   ├── pages           # Next.js routing and layout configuration
│   └── store           # Redux store, reducers, and sagas
```

### Key Files:
- **`pages/_app.tsx`**: Wraps the application with the `StoreProvider` for Redux integration.
- **`pages/index.tsx`**: The main entry point for the application (Home page).
- **`pages/about/index.tsx`**: A sample About page.
- **`components/StoreProvider.tsx`**: Handles Redux Provider integration.
- **`adapters/redux/exampleSlice.ts`**: Defines Redux slice for example state management.
- **`adapters/redux/exampleSaga.ts`**: Implements side effects using Redux-Saga.

## Features
- **Server-Side Rendering (SSR)**: Improves SEO and initial page load times.
- **Redux Integration**: Centralized state management with sagas for handling asynchronous operations.
- **Hexagonal Architecture**: Ensures clear separation of concerns and easy testability.
- **TypeScript**: Provides type safety and developer productivity.
- **TailwindCSS**: Simplifies styling and enforces consistent design.

## How to Run

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Access the app at `http://localhost:3000`.

### Build and Production
```bash
npm run build
npm start
```

## Future Enhancements
1. **Integration with Google Maps API**: Adding location-based features.
2. **Extending Core Logic**: Implementing more complex domain models in the core layer.
3. **Improved SEO**: Adding more meta tags and structured data.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.
