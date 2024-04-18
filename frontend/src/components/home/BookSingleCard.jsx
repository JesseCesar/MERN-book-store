import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { PiBookOpenTextLight } from "react-icons/pi";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div key={book._id} className="border-2 border-sky-400 rounded-xl p-4 m-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl">{book.title}</h3>
                        <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle className="text-blue-800 text-2xl mx-2" />
                        </Link>
                    </div>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg">{book.author}</h4>
                        <BiUserCircle className="text-blue-800 text-2xl mx-2" />
                    </div>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg">{book.publishYear}</h4>
                        <PiBookOpenTextLight className="text-blue-800 text-2xl mx-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <BiShow onClick={() => setShowModal(true)} className="text-blue-800 text-2xl hover:text-black mx-2 cursor-pointer" />
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className="text-yellow-600 text-2xl mx-2" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                            <MdOutlineDelete className="text-red-600 text-2xl mx-2" />
                        </Link>
                    </div>
                    {
                    showModal && <BookModal book={book} onClose={() => setShowModal(false)} />
                    }
                </div>
  )
}

export default BookSingleCard;
