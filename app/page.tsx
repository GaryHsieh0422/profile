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

      {/* Profile Section */}
      <section
        id="profile"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">@johndoe</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-700">
                Software developer passionate about creating web applications.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Followers</p>
                <p className="font-semibold">1.2K</p>
              </div>
              <div>
                <p className="text-gray-600">Following</p>
                <p className="font-semibold">350</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Section */}
      <section
        id="settings"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="max-w-md mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Settings</h2>
          <p className="text-gray-600">
            This is where you’d adjust your preferences.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-md mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600">Reach out at: john.doe@example.com</p>
        </div>
      </section>
    </main>
  );
}
