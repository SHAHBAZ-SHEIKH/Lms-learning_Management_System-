import { BookOpen, Users, Award } from 'lucide-react'
import { LoginForm } from '@/components/auth/login-form'

export default function Login(){
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
            </div>

            {/* Left Side - Features */}
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
                </div>

                <div className="max-w-md text-white relative z-10">
                    <h2 className="text-4xl font-bold mb-8 leading-tight">Welcome Back to Your Learning Journey</h2>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Interactive Learning</h3>
                                <p className="text-sm opacity-80">Engage with dynamic content and quizzes</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Collaborative Environment</h3>
                                <p className="text-sm opacity-80">Connect with peers and instructors</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                <Award className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Track Progress</h3>
                                <p className="text-sm opacity-80">Monitor your learning achievements</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold">50K+</div>
                            <div className="text-sm opacity-80">Active Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">1K+</div>
                            <div className="text-sm opacity-80">Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">95%</div>
                            <div className="text-sm opacity-80">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative z-10">
                <LoginForm/>
            </div>
        </div>
    )
}