// app/components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Health & Social Care</h1>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/courses" className="hover:underline">Courses</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
          </div>
        </div>
      </nav>
    );
  }