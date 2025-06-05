"use client"

import { QuizCard } from "../quiz-card"

export function StudentQuizzes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <p className="text-muted-foreground">Test your knowledge with interactive quizzes</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <QuizCard
          title="HTML Fundamentals"
          description="Test your HTML knowledge with 10 questions"
          duration="10 minutes"
          questions={10}
          quizType="html"
        />

        <QuizCard
          title="CSS Styling"
          description="Challenge yourself with 10 CSS questions"
          duration="10 minutes"
          questions={10}
          quizType="css"
        />

        <QuizCard
          title="JavaScript Basics"
          description="Evaluate your JavaScript skills with 10 questions"
          duration="10 minutes"
          questions={10}
          quizType="javascript"
        />
      </div>
    </div>
  )
}
