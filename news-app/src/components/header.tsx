export default function Header() {
  return (
    <div className="bg-gray-50 shadow-md mb-6">
      <div className="container mx-auto">
        <div className="flex justify-between py-4">
          <a className="text-2xl font-extrabold" href="#">
            <span className="text-red-800">MY</span>TIMES
          </a>
          <div className="flex gap-4 text-lg">
            <a href="">US</a>
            <a href="">World</a>
            <a href="">Business</a>
            <a href="">Arts</a>
            <a href="">Politics</a>
            <a href="">Sports</a>
          </div>
        </div>
      </div>
    </div>
  );
}
