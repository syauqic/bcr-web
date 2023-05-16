import { Backdrop, SearchForm } from "../../components";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";

export const Search = () => {
  return (
    <div className="position-relative">
      <Backdrop triggerClass="search-input" />
      <Hero />
      <SearchForm />
      <Footer />
    </div>
  );
};
