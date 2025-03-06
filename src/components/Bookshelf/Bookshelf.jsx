import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState(
        {
            title: '', 
            author: '',
        }
    )

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({title: '', author: ''})
    }
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="newBook">Title:</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="newBook">Author:</label>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                    {books.map((book) => (
                        <div class="bookCard">
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Bookshelf