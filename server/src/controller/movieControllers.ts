import { Request, Response } from "express";
import { getMovie, getMovies, addMovie, deleteMovie, updateMovie } from "../queries/movieService";

export const getMoviesService = async (request: Request, response: Response) => {
  try {
    response.send(await getMovies());
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const getMovieService = async (request: Request, response: Response) => {
  try {
    const result = await getMovie(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const updateMovieService = async (request: Request, response: Response) => {
  try {
    const result = await updateMovie(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const createMovieService = async (request: Request, response: Response) => {
  try {
    const result = await addMovie(request);
    response.status(201).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(400).send(error);
  }
};

export const deleteMovieService = async (request: Request, response: Response) => {
  try {
    await deleteMovie(request);
    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};
