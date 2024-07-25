import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import MainNav from "@/components/Navbar/MainNav";

const WhyGolanguifyPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <MainNav />
            <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
                <section className="max-w-4xl mx-auto space-y-4">
                    <h1>Why Choose Golanguify?</h1>
                    <p>Discover why Golanguify is the preferred choice for learning programming languages online.</p>

                    <h2>Our Commitment to Quality Education</h2>
                    <p>At Golanguify, we are dedicated to providing high-quality education in programming languages. Our courses are designed by industry experts and updated regularly to ensure relevance and effectiveness.</p>

                    <h2>Interactive Learning Experience</h2>
                    <p>We believe in hands-on learning. Our platform offers interactive coding exercises, projects, and quizzes that reinforce your learning and help you apply your knowledge effectively.</p>

                    <h2>Wide Range of Programming Languages</h2>
                    <p>Whether you're a beginner or an experienced coder, Golanguify offers courses in a wide range of programming languages. From Python and JavaScript to Java and C++, we cover all the essentials and more.</p>

                    <h2>Flexible Learning Options</h2>
                    <p>Learning should fit into your schedule. Golanguify provides flexible learning options with on-demand courses that you can access anytime, anywhere. Learn at your own pace and achieve your programming goals.</p>

                    <h2>Community and Support</h2>
                    <p>Join a vibrant community of learners and instructors who are passionate about coding. Get support from our knowledgeable instructors and interact with peers to enhance your learning experience.</p>

                    <h2>Career Growth Opportunities</h2>
                    <p>Whether you're looking to start a career in tech or advance in your current role, Golanguify equips you with the skills employers demand. Our courses are designed to help you build a strong foundation and excel in your career.</p>

                    <h2>Start Your Coding Journey Today</h2>
                    <p>Ready to take your coding skills to the next level? Join Golanguify today and embark on a rewarding journey towards mastering programming languages. Start learning, building, and achieving your goals with us.</p>

                    <p className="text-center">
                        <Link href="/courses" className="text-blue-500 hover:underline">
                            Explore Our Courses
                        </Link>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default WhyGolanguifyPage;
