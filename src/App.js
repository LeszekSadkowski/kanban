import React from 'react';
import './App.css';
import KanbanBoard from './KanbanBoard';
let cardsList = [
  {
    id: 1,
    title: 'przeczytać książkę',
    description: 'muszę przeczytać całą książkę',
    status: 'in-progress',
    tasks: [],
  },
  {
    id: 2,
    title: 'napisać trochę kodu',
    description: 'będę klepał kod z książki',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'przykład z listy kontaktów',
        done: true,
      },
      {
        id: 2,
        name: 'przykład kanban',
        done: false,
      },
      {
        id: 3,
        name: 'moje eksperymenty',
        done: false,
      },
    ],
  },
];
function App() {
  return <KanbanBoard cards={cardsList} />;
}

export default App;
