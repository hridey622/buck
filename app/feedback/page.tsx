'use client'

import { useState } from 'react'
import { startups } from '../lib/data'
import FeedbackForm from '../components/FeedbackForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from 'lucide-react'

interface Feedback {
  id: string
  startupId: string
  rating: number
  comment: string
  createdAt: string
}

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  const handleSubmitFeedback = (startupId: string, newFeedback: { rating: number; comment: string }) => {
    const feedback: Feedback = {
      id: Date.now().toString(),
      startupId,
      ...newFeedback,
      createdAt: new Date().toISOString(),
    }
    setFeedbacks([...feedbacks, feedback])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Inventure Startup Feedback</h1>
      <div className="space-y-8">
        {startups.map((startup) => (
          <Card key={startup.id} className="w-full">
            <CardHeader>
              <CardTitle>{startup.name}</CardTitle>
              <CardDescription>{startup.category}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p>{startup.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Feedback</h3>
                {feedbacks.filter((f) => f.startupId === startup.id).length > 0 ? (
                  feedbacks
                    .filter((f) => f.startupId === startup.id)
                    .map((feedback) => (
                      <div key={feedback.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                              key={star}
                              className={`w-5 h-5 ${
                                star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p>{feedback.comment}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(feedback.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))
                ) : (
                  <p>No feedback yet. Be the first to leave a comment!</p>
                )}
              </div>
              <FeedbackForm
                startupId={startup.id}
                startupName={startup.name}
                onSubmit={(newFeedback) => handleSubmitFeedback(startup.id, newFeedback)}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

