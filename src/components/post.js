import React from 'react'
import styled from 'styled-components'

const Post = ({ post }) => (
  <PostWrapper>
    <TitleWrapper>
      <Title>{post.frontmatter.title}</Title>
      <Date>
        {post.frontmatter.date}
      </Date>
    </TitleWrapper>
  
    <Content dangerouslySetInnerHTML={{ __html: post.html }} />
  </PostWrapper>
)

const PostWrapper = styled.div``

const TitleWrapper = styled.div`
  background: ${p => p.theme.mainColor};
  color: #fff;
  margin: 20px 0 40px 0;
  padding: 50px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 45px;
`

const Date = styled.p`
  font-size: 14px;
`

const Content = styled.div`
  padding: 0 20px;
  color: ${p => p.theme.textColor};
  max-width: 740px;
  margin: 0 auto;

  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin: 28px 0 0;
  }

  > h2 {
    font-size: 30px;
  }

  > h3 {
    font-size: 26px;
  }

  > h4 {
    font-size: 23px;
  }

  > h5 {
    font-size: 20px;
  }

  > h6 {
    font-size: 18px;
  }

  > p {
    font-size: 16px;
    line-height: 1.58;
    margin: 20px 0 0;

    &:first-child:first-letter {
      font-size: 30px;
      font-weight: bold;
    }
  }

  > ul,
  > ol {
    margin: 12px 0 0;

    > li {
      margin: 0 0 0 40px;

      > ul {
        margin: 0 0 0 40px;
      }
    }
  }

  blockquote {
    margin: 50px 0 50px 0;
    padding: 0 0 0 50px;
    font-size: 20px;
  }

  a {
    color: ${p => p.theme.mainColor};

    &:hover {
      text-decoration: none;
    }
  }
`

export default Post