import React, { useState } from 'react';
import { Container, Grid, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const ArticleComponent = ({ article }) => {
  const [showImage, setShowImage] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const classes = useStyles();

  const toggleImageDropdown = () => {
    setShowImage(!showImage);
  };

  const toggleDescriptionDropdown = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Component>
      <Container>
        <Grid container>
          <Grid lg={5} md={5} sm={5} xs={12} item>
            <div onClick={toggleImageDropdown}>
              {showImage ? (
                <Image src={article.url} />
              ) : (
                <div>Image Dropdown Trigger</div>
              )}
            </div>
          </Grid>
          <RightContainer lg={7} md={7} sm={7} xs={12} item>
            <Title>{article.title}</Title>
            <Author>
              <Short>short</Short> by {article.author} /{' '}
              {new Date(article.timestamp).toDateString()}
            </Author>
            <div onClick={toggleDescriptionDropdown}>
              {showDescription ? (
                <Description>{article.description}</Description>
              ) : (
                <div>Description Dropdown Trigger</div>
              )}
            </div>
            <Publisher>
              read more at{' '}
              <Link href={article.link} target="_blank">
                {article.publisher}
              </Link>
            </Publisher>
          </RightContainer>
        </Grid>
      </Container>
    </Component>
  );
};

export default ArticleComponent;
