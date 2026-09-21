export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="container mx-auto py-14 grid grid-cols-4 gap-10">

        <div>
          <h2 className="text-lg font-bold">
            Dev <span className="text-red-500">Stack</span>
          </h2>

          <p className="text-sm text-gray-500 mt-3">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="flex gap-4 mt-5 text-sm">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3">PRODUCT</h3>
          <p className="text-sm text-gray-500">Home</p>
          <p className="text-sm text-gray-500 mt-2">Technologies</p>
          <p className="text-sm text-gray-500 mt-2">Projects</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">COMPANY</h3>
          <p className="text-sm text-gray-500">About</p>
          <p className="text-sm text-gray-500 mt-2">Contact</p>
          <p className="text-sm text-gray-500 mt-2">Careers</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">LEGAL</h3>
          <p className="text-sm text-gray-500">Privacy Policy</p>
          <p className="text-sm text-gray-500 mt-2">Terms of Service</p>
        </div>

      </div>

      <div className="container mx-auto border-t border-gray-100 py-6 flex justify-between text-sm text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-5">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
}