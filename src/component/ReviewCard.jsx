import { FaQuoteLeft } from 'react-icons/fa';


function Reviewscard({ review }) {
        const { user, text } = review;

  return (
      <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
            {/* Quote Icon */}
            <FaQuoteLeft className="text-primary text-2xl mb-4" />

            {/* Review Text */}
            <p className="mb-4">
                {text}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* Profile */}
            <div className="flex items-center gap-4">
               
                <div>
                    <h3 className="font-semibold text-lg">{user}</h3>
                    <p className="text-sm text-gray-500">Senior Product Designer</p>
                </div>
            </div>
        </div>
  )
}

export default Reviewscard
