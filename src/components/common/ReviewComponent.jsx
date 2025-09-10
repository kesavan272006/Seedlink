import { Star, ThumbsUp, MessageCircle } from 'lucide-react'

const ReviewComponent = ({ review }) => {
  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-500/20 text-green-400'
      case 'negative': return 'bg-red-500/20 text-red-400'
      default: return 'bg-yellow-500/20 text-yellow-400'
    }
  }

  const getSentimentText = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'Positive'
      case 'negative': return 'Needs Improvement'
      default: return 'Neutral'
    }
  }

  return (
    <div className="bg-bg-primary/50 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold text-gold-primary">{review.user}</h4>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? 'text-gold-primary fill-current'
                      : 'text-gold-primary/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-gold-light text-sm ml-2">{review.date}</span>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(review.sentiment)}`}>
          {getSentimentText(review.sentiment)}
        </span>
      </div>
      
      <p className="text-gold-light mb-4">{review.comment}</p>
      
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gold-light hover:text-gold-primary transition-colors">
          <ThumbsUp className="h-4 w-4 mr-1" />
          <span className="text-sm">Helpful</span>
        </button>
        <button className="flex items-center text-gold-light hover:text-gold-primary transition-colors">
          <MessageCircle className="h-4 w-4 mr-1" />
          <span className="text-sm">Reply</span>
        </button>
      </div>
    </div>
  )
}

export default ReviewComponent