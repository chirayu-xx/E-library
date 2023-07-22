import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../config";
import * as dayjs from 'dayjs'

function ShowBookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/book/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${apiUrl}/api/book/${id}`)
    .then(res => navigate('/'))
  }

  return (
    <div className="flex flex-col gap-10 w-full items-center p-5">
      <h1 className="text-center text-5xl text-white font-bold">
        Book's Info
      </h1>
      <Link className="flex w-full justify-start" to={"/"}>
        <button className="p-2 px-3 border-2 rounded-md transition-all ease duration-300 hover:bg-[#FFC107] hover:text-black border-[#FFC107] text-[#FFC107]">
          Show Book List
        </button>
      </Link>
      <img src={book.imgUrl} className="w-32" alt=""/>
      <hr />
      <div className="flex flex-col">
        <div className="flex p-3 px-4 justify-between bg-[#212529] lg:gap-72 w-full hover:bg-[#323539] border-b-2 border-[#323539] text-white">
          <h1 className = 'md:w-28 lg:w-32'>1</h1>
          <h1 className = 'md:w-28 lg:w-32'>Title</h1>
          <h1 className = 'md:w-28 lg:w-32'>{book.title}</h1>
        </div>
        <div className="flex p-3 px-4 justify-between bg-[#212529] lg:gap-72 w-full hover:bg-[#323539] border-b-2 border-[#323539] text-white">
          <h1 className = 'md:w-28 lg:w-32'>2</h1>
          <h1 className = 'md:w-28 lg:w-32'>ISBN</h1>
          <h1 className = 'md:w-28 lg:w-32'>{book.isbn}</h1>
        </div>
        <div className="flex p-3 px-4 justify-between bg-[#212529] lg:gap-72 w-full hover:bg-[#323539] border-b-2 border-[#323539] text-white">
          <h1 className = 'md:w-28 lg:w-32'>3</h1>
          <h1 className = 'md:w-28 lg:w-32'>Author</h1>
          <h1 className = 'md:w-28 lg:w-32'>{book.author}</h1>
        </div>
        <div className="flex p-3 px-4 justify-between bg-[#212529] lg:gap-72 w-full hover:bg-[#323539] border-b-2 border-[#323539] text-white">
          <h1 className = 'md:w-28 lg:w-32'>4</h1>
          <h1 className = 'md:w-28 lg:w-32'>Description</h1>
          <h1 className = 'md:w-28 lg:w-32'>{book.description}</h1>
        </div>
        <div className="flex p-3 px-4 justify-between bg-[#212529] lg:gap-72 w-full hover:bg-[#323539] border-b-2 border-[#323539] text-white">
          <h1 className = 'md:w-28 lg:w-32'>5</h1>
          <h1 className = 'md:w-28 lg:w-32'>Publisher</h1>
          <h1 className = 'md:w-28 lg:w-32'>{book.publisher}</h1>
        </div>
        <div className="flex p-3 px-4 justify-between bg-[#212529] lg:gap-72 w-full hover:bg-[#323539] border-b-2 border-[#323539] text-white">
          <h1 className = 'md:w-28 lg:w-32'>6</h1>
          <h1 className = 'md:w-28 lg:w-32'>Published Date</h1>
          <h1 className = 'md:w-28 lg:w-32'>{dayjs(book.publised_Date).format('DD/MM/YYYY')}</h1>
        </div>
        <div className="flex p-3 px-4 justify-between bg-[#212529] lg:gap-72 w-full hover:bg-[#323539] border-b-2 border-[#323539] text-white">
          <h1 className="md:w-28 lg:w-32" >7</h1>
          <h1 className="md:w-28 lg:w-32" >Buy Now</h1>
          <a  className="md:w-28 lg:w-32" href={book.whereToBuy} rel="noreferrer" target="_blank">
            Buy it here
          </a>
        </div>
        <div className="flex w-full my-2 justify-between">
          <Link to={`/edit-book/${id}`}  className="lg:px-10 p-2 border-2 hover:bg-[#17A2B8] hover:text-white border-[#17A2B8] text-[#17A2B8] ">Edit Book</Link>
          <button onClick={handleDelete} className="lg:px-10 p-2 border-2 hover:bg-red-500  hover:text-white border-red-500 text-red-500">Delete Book</button>
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;
