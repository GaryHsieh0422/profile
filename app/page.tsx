// app/page.tsx
export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto p-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My Profile
          </h1>
          <p className="text-gray-600">Scroll down to learn more about me!</p>
        </div>
      </section>

      <section
        id="profile"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About</h2>
      </section>

      <section
        id="Project"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="max-w-md mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Project</h2>
          <p className="text-gray-600"></p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-md mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
        </div>
      </section>
    </main>
  );
}
