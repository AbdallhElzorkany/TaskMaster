import Header from "@/components/Header";
import Link from "next/link";
import {
  CalendarCheck2,
  CheckCircle2,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 md:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex justify-center mb-6">
                <CalendarCheck2 className="size-20 text-white" />
              </div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
                Task Master
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Streamline your workflow. Empower your team. Achieve more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Link
                  href="/signup"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl mb-4">
                Why Task Master?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage tasks efficiently and boost team productivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="size-10 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Task Management
                </h3>
                <p className="text-gray-600">
                  Organize and prioritize tasks with ease. Never miss a deadline again.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="size-10 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Team Collaboration
                </h3>
                <p className="text-gray-600">
                  Assign tasks, track progress, and keep everyone aligned.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="size-10 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Clear Overview
                </h3>
                <p className="text-gray-600">
                  Get a centralized view of all projects and their status at a glance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="size-10 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Boost Efficiency
                </h3>
                <p className="text-gray-600">
                  Streamline workflows and achieve more in less time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600">
                Join teams already using Task Master to streamline their workflow
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Create Your Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-white">
        <p className="text-xs text-gray-500">
          © 2025 Task Master. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-500 hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-500 hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-xs text-gray-500 hover:underline underline-offset-4"
            href="#"
          >
            Contact Us
          </Link>
        </nav>
      </footer>
    </>
  );
}
