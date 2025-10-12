import Header from "@/components/Header";
export default function NotFound() {
  return (
    <div className="relative h-screen">
      <Header/>
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-blue-700">404 Not Found</h1>
        <p className="text-lg text-blue-500">Sorry, the page you are looking for does not exist.</p>
      </main>
    </div>
  );
}
