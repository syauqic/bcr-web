import { Backdrop, SearchForm } from "../../components";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";

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
