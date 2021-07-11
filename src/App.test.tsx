import { render, screen } from '@testing-library/react';
import App from './App';

describe('App 컴포넌트 렌더링 테스트', () => {
  test('App 컴포넌트 내 h1 제목이 존재한다', () => {
    render(<App />);

    const title = screen.getByRole('h1');
    expect(title).toBeInTheDocument();
  });
});
