import { SetStateAction, useContext, useState } from "react";
import { Typography, InputAdornment, InputBase, Paper, Box } from "@mui/material";
import { MovieContext } from "../../context/movies-context";
import { MovieDataType } from "../../assets/data";
import SearchIcon from "../../assets/icons/icon-search.svg";
import Layout from "../../layout";
import MovieList from "../../components/movie-list";
import ReactGA from "react-ga4"

const Movies = () => {
  // ReactGA.initialize("YOUR TRACKING ID");
  ReactGA.send({
    hitType: "pageview",
    page: "/movies",
    title: "Home",
  });
 
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { Movies } = state;

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = Movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
    setSearchList(newList);
  };

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141F",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img src={SearchIcon} alt="search icon" width={20} height={20} />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={2} fontWeight={300}>
              Movies
            </Typography>
            <MovieList recommendList={search === "" ? Movies : searchList} />
          </Box>
        ) : (
          <Box>
            <Typography variant="h6">
              Found {searchList.length} results for "{search}"
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Movies;
