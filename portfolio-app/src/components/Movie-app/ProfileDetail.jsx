import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import Search from "./Search";

export default function ProfileDetail() {
  const key = process.env.REACT_APP_MOVIE_API;
  const profileId = useParams().id;
  console.log(profileId);
  const [detail, setDetail] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${profileId}?api_key=${key}&language=ko-KR`
      )
      .then((res) => {
        setDetail(res.data);
        console.log(detail);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/person/${profileId}/movie_credits?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`
      )
      .then((res) => {
        setMovies(res.data.cast);
        console.log(movies);
      });
  }, [profileId]);
  return (
    <>
      <Search></Search>
      <Name>{detail.name}</Name>
      <Container>
        <div className="detail-box">
          <div className="img-box">
            <img
              src={`https://image.tmdb.org/t/p/w300/${detail.profile_path}`}
              alt=""
            ></img>
          </div>
          <div className="info">
            <div className="title-box">
              <h3>{detail.original_title}</h3>
              <p className="original-title">{detail.original_title}</p>
              <p className="open-date">{detail.release_date}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>known for department</dt>
                <dd>{detail.known_for_department}</dd>
              </dl>
              <dl>
                <dt>birthday</dt>
                <dd>{detail.birthday}</dd>
              </dl>
              {detail.deathday && (
                <dl>
                  <dt>deathday</dt>
                  <dd>{detail.deathday}</dd>
                </dl>
              )}
              <dl>
                <dt>gender</dt>
                <dd>
                  {detail.gender === 1
                    ? "woman"
                    : detail.gender === 2
                    ? "man"
                    : "none"}
                </dd>
              </dl>
              <dl>
                <dt>place of birth</dt>
                <dd>{detail.place_of_birth}</dd>
              </dl>
              <dl>
                <dt>popularity</dt>
                <dd>{detail.popularity}</dd>
              </dl>
              {detail.homepage && ( //있으면표시하고 없으면 표시하지 마라
                <dl>
                  <dt>homepage</dt>
                  <dd className="desc">
                    <a
                      href={detail.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {detail.homepage}
                    </a>
                  </dd>
                </dl>
              )}
              <dl>
                <dt className="appear">appearance</dt>
                <dd>
                  <Swiper
                    className="cast-list"
                    spaceBetween={100}
                    slidesPerView={"auto"}
                  >
                    {movies.map((item, idx) => {
                      if (idx < 20) {
                        return (
                          <SwiperSlide className="item">
                            <MovieItem
                              title={item.title}
                              poster={item.poster_path}
                              id={item.id}
                              key={idx}
                            ></MovieItem>
                          </SwiperSlide>
                        );
                      }
                    })}
                  </Swiper>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
const Name = styled.h2`
  font-size: clamp(80px, 4vw, 100px);
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: #b41515;
  margin-top: 160px;
  font-weight: bold;
  margin-bottom: 80px;
`;
const Container = styled.div`
  margin-left: 170px;
  margin-bottom: 40px;
  margin-right: 170px;
  background-color: #fff;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .detail-box {
    display: flex;
    align-items: flex-start;
    .img-box {
      border-radius: 0 50px 0 50px;
      border: 10px solid rgb(241, 241, 241);
      box-shadow: 20px 10px 10px rgba(0, 0, 0, 0.3);
      width: 500px;
      box-sizing: border-box;
      overflow: hidden;
      flex-shrink: 0;
      img {
        vertical-align: top;
        width: 500px;
      }
    }
    .info {
      background-color: rgba(248, 248, 248, 0.9);
      margin-left: 50px;
      flex-grow: 1;
      padding: 30px;
      border-radius: 50px 0 50px 0;
      .title-box {
        padding-bottom: 20px;
        margin-bottom: 20px;
        color: rgb(131, 131, 131);
        font-size: 20px;
        h3 {
          font-size: 60px;
          font-weight: 700;
          margin-bottom: 10px;
          color: rgb(19, 19, 19);
        }
      }
      .summary {
        dl {
          padding-bottom: 15px;
          margin-bottom: 15px;
          border-bottom: 4px dashed rgb(97, 97, 97);

          dt {
            color: rgb(65, 65, 65);
            font-size: 30px;
            margin-bottom: 20px;
            text-transform: uppercase;
          }
          dd {
            color: rgb(27, 27, 27);
            font-size: 24px;
            font-weight: 500;
            margin-top: 10px;
          }
          .desc {
            font-size: 17px;
          }
          .cast-list {
            overflow: hidden;
            margin-top: 80px;
            width: 2000px;
            .item {
              width: 150px;
              img {
                height: 350px;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
`;
