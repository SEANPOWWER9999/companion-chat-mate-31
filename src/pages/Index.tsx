import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-indigo-600 p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">User Private Chat</Link>
          <div className="space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/login" className="text-white">Login</Link>
            <Link to="/signup" className="text-white">Sign Up</Link>
            <Link to="/subscription" className="text-white">Subscription</Link>
            <Link to="/profile" className="text-white">Profile</Link>
            <Link to="/analytics" className="text-white">Analytics</Link>
            <Link to="/preferences" className="text-white">Preferences</Link>
          </div>
        </div>
      </nav>

      {/* Landing Page */}
      <div className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-indigo-600 text-white p-8 rounded-lg mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to User Private Chat</h1>
            <p className="mb-4">Our chatbot service is designed to help users manage their profiles, communicate with clients, and handle bookings efficiently. Sign up today to streamline your business and enhance your client interactions.</p>
            <div className="flex justify-center space-x-4">
              <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded">Login</Link>
              <Link to="/signup" className="bg-white text-indigo-600 px-4 py-2 rounded">Sign Up</Link>
              <Link to="/subscription" className="bg-white text-indigo-600 px-4 py-2 rounded">Subscription</Link>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <i className="fas fa-user-shield text-indigo-600 text-4xl mr-4"></i>
                <div>
                  <h3 className="text-xl font-bold">Profile Management</h3>
                  <p>Manage your profile with ease, including your services, rates, and availability.</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-comments text-indigo-600 text-4xl mr-4"></i>
                <div>
                  <h3 className="text-xl font-bold">Client Communication</h3>
                  <p>Communicate with clients seamlessly through our chatbot interface.</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar-check text-indigo-600 text-4xl mr-4"></i>
                <div>
                  <h3 className="text-xl font-bold">Booking Management</h3>
                  <p>Handle bookings efficiently and keep track of your schedule.</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-lock text-indigo-600 text-4xl mr-4"></i>
                <div>
                  <h3 className="text-xl font-bold">Privacy and Security</h3>
                  <p>Your privacy and security are our top priorities. We ensure your data is safe.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="mb-4">We understand the unique needs of our users and have designed our chatbot to cater specifically to those needs. Our service is reliable, efficient, and easy to use.</p>
            <p className="mb-4">Join us today and experience the difference. Our chatbot is like having a personal assistant who never sleeps, never complains, and always gets the job done.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;