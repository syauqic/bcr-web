import { Backdrop, SearchForm } from "../../components";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
<<<<<<< HEAD
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
=======

export const Search = () => {
  return (
    <div className="position-relative">
      <Backdrop triggerClass="search-input" />
      <Hero />
      <SearchForm />
      <Footer />
    </div>
>>>>>>> b768b5ce1ec53a56b45e6ab0ee4eb181ddb9a572
  );
};
