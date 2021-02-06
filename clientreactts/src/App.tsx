/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// Primele 2 linii sunt importante pentru ca Emotion sa mearga
// sa fie primele 2, altfel nu merge
import { fontFamily, fontSize, gray2 } from './Styles';
import { Header } from './Header';
import { HomePage } from './HomePage';
function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
