import request from "supertest";
import app from "../../src/app";
import { setupEnvironment, tearDown } from "../../src/utils";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});

let movieId: string;
describe("Testing movie CRUD", () => {
  it("It should be empty list before saving objects", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(0);
  });

  it("It should response movie object created", async () => {
    const res = await request(app).post("/movie").send({
      title: "Movie name",
      director: "Director",
      stars: [],
      year: "2022",
    });
    expect(res.statusCode).toBe(201);
    const data = JSON.parse(res.text);
    expect(data.title).toBe("Movie name");
  });

  it("It should response movie object created", async () => {
    const res = await request(app)
      .post("/movie")
      .send({
        title: "Movie name 1",
        director: "Director name",
        stars: ["Character 1", "Character 2"],
        year: 0,
      });
    expect(res.statusCode).toBe(201);
    const data = JSON.parse(res.text);
    movieId = data._id;
    expect(data.title).toBe("Movie name 1");
    expect(data.director).toBe("Director name");
    expect(data.stars).toStrictEqual(["Character 1", "Character 2"]);
    expect(data.year).toBe(0);
  });

  it("It should respond a movie object by id", async () => {
    const res = await request(app).get(`/movie/${movieId}`);
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.title).toBe("Movie name 1");
  });

  it("After saving an object, list size should be 2", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(2);
    movieId = data[0]._id;
  });

  it("Inserting data with invalid body and it should return 400", async () => {
    const res = await request(app).patch(`/movie/${movieId}`).send({
      title: "newTitle",
    });
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.title).toBe("newTitle");
  });

  it("Delete row with given _id that previously store", async () => {
    const res = await request(app)
      .post("/movie")
      .send({
        title: "Movie name",
        director: "Director name",
        stars: ["Character 1", "Character 2", "Character 3"],
        year: 0,
      });
    expect(res.statusCode).toBe(201);

    const data = JSON.parse(res.text);
    expect(data._id).toBeDefined();

    const { _id } = data;
    const deleteResponse = await request(app).delete("/movie").send({ _id });

    expect(deleteResponse.statusCode).toBe(200);
  });

  it("Try to delete not existing data and it should respond 404", async () => {
    const deleteResponse = await request(app)
      .delete("/movie")
      .send({ _id: "Doesn't exist" });

    expect(deleteResponse.statusCode).toBe(500);
  });
});
