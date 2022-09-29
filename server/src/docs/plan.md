# MERN stack -ийн Back-End boilerplate бэлдэх хөгжүүлэлтийн төлөвлөгөө

## Удиртгал

Уг хөгжүүлэлтийн хүрээнд програмистуудын ажлыг түргэн шуурхай эхлүүлэх боломжийг хангасан boilerplate-ийг бэлдэнэ.

**Зорилго:**

MERN stack ашиглан шинэ төсөл эхлэхэд тохиргоонууд (CI, unit test, database connection, lint ), endpoint-ууд, түүний тэстийг бичих болон төслийн Folder structure зэргийг бэлдэх, шууд аваад ашиглахад асуудалгүй байхаар хөгжүүлэлтийг хийнэ.

**Зорилт:**

- Ижил төстэй системийг судлах
- Ашиглах технологийг судлах
- Ажиллах дараалал гаргах
- Хөгжүүлэлт хийх
- Тест бичих
- Document бичих
- Үр дүн танилцуулах

## СИСТЕМ ХӨГЖҮҮЛЭЛТИЙН СУДАЛГАА

**Ижил төстэй систем:** [Boilerplate-express](https://github.com/hagopj13/node-express-boilerplate)

**Ашиглах технологи:**

- **NoSql database:** MongoDB [(mongoose)](https://mongoosejs.com/)
- **Endpoint:** [Express.js](https://expressjs.com/en/5x/api.html)
- **Unit Test:** [Jest](https://jestjs.io/)
- **Cors:** enable using [cors](https://github.com/expressjs/cors)
- **CI:** [Github Action](https://docs.github.com/en/actions)
- **Linting:** monorepo(Nest) prettier ESLint config

**Прожектийн бүтэц:**

```
src\
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Documents
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--app.ts          # Express app
 |--server.ts
```

## Системийн шаардлага

**Функционал шаардлага:**

- Document харах
-

**Функционал бус шаардлага:**

- Кодоо цэгцтэй бичсэн байх
- Ачааллахад хурдан байх
- Энгийн, ойлгомжтой байх

**Технологи, техникийн шаардлага:**

- MacOS
- Windows
- Linux

| Tool     | Version    |
| -------- | ---------- |
| Node     | `^14.15.4` |
| Yarn     | `^1.x.x`   |
| Postman  | `^1.x.x`   |
| Express  | `^1.x.x`   |
| Mongoose | `^1.x.x`   |
| Jest     | `^1.x.x`   |

## Хэрэгжүүлэлт

### API Endpoints

Дараах хүсэлтүүд байна.

**movie routes:**

`GET /movies` - get all movies <br>
`GET /movie/:title` - get movie by title<br>
`POST /movie` - create movie<br>
`DELETE /movie` - delete movie by id<br>

[API ENDPOINTS](https://documenter.getpostman.com/view/7893329/UVsQt4f7) :point_left:

[Төлөвлөгөөг хэрэгжүүлэх хугацаа](https://docs.google.com/document/d/1X7HUwWSSjLHxj3UBwl6z2o5MGMiaf8Oq) :point_left:

<hr/>

**Нэмэлт:** Swagger, Authentication, ...
