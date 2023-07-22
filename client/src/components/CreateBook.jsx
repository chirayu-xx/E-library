import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../config";

function CreateBook() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    author: "",
    isbn: "",
    publised_Date: "",
    publisher: "",
    imgUrl: "",
    whereToBuy: "",
  });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}/api/book`, book).then((res) => {
      console.log(res.data);
      setBook({
        title: "",
        description: "",
        author: "",
        isbn: "",
        publised_Date: "",
        publisher: "",
        imgUrl: "",
        whereToBuy: "",
      });
    });
    //Push to home route
    navigate('/');
  };

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col overflow-hidden w-full items-center p-5 gap-10">
      <h1 className="text-white text-5xl font-bold">Create Book</h1>
      <Link to={"/"} className="w-full flex justify-start">
        <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFC107] hover:text-black border-[#FFC107] text-[#FFC107]">
          Go to book list
        </button>
      </Link>
      <form onSubmit={onSubmit} className="flex flex-col lg:w-[600px] gap-7 p-2">
        <div className="flex gap-3 w-full justify-between">
          <input
            name="title"
            onChange={onChange}
            className="p-2 rounded-md outline-none border-2 border-transparentt focus:border-[#FFC107] w-full"
            required
            type="text"
            placeholder="Title of the book"
            value={book.title}
          />

          <input
            name="isbn"
            onChange={onChange}
            className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107] w-full"
            required
            type="number"
            placeholder="ISBN"
            value={book.isbn}
          />
        </div>
        <input
          name="author"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Author"
          value={book.author}
        />

        <input
          name="description"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Describe your book"
          value={book.description}
        />

        <input
          name="publised_Date"
          
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 focus:border-[#FFC107]"
          required
          type="date"
        />

        <input
          name="publisher"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Publisher"
          value={book.publisher}
        />

        <input
          name="imgUrl"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Image Url"
          value={book.imgUrl}
        />

        <input
          name="whereToBuy"
          onChange={onChange}
          className="p-2 rounded-md outline-none border-2 border-transparent focus:border-[#FFC107]"
          required
          type="text"
          placeholder="Where you can buy"
          value={book.whereToBuy}
        />

        <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFC107] hover:text-black border-[#FFC107] text-[#FFC107]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBook;
