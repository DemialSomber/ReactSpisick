import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); /* Тут блок в индекс html в который монитруем копонент ниже */
root.render(
  <App /> /* Здесь компонент который будет вмантирован в индекс html */

	/* React.createElement('button', {
		onClick: () => console.log('bob')
	}, 'Нажми на меня') ТАК ПИСАЛОСЬ БЫ БЕЗ JSX*/

  );

