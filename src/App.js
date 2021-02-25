import "./styles.css";
import { useState } from "react";
import { Note } from "./Note"; //al exportar un modulo con solo export obligamos a usar el mismo nombre que le dimos al modulo en el componente, a parte este debe estar entre corchetes {} ejemplo arriba {Note}

export const App = (props) => {
  //condicional para vista del arreglo
  // if (typeof notes === "undefined" || notes.length === 0) {
  //   return "No tenemos notas";
  // }
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevenimos el evento de refrescar la pagina
    console.log("crear nota");
    const noteToAddState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddState);

    //setNotes(notes.concat(noteToAddState)); Forma mas legible
    setNotes([...notes, noteToAddState]); //forma mas optima con Spreads
    setNewNote("");
    // {
    //   id: 4,
    //   content: 'Nuevo contenido',
    //   date: "2018-05-30T17:20:14.298Z",
    //   important: false
    // }
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div className="App">
      <h1>Clase 4 del BootCamp</h1>
      <h2>Notas</h2>
      <button onClick={handleShowAll}>
        {showAll ? "show only important" : "show all"}
      </button>
      <ol>
        {/* la Key va en donde se haga la iteracion de los elementos, dentro del map */}
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => (
            <Note key={note.id} content={note.content} date={note.date} />
          ))}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={newNote} />
          <button /* POR DEFECTO EL ULTIMO BOTON DE UN FORMULARIO FUNCIONA COMO UN SUBMIT */
          >
            Crear Nota
          </button>
        </form>
      </ol>
    </div>
  );
};
