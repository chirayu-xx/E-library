import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../config";
import * as dayjs from 'dayjs'

    

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
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


  useEffect(() => {
    axios.get(`${apiUrl}/api/book/${id}`).then((res) =>
      setBook({
        title: res.data.title,
        isbn: res.data.isbn,
        author: res.data.author,
        description: res.data.description,
        publised_Date: res.publised_Date,
        publisher: res.data.publisher,
        imgUrl: res.data.imgUrl,
        whereToBuy: res.data.whereToBuy,
      })
    );
  }, [id]);


  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.put(`${apiUrl}/api/book/${id}`,book)
    .then(res => {
      navigate('/')
    }).catch(err => console.log(err));
  };

  return (
    <div className="flex flex-col gap-10 w-full items-center p-5">
      <h1 className="text-center text-5xl text-white font-bold">Edit Book</h1>
      <Link className="flex w-full justify-start" to={"/"}>
        <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFC107] hover:text-black border-[#FFC107] text-[#FFC107]">
          Show Book List
        </button>
      </Link>
      <form onSubmit={onSubmit} className="flex flex-col w-[600px] gap-7 p-2">
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

export default UpdateBook;
