import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../routes';

export function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(r => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
