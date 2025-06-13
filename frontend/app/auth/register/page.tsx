import { RegisterForm } from "@/components/auth/register-form"
import {
    User,
    BookOpen,
    Users,
    Award,
    CheckCircle,
    Sparkles,
} from "lucide-react"

const features = [
    "Interactive Learning Platform",
    "Real-time Quiz System",
    "Assignment Management",
    "Progress Tracking",
    "Campus-wide Collaboration",
    "24/7 Learning Support",
]

export default function Register() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 float-animation"></div>
                <div
                    className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 float-animation"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 float-animation"
                    style={{ animationDelay: "4s" }}
                ></div>
                <div
                    className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 float-animation"
                    style={{ animationDelay: "1s" }}
                ></div>
            </div>
            {/* Left Side - Form */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 items-center justify-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10">
                        <BookOpen className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute top-32 right-20">
                        <Users className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-32 left-20">
                        <Award className="h-14 w-14 text-white" />
                    </div>
                    <div className="absolute bottom-10 right-10">
                        <Sparkles className="h-10 w-10 text-white" />
                    </div>
                </div>

                <div className="max-w-md text-white relative z-10">
                    <h2 className="text-4xl font-bold mb-8 leading-tight">Transform Your Learning Experience</h2>

                    <div className="space-y-5 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-5 w-5 text-green-300" />
                                </div>
                                <span className="text-lg font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">⭐</span>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">4.9/5 Rating</p>
                                <p className="text-sm opacity-80">From 10,000+ Students</p>
                            </div>
                        </div>
                        <p className="text-lg italic leading-relaxed">
                            "This LMS platform has completely revolutionized how I learn. The interactive quizzes and real-time
                            feedback make studying engaging and effective!"
                        </p>
                        <div className="mt-4 flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <User className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="font-semibold">Alex Johnson</p>
                                <p className="text-sm opacity-80">Computer Science Student</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold">50K+</div>
                            <div className="text-sm opacity-80">Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">1K+</div>
                            <div className="text-sm opacity-80">Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">95%</div>
                            <div className="text-sm opacity-80">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side - Features */}
            <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative z-10">
                <RegisterForm />
            </div>
        </div>
    )
}
