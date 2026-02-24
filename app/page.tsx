import HomePage from "./(user)/home/page";
import Navigation from "./components/Navigation";
import "./globals.css";


export default function Home() {
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
}
