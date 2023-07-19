import { Backdrop, SearchForm } from "../../components";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import Auth from "../../components/auth/index";

export const Search = () => {
  return (
    <Auth>
      <div className="position-relative">
        <Backdrop triggerClass="search-input" />
        <Hero />
        <SearchForm />
        <Footer />
      </div>
    </Auth>
  );
};
