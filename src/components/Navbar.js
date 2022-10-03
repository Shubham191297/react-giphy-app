import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  fetchData,
  giphyListActions,
  searchchData,
} from "../store/listgiphy-actions";

const Navbar = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    const queryData = searchRef.current.value;

    dispatch(searchchData(queryData));
  };

  const fetchHandler = () => {
    dispatch(fetchData());
  };

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              onClick={fetchHandler}
            >
              Trending
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={searchRef}
          />
          <button
            className="btn btn-success"
            type="submit"
            onClick={searchHandler}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
