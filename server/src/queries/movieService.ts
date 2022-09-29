import { Request } from "express";
import { Movie } from "../models";

export const getMovies = () => {
  return Movie.find({});
};

export const getMovie = (request: Request) => {
  return Movie.findOne({ _id: request.params.id });
};

export const updateMovie = (request: Request) => {
  return Movie.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
};

export const addMovie = (request: Request) => {
  return new Movie(request.body).save();
};

export const deleteMovie = (request: Request) => {
  return Movie.findByIdAndDelete(request.body._id);
};
