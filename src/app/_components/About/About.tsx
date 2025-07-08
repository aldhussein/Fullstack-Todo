"use client";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">About This App</h2>
        <p className="mt-4 text-lg text-gray-600">
          This is a modern, full-stack <strong>Todo Management Application</strong> built with
          <span className="text-blue-600 font-medium"> Next.js</span>, 
          <span className="text-emerald-600 font-medium"> Tailwind CSS</span>,
          <span className="text-purple-600 font-medium"> Prisma</span>, and 
          <span className="text-yellow-500 font-medium"> MongoDB</span>.
        </p>

        <div className="mt-10 text-left space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">✨ Features:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Create, read, update, and delete todos in real-time</li>
              <li>Authentication and user-specific todo lists</li>
              <li>Secure password handling with bcrypt</li>
              <li>Clean and responsive UI for all screen sizes</li>
              <li>Server Actions and Prisma for backend logic</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">🛠 Tech Stack:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Next.js App Router (13+/14+)</li>
              <li>Tailwind CSS for design</li>
              <li>Prisma + MongoDB for database and ORM</li>
              <li>NextAuth/Auth.js for authentication (if used)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">🎯 Purpose:</h3>
            <p className="text-gray-700 mt-2">
              This project was built to learn and apply full-stack web development best practices.
              It's ideal for personal use or as a base for more complex task/project management apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
