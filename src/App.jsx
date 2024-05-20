import Header from "./components/Header/Header";
import Me from "./components/Me/Me";
import Carousel from "./components/Carousel/Carousel";
import "./styles/globals.scss";
import Contacts from "./components/Contacts/Contacts";
export default function App() {
  return (
    <>
      <Header />
      <Me />
      <Carousel />
      <Contacts />
    </>
  );
}
