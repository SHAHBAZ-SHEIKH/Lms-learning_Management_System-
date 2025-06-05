"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle } from "lucide-react"

interface QuizInterfaceProps {
  quizType: "html" | "css" | "javascript"
  onComplete: () => void
}

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

export function QuizInterface({ quizType, onComplete }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  // Mock questions for each quiz type
  const quizQuestions: { [key: string]: Question[] } = {
    html: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which HTML element is used for the largest heading?",
        options: ["<h6>", "<h1>", "<heading>", "<header>"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "Which attribute is used to specify the URL of a link?",
        options: ["src", "href", "link", "url"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
          "<a url='http://example.com'>Example</a>",
          "<a href='http://example.com'>Example</a>",
          "<link>http://example.com</link>",
          "<hyperlink>http://example.com</hyperlink>",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which HTML element is used to define important text?",
        options: ["<important>", "<b>", "<strong>", "<i>"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "What is the correct HTML for making a checkbox?",
        options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which HTML element is used to specify a footer for a document?",
        options: ["<bottom>", "<section>", "<footer>", "<foot>"],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "What is the correct HTML for inserting an image?",
        options: [
          "<img href='image.gif' alt='MyImage'>",
          "<img src='image.gif' alt='MyImage'>",
          "<image src='image.gif' alt='MyImage'>",
          "<img alt='MyImage'>image.gif</img>",
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "src", "alt", "longdesc"],
        correctAnswer: 2,
      },
    ],
    css: [
      {
        id: 1,
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "styles", "font"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Which is the correct CSS syntax?",
        options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "How do you insert a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "// this is a comment //"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "How do you add a background color for all <h1> elements?",
        options: [
          "all.h1 {background-color:#FFFFFF;}",
          "h1.all {background-color:#FFFFFF;}",
          "h1 {background-color:#FFFFFF;}",
          "h1 {bgcolor:#FFFFFF;}",
        ],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "Which CSS property is used to change the text color of an element?",
        options: ["fgcolor", "color", "text-color", "font-color"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which CSS property controls the text size?",
        options: ["text-style", "font-size", "text-size", "font-style"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: ["p {text-size:bold;}", "p {font-weight:bold;}", "<p style='font-size:bold;'>", "p {font-size:bold;}"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "How do you display hyperlinks without an underline?",
        options: [
          "a {text-decoration:no-underline;}",
          "a {underline:none;}",
          "a {decoration:no-underline;}",
          "a {text-decoration:none;}",
        ],
        correctAnswer: 3,
      },
    ],
    javascript: [
      {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<script>", "<js>", "<javascript>"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        options: [
          "document.getElement('p').innerHTML = 'Hello World!';",
          "document.getElementById('demo').innerHTML = 'Hello World!';",
          "#demo.innerHTML = 'Hello World!';",
          "document.getElementByName('p').innerHTML = 'Hello World!';",
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Where is the correct place to insert a JavaScript?",
        options: [
          "The <head> section",
          "The <body> section",
          "Both the <head> section and the <body> section are correct",
          "The <footer> section",
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: [
          "<script href='xxx.js'>",
          "<script name='xxx.js'>",
          "<script src='xxx.js'>",
          "<script file='xxx.js'>",
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "create myFunction()"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How do you call a function named 'myFunction'?",
        options: ["call function myFunction()", "call myFunction()", "myFunction()", "Call.myFunction()"],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "How to write an IF statement in JavaScript?",
        options: ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if i = 5"],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "How does a WHILE loop start?",
        options: ["while (i <= 10; i++)", "while i = 1 to 10", "while (i <= 10)", "while i <= 10"],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "How can you add a comment in a JavaScript?",
        options: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "*This is a comment*"],
        correctAnswer: 1,
      },
    ],
  }

  const questions = quizQuestions[quizType]

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleSubmitQuiz()
    }
  }, [timeLeft, showResults])

  // Copy protection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey &&
          (e.key === "u" ||
            e.key === "U" ||
            e.key === "s" ||
            e.key === "S" ||
            e.key === "a" ||
            e.key === "A" ||
            e.key === "c" ||
            e.key === "C" ||
            e.key === "v" ||
            e.key === "V"))
      ) {
        e.preventDefault()
        return false
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("selectstart", handleSelectStart)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("selectstart", handleSelectStart)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    // Once selected, cannot change
    if (selectedAnswers[currentQuestion] === undefined) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestion]: answerIndex,
      }))
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitQuiz = () => {
    let correctAnswers = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setShowResults(true)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Quiz Completed!</CardTitle>
            <CardDescription>Here are your results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="text-4xl font-bold text-blue-600">
              {score}/{questions.length}
            </div>
            <div className="text-lg">Score: {Math.round((score / questions.length) * 100)}%</div>
            <Badge variant={score >= questions.length * 0.7 ? "default" : "destructive"} className="text-lg px-4 py-2">
              {score >= questions.length * 0.7 ? "Passed" : "Failed"}
            </Badge>
            <Button onClick={onComplete} className="w-full">
              Back to Quizzes
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-background z-50 p-4" style={{ userSelect: "none" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 p-4 bg-card rounded-lg border">
          <div>
            <h1 className="text-2xl font-bold capitalize">{quizType} Quiz</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className={`font-mono text-lg ${timeLeft < 300 ? "text-red-500" : ""}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            {timeLeft < 300 && (
              <Badge variant="destructive">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Time Running Out!
              </Badge>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswers[currentQuestion] !== undefined}
                  className={`w-full p-4 text-left border rounded-lg transition-colors ${
                    selectedAnswers[currentQuestion] === index
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : selectedAnswers[currentQuestion] !== undefined
                        ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                        : "hover:bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswers[currentQuestion] === index ? "bg-blue-500 border-blue-500" : "border-gray-300"
                      }`}
                    >
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </Button>

          <div className="flex space-x-2">
            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length !== questions.length}
                className="bg-green-600 hover:bg-green-700"
              >
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} disabled={selectedAnswers[currentQuestion] === undefined}>
                Next
              </Button>
            )}
          </div>
        </div>

        {/* Question Overview */}
        <div className="mt-6 p-4 bg-card rounded-lg border">
          <h3 className="font-semibold mb-3">Question Overview</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded text-sm font-medium ${
                  selectedAnswers[index] !== undefined
                    ? "bg-green-500 text-white"
                    : index === currentQuestion
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
