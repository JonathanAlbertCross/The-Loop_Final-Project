import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  
}


  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div id="login-text">
          <LoginButton />
        </div>
     
        <Routes>
          <Route
            path="/"
            element={<Home books={books} setBooks={setBooks} deleteBook={deleteBook} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </div>
      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}



export default App;
