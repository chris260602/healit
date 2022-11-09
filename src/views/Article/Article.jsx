import { Box, InputBase } from "@mui/material";
import Footer from "../../layouts/Footer/Footer";
import SearchIcon from "../../assets/Icons/SeachIcon";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { article } from "../../data/article/article.js";
import { useEffect } from "react";
import { useState } from "react";
const Article = () => {
  const [filter, setFilter] = useState("");
  const [articleList, setArticleList] = useState();
  useEffect(() => {
    const filteredArticle = article.map((data) => (
      <ArticleCard
        title={data.title}
        writer={data.writer}
        image={data.image}
        linkMessage={"Read Now"}
        link={data.link}
      />
    ));
    setArticleList(filteredArticle);
  }, []);
  const handleSearch = () => {
    let filteredArticleData = [];
    if (filter.trim().length > 0) {
      filteredArticleData = article.filter((data) => {
        return data.title.toLocaleLowerCase().includes(filter.toLowerCase());
      });
    } else {
      filteredArticleData = article;
    }

    let filteredArticle = filteredArticleData.map((data) => (
      <ArticleCard
        title={data.title}
        writer={data.writer}
        image={data.image}
        linkMessage={"Read Now"}
        link={data.link}
      />
    ));
    if (filteredArticleData.length === 0) {
      filteredArticle = <p>No Article</p>;
    }
    setArticleList(filteredArticle);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        padding: "23px 30px",
        "& h1": {
          fontWeight: "700",
          fontSize: "32px",
          lineHeight: "38px",
          marginBottom: "20px",
        },
      }}
    >
      <h1>Articles</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "7px 8px",
          gap: "6px",
          background: "rgba(118, 118, 128, 0.12)",
          borderRadius: "10px",
          "& svg": {
            cursor: "pointer",
          },
        }}
      >
        <Box onClick={handleSearch}>
          <SearchIcon />
        </Box>

        <InputBase
          sx={{
            width: "100%",
          }}
          placeholder="Search for articles"
          className={"MuiInputBase-root	MuiInputBase-input"}
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
          onKeyDown={handleEnterSearch}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          margin: "15px 0",
          "&>div": {
            paddingBottom: "15px",
            borderBottom: "0.5px solid rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {articleList}
      </Box>

      <Footer currActivePage={3} />
    </Box>
  );
};

export default Article;
