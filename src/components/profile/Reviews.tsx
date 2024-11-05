interface Review {
  id: string;
  content: string;
  rating: number;
  author: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="border p-2">No Reviews Available</p>
      ) : (
        <div className="space-y-2">
          {reviews.map((review) => (
            <div key={review.id} className="border p-2">
              <p>{review.content}</p>
              <div className="text-sm text-gray-500">
                {review.author} - {review.rating}/5
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};