import { useState } from "react";

function BookCreate({onCreate}) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
       <div className="book-create">
            <form  onSubmit={handleSubmit} action="">
                <label  htmlFor="">Title</label>
                <input className="input"  value={title} onChange={handleChange} type="text" />
                <button className="button">Create!</button>
            </form>  
        </div>
    )
}

export default BookCreate; 