import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-lg p-4 flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl tex-red-600 cursor-pointer"
        />
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
                    </div>

      </div>

    </div>
  )
}

export default BookModal;
