'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from 'lucide-react'

interface FeedbackFormProps {
  startupId: string
  startupName: string
  onSubmit: (feedback: { rating: number; comment: string }) => void
}

export default function FeedbackForm({ startupId, startupName, onSubmit }: FeedbackFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ rating, comment })
    setRating(0)
    setComment('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave Feedback for {startupName}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-2">Rating:</div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`focus:outline-none ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  <StarIcon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor={`comment-${startupId}`} className="block mb-2">
              Your Feedback:
            </label>
            <Textarea
              id={`comment-${startupId}`}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts about this startup..."
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={rating === 0 || comment.trim() === ''}>
            Submit Feedback
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

