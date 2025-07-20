import { useState, type FC } from 'react'

import styled from '@emotion/styled'

import type { Movie as MovieType } from '@/types/tmdb'

const Movie: FC<MovieType> = ({ poster_path, title }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

  return (
    <Container poster_path={poster_path} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Dim isHover={isHover} />
      <Title isHover={isHover}>{title}</Title>
    </Container>
  )
}

export default Movie

const Container = styled.li<{ poster_path: string }>`
  position: relative;
  width: 140px;
  height: 200px;
  padding: 8px;
  border-radius: 8px;
  overflow: hidden;
  background: url(${({ poster_path }) => `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${poster_path}`}) center / cover
    no-repeat;
  object-fit: cover;
  background-color: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Dim = styled.div<{ isHover: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #050505;
  opacity: ${({ isHover }) => (isHover ? 0 : 0.5)};
  transition: opacity 0.3s ease-in-out;
`
const Title = styled.span<{ isHover: boolean }>`
  position: relative;
  width: fit-content;
  color: #fff;
  z-index: 1;
  font-weight: 600;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isHover }) => (isHover ? 0 : 1)};
`
