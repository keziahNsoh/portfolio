export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          Keziah Porepeya Nsoh
        </h1>
        <p className="text-sm text-gray-500">
          Frontend Developer • Youth Advocate • SRHR Champion • The Catalyst Farmer
        </p>
      </header>

      {/* About */}
      <section className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="leading-relaxed mb-4">
          I’m a frontend developer from the Upper East Region of Ghana. I specialize in React.js,
          JavaScript (ES6+), CSS/Tailwind, and Django. I graduated from the ALX
          Software Engineering (Front-End) program in 2025 and love building responsive,
          user-friendly web experiences.
        </p>
        <p className="leading-relaxed">
          I’m also a passionate advocate for Sexual and Reproductive Health and
          Rights (SRHR) and work with organizations such as INTYON and Youth
          Advocate Ghana. Beyond tech, I combine innovation and agriculture to
          empower communities, inspire young women and younth.
        </p>
      </section>

      {/* Catalyst Farmer */}
      <section className="p-6 max-w-3xl mx-auto bg-green-50 rounded-lg shadow-sm mt-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">🌱 The Catalyst Farmer</h2>
        <p className="leading-relaxed mb-4">
          My agricultural jouney, my name is <strong>KEZIAH POREPEYA NSOH</strong>—the girl who
          overlooks the odds and creates opportunities from them, the girl who believes
          she can even when the voices around her say otherwise.
        </p>
        <p className="leading-relaxed mb-4">
          I define who I am, not society. I am not a weakling because I am a woman;
          I am undeniably brave, intelligent, and unstoppable.
        </p>
        <p className="leading-relaxed">
          I am a <strong>greenhouse installer</strong> and a <strong>farmer</strong>.
          You can call me… <span className="font-bold uppercase">THE CATALYST FARMER</span>.
        </p>
        <p className="mt-6 italic">
          “Don’t shrink yourself to fit someone else’s comfort. Stand tall. Plant deep.
          Grow strong. From greenhouse installations to bountiful harvests, I’m proof
          that when purpose meets action, barriers break.”
        </p>
      </section>

      {/* Projects */}
      <section className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-bold">Fitness Companion</h3>
            <p>Implemented authentication, API integration, state management, and responsive design.</p>
          </li>
          <li className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-bold">EduTracker</h3>
            <p>Contributed to a student performance tracking tool with React and Django.</p>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p>
          Email:{" "}
          <a className="text-indigo-600 underline" href="mailto:your.email@example.com">
            your.email@example.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a className="text-indigo-600 underline" href="https://github.com/your-github">
            github.com/your-github
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="text-indigo-600 underline" href="https://linkedin.com/in/your-linkedin">
            linkedin.com/in/your-linkedin
          </a>
        </p>
      </section>
    </main>
  );
}

